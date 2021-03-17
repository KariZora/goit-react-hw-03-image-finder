import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <button
      className="loadMoreBtn"
      onClick={() => {
        onLoadMore();
      }}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
}

export default Button;
