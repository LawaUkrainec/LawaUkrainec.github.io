(function() {
    // Gallery

    let gallery = document.querySelector('.images');


    // **********    GET/LOAD IMAGES    **********
    const getImages = async function() {
        let url;
        let gallery = document.querySelector('.gallery');

        if (gallery.classList.contains('mr-skellington'))
            url = 'gallery-images/mr-skellington-images.json';

        const response = await fetch(url);
        return await response.json();
    }

    const loadImages = function(data) {
        let images = new Array();
        for (let image of data)
            images.push(image.imgPath);

        // let img = document.querySelector('.carousel>img');
        // img.src = `../img/${images[0]}`;

        for (let i = 0; i < images.length; i++) {
            let img = document.createElement('img');
            img.src = `../img/${images[i]}`;
            // img.alt = images[i].split('/')[0];
            gallery.appendChild(img);
        }


    }

    getImages()
        .then(loadImages);
})();