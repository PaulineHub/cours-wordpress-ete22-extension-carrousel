(function () {
    
    // Création dynamique d'une galerie d'images.
    
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture');
    let elmCarrousel__radio = document.querySelector('.carrousel__radio');
    console.log(elmGalerieImg[0].getAttribute('src'))

    for (const img of elmGalerieImg){
        
        ajouter_elmImg(img);
        let elmRadio = document.createElement('input');
        elmRadio.setAttribute('type', 'radio');
        elmCarrousel__radio.appendChild(elmRadio);
        img.addEventListener('mousedown', function () {
            console.log(img)
            elmCarrousel.classList.add('carrousel_ouvrir');
        })
    }

    function ajouter_elmImg(img) {
        let elmImg = document.createElement('img');
        elmImg.classList.add('carrousel_figure__img')
        elmImg.setAttribute('src', img.getAttribute('src'));
        elmCarrousel__figure.appendChild(elmImg);
    }
    
    
    elmCarrousel__fermeture.addEventListener('mousedown', function () {
        elmCarrousel.classList.remove('carrousel_ouvrir');
    });

    
    
    
    
    })();