import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ src, alt = 'img', onCloseModal }) => {
  const handleCloseModal = event => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    }

    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  });

  return (
    <div className="Overlay" onClick={handleCloseModal}>
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
}

export default Modal;
