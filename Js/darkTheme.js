// code modified from https://youtu.be/wodWDIdV9BY

//gets info from other html files and local storage
let dark_mode = localStorage.getItem('dark_mode');
const dark_mode_toggle = document.querySelector("#theme_changer");

//changes the theme when called
const enable_dark_mode = () =>{
    document.body.classList.add('dark_theme')
    localStorage.setItem('dark_mode', 'enabled')
}

const disable_dark_mode = () =>{
    document.body.classList.remove('dark_theme')
    localStorage.setItem('dark_mode', null)
    
}

//edge case
if (dark_mode === 'enabled'){
    enable_dark_mode();
}

//when button is pressed calls another function
dark_mode_toggle.addEventListener("click", () => {
    dark_mode = localStorage.getItem('dark_mode');
    if (dark_mode !== 'enabled'){
        enable_dark_mode();
        console.log(dark_mode)
    }else{
        disable_dark_mode();
        console.log(dark_mode)
    }
})
