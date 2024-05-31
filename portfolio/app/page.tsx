import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Dhruva Sai</h1>
      <p>
        Hi there, I am Dhruva Sai.
        <br />
        I am a Full Stack Web Developer.
        <br />
        I am currently working as a full-time school student in the 10th grade batch 2024-2025.
      </p>
      <Link href="/about">About</Link>
      <br />
      <Link href="/roadmap">My Road Map</Link>
      <br />
      <Link href="/contact">Contact</Link>
    </>
  );
}