import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const SingleBook = () => {
    const { book_title, image_url, author_name, price, book_description } = useLoaderData();

    return (
        <div style={{ marginTop: '7rem', padding: '1rem 6rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                    src={image_url} 
                    alt={book_title} 
                    style={{ height: '20rem', width: 'auto', marginBottom: '2rem' }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{book_title}</h1>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>By {author_name}</h2>
                    <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Price<strong>:</strong>₹200.00</p>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}><strong>Description:</strong> {book_description}</p>
                    <button style={{ fontSize: '1.5rem', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer'
                      , display: 'flex', alignItems:'center'
                     }}>
                        Buy <FaShoppingCart style={{ marginLeft: '0.5rem' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleBook;