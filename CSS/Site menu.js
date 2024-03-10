//Variables
const open_menu__ = document.createElement("button")
const menu____ = document.createElement("div")
const meu_titulo = document.createElement("h1")
const lugar_para_flex = document.createElement("div")
const abrir_tabs = document.createElement("div")
const tabs_abertas = document.createElement("div")


let body_ = document.querySelector("body")
let opened = true
let older_menu_opened = false
let font_family = "Arial, Helvetica, sans-serif"
//Scripts


open_menu__.addEventListener("mouseenter", () => {
    open_menu__.style.transform = "scale(1.1)"
});

open_menu__.addEventListener("mouseleave", () => {
    open_menu__.style.transform = "scale(1)"
});

wait = async (ms) => {
    return new Promise(result => {
        setTimeout(result, ms)
    })
}
mostrar = async (bool) => {
    if (bool == true) {
        menu____.style.display = "block"
        await wait(10)
        menu____.style.opacity = '1'

    } else {
        menu____.style.opacity = '0'
        setTimeout(() => {
            menu____.style.display = "none"
        }, 300)
    }
}

open_menu__.addEventListener("click", () => {
    if (menu____.style.display == "none") {
        mostrar(true)
        older_menu_opened = true
    } else {
        mostrar(false)
        older_menu_opened = false
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() == "'") {
        if (opened == true) {
            opened = false
            open_menu__.style.display = "none"
            mostrar(false)
        } else {
            opened = true
            open_menu__.style.display = "block"
            if (older_menu_opened == true) {
                mostrar(true)
            }
        }
    }
})

var moretti = {}
var tabelas = []

moretti.CreateTab = function (tabname) {
    const btn_abrir_tab = document.createElement("button")
    const div_soria = document.createElement("ul")
    btn_abrir_tab.textContent = tabname


    Object.assign(btn_abrir_tab.style, {
        "color": "white",
        "width": "100%",
        "height": "25px",
        "border": "none",
        "font-family": font_family,
        "border-radius": "4px",
        "background-color": "rgb(0, 0, 0, 0.8)",
        "margin-bottom": "5px",
        "transition": "200ms ease-in-out"
    })

    btn_abrir_tab.addEventListener("mouseenter", () => {
        Object.assign(btn_abrir_tab.style, {
            "background-color": "rgb(2, 2, 2, 0.8)",
            "transform": "scale(1.05)"
        })
    })

    btn_abrir_tab.addEventListener("mouseleave", () => {
        Object.assign(btn_abrir_tab.style, {
            "background-color": "rgb(0, 0, 0, 0.8)",
            "transform": "scale(1)"
        })
    })

    Object.assign(div_soria.style, {
        width: "100%",
        height: "500px",
        overflow: "auto",
        padding: "5px",
        display: "none"
    })


    tabelas.push(div_soria)
    abrir_tabs.appendChild(btn_abrir_tab)
    tabs_abertas.appendChild(div_soria)

    const other_options = {}

    other_options.CreateButton = async (text, callback) => {
        const li = document.createElement("li")
        const button = document.createElement("button")

        li.appendChild(button)
        button.textContent = text
        button.addEventListener("click", () => {
            callback()
        })

        Object.assign(button.style, {
            "color": "white",
            "font-family": font_family,
            "width": "100%",
            "height": "25px",
            "background-color": "rgba(0, 0, 0, 0.5)",
            "border": "none",
            "border-radius": "4px",
            "margin-bottom": "5px",
            "transform": "scale(0.95)",
            "transition": "200ms ease-in-out"
        })

        button.addEventListener("mouseenter", () => {
            Object.assign(button.style, {
                "transform": "scale(1)",
                "background-color": "rgba(0,0,0,0.7)"
            })
        })

        button.addEventListener("mouseleave", () => {
            Object.assign(button.style, {
                "transform": "scale(0.95)",
                "background-color": "rgba(0,0,0,0.5)"
            })
        })



        div_soria.appendChild(li)
    }

    other_options.CreateToggle = async (text, callback) => {
        const li = document.createElement("li")
        const button = document.createElement("button")

        li.appendChild(button)
        button.textContent = text
        button.classList.add("desligado")
        button.addEventListener("click", async () => {
            if (button.classList.contains("desligado")) {
                button.classList.remove("desligado")
                button.classList.add("ligado")
                button.style["background-color"] = "rgba(0, 255, 0, 0.8)"
                await callback(true)
            } else if (button.classList.contains("ligado")) {
                button.classList.remove("ligado")
                button.classList.add("desligado")
                button.style["background-color"] = "rgba(255, 0, 0, 0.8)"
                await callback(false)
            }
        })

        Object.assign(button.style, {
            "color": "white",
            "font-family": font_family,
            "width": "100%",
            "height": "25px",
            "background-color": "rgba(255, 0, 0, 0.8)",
            "border": "none",
            "border-radius": "4px",
            "margin-bottom": "5px",
            "transform": "scale(0.95)",
            "transition": "200ms ease-in-out"
        })

        button.addEventListener("mouseenter", () => {
            Object.assign(button.style, {
                "transform": "scale(1)",
            })
        })

        button.addEventListener("mouseleave", () => {
            Object.assign(button.style, {
                "transform": "scale(0.95)",
            })
        })



        div_soria.appendChild(li)
    }

    btn_abrir_tab.addEventListener("click", () => {
        for (v of tabelas) {
            v.style.display = 'none'
        }

        div_soria.style.display = "block"
    })

    return other_options
}



