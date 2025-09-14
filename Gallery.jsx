//Student ID : 25011322

import React, { useState } from "react";
import Footer from "./Footer";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <main>
      <h2>Gallery</h2>
      <div className="gallery">
        <button onClick={prevImage}>◀</button>
        <img src={images[current]} alt={`Gallery ${current + 1}`} className="gallery-img" />
        <button onClick={nextImage}>▶</button>
      </div>
      <p>
        Image {current + 1} of {images.length}
      </p>

    <footer> 

      Created By: Pivithura Guruge 
      Student ID : 25011322

    </footer>

    </main>
  );
};

export default Gallery;
