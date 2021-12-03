import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favorite) =>
    setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(favorite));

  const removeFavoriteHandler = (meetupId) =>
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );

  const itemIsFavoriteHandler = (meetupId) =>
    userFavorites.some((m) => m.id === meetupId);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
