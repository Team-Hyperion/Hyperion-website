let dark_mode = localStorage.getItem('dark_mode');
const dark_mode_toggle = document.querySelector("#theme_changer");

const enable_dark_mode = () =>{
    document.body.classList.add('dark_theme')
    localStorage.setItem('dark_mode', 'enabled')
}

const disable_dark_mode = () =>{
    document.body.classList.remove('dark_theme')
    localStorage.setItem('dark_mode', null)
    
}

if (dark_mode === 'enabled'){
    enable_dark_mode();
}

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

