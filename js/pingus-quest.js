(function() {
    // **********    GLOBAL VARS    **********

    let menusImg = new Array();
    let placesImg = new Array();
    let puzzlesImg = new Array();
    let charactersImg = new Array();
    let stonesImg = new Array();

    let menusGallery = document.querySelector('.menus');
    let placesGallery = document.querySelector('.places');
    let puzzlesGallery = document.querySelector('.puzzles');
    let charactersGallery = document.querySelector('.characters');
    let stonesGallery = document.querySelector('.stones');

    // **********    SET UP GALLERIES    **********

    const setUpGalleries = function() {
        getImages('gallery-images/pq/menus.json')
            .then(loadMenus);
        getImages('gallery-images/pq/places.json')
            .then(loadPlaces);
        getImages('gallery-images/pq/puzzles.json')
            .then(loadPuzzles);
        getImages('gallery-images/pq/characters.json')
            .then(loadCharacters);
        getImages('gallery-images/pq/stones.json')
            .then(loadStones);
    }

    const getImages = async function(url) {
        const response = await fetch(url);
        return await response.json();
    }

    // **********    LOADING IMAGES    **********

    const loadMenus = function(data) {
        for (let image of data)
            menusImg.push(image);

        for (let i = 0; i < menusImg.length; i++)
            addImageToGallery(menusGallery, menusImg[i], true);
    }

    const loadPlaces = function(data) {
        for (let image of data)
            placesImg.push(image);

        for (let i = 0; i < placesImg.length; i++)
            addImageToGallery(placesGallery, placesImg[i], true);
    }

    const loadPuzzles = function(data) {
        for (let image of data)
            puzzlesImg.push(image);

        for (let i = 0; i < puzzlesImg.length; i++)
            addImageToGallery(puzzlesGallery, puzzlesImg[i], true);
    }

    const loadCharacters = function(data) {
        for (let image of data)
            charactersImg.push(image);

        for (let i = 0; i < charactersImg.length; i++)
            addImageToGallery(charactersGallery, charactersImg[i], true);
    }

    const loadStones = function(data) {
        for (let image of data)
            stonesImg.push(image);

        for (let i = 0; i < stonesImg.length; i++)
            addImageToGallery(stonesGallery, stonesImg[i], false);
    }

    // **********    ADD IMAGES TO GALLERY    **********

    const addImageToGallery = function(gallery, image, enlarge) {
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

        if (enlarge) {
            img.addEventListener('click', function(evt) {
                evt.preventDefault();
                evt.path[0].classList.toggle('enlarge');
            });
        }
    }

    setUpGalleries();
})();