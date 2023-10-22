'use client';

import React, { useState, Fragment } from 'react';
import { SearchManufacturerProps } from '@types';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@constants';
import Image from 'next/image';

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item: string) =>
          item
            .toLowerCase()
            .replace(/\s+\g/, '')
            .includes(query.toLowerCase().replace(/\s+\g/, ''))
        );
  return (
    <div className='search-manufacturer'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px] ml-[15px]'>
            <Image src='/car-logo.svg' alt='Car Logo' width={20} height={20} />
          </Combobox.Button>
          <Combobox.Input
            className='search-manufacturer__input'
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(item: string) => item}
            placeholder='Volkswagen...'
          />
        </div>
        <Transition
          as={Fragment}
          leave='transiton ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='search-manufacturer__options'>
            {filteredManufacturers.map((item: string) => (
              <Combobox.Option
                key={item}
                className={({ active }) =>
                  `relative search-manufacturer__option ${
                    active ? 'bg-primary-blue text-white' : 'text-gray-900'
                  }`
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? 'text-white' : 'text-primary-purple'
                        }`}
                      ></span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
