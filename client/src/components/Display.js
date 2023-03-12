import React, { useContext } from "react";
import NameCard from "./NameCard";
import LengthErrorCard from "./LengthErrorCard";
import { DomainContext } from "../Search_App";
const Display = () => {
  const domain = useContext(DomainContext);
  return (
    <>
      {(domain.length > 2) ? (
        <div>
          <h3>Names</h3>
          <NameCard />
        </div>
      ) : (
          <LengthErrorCard />
      )}
    </>
  );
};

export default Display;
