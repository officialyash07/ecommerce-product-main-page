import classes from '../styles/Carousel.module.css';

import close from '../assets/icon-close.svg';
import left from '../assets/icon-previous.svg';
import right from '../assets/icon-next.svg';

import { IMAGES } from './Images';

import Modal from '../UI/Modal';
import { UserProgressContext } from '../store/UserProgressContext';

import { useContext } from 'react';

const Carousel = () => {
    const { progress, hideCarousel } = useContext(UserProgressContext);

    function handleCloseCarousel() {
        hideCarousel();
    }

    return (
        <Modal
            className={classes.carousel}
            open={progress === 'carousel'}
            onClose={progress === 'carousel' ? handleCloseCarousel : null}
        >
            <div className={classes.carouselContent}>
                <button className={classes.closeBtn} onClick={handleCloseCarousel}>
                    <img src={close} alt="" />
                </button>
                <div className={classes.carouselImages}>
                    <button className={classes.left}>
                        <img src={left} alt="" />
                    </button>
                    {IMAGES.map((image) => (
                        <img src={image.image} key={image.id} />
                    ))}
                    <button className={classes.right}>
                        <img src={right} alt="" />
                    </button>
                </div>
            </div>
        </Modal>
    );
};
export default Carousel;
