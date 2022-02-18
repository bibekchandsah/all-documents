var preloader = document.getElementById('loading');
function myFunction(){
    preloader.style.display = 'none';
}

setTimeout(logoutUser, 60000); // 5000=5s
function logoutUser(){
    window.location = "index.html";
}
