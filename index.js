const button = document.getElementById("toggle-theme");
let currenttheme = localStorage.getItem("theme");

if (currenttheme === null) {
  localStorage.setItem("theme", "light");
}

button.addEventListener("click", (e) => {
  if (currenttheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    currenttheme = localStorage.getItem("theme");
    button.style.backgroundImage = "url(./starter-code/assets/icon-sun.svg)";

    button.innerHTML = "LIGHT";
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    currenttheme = localStorage.getItem("theme");
    button.style.backgroundImage = "url(./starter-code/assets/icon-moon.svg)";
    button.innerHTML = "DARK";
  }
});

//getting input value

async function Cbotao() {
  let user = document.getElementById("user").value;
  const data = getExternal(user);
}

//Fetching user information
function getExternal(username) {
  fetch("https://api.github.com/users/" + username)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.message === "Not Found") {
        alert("Usuario não encontrado!!");
        return;
      }
      console.log(data);
      document.getElementById(
        "foto"
      ).style.backgroundImage = `url(${data.avatar_url})`;
      document.getElementById("nome-user").innerHTML = data.login;
      document.getElementById("user-arroba").innerHTML = "@" + data.login;
      let userjoin = new Date(data.created_at);
      document.getElementById("user-joined").innerHTML =
        userjoin.toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
      document.getElementById("bio").innerHTML = data.bio;
      document.getElementById("repo").innerHTML = data.public_repos;
      document.getElementById("followers").innerHTML = data.followers;
      document.getElementById("Following").innerHTML = data.following;
      document.getElementById("lugar").innerHTML = data.location;
      document.getElementById("site").innerHTML = data.html_url;
      if (data.twitter_username === null) {
        document.getElementById("twitter").innerHTML = "Não Tem Twitter";
      } else {
        document.getElementById("twitter").innerHTML =
          "@" + data.twitter_username;
      }
      if (data.company === null) {
        document.getElementById("company").innerHTML = "Sem empresa";
      } else {
        document.getElementById("company").innerHTML = data.company;
      }
    })
    .catch(function (err) {
      console.log("rodou catch");
      console.log(err);
    });
}
