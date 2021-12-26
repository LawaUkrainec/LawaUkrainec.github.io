(function() {
    let gallery = document.querySelector('.images');
    let images = new Array();


    // **********    GET/LOAD IMAGES    **********
    const getImages = async function() {
        let url;
        let gallery = document.querySelector('.gallery');

        if (gallery.classList.contains('artwork'))
            url = 'gallery-images/artwork-images.json';
        if (gallery.classList.contains('mr-skellington'))
            url = 'gallery-images/mr-skellington-images.json';
        if (gallery.classList.contains('pingus-fish'))
            url = 'gallery-images/pingus-fish-images.json';
        if (gallery.classList.contains('flowers-for-freedom'))
            url = 'gallery-images/flowers-for-freedom-images.json';

        const response = await fetch(url);
        return await response.json();
    }

    const loadImages = function(data) {
        for (let image of data)
            images.push(image);

        for (let i = 0; i < images.length; i++)
            setUpImage(images[i]);
    }

    const setUpImage = function(image) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let p = document.createElement('p');

        img.src = `../img/${image.imgPath}`;
        img.alt = image.name;
        p.innerText = img.alt;
        p.classList.add('caption');
        div.classList.add('gallery-img');

        div.appendChild(img);

        div.appendChild(p);
        gallery.appendChild(div);

        img.addEventListener('click', function(evt) {
            evt.preventDefault();
            evt.path[0].classList.toggle('enlarge');
        });
    }

    getImages()
        .then(loadImages);
})();