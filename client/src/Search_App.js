import { Outlet, useParams } from "react-router-dom";
import "../search_app.css";
import { Link } from "react-router-dom";
import { createContext, useState } from "react";
// import NameCard from "./components/NameCard";
// import Display from "./components/Display";
export const DomainContext = createContext("");
const Search_App = () => {
  const [searchText, setSearchText] = useState("");
  const { id } = useParams();
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="search_dapp">
      <div className="search_dapp_component">
        <div className="logo">
        <Link to="/"><img src="https://i.ibb.co/CvFRc8m/logo-no-back.png"></img></Link>
        </div>
        <input
          onChange={handleChange}
          value={searchText}
          type="text"
          placeholder="Search ens name..."
        ></input>
        <Link to={"/dapp/search/" + searchText.toLowerCase()}>
          <button>Search</button>
        </Link>
      </div>
      <div className="body_component">
        <div className="left_dapp_component">
          <button>Connect</button>
          <ul>
            <Link to="favourite">
              <li>Favourites</li>
            </Link>
            {/* <Link to="faq">
              <li>FAQ</li>
            </Link> */}
            <Link to="/">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="right_dapp_component">
          <DomainContext.Provider value={id}>
            <Outlet />
          </DomainContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default Search_App;
