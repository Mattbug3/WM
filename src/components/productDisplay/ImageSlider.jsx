import React from 'react';
import './productDisplay.css'
import { useState } from 'react';
// import { CaretRight, CaretLeft } from 'phosphor-react';
import { Icon } from '@iconify/react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ImageSlider = ({product}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

	function handlePrev(){
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? product.smallImgs.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	function handleNext(){
		const isLastSlide = currentIndex === product.smallImgs.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

    return (
		<div>
			<img src={product.smallImgs[currentIndex]} alt="" />
			<Icon icon="ph:caret-left-bold" 
				className='caret-left'
				onClick={handlePrev}
			/>
			<Icon icon="ph:caret-right-bold"
				className='caret-right'
				onClick={handleNext}
			/>
			<div className="circles">
				{
				product.smallImgs.map((images, slideIndex) => {
					return  <div 
					            key={slideIndex}
					            className={currentIndex ===  slideIndex ? 'circle slide' : 'circle'}
							>
							</div>
				})
				}
			</div>
		</div>
	);
};

export default ImageSlider;