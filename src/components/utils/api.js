import axios from 'axios';

const api = (searchImg, pageImg) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchImg}&page=${pageImg}&key=20693551-d0a20ef5437303d990fffd1b9&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .catch(function (error) {
      console.log(error);
    });
};

export default api;
