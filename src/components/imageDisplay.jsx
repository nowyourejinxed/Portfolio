import { useState } from 'react';
import '../css/imageDisplay.css'
export default function ImageCarousel ({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="carousel">
            <button className="prev-button" onClick={prevImage}>
                &#10094;
            </button>

            <div className="carousel-image">
                <img src={images[currentIndex]} alt="carousel" />
            </div>

            <button className="next-button" onClick={nextImage}>
                &#10095;
            </button>
        </div>
    );
}
