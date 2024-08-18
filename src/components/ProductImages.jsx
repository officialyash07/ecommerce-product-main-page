import classes from '../styles/ProductImages.module.css';

import { IMAGES } from './Images';
import Carousel from './Carousel';

import { UserProgressContext } from '../store/UserProgressContext';

import { useState } from 'react';
import { useContext } from 'react';

const ProductImages = () => {
    const [activeImage, setActiveImage] = useState(IMAGES[0]);

    const { showCarousel } = useContext(UserProgressContext);

    const mainImageHandler = (image) => {
        setActiveImage(image);
    };

    const handleOpenCarousel = () => {
        showCarousel();
    };

    return (
        <>
            <div id={classes.productImages}>
                <div className={classes.mainImage}>
                    <img src={activeImage.image} alt="main-image" onClick={handleOpenCarousel} />
                </div>
                <div className={classes.thumbnails}>
                    {IMAGES.map((image) => (
                        <div key={image.id} className={classes.thumbnail}>
                            <img
                                key={image.id}
                                src={image.thumbnail}
                                alt={image.alt}
                                className={image.id === activeImage.id ? classes.active : ''}
                                onClick={() => mainImageHandler(image)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Carousel />
        </>
    );
};
export default ProductImages;
