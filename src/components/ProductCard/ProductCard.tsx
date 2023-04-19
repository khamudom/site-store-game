import React from 'react';
import styles from './ProductCard.module.css';
import { ICatalog } from '../../data';

interface IProductCardProps {
  game: ICatalog;
}

const ProductCard = ({ game }: IProductCardProps) => {
  // Temporary adding this event to prevent page from reloading.
  const onClick = (e: any) => {
    e.preventDefault();
  };
  return (
    <a className={styles.anchor} href={game.href} onClick={onClick}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img className={styles.boxImage} src={game.image} alt={game.title} />
        </div>
        <div className={styles.bottom}>
          <p className={styles.title}>{game.title}</p>
          <p className={styles.developer}>{game.developer}</p>
          <p className={styles.price}>{game.price}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
