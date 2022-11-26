export default async function handler(req, res) {
  // Fetches word from api and returns first word in an array
  const json = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1&length=6"
  );
  const data = await json.json();
  res.json(data[0]);
}
