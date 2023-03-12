import { Outlet, useParams } from "react-router-dom";
import "../search_app.css";
import { Link } from "react-router-dom";
// import NameCard from "./components/NameCard";
// import Display from "./components/Display";
const Search_App = () => {
  const [searchText, setSearchText] = useState("")
  const { id } = useParams();
  const handleClick = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <div className="search_dapp">
      <div className="search_dapp_component">
        <div className="logo"></div>
        <input value={searchText} type="text" placeholder="Search ens name..."></input>
        <button onClick={handleClick}>Search</button>
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Search_App;
