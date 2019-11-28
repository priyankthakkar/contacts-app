import React from "react";
import { useHistory } from "react-router-dom";

const ButtonNav = () => {
  const history = useHistory();

  return (
    <button onClick={() => history.push("/contacts")}>
      Contacts via History
    </button>
  );
};

export default ButtonNav;