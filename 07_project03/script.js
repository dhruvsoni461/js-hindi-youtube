const clock = document.querySelector('.timing')

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)