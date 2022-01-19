import axios from 'axios';

const KEY = '25285051-4b045d69a43564daa3e04547c';
const BASE_URL = 'https://pixabay.com/api?';

export default function getImage(name, page = 1) {
  try {
    const response = axios.get(
      `${BASE_URL}key=${KEY}&q=${name}
      &image_type=photo
      &orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
