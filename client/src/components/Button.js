import {Link } from 'react-router-dom'
const Button = () => {
  return (
    <div className="btn_comp">
      <Link to="/app"><button className="btn-carousal">Launch App</button></Link>
    </div>
  );
};
export default Button
