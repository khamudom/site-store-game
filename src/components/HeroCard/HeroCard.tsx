import React from 'react';
import { Button } from '../../components';
import styles from './HeroCard.module.css';

type HeroCardProps = {
  image: string;
  title: string;
  description: string;
};

const HeroCard = ({ image, title, description }: HeroCardProps) => {
  return (
    <div className={styles.heroCard}>
      <div className={styles.image}>
        <div className={styles.gradient}></div>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          <Button type="button">Details</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
