import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';

import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content =
    favoritesCtx.totalFavorites === 0 ? (
      <p>No Favorites yet, start adding some?</p>
    ) : (
      <MeetupList meetups={favoritesCtx.favorites} />
    );

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
