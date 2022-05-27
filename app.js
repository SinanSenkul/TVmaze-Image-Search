const getPage = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=' + entry.value, config);
    let div = document.createElement('div');
    if (res.data.length === 0) {
        let hdr = document.createElement('h1');
        hdr.innerText = 'No Match Was Found';
        hdr.style.color = 'red';
        hdr.style.textAlign = 'center';
        div.appendChild(hdr);
        document.body.appendChild(div);
        divCount = 1;
    }
    else {
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
}

var entry = document.querySelector('#entry');
var submit = document.querySelector('#submit');
submit.addEventListener('click', getPage);
var divCount = 0;
