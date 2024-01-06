import { createContext, useContext, useEffect, useState } from "react";

const FavouriteContext = createContext([]);

export const FavouriteProvider = ({ children }) => {
  const [favData, setFavData] = useState(
    localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : []
  );

  const addToFavourites = (movieItem) => {
    setFavData((prevFavData) => {
      return [...prevFavData, movieItem];
    });
  };

  const removeFromFavourites = (id) => {
    setFavData((prevFavData) => prevFavData.filter((movie) => movie.id != id));
  };

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favData));
  }, [favData]);

  const contextValues = { favData, addToFavourites, removeFromFavourites };

  return (
    <FavouriteContext.Provider value={contextValues}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouriteContext);
};
