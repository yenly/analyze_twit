function analyzeTone(username) {
  const apiUrl = `twit/${username}`;
  return fetch(apiUrl)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

const Client = { analyzeTone };
export default Client;
