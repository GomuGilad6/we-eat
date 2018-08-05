import axios from 'axios';

export default ({ method = 'get', url, data }) => new Promise((resolve, reject) => {
  axios({
    method,
    url,
    data
  }).then(
    result => resolve(result.data)
  ).catch(e => reject(e))
});
