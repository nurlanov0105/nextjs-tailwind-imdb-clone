'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({ title, param }) => {
   const searchParams = useSearchParams();
   const genre = searchParams.get('genre');
   console.log(genre);
   return (
      <div>
         <Link
            href={`/?genre=${param}`}
            className={clsx(
               'hover:text-amber-500 font-semibold',
               param === genre
                  ? 'text-amber-500 font-semibold underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
                  : ''
            )}>
            {title}
         </Link>
      </div>
   );
};

export default NavbarItem;
