import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallary = ({ children, onShowModal }) => {
  return (
    <ul className="ImageGallery">
      {children.map((data, id) => (
        <ImageGalleryItem key={id} img={data} onShowModal={onShowModal} />
      ))}
    </ul>
  );
};

export default ImageGallary;
