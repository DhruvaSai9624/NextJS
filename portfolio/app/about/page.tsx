import Link from 'next/link'
import React from 'react'

const 
about = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Hi there i am Dhruva Sai. 
        <br />
        I am a self tough Devourer.
        <br />
        I am a Full Stack Web Developer.
        <br />
        I use Next JS for my Stack.
        <br />
        I am passionate about Web Development.
        <br />
        I am currently working as a full-time school student in the 10th grade batch 2024-2025.
        <br />
        I do programming as a hobby.
        <br />
        I wat to become a Astrophysicist.
        <br />
        The university which i want to study is MIT.
        <br />
        <br />
        <br />
        <br />
        I like Web-Apps because:-
        <br />
        <br />
      </p>
      <ol>
        <li>They are easily accessible.</li>
        <li>They are widely used</li>
        <li>They are easy to </li>
        <li>They are easy to learn</li>
        <li>They are easy to use</li>
        <li>Diverse options to chose from</li> 
      </ol>
      <Link href='/contact'>Contact</Link>
      <br />
      <Link href='/'>Home</Link>
      <br />
      <Link href='/roadmap'>Roadmap</Link>
    </div>
  )
}

export default about
