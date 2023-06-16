const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

// USING ASYNC/AWAIT
async function generateJoke() {
    const endPoint = "https://icanhazdadjoke.com"
    const config = {
    headers: {
      Accept: 'application/json',
    },
    }
  let response = await fetch('https://icanhazdadjoke.com', config)
  let data = await response.json()
  jokeEl.innerHTML = data.joke
}
generateJoke()

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }