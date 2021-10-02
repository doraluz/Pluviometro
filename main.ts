let Cantidad_Agua = 0
let Cantidad_días = 0
input.onButtonPressed(Button.A, function () {
    Cantidad_Agua = 0
    Cantidad_días = 0
    for (let index = 0; index < 1825; index++) {
        Cantidad_Agua += randint(1, 6)
    }
    Cantidad_días += 1825
    if (Cantidad_días == 1825) {
        basic.showNumber(Cantidad_Agua / 1825)
    }
})
