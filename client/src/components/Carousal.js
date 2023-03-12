import { useState } from "react";
import { images } from "../utils/constant";
import { navigation } from "../utils/constant";
const Carousal = () => {
  const [visible, setVisible] = useState(null);
  const [activeImage, setActiveImage] = useState(1);
  const handleClick = (index) => {
    setVisible(index);
    setActiveImage(index);
  };
  return (
    <div className="carousal-top">
      <div className="carousal-body">
        <p>Decentralised naming for wallets, websites, & more.</p>
      </div>
      <div className="carousal_navigation">
        {navigation.map((single, index) => {
          return (
            <>
              <div
                onClick={() => {
                  handleClick(index);
                }}
              >
                <img src={single.url}></img>
                <p>{single.name}</p>
                {visible == index && <div className="filled_dot"></div>}
              </div>
            </>
          );
        })}
      </div>
      <div className="images_carousal">
        {images.map((single, index) => {
          return (
            <>
              {
                <img
                  onClick={() => {
                    handleClick(index);
                  }}
                  src={single}
                  className={
                    visible == index
                      ? "images_navigation"
                      : "images_navigation_none"
                  }
                ></img>
              }
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Carousal;
