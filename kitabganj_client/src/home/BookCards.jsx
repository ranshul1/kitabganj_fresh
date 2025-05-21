import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './BookCard.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'

const BookCards = ({ books, headline }) => {
  console.log("Books in BookCards component:", books);

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>
        {headline}
      </h2>
      <div className='mt-12'/>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwipe"
      >
        {books.map(book => (
          book.image_url && (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className=" book-container text-black relative">
                  <img src={book.image_url} alt="" className="book-image" />
                  <div className='absolute top-3 right-1 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white'/>
                  </div>
                  <div className='book-title'>
                    <div>
                    <h1>{book.book_title}</h1>
                    <h3>
                      {book.author_name}
                    </h3>
                    </div>
                    <div>
                      <h1>₹200.00</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )
        ))}
      </Swiper>
    </div>
  );
};

BookCards.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    book_title: PropTypes.string,
  })).isRequired,
  headline: PropTypes.string.isRequired,
};

export default BookCards;
