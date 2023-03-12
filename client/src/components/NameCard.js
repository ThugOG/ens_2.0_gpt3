import { useState } from "react";
import {useDispatch} from 'react-redux'
import { additem } from "../utils/slices/favourite";
const NameCard = () => {
    const dispatch = useDispatch()
  const [favourites, setFavourite] = useState(true);
  const handleClick = () => {
    setFavourite(!favourites)
    dispatch(additem({name: 34}))
  }
  return (
    <div className="name_card">
      <div className="name_card_left">
        <p>ens.eth</p>
      </div>
      <div className="name_card_right">
        <p>Expires 2030.08.26 at 05:36 (UTC+05:30)</p>
        <p>Unavailable</p>
        <button onClick={handleClick} className="heart_rating">
          {<img src={
            (!favourites) ? "https://img.icons8.com/emoji/48/null/red-heart.png" : "https://img.icons8.com/ios/48/null/like.png"
          } />}
        </button>
        <button className="details">Details</button>
      </div>
    </div>
  );
};
export default NameCard;