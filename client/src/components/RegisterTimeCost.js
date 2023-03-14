import React, {useState} from "react";

const RegisterTimeCost = () => {
  const [favourites, setFavourite] = useState(true);
  const [noOfYears, setNoOfYears] = useState(1);
  const handleIncrease = () => {
    setNoOfYears(noOfYears + 1);
  };
  const handleDecrease = () => {
    setNoOfYears(noOfYears == 1 ? noOfYears : noOfYears - 1);
  };
  return (
    <div>
      <div className="register_div2">
        <div className="register_div2_inner_func1">
          <button onClick={handleIncrease}>+</button>
          <p>{noOfYears} year </p>
          <button onClick={handleDecrease}>-</button>
        </div>
        <div className="register_div2_inner_func2">
          <p>Cost Per Year : 0.003 ETH</p>
        </div>
      </div>
      <div className="register_div3">
        <p>Total Cost:</p>
        <p className="cost_in_eth"> 0.009</p>
        <p className="cost_in_usd"> i.e 14.88USD</p>
      </div>
      <div className="register_div4">
        <button>Request to Register</button>
      </div>
    </div>
  );
};

export default RegisterTimeCost;
