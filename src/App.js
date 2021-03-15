import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallary from './components/ImageGallery/ImageGallery';
import api from './components/utils/api';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from 'react-loader-spinner';

function App() {
  const [gallery, setGallery] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [imgTitle, setImgTitle] = useState('');
  const [loaderSpinner, setLoaderSpinner] = useState(false);
  const [showModal, setModal] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const handleSubmit = value => {
    setPageNumber(1);
    setGallery([]);
    setImgTitle(value.trim(), handleShowPictures(value.trim()));
  };

  const handleLoadMore = () => {
    setPageNumber(prevPage => prevPage + 1);
  };

  const handleShowPictures = (value = imgTitle) => {
    setLoaderSpinner(true);
    api(value, pageNumber)
      .then(response => {
        setGallery(prevState => [...prevState, ...response.data.hits]);
      })
      .then(() => setLoaderSpinner(false))
      .then(() => {
        if (pageNumber !== 1)
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      });
  };

  const handleShowModal = (src, alt) => {
    if (!showModal) {
      setSrc(prev => src);
      setAlt(prev => alt);
      setModal(true);
    } else {
      setModal(false);
    }
  };

  useEffect(
    () => {
      if (pageNumber === 1) return;
      handleShowPictures();
    },
    // eslint-disable-next-line
    [pageNumber],
  );

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallary onShowModal={handleShowModal}>{gallery}</ImageGallary>
      {gallery.length > 0 && !loaderSpinner && (
        <Button onLoadMore={handleLoadMore} />
      )}
      {showModal && (
        <Modal src={src} alt={alt} onCloseModal={handleShowModal} />
      )}
      {loaderSpinner && (
        <div
          className="Overlay"
          style={{ textAlign: 'center', position: 'fixed' }}
        >
          <Loader type="ThreeDots" color="#3f51b5" height={200} width={200} />
        </div>
      )}
    </div>
  );
}

export default App;
