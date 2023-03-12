import "../app_index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const App_Dapp = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="app_dapp">
      <div className="header_app">
        <button>Connect</button>
      </div>
      <div className="search">
        <input
          value={searchText}
          onChange={handleChange}
          type="text"
          placeholder="Search Name and address"
        ></input>
        <Link to={"/dapp/search/" + searchText.toLowerCase()}>
          {searchText.length ? (
            <button>Search</button>
          ) : (
            <button disabled>Search</button>
          )}
        </Link>
      </div>
    </div>
  );
};
export default App_Dapp;
