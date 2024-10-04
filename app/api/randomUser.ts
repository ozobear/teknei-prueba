import axios from 'axios';

const API_URL = 'https://randomuser.me/api/';

const getRandomUser = async () => {
  const response = await axios.get(API_URL);
  return response.data.results[0];
};

export default getRandomUser;