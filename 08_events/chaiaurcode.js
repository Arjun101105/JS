// generating random color

const random_color = function(){

    const hex = "0123456789ABCDEF"
    let color = "#"
    for(i = 0; i  <6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
return color
}
let color_interval;
const change_color = function(){

    if (!color_interval) {
        color_interval = setInterval(change_bg, 1000)
    }

    function change_bg(){
        document.body.style.backgroundColor = random_color()
    }
}

const stop_color = function(){
    clearInterval(color_interval)
    color_interval = null
    document.body.style.backgroundColor = "#212121"
}

document.querySelector('#START').addEventListener('click', change_color)

document.querySelector('#STOP').addEventListener('click', stop_color)
