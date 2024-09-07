'use client'
import Link from 'next/link'; //Change anchor to link para sa client side ayusin ko
import Image from 'next/image';
import { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal'; // Import RegisterModal



const HeroPage= () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); // State RegisterModal

  return (
<>
      <div className="container-fluid bg-light p-6 d-flex align-items-center" style={{ height: '100px' }}> {/* Larger logo container */}
        <Link className="navbar-brand" href="/">
          <img src="" alt="" className="img-fluid" style={{ maxHeight: '100%' }} /> 
          CCS Manuscript Repository
        </Link>
      </div>



      <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid ">
  <div className="ms-5"> {/* Add ms-auto to push to the right */}
      <Link className="navbar-brand" href="/">
        Welcome Pythons!
      </Link> 
    </div> {/* dito ang Link for client-side navigation */}
    <div className="collapse navbar-collapse justify-content-end"> 
      <ul className="navbar-nav me-3"> {/* Add me-3 for right margin */}
        <li className="nav-item">
          <button className="btn fw-semibold" onClick={() => setShowLoginModal(true)}>
            Login
          </button>
        </li>
        <li className="nav-item ms-2">
          <button className="btn fw-semibold" onClick={() => setShowRegisterModal(true)}>
            Register
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
 {/* Login Modal */}
 <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
    <section className="container-fluid" style={{ minHeight: '400px', position: 'relative' }}> 
  <Image 
    src="/images/herobanner.jpg"
    alt=""
    fill={true}
    layout={'fill'}
    objectFit={'cover'}
  />

  {/* Register Modal */}
  <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onOpenLogin={() => { 
          setShowRegisterModal(false); // Close RegisterModal
          setShowLoginModal(true); // Open LoginModal
        }} 
      />
</section>

      {/* Main Content Section */}
      <section className="container flex-grow-1"> {/* Add flex-grow-1 */}
      {/* Content specific to the first page goes here */}
        <h2 className="fw-bold text-start p-2">Welcome to CCS Manuscript Repository, the ultimate resource hub for computer science and information 
        technology thesis and capstone projects. </h2> <h4 className="text-end">Dive into a wealth of knowledge curated from the brightest 
        minds in the field. Explore groundbreaking research, innovative solutions, and 
        transformative ideas that shape the future of technology. Whether you're a student seeking inspiration or 
        a researcher on the quest for cutting-edge insights, our platform is your gateway to the forefront of 
        computational advancements.</h4>

        <h3 className="text-center">Unlock the power of knowledge and embark on a journey of discovery with us.</h3>
      </section>

      {/* Footer */}
      <footer className="container-fluid bg-success text-dark bg-opacity-75 p-3">
      <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h4 className="text-dark">About Us</h4>
            <p>CCS Slayer</p>
          </div>
          <div>
            <h4 className="text-dark">Contact Us</h4>
            <p>+999999999</p>
            <p>wmsu@wmsu.edu.ph</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default HeroPage;