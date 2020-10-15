
export const apiUrl = `https://jsonplaceholder.typicode.com/users`;
export function logincheckrequest() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
  .then(jsondata => console.log(jsondata))
  .catch((error) => {throw error})
}

