import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="navContainer">
        <Link href="/" className="navLogo">TN.</Link>
        <div className="navLinks">
          <Link href="/">Work</Link>
          <Link href="/about">About</Link>
          <a href="mailto:canhdienn22@gmail.com">Contact</a>
        </div>
      </div>
    </nav>
  );
}