import React from 'react'
import { IoStar } from "react-icons/io5";

const Rating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div className='flex space-x-1'>
            {
                Array.from({ length: totalStars }, (_, index) => {
                    const starIndex = index + 1;
                    return (
                        <IoStar
                            key={starIndex}
                            className={starIndex <= rating ? 'text-yellow-500' : 'text-gray-300'}
                        />
                    );
                })
            }
        </div>
    );
}

export default Rating
