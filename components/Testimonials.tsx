
import React from 'react';

const testimonials = [
  {
    body: 'Working with Abdul was a game-changer for our project. His technical expertise and commitment to quality are second to none. He delivered a fast, beautiful, and accessible product that our users love.',
    author: {
      name: 'Jane Doe',
      handle: 'CEO at Zenith',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
   {
    body: 'Abdul has a remarkable ability to translate complex design concepts into pixel-perfect reality. His attention to detail and collaborative spirit made him an invaluable member of our team.',
    author: {
      name: 'John Smith',
      handle: 'Lead Designer at Flow',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'I was consistently impressed by Abdul\'s problem-solving skills and his dedication to writing clean, maintainable code. He\'s a talented engineer and a great person to work with.',
    author: {
      name: 'Emily Johnson',
      handle: 'Engineering Manager at Connect',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center" data-aos="fade-up">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-violet-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight font-heading text-gray-900 sm:text-4xl">
            What my colleagues and clients say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author.handle} className="p-8 bg-gray-50 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                <figure>
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.handle}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
