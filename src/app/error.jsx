'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }) => {
   useEffect(() => {
      console.log(error);
   }, [error]);
   return (
      <div className='text-center mt-10'>
         <h1>Something went wrong. Please try again later.</h1>
         <button
            className='mt-2 p-2 border-solid border-2 border-amber-600 rounded-lg hover:text-amber-600'
            onClick={() => reset()}>
            Try Again
         </button>
      </div>
   );
};

export default Error;
