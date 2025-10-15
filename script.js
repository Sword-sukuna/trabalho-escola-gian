// Simples base de dados (localStorage)
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("login-error");

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(u => u.username === username);

  if (!user) {
    errorBox.textContent = "❌ Nome inexistente.";
    return;
  }

  if (user.password !== password) {
    errorBox.textContent = "❌ Senha incorreta.";
    return;
  }

  errorBox.textContent = "";
  window.location.href = "index.html";
}

function createAccount() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("login-error");

  if (!username || !password) {
    errorBox.textContent = "Preencha nome e senha.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  if (users.some(u => u.username === username)) {
    errorBox.textContent = "Este nome já está em uso.";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  errorBox.textContent = "✅ Conta criada com sucesso!";
  setTimeout(() => window.location.href = "index.html", 1000);
}
