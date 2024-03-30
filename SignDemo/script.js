const registerBtn = document.getElementById('register');
const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function openPopup() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }

  function openPopup2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }