import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel-custom.css';

import { Image } from '../store/model/Image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

interface ProjectImagesProps{
    images: Image[]
}
export const CarouselImages: React.FC<ProjectImagesProps> = ({images}) => {
  return (
    <>
        <div className='max-w-[300px] max-h-80 overflow-hidden mx-auto flex justify-center'>
            <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            >
                {images.map((image, index)=>(
                    <SwiperSlide key={index}>
                        <div className='h-64 overflow-y-auto border border-4 rounded border-gray-800 mx-2'>
                            <img 
                                key={image.id}
                                src={image.url} 
                                alt={image.name}
                            />
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    </>
  )
}
