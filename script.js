//FUNGSI CAROUSEL

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index >= items.length) {
        currentIndex = items.length - 1;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

//FUNGSI CAROUSEL END


//FUNGSI CAROUSEL CLICK
const images = ['turki.png', 'turki1.jpg', 'turki2.jpg', 'turki3.jpg', 'turki4.jpg', 'turki5.jpg'];
        let indexSekarang = 0;

        const imageElement = document.getElementById('turki-carousel');
        const container = document.getElementById('turki-container');

        function showPhoto() {
            indexSekarang = (indexSekarang + 1) % images.length;
            imageElement.src = images[indexSekarang];
        }
        container.addEventListener('click', showPhoto);

//FUNGSI CAROUSEL KLIK

//FUNGSI SCROLL
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId); 
    section.scrollIntoView({ behavior: 'smooth' });  
}
//FUNGSI SCROLL END


//ANIMASI MY PORTOFOLIO
const textPorto = "My Portofolio Website";
        const typingElement = document.getElementById("myPorto");
        let index2 = 0;


        function typeText() {
            if (index2 < textPorto.length) {
                typingElement.innerHTML += textPorto.charAt(index2);
                index2++;
                setTimeout(typeText, 100);
            }
        }

        typeText();
//ANIMASI MY PORTOFOLIO END

setTimeout(() => {
    document.getElementById("welcomeTo").style.opacity = 1;
}, 1000);
