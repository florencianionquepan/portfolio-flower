import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel-custom.css';

import { Image } from '../store/model/Image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { LazyImage } from './LazyImage';

interface ProjectImagesProps{
    images: Image[]
}
export const CarouselImages: React.FC<ProjectImagesProps> = ({images}) => {
  return (
    <>
        <div className='max-w-[300px] max-h-80 overflow-hidden mx-auto flex justify-center flex justify-center items-center'>
            <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={images.length>1}
            pagination={{ clickable: true }}
            >
                {images?.map((image, index)=>(
                    <SwiperSlide key={index}>
                        <LazyImage
                            key={image.id}
                            path={image.url!}
                            imageAlt={image.name}
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    </>
  )
}
