import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="contact-container">  {/* Added class for potential styling */}
        <h1>Contact</h1>
        <p>
          Feel free to reach out to me via email:
          <br />
          <a href="mailto:blackcraft9624@gmail.com?subject=Inquiry&body=Hello,%20%0AI%20have%20a%20question%20regarding...">
            blackcraft9624@gmail.com
          </a>
        </p>
            <Link href="/">Home</Link>
            <br />
            <Link href="/about">About Me</Link>
            <br />
            <Link href="/roadmap">My Road Map</Link>
      </div>
    </>
  );
};

export default Contact;
