import React, { useState } from "react";

function CakeSearch({ getQuery }) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search flavour"
          value={text}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          autoFocus
        />
      </form>
    </section>
  );
}

export default CakeSearch;
