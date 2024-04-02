import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({
   id,
   title,
   name,
   backdrop_path,
   poster_path,
   overview,
   release_date,
   first_air_date,
   vote_count,
}) => {
   return (
      <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
         <Link href={`/movie/${id}`}>
            <Image
               src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`}
               width={500}
               height={300}
               className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 '
               alt='cinema image'
            />
            <div className='p-2'>
               <p className='line-clamp-2 text-md'>{overview}</p>
               <h2 className='text-lg font-bold truncate'>{title || name}</h2>
               <p className='flex items-center'>
                  {release_date || first_air_date}
                  <FiThumbsUp className='h-5 mr-1 ml-3' />
                  {vote_count}
               </p>
            </div>
         </Link>
      </div>
   );
};

export default Card;
