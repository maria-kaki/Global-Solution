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

