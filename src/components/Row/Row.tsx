import React from 'react';
import { ICatalog } from '../../data';
import ProductCard from '../ProductCard/ProductCard';

interface RowProps {
  category: string;
  games: ICatalog[];
}

const Row = ({ games, category }: RowProps) => {
  return (
    <div className="catalog-row">
      <h3 className="catalog-header">{category}</h3>
      <ul>
        {games.map((game: ICatalog) => {
          return (
            <li key={game.id}>
              <ProductCard game={game} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Row;
