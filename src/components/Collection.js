import React from "react";
import '../scss/App.scss';
import '../scss/font.scss';
import collection_image from '../images/image 8.png'

function Collection() {
  return (
    <div className="collectionWrapper">
        <div className="collection">
          <p className="collection_text">NEW COLLECTION</p>
          <p className="collection_text">STONE NAME</p>
          <button className="view_collection_text">VIEW COLLECTION</button>
        </div>
        <div className="image"><img className="collection_image" src={collection_image} alt="collection image"/>
        </div>
    </div>
  );
}

export default Collection;
