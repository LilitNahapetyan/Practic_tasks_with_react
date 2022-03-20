const API_KEY = "67d9edc0-e6a3-11e3-9798-57275476509";
const API_URL = `https://api.harvardartmuseums.org/object?apikey=${API_KEY}a&sort=rank&sortorder=asc&from=12&size=30`;

function fetchGalleryData(activePage=1) {
  return fetch(`${API_URL}&page=${activePage}`).then((res) => res.json());
}

export {fetchGalleryData};
