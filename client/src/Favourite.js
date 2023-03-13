import React from "react";
import { useSelector } from "react-redux";
// import store from './utils/store'
const Favourite = () => {
  const favourite = useSelector((store) => store.favourite.items);
  console.log(favourite);
  return (
    <>
      <h4 className="favourite_header">Favourite</h4>
      {(!favourite.length) ? <div className="favourite">
        <img src="https://img.icons8.com/ios-glyphs/30/null/hearts.png" />
        <p>No names have been saved.</p>
        <p>
          To add names to favourites, click the heart icon next to any desired
          name.
        </p>
      </div> : null}
    </>
  );
};

export default Favourite;
