// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         let users = document.getElementById('users');
//         let items = '';
//         data.map(item => {
//             items += `<li class="list-group-item">${item.name}</li>`;
//         });
//         users.innerHTML = items;
//     });

const SearchMovie = () => {
    const moviename = document.getElementById('txtMovieName').value;
    fetch(`http://www.omdbapi.com/?apikey=8266bbff&t=${moviename}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('poster').src = data.Poster;
            document.getElementById('moviename').innerHTML = data.Title;
            document.getElementById('plot').innerHTML = data.Plot;
            document.getElementById('actors').innerHTML = data.Actors;
            document.getElementById('duration').innerHTML = data.Runtime;
            document.getElementById('director').innerHTML = data.Director;
            document.getElementById('rating').innerHTML = data.imdbRating;
        });
}