import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles.css'; // Ensure this path is correct

const HomeMainSkeleton = () => {
    return (
        <div className='h-screen w-full p-[5em] md:p-6'>
            <SkeletonTheme baseColor="#ada4a3" highlightColor="#de1f12" enableAnimation direction='ltr' duration={1.5}>
                <p>
                    <Skeleton className="skeleton-height" />
                    <Skeleton style={{height: '3em'}} />
                </p>
            </SkeletonTheme>
        </div>
    );
}

export default HomeMainSkeleton;
