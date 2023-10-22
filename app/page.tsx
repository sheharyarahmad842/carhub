'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@components/Hero';
import { SearchBar, CustomFilter, CarCard, ShowMore } from '@components';
import { ToastContainer } from 'react-toastify';
import { fetchCars } from '@utils';
import { fuels, yearsOfProduction } from '@constants';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState('');
  const [year, setYear] = useState(2023);
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('');
  const [limit, setLimit] = useState(10);

  const fetchAllCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer,
        year,
        model,
        fuel,
        limit,
      });
      console.log(result);
      setAllCars(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllCars();
  }, [manufacturer, year, fuel, model, limit]);

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
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
      </div>

      {loading && (
        <div className='w-full flex-center mt-16'>
          <h2 className='font-bold text-xl'>Loading....</h2>
        </div>
      )}

      {allCars.length === 0 ? (
        <section className='home__error-container'>
          <h3 className='text-bold text-lg text-black'>
            OOPS! No Results Found
          </h3>
        </section>
      ) : (
        <section>
          <div className='mt-12 max-width grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full padding-x'>
            {allCars?.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </div>
          <div className='flex-center my-10'>
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit <= allCars.length}
              setLimit={setLimit}
            />
          </div>
        </section>
      )}
      <ToastContainer />
    </main>
  );
};

export default Home;
