/*
axios
    .get("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("Response: " + res);
    })
    .catch(err => {
        console.log("Error Type: " + err);
    })

getSWP = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data);
}

getSWP();
*/

//295. Setting Headers with Axios
/* This almighty function will get the joke data from icanhazdadjoke's api, and append each new joke to the body.
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com', config);
    let p = document.createElement('p');
    p.innerText = res.data.joke;
    document.body.appendChild(p);
}
*/

//TV Show Search App

const getPage = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=' + entry.value, config);
    let div = document.createElement('div');
    //div.classList.add('div');
    //console.log(res.data[0].show.url);
    if (res.data.length === 0) {
        let hdr = document.createElement('h1');
        hdr.innerText = 'No Match Was Found';
        hdr.style.color = 'red';
        hdr.style.textAlign = 'center';
        div.appendChild(hdr);
    }
    for (let i = 0; i < res.data.length; i++) {
        let a = document.createElement('a');
        a.href = res.data[i].show.url;
        a.target = "_blank";
        let img = document.createElement('img');
        img.classList.add('img');
        if (res.data[i].show.image) {
            img.src = res.data[i].show.image.medium;
            a.appendChild(img);
            div.appendChild(a);
        }
    }
    if (divCount === 0) {
        document.body.appendChild(div);
        divCount = 1;
    }
    else {
        document.body.removeChild(document.body.lastChild);
        document.body.appendChild(div);
        divCount = 1;
    }
}

var entry = document.querySelector('#entry');
var submit = document.querySelector('#submit');
submit.addEventListener('click', getPage);
var divCount = 0;


