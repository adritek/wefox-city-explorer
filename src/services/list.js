export function getList() {
  return fetch('http://localhost:3030/api/v1/posts').then((data) => data.json());
}

export function submitToAPI(city) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(city),
  };
  return fetch('http://localhost:3030/api/v1/posts', requestOptions).then((response) => response.json());
}
