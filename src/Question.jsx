import React, { useState } from "react";
const Question = (props) => {
  const [infoText, setInfoText] = useState(false);
  const { title, info } = props;
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setInfoText(!infoText)}>
          {infoText ? "-" : "+"}
        </button>
      </header>
      {infoText && <p>{info}</p>}
    </article>
  );
};

export default Question;
