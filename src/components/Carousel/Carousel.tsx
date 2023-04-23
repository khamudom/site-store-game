import React, { useRef } from 'react';
import styles from './Carousel.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { ICatalog } from '../../data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface CarouselProps {
  catalogs: ICatalog[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className, catalogs }) => {
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  // TODO: Hook up scrolling through multiple items.
  // const handleClick = (direction: string) => {
  //   const slider: any = itemsContainerRef.current;
  //   console.log('got it!');

  //   if (slider) {
  //     console.log(slider);
  //     console.log(itemsContainerRef);
  //     const { scrollLeft, clientWidth } = slider;

  //     const scrollTo =
  //       direction === 'left'
  //         ? scrollLeft - clientWidth
  //         : scrollLeft + clientWidth;

  //     slider.scrollTo({
  //       left: scrollTo,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <div className={`${styles.carousel} ${className}`}>
      <button className={styles.btnPrev}>
        <FiChevronLeft />
      </button>
      <div className={styles.itemsContainer} ref={itemsContainerRef}>
        {catalogs?.map((item) => (
          <ProductCard
            game={item}
            className={styles.catalogItem}
            key={item.id}
          />
        ))}
      </div>
      <button className={styles.btnNext}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
