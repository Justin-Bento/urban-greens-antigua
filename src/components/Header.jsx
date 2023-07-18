
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFill, RiCloseFill } from "react-icons/ri"
import { Button } from '../components/Button';


export default function Header() {
  const [isActive, setIsActive] = useState(true);
  const onClick = () => setIsActive((isActive) => !isActive);
  return (
    <>
      <header className="relative top-0 z-50 border-b shadow bg-primary-10">
        <div className="container grid grid-cols-1 p-4 mx-auto lg:grid-cols-2">
          <section className="flex items-center justify-between place-items-center">
            <Link to="/">
              <img src="/assets/logo/urban-greens-logo.png" alt="" className='w-auto h-16' />
            </Link>
            {isActive ? <Button variant="outline" className="lg:hidden" size="icon"><RiMenuFill onClick={onClick} /></Button>  : <Button variant="outline" className="lg:hidden" size="icon"><RiCloseFill onClick={onClick} /></Button> }
          </section>
          <section className={`${isActive ? 'hidden lg:flex lg:items-center lg:justify-end' : ''}`}>
            <nav>
              <ul className="flex flex-col items-start justify-start gap-4 pt-4 lg:p-0 lg:gap-1 lg:flex-row">
                <Link to="/">
                  <Button variant="white">Home</Button>
                </Link>
                <Link to="/products">
                  <Button variant="white">Products</Button>
                </Link>
                <Link to="/faqs">
                  <Button variant="white">FAQ's</Button>
                </Link>
                <Link to="/about">
                  <Button variant="white">About</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="white">Contact</Button>
                </Link>
              </ul>
            </nav>
          </section>
        </div>
      </header>
    </>
  );
}