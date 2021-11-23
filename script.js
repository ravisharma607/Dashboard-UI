const icon = document.getElementById('moon');
console.log(icon)
icon.onclick = function() {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        icon.src = "/images/sun.png";
    }
    else{
        icon.src = "/images/moon.png";
    }
}
