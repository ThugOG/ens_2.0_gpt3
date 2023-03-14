import React, { useState } from "react";
import "../register.css";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
const Register = () => {
  const { id } = useParams();
  const [favourites, setFavourite] = useState(true);
  const handleClick = () => {
    setFavourite(!favourites);
  };
  console.log(id);
  return (
    <div className="register_component">
      <div className="register_div1">
        <p>{id}.eth</p>
        <div className="register_div1_inner">
          <button onClick={handleClick} className="heart_rating">
            {
              <img
                src={
                  !favourites
                    ? "https://img.icons8.com/emoji/48/null/red-heart.png"
                    : "https://img.icons8.com/ios/48/null/like.png"
                }
              />
            }
          </button>
          <div className="register_div1_inner_buttons">
            <Link to=""><button >Register</button></Link>
            <Link to="details"><button>Details</button></Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Register;
