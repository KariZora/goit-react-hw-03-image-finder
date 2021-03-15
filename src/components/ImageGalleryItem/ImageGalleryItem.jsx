const ImageGalleryItem = ({ img, onShowModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onShowModal(img.largeImageURL, img.tags)}
    >
      <img
        src={img.webformatURL}
        alt={img.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
