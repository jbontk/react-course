import { useContext } from 'react';

import classes from './MeetupItem.module.css';

import Card from '../ui/Card';

import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoritesStatusHandler = () =>
    itemIsFavorite
      ? favoritesCtx.removeFavorite(props.id)
      : favoritesCtx.addFavorite({
          id: props.id,
          title: props.title,
          address: props.address,
          description: props.description,
          image: props.image,
        });

  return (
    <li key={props.id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
