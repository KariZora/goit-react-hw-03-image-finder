import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  onShowModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
