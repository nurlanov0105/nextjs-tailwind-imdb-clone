const spinnerSvg = '/spinner.svg';

const Loading = () => {
   return (
      <div className='flex justify-center mt-16'>
         <img className='h-52' src={spinnerSvg} alt='Loading...' />
      </div>
   );
};

export default Loading;
