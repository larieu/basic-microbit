eboticsMIBO.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        eboticsMIBO.forward()
    }
    eboticsMIBO.turnright()
})
