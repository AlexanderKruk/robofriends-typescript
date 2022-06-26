import * as React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

interface ICardList {
  robots: IRobot[]
}


const CardList = ({robots}: ICardList) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;