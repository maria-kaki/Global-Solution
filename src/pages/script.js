// função do Login de usuário

function login() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario !== "user") {
        alert("Usuário incorreto!");
    }
    else if(senha !== "senha1234"){
        alert("Senha incorreta!");
    }
    else {
        alert(`Bem-vindo, ${usuario}!`);
        window.location.href = "index.html";
    }
}

const slides = document.querySelectorAll('.slide');
const btnesquerda = document.querySelector('.esquerda');
const btndireita = document.querySelector('.direita');

let primeiroSlide = 0;

function showSlide(slideIndex) {
    slides.forEach(slide => slide.style.opacity = 0);
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.zIndex = 1;
}

showSlide(primeiroSlide);

prevBtn.addEventListener('click', () => {
    primeiroSlide = (primeiroSlide - 1 + slides.length) % slides.length;
    showSlide(primeiroSlide);
});

nextBtn.addEventListener('click', () => {
    primeiroSlide = (primeiroSlide + 1) % slides.length;
    showSlide(primeiroSlide);
});
