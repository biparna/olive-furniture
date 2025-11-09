import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { reviews } from '../../utils/reviews';
import Rating from '../../components/Rating';
import '../../App.css';

const Testimonials = () => {
  return (
    <section className='section-container px-8'>
        <div className='text-center mb-12'>
            <h3 className='uppercase text-lg font-bold text-primary mb-4'>Testimonials</h3>
            <h2 className='capitalize text-4xl font-bold'>Our Client Reviews</h2>
        </div>

        {/* Swiper component for testimonials */}
        {/*review slider*/}
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
               },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
      >
        {
            reviews.map((review, index) => (
                <SwiperSlide key={index} style={{ backgroundImage: `url(${review.coverImg})`, }}
                 className='bg-no-repeat bg-cover rounded-lg'>
                    <div className='md:h-[420px] flex items-end justify-center mb-4'>
                        <div className='mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-3
                         relative'>
                            <img src={review.image} alt="" className='size-20 absolute -top-8 ring-8
                             rounded-full ring-white object-cover left-1/2 -translate-x-1/2' />
                        
                            <div className='mt-16 text-center'>
                                <h3 className='text-lg font-semibold dark:text-black'>
                                    {review.name}
                                </h3>
                                <p className='mb-3 dark:text-black '>Verified Customer</p>
                                <p className='text-gray-500 dark:text-black mb-4'>{review.review}</p>
                                <div className='flex items-center justify-center text-center w-full
                                 mx-auto mb-2 gap-2'>
                                    <Rating rating={review.rating} />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            ))
        };
        
      </Swiper>
    </section>
  )
}

export default Testimonials