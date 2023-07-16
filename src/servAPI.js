import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

const PARAMS = new URLSearchParams({
  key: '38283071-2211cb7211864082380f19325',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
});

async function fetchImages(e, page) {
  const resp = await axios.get(`${BASE_URL}?${PARAMS}&q="${e}"&page=${page}`);
  return resp;
}

export { fetchImages };
