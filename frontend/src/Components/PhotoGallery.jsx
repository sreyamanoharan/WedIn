import React, { useState } from "react";
import '../Styles/PhotoGallery.css';
import { FaDownload } from "react-icons/fa";

const photos = [
    { src: "/images/MNT_1.jpg", alt: "Photo 1" },
    { src: "/images/MNT_2.jpg", alt: "Photo 2" },
    { src: "/images/MNT_3.jpg", alt: "Photo 3" },
    { src: "/images/MNT_4.jpg", alt: "Photo 4" },
    { src: "/images/MNT_5.jpg", alt: "Photo 5" },
    { src: "/images/MNT_6.jpg", alt: "Photo 6" },
    { src: "/images/MNT_7.jpg", alt: "Photo 7" },
    { src: "/images/MNT_8.jpg", alt: "Photo 8" },
    { src: "/images/MNT_9.jpg", alt: "Photo 9" },
    { src: "/images/MNT_10.jpg", alt: "Photo 10" },
    { src: "/images/MNT_11.jpg", alt: "Photo 11" },
    { src: "/images/MNT_12.jpg", alt: "Photo 12" },
    { src: "/images/MNT_13.jpg", alt: "Photo 13" },
    { src: "/images/MNT_14.jpg", alt: "Photo 14" },
    { src: "/images/MNT_15.jpg", alt: "Photo 15" },
    { src: "/images/MNT_16.jpg", alt: "Photo 16" },
    { src: "/images/MNT_17.jpg", alt: "Photo 17" },
    { src: "/images/MNT_18.jpg", alt: "Photo 18" },
    { src: "/images/MNT_19.jpg", alt: "Photo 19" },
    { src: "/images/MNT_20.jpg", alt: "Photo 20" },
    { src: "/images/MNT_21.jpg", alt: "Photo 21" },
    { src: "/images/MNT_23.jpg", alt: "Photo 23" },
    { src: "/images/MNT_24.jpg", alt: "Photo 24" },
    { src: "/images/MNT_25.jpg", alt: "Photo 25" },
  ];
const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = currentImage;
    link.download = currentImage.split("/").pop();  // Extracts the file name for download
    link.click();
  };

  return (
    <div className="gallery-container">
        <p className="gal-head">Gallery</p>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(photo.src)}>
            <img src={photo.src} alt={photo.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
         <div className="modal" onClick={closeModal}>
           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
             <img src={currentImage} alt="Full-size" className="modal-image" />
             <div className="modal-controls">
               <button className="close-btn" onClick={closeModal}>
                 &times;
               </button>
               <button className="download-btn" onClick={downloadImage}>
                 <FaDownload />
               </button>
             </div>
           </div>
         </div>
      )}
    </div>
  );
};

export default PhotoGallery;
