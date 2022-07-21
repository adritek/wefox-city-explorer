export function getList() {
  return fetch('http://localhost:3030/api/v1/posts').then((data) => data.json());
}

export function setCity(city) {
  return fetch('http://localhost:3030/api/v1/posts', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ city }),
  }).then((data) => data.json());
}
