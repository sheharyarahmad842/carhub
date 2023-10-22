'use client';

import React, { useState } from 'react';
import { SearchManufacturer } from '@components';
import { toast } from 'react-toastify';
import { SearchBarProps } from '@types';
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

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer.trim() === '' && searchModel.trim() === '') {
      toast.error('Please provide some input');
      return;
    }
    setManufacturer(searchManufacturer.trim());
    setModel(searchModel.trim());
  };

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
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
          value={searchModel}
          placeholder='Tiguan...'
          onChange={(e) => setSearchModel(e.target.value)}
          className='w-full bg-light-white p-4 pl-12 rounded-r-full max-sm:rounded-full h-[48px] outline-none cursor-pointer text-sm'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
