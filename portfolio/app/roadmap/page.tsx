import Link from 'next/link'
import React from 'react'

const Roadmap
 = () => {
  return (
    <div>
        <h1>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1824999230. */}
            My Roadmap
        </h1>
        <p>
          My road map consist of watching YouTube tutorials, programming with them, and building my own ideas.

        </p>
        <ol>
          <li>Learn Python</li>
          <li>Learn C/C++</li>
          <li>Learn JS</li>
          <li>Learn TS</li>
          <li>Learn HTML</li>
          <li>Learn CSS</li>
          <li>Learn React</li>
          <li>Learn Next JS</li>
        </ol>
        <Link href='/'>Home</Link>
        <br />
        <Link href='/about'>About Me</Link>
        <br />
        <Link href='/contact'>Contact</Link>
    </div>
  )
}

export default Roadmap
 