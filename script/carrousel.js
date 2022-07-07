(function () {
    
    // Création dynamique d'une galerie d'images.
    
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture');
    let elmCarrousel__radio = document.querySelector('.carrousel__radio');
    //console.log(elmGalerieImg[0].getAttribute('src'))
    let index = 0;
    let ancien_index = -1;

    for (const img of elmGalerieImg){
        ajouter_elmImg(img);
        ajouter_elmRadio();
        img.addEventListener('mousedown', function () {
            elmCarrousel.classList.add('carrousel_ouvrir');
        })
    }

    function ajouter_elmImg(img) {
        let elmImg = document.createElement('img');
        elmImg.classList.add('carrousel_figure__img')
        elmImg.setAttribute('src', img.getAttribute('src'));
        elmCarrousel__figure.appendChild(elmImg);
        elmImg.dataset.index = index;
        index++;
    }

    function ajouter_elmRadio(){
        let elmRadio = document.createElement('input');
        elmRadio.setAttribute('type', 'radio');
        elmRadio.dataset.index = index;
        index++;
        elmCarrousel__radio.appendChild(elmRadio);
        elmRadio.addEventListener('mousedown', function(){
            if (ancien_index != -1) {
                elmCarrousel__figure.children[ancien_index].classList.remove('carrousel_figure__img--activer');
            }
            elmCarrousel__figure.children[this.dataset.index].classList.add('carrousel_figure__img--activer');
            ancien_index = this.dataset.index;
        })
    }
    
    
    elmCarrousel__fermeture.addEventListener('mousedown', function () {
        elmCarrousel.classList.remove('carrousel_ouvrir');
    });

    
    
    
    
    })();