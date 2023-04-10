import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '33720271-cfad09de7463efb54028bd049',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImg = async (page, search) => {
  const { data } = await axios.get(`?q=${search}&page=${page}`);
  return data.hits;
};

export default fetchImg;
