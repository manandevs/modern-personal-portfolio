
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { notesData } from '../data/notesData';
import { PageIntro } from '../components/PageIntro';
import { GoArrowLeft } from 'react-icons/go';

export default function NoteDetail() {
  const { slug } = useParams();
  const note = notesData.find(n => n.slug === slug);

  if (!note) {
    return (
        <div className="pt-[72px] bg-gray-50 text-center py-20">
            <PageIntro
                title="Note Not Found"
                subtitle="Sorry, but the note you are looking for does not exist."
            />
            <Link to="/notes" className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 mt-8 font-semibold">
                <GoArrowLeft />
                Back to all notes
            </Link>
        </div>
    );
  }

  return (
    <div className="pt-[72px] bg-white">
        <PageIntro title={note.title} subtitle={note.description} />
        <div className="bg-gray-50 py-12 sm:py-16">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                 <Link to="/notes" className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 mb-8 font-semibold">
                    <GoArrowLeft />
                    Back to all notes
                </Link>
                <article className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: note.content }} />
            </div>
        </div>
    </div>
  );
}
