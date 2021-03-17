import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  return (
    <header
      className="Searchbar"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(search);
      }}
    >
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoСomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={e => {
            setSearch(e.currentTarget.value);
          }}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
