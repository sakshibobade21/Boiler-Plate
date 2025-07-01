import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const Shimmer = () => {

  const [isImgLoaded, setImageLoaded] = useState(false);

  return (
		<div id="img-container">
      { !isImgLoaded && (
        <div id="shimmer-placeholder">
				</div>
			)}
			<img 
					id="img-tag" 
					src="https://picsum.photos/1920/1080" 
					alt="random" 
					onLoad={() => setImageLoaded(true)}>
				</img>
			<h2>Fetching a new image evertime</h2>
			<h3>Credits: PicSum</h3>
		</div>
	)
}

export default Shimmer;