
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { notesData } from '../data/notesData';
import { FaSearch } from 'react-icons/fa';

export default function Notes() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = useMemo(() => {
    if (!searchTerm) {
      return notesData;
    }
    return notesData.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="pt-[72px] bg-gray-50">
      <PageIntro 
        title="My Notes"
        subtitle="A collection of thoughts, guides, and snippets on web development and technology."
      />
      
      <div className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-16 max-w-2xl mx-auto" data-aos="zoom-in">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-full border-0 py-4 pl-12 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 transition"
                placeholder="Search notes by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search notes"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <Link 
                  to={`/notes/${note.slug}`}
                  key={note.slug} 
                  className="group block"
                  data-aos="fade-up"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                    <div className="flex-shrink-0 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-violet-100 flex items-center justify-center group-hover:bg-violet-200 transition-colors duration-300">
                        <note.Icon className="h-7 w-7 text-violet-600" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300 font-heading">{note.title}</h3>
                      <p className="mt-3 text-base text-gray-600">{note.description}</p>
                    </div>
                    <div className="mt-6 flex-shrink-0">
                        <span className="font-semibold text-violet-600 flex items-center gap-2">
                            Read article
                            <span aria-hidden="true" className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12" data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-gray-800 font-heading">No notes found</h3>
                <p className="mt-2 text-gray-500">Your search for "{searchTerm}" did not match any notes. Try a different keyword.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
