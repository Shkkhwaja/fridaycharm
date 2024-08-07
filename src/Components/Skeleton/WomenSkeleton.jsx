import React, {useEffect} from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WomenSkeleton = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      },[])
      
      const skeletonsArray = Array.from({ length: 30 });


    return (
        <div className='h-auto w-full p-[3em] ml-[4em] text-center flex gap-[8em] flex-wrap'>
            <SkeletonTheme baseColor="#bebebe" highlightColor="#f8f8f8" enableAnimation direction='ltr' duration={1.5}>
                {/* Map over the array to render WomenSkeleton component 20 times */}
                {skeletonsArray.map((_, index) => (
                    <div key={index} className='mb-4'>
                        <p>
                            <Skeleton className='h-[8em] w-[8em]' />
                        </p>
                        <p>
                            <Skeleton className='h-[1em] w-[8em]' />
                        </p>
                        <p>
                            <Skeleton className='h-[1em] w-[6em]' />
                        </p>
                        <p>
                            <Skeleton className='h-[1em] w-[5em]' />
                        </p>
                        <p>
                            <Skeleton className='h-[1em] w-[4em]' />
                        </p>
                    </div>
                ))}
            </SkeletonTheme>
        </div>
    );
}

export default WomenSkeleton;
