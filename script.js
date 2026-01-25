function fazerLogin(event) {
  event.preventDefault();

  const email =
    document.getElementById("email").value;
  const senha =
    document.getElementById("senha").value;

    //login fake
    if (email === "admin@racco.com" && senha === "1234") {
      alert("Login realizado com sucesso!");
      window.location.href = "dashboard.html";
    }else{
      alert("Email ou senha incorretos.");
    }