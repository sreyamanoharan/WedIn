import React, { useState } from "react";
import '../Styles/PhotoGallery.css';
import { FaDownload } from "react-icons/fa";

const photos = [
  { src: "/images/wed1.webp", alt: "Photo 1" },
  { src: "/images/wed2.webp", alt: "Photo 2" },
  { src: "/images/wed3.webp", alt: "Photo 3" },
  { src: "/images/wed4.webp", alt: "Photo 4" },
  { src:"/images/wed5.webp", alt: "Photo 5" },
  { src: "/images/wed6.webp", alt: "Photo 6" },
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
