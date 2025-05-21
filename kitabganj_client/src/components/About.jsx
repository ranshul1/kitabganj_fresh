import React from 'react';

const About = () => {
    return (
        <div style={{ marginTop: '7rem', padding: '1rem 6rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>About Us</h1>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Bookstore</h2>
                <p style={{ fontSize: '1.2rem' }}>Welcome to our bookstore! We are dedicated to providing a wide selection of books for all ages and interests. Whether you're a seasoned reader or just starting your literary journey, we have something for everyone.</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Motive</h2>
                <p style={{ fontSize: '1.2rem' }}>Our motive is to promote the joy of reading and learning. We believe that books have the power to inspire, educate, and entertain. By providing access to quality literature, we hope to enrich the lives of our customers and foster a love of reading in our community.</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About the Developer</h2>
                <p style={{ fontSize: '1.2rem' }}>This bookstore website was developed with love by Anshul Rathore, an undergradute engineering student. As a bibliophile and aspiring developer, I wanted to create a platform where book lovers can discover new titles and connect with fellow readers. I hope you enjoy using our website as much as I enjoyed building it!</p>
            </div>
        </div>
    );
}

export default About;
