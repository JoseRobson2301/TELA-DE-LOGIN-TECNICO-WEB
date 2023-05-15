function validacao(event) {
    event.preventDefault(); // Impede o envio do formulário

    var usuarioInput = document.getElementById("usuario");
    var senhaInput = document.getElementById("senha");

    var usuario = usuarioInput.value;
    var senha = senhaInput.value;

    if (usuario === "admin" && senha === "senha123") {
        swal("Senha Correta", "Clique no botão para continuar", "success", {
            button: "Iniciar",
          });

        setTimeout(function() {
            window.location.href = "https://joserobson2301.github.io/navbar/";
        }, 2000);

    } else {
        swal("senha incorreta!", "...verifique se o seu usuario ou senha se está correta");
    }
}

var form = document.getElementById("login-form");
form.addEventListener("submit", validacao);