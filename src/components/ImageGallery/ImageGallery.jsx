import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallary = ({ children, onShowModal }) => {
  return (
    <ul className="ImageGallery">
      {children.map((data, id) => (
        <ImageGalleryItem key={id} img={data} onShowModal={onShowModal} />
      ))}
    </ul>
  );
};

ImageGallary.propTypes = {
  children: PropTypes.array,
  onShowModal: PropTypes.func,
}

export default ImageGallary;
