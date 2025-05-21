import React from 'react';

const About = () => {
  return (
    <div className="mt-28 px-6 lg:px-24 py-12 bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-bold text-center mb-16">About Us</h1>

      <div className="space-y-16 max-w-5xl mx-auto">
        {/* Our Bookstore */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Bookstore</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">KitabGanj</span> – your digital haven for books! We're passionate about connecting readers with stories that spark curiosity, imagination, and knowledge. Whether you're a seasoned bibliophile or just beginning your literary adventure, we’ve got something for every shelf and soul.
          </p>
        </section>

        {/* Our Motive */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Motive</h2>
          <p className="text-lg leading-relaxed">
            We believe books are more than just pages — they’re doorways to different worlds. Our mission is to promote reading as a joyful, lifelong habit. Through accessible and curated selections, we aim to educate, entertain, and empower individuals across communities.
          </p>
        </section>

        {/* Developer Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Meet the Developer</h2>
          <p className="text-lg leading-relaxed">
            This project was crafted with passion by <span className="font-semibold text-gray-900">Anshul Rathore</span>, an undergraduate engineering student and a devoted lover of literature. Fueled by both code and creativity, Anshul built this platform to bring readers together and encourage exploration of the written word.
          </p>
          <p className="mt-4 italic text-gray-600">
            “A reader lives a thousand lives before he dies... The man who never reads lives only one.” – George R.R. Martin
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
