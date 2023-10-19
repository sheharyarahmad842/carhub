'use client';

import React, { useState } from 'react';
import { SearchManufacturer } from '@components';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='Search Icon'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer.trim() === '' && model.trim() === '') {
      toast.error('Please provide some input');
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.append('model', model.toLowerCase());
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.append('manufacturer', manufacturer.toLowerCase());
    } else {
      searchParams.delete('manufacturer');
    }

    const pathname = `${window.location.pathname}?${searchParams}`;
    router.push(pathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          alt='Model Icon'
          width={20}
          height={20}
          className='absolute ml-4'
        />
        <input
          type='text'
          value={model}
          placeholder='Tiguan...'
          onChange={(e) => setModel(e.target.value)}
          className='w-full bg-light-white p-4 pl-12 rounded-r-full max-sm:rounded-full h-[48px] outline-none cursor-pointer text-sm'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
