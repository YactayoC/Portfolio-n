import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [linkHover, setLinkHover] = useState('Contact');
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const onClickLink = (e: any) => {
    setLinkHover(e.target.textContent);
  };

  const onClickHamburguer = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const onClickLinkMobile = (e: any) => {
    setLinkHover(e.target.textContent);
    setShowMenuMobile(false);
  };

  return (
    <nav className="fixed top-0 z-50 flex flex-row items-center w-full px-16 py-8 backdrop-blur-lg">
      <Link href="#presentation" className="absolute w-16 h-16 cursor-pointer left-4 md:left-auto md:h-20 md:w-20">
        <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
      </Link>

      {/* Desktop */}
      <div className="hidden gap-4 md:flex md:flex-row md:m-auto">
        <Link
          className={`nav-link ${linkHover === 'About me' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#about"
        >
          About me
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Skills' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Projects' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Contact' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#contact"
        >
          Contact
        </Link>
      </div>

      {/* Hamburguer */}
      <div className="absolute cursor-pointer right-4 md:hidden" onClick={onClickHamburguer}>
        <Image src="/assets/menu.svg" alt="github" width={35} height={35} />
      </div>

      {/* Mobile */}
      <div
        className={`w-[90%] gap-y-6 py-4 m-auto left-0 duration-300 right-0 absolute top-16 flex flex-col items-center justify-center bg-[#272553] rounded-3xl md:hidden ${
          showMenuMobile ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link
          className={`nav-link-mobile ${linkHover === 'About me' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#about"
        >
          About me
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Skills' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Projects' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Contact' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
