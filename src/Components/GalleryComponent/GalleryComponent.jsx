import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CancelIcon from "@mui/icons-material/Cancel";
import "./GalleryComponent.css";

const GalleryComponent = ({ galleryImages }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    // Next Image
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

    return (
        <div>
            {openModal && (
                <div className="sliderWrap">
                    <CancelIcon
                        className="btnClose"
                        onClick={handleCloseModal}
                    />
                    <ArrowBackIosNewIcon
                        className="btnPrev"
                        onClick={prevSlide}
                    />
                    <ArrowForwardIosIcon
                        className="btnNext"
                        onClick={nextSlide}
                    />
                    <div className="fullScreenImage">
                        <img src={galleryImages[slideNumber].img} alt="" />
                    </div>
                </div>
            )}

            {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

            <div className="galleryWrap">
                {galleryImages &&
                    galleryImages.map((slide, index) => {
                        return (
                            <div
                                className="single"
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img src={slide.img} alt="" />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default GalleryComponent;
