export default function handleResponseFromAPI(promise) {
  return promise
    .then((res = { status: 200, body: 'success' }) => res)
    .catch((error = new Error()) => error)
    .finally(console.log('Got a response from the API'));
}
