// components/Header.tsx (or any suitable name for your header component file)

'use client'; 

import Link from 'next/link';

interface HeaderProps {
  logoSrc: string; 
  title: string;   
}

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
  return (
    <header> {/* Changed <main> to <header> */}
      <div className="container-fluid bg-light p-6 d-flex align-items-center" style={{ height: '100px' }}> 
        <Link className="navbar-brand" href="/">
          <img src={logoSrc} alt="Logo" className="img-fluid" style={{ maxHeight: '100%' }} />
          {title}
        </Link>
      </div>
    </header>
  );
};

export default Header;