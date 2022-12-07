import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { isLoading, cocktail } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (cocktail.length < 1) {
    return (
      <h1 className='section-title'>
        no cocktail matched your search criteria
      </h1>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>

      <div className='cocktails-center'>
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
