import React from "react";
import ReactDOM from "react-dom/client";
import "./componentStyles.css"

const MemeCard = (props) => {
  
  const {author, title, url} = props;

  return(
    <div id="meme-card">
      <img id="meme-img" src={url} alt={title} />
      <h3>{title}</h3>
      <p>Author: {author}</p>
    </div>
  )

}

export default MemeCard;