import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeMainSkeleton = () => {
    return (
        <div className='h-[80vh] lg:h-[80vh] w-full'>
            <SkeletonTheme baseColor="#ada4a3" highlightColor="#de1f12" enableAnimation direction='ltr' duration={1.5}>
                <p>
                    <Skeleton style={{ height: '30em', width: '95%', margin: '1.5em' }} />
                </p>
            </SkeletonTheme>
        </div>
    );
}

export default HomeMainSkeleton;
