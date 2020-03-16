import React, { useState } from "react";

export default function Writer() {
  const [writer, updateWriter] = useState("e.g. Margaret Atwood");

  return (
    <div className="writer">
      <h2>Who's that writer?</h2>
      <div className="searchBox">
        <form>
          <input
            type="text"
            value={writer}
            onChange={e => updateWriter(e.target.value)}
            className="input--writer"
          />
          <button className="button button--writer">Search</button>
        </form>
      </div>
    </div>
  );
}