async function init() {
    const ZOOM_ = await moretti.CreateTab("Zoom")
    const LGBT_ = await moretti.CreateTab("Rainbow")
    const global = {
        lgbtopacity: 0.8
    }

    //Zoom
    ZOOM_.CreateToggle("Piruletas", async (bool) => {
        global.pirueta = true

        while (global.pirueta == true) {
            for (var i = 0; i <= 360; i += 5) {
                if (global.pirueta == false) {
                    break
                }
                document.querySelector("body").style.transform = `rotate(${i}deg)`
                await wait(1)
            }
        }
        document.querySelector("body").style.transform = `rotate(${0}deg)`
    })

    //Rainbow
    LGBT_.CreateToggle("Enabled", async (bool) => {
        global.lgbt = bool
        if (global.lgbtopacity == undefined) {
            global.lgbtopacity = 0.8
        }
        if (bool == true) {
            const lgbt = document.createElement("div")
            Object.assign(lgbt.style, {
                "position": "fixed",
                "width": "100%",
                "height": "100vh",
                "background-color": "rgba(255, 0, 0, 0.8)",
                "z-index": "99998",
                "transition": "200ms",
            })

            document.querySelector("body").appendChild(lgbt)
            var cores = [
                [255, 0, 0],
                [255, 165, 0],
                [255, 255, 0],
                [0, 255, 0],
                [0, 0, 255],
                [75, 0, 130],
                [128, 0, 128]
            ];
            while (global.lgbt == true) {
                for (var cor = 0; cor < cores.length; cor++) {
                    if (global.lgbt == true) {
                        lgbt.style["background-color"] = `rgba(${cores[cor][0]}, ${cores[cor][1]}, ${cores[cor][2]}, ${global.lgbtopacity})`
                        await wait(300)
                    } else {
                        break
                    }
                }
            }
            document.querySelector("body").removeChild(lgbt)
        }
    })
    for (var i = 0; i <= 1; i += 0.1) {
        const i2 = i
        LGBT_.CreateButton(`Opacidade ${Number(String(i2).substring(0, 3))}`, function () {
            global.lgbtopacity = Number(String(i2).substring(0, 3))
        })
    }

    while (true) {
        var tra = document.querySelector("body").style.rotate
        console.log(tra)
        await wait(100)
    }
}



init()


//Styles
Object.assign(open_menu__.style, {
    "padding": "0",
    "width": "60px",
    "height": "60px",
    "position": "fixed",
    "top": "10px",
    "left": "10px",
    "z-index": "999999",
    "border": "none",
    "border-radius": "100px",
    "background-color": "black",
    "color": "white",
    "font-family": "Arial, Helvetica, sans-serif",
    "box-shadow": "black 0px 0px 5px",
    "transition": "300ms ease-in-out"
})

Object.assign(menu____.style, {
    "width": "500px",
    "height": "500px",
    "background-color": "rgba(0,0,0,0.7)",
    "position": "fixed",
    "top": "50%",
    "right": "50%",
    "transform": "translate(50%, -50%)",
    "display": "none",
    "opacity": "0",
    "transition": "300ms ease-in-out",
    "z-index": "99999",
    "padding": "10px",
    "border-radius": "4px",
})

Object.assign(abrir_tabs.style, {
    "width": "180px",
    "height": "90%",
    "background-color": "rgba(0, 0, 0, 0.7)",
    "padding": "5px",
    "border-radius": "4px"
})

Object.assign(tabs_abertas.style, {
    "width": "290px",
    "height": "90%",
    "margin-left": "10px",
    "background-color": "rgba(0, 0, 0, 0.7)",
    "border-radius": "4px",
})

Object.assign(meu_titulo.style, {
    color: "white",
    "font-family": "Arial, Helvetica, sans-serif"
})

Object.assign(lugar_para_flex.style, {
    "display": "flex",
    "width": "100%",
    "height": "100%"
})



open_menu__.textContent = "MUCA"
meu_titulo.textContent = "MENU DO MORETTI"

menu____.appendChild(meu_titulo)
menu____.appendChild(lugar_para_flex)
lugar_para_flex.appendChild(abrir_tabs)
lugar_para_flex.appendChild(tabs_abertas)

body_.appendChild(menu____)
body_.appendChild(open_menu__)

