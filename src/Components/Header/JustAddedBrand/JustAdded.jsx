import React from 'react';
import addImg_1 from '../../../Images/Header_img/Just_Added_img/Nicolai-perfumes.webp';
import addImg_2 from '../../../Images/Header_img/Just_Added_img/boucheron-perfumes.webp';
import addImg_3 from '../../../Images/Header_img/Just_Added_img/sospiro.webp';
import addImg_4 from '../../../Images/Header_img/Just_Added_img/Profumum-Roma.webp';
import addImg_5 from '../../../Images/Header_img/Just_Added_img/Stephane-Humbert-Lucas-777.webp';
import addImg_6 from '../../../Images/Header_img/Just_Added_img/fredericmalle.webp';
import addImg_7 from '../../../Images/Header_img/Just_Added_img/Rosendo-Mateu-banner.webp';
import addImg_8 from '../../../Images/Header_img/Just_Added_img/Le-Labo-Banner.webp';
import addImg_9 from '../../../Images/Header_img/Just_Added_img/penhaligon_s-banner.webp';
import addImg_10 from '../../../Images/Header_img/Just_Added_img/serge-lutens-banner.webp';
import addImg_11 from '../../../Images/Header_img/Just_Added_img/unique-luxury-banner.webp';
import addImg_12 from '../../../Images/Header_img/Just_Added_img/Ahmed-Al-Maghribi-banner.webp';
import Gift from '../../../Images/Header_img/Just_Added_img/Gift.webp';
import videoTwo from '../../../Images/Header_img/Second/videos/videoTwo.mp4'
import offerPerfume from '../../../Images/Header_img/Just_Added_img/Office-perfumes_12.webp'
import Miniature from '../../../Images/Header_img/Just_Added_img/17_Miniature.webp'
import bath from '../../../Images/Header_img/Just_Added_img/01-bath-and-body-care.webp'
import mist from '../../../Images/Header_img/Just_Added_img/02-mist-and-lotion.webp'
import Bottom from '../../../Images/Header_img/Just_Added_img/18_Bottom.webp'
import Bad from '../../Slider/Bad';

export default function JustAdded() {
    const images = [
        { id: 1, src: addImg_1, alt: 'Nicolai Perfumes' },
        { id: 2, src: addImg_2, alt: 'Boucheron Perfumes' },
        { id: 3, src: addImg_3, alt: 'Sospiro' },
        { id: 4, src: addImg_4, alt: 'Profumum Roma' },
        { id: 5, src: addImg_5, alt: 'Stephane Humbert Lucas 777' },
        { id: 6, src: addImg_6, alt: 'Frederic Malle' },
        { id: 7, src: addImg_7, alt: 'Rosendo Mateu' },
        { id: 8, src: addImg_8, alt: 'Le Labo' },
        { id: 9, src: addImg_9, alt: 'Penhaligon\'s' },
        { id: 10, src: addImg_10, alt: 'Serge Lutens' },
        { id: 11, src: addImg_11, alt: 'Unique Luxury' },
        { id: 12, src: addImg_12, alt: 'Ahmed Al Maghribi' }
    ];

    return (
        <div className='h-auto w-full'>
            <h2 className='text-center my-10 text-[20px] md:text-[25px]'>Just Added Brand...</h2>      
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-12 my-10 mx-10 md:mx-32 '>
                {images.map(image => (
                    <div key={image.id} className='flex justify-center'>
                        <img src={image.src} alt={image.alt} className='' />
                    </div>
                ))}
            </div>

                <img src={Gift} alt="gift" className='mt-20 h-[18em] md:h-auto' />
                
                <video 
                data-type="mp4" 
                src={videoTwo} 
                loop 
                muted 
                playsInline 
                autoPlay
            />

            <img src={offerPerfume} alt="offer" className=' h-[18em] md:h-auto' />

            <Bad />

            <img src={Miniature} alt="not visible" className=' h-[18em] md:h-auto' />
            <div className='flex flex-wrap px-16 py-10 gap-14 '>
            <img src={bath} alt="not visible"  className='h-[18em] shadow-md'/>
            <img src={mist} alt="not visible" className='h-[18em] shadow-md' />
            </div>
            <img src={Bottom} alt="not visible" className=' h-[18em] md:h-auto' />
        </div>
    );
}
