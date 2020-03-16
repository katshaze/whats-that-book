import React, { useState } from "react";

const useInput = (defaultState, name) => {
  const [state, setState] = useState(defaultState);
  const id = `use-input-change-${name}`;
  const handleInputChange = (e) =>
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value
    });

  return (
    <input
      name={name}
      type="text"
      id={id}
      // value={state}
      placehoder={defaultState}
      onChange={handleInputChange}
    />
  );

};

export default useInput;
