import React from 'react';
import Hero from '@components/Hero';
import { SearchBar, CustomFilter, CarCard } from '@components';
import { fetchCars } from '@utils';

const Home = async () => {
  const allCars = await fetchCars();
  const isDataEmpty =
    allCars.length === 0 || !allCars || !Array.isArray(allCars);
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h2 className='text-4xl font-bold'>Car Catalogue</h2>
          <p className='text-gray-900 text-lg'>
            Explore the cars you might like
          </p>
        </div>

        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>

      {isDataEmpty ? (
        <section className='home__error-container'>
          <h3 className='text-bold text-lg text-black'>
            OOPS! No Results Found
          </h3>
          <p>{allCars?.message}</p>
        </section>
      ) : (
        <div className='mt-12 max-width grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full padding-x'>
          {allCars?.map((car, index) => (
            <CarCard car={car} key={index} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
