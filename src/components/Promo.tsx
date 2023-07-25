import React from 'react';

interface Promo {
  text: string;
}

const Promos: React.FC<Promo> = (props) => {
  return <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
    {props.text}
  </p>
};

export default Promos;


