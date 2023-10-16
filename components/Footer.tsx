import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@constants';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__links-container'>
        <div className='footer__rights'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={118}
            height={18}
            className='object-contain'
          />
          <p className='text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              <ul className='flex flex-col gap-5'>
                {link.links.map((item) => (
                  <Link href={item.url} className='text-gray-500'>
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='footer__copyrights'>
        <p>@2023 CarHub. All rights reserved</p>
        <div className='footer__copyrights-link'>
          <Link href='/' className='text-gray-500 text-sm'>
            Privacy Policy
          </Link>
          <Link href='/' className='text-gray-500 text-sm'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
