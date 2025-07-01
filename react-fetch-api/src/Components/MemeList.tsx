import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import MemeCard from "./MemeCard";


const MemeList = () => {

  const [memes, setMemes] = useState(null);

  useEffect(() => {
    fetchMemes();
  }, [])

  const fetchMemes = async () => {
    const fetchedMemes = await fetch("https://meme-api.com/gimme/20");
    const data = await fetchedMemes.json();
    setMemes(data.memes);
    console.log("data: ", data);
    console.log("memes: ", memes);
  }

  return(
    <div>
      <h2>Memes will render here</h2>
      <div id="meme-container">
      {
        memes && memes.map((meme, idx) => (
          <MemeCard
            key={idx}
            author={meme.author}
            title={meme.title}
            url={meme.url}
          />
        ))
      }      
      </div>
    </div>
  )
}

export default MemeList;