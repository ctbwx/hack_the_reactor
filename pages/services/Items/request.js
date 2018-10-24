import axios from 'axios';
import { query } from './query';

const getItems = () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: '63BHHKR8IJV3MCY3E9ILE823X',
    'Tipe-Id': 'NWIwNWQ4MjlhOWNiMmMwMDEzNDUwZjZh',
  };
  const variables = {
    id: '5bcd3e439b8f250013986ba6',
  };
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'https://api.tipe.io/graphql',
      headers,
      data: JSON.stringify({ query, variables }),
    })
      .then(result => resolve(result.data))
      .catch(error => reject(error.response || error));
  });
};

export default getItems;
