(function () {

    console.log('ui');
    
    // Création dynamique d'une galerie d'images.
    
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    console.log(elmGalerieImg[0].getAttribute('src'))
    for (const img of elmGalerieImg){
        img.addEventListener('mousedown', function(){
            console.log(this.getAttribute('src'))
            elmCarrousel.classList.add('carrousel__active')
            console.log(elmCarrousel.classList)
        })
    }
    
    
    
    })();