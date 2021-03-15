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

export default Button;
