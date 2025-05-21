import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa6";
import './Review.css';
import propic from "../assets/profile.jpg";
import { Avatar } from "flowbite-react";
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwip"
        >
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='book-container'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
              <p className='text-black text-sm font-normal mb-5'>
              Hey, this online bookstore is absolutely amazing! The variety of books is so vast, it feels like the entire world's library is here. Delivery is always on time, and the discounts are mind-blowing! Everyone in my house buys from here now.
              </p>
              <div className="avatar-container">
                <Avatar img={propic} alt="avatar of Jese" rounded />
              </div>
              <h5 className='text-lg font-medium text-black'>Sanjh</h5>
              <p className='text-base text-black'>Author</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='book-container'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
              <p className='text-black text-sm font-normal mb-5'>
              Wow, what an incredible collection! Romance, thrillers, self-help, you name it, they have it. Payments are safe, no worries at all. Customer service is awesome, they solve problems instantly. Totally recommend!
              </p>
              <div className="avatar-container">
                <Avatar img={propic} alt="avatar of Jese" rounded />
              </div>
              <h5 className='text-lg font-medium text-black'>Sudha</h5>
              <p className='text-base text-black'>Student</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='book-container'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
              <p className='text-black text-sm font-normal mb-5'>
              what an incredible collection! Romance novels by Nicholas Sparks, thrillers by Agatha Christie, self-help books by Dale Carnegie, you name it, they have it. Payments are safe, no worries at all. Customer service is awesome, they solve problems instantly. Totally recommend!
              </p>
              <div className="avatar-container">
                <Avatar img={propic} alt="avatar of Jese" rounded />
              </div>
              <h5 className='text-lg font-medium text-black'>Chandar</h5>
              <p className='text-base text-black'>Student</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='book-container'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
              <p className='text-black text-sm font-normal mb-5'>
                Great paltform to explore, amazing interface....
              </p>
              <div className="avatar-container">
                <Avatar img={propic} alt="avatar of Jese" rounded />
              </div>
              <h5 className='text-lg font-medium text-black'>Anvi</h5>
              <p className='text-base text-black'>Reader</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='book-container'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
              <p className='text-black text-sm font-normal mb-5'>
              From my kids' school books to my Jamie Oliver cooking books, everything is available here. There's also a return policy if you order the wrong book. The process is very easy and tension-free. This was my first time shopping for books online, and I'm super happy.
              </p>
              <div className="avatar-container">
                <Avatar img={propic} alt="avatar of Jese" rounded />
              </div>
              <h5 className='text-lg font-medium text-black'>Maehtab</h5>
              <p className='text-base text-black'>Artist</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
