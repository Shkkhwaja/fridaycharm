import React, {useEffect} from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeMainSkeleton = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      },[])
    return (
        <div className='h-auto w-full p-2 '>
            <SkeletonTheme baseColor="#bebebe" highlightColor="#f8f8f8" enableAnimation direction='ltr' duration={1.5}>
                
                <p >
                    <Skeleton className='h-[12em] md:h-screen' />
                </p>
                <p>
                    <Skeleton className='h-[3em]' />
                </p>
                <p className='px-[4em] md:hidden'>
                    <Skeleton className='h-[18em] w-[14em]' />
                </p>
                
            </SkeletonTheme>
        </div>
    );
}

export default HomeMainSkeleton;
