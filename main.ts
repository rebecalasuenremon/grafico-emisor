radio.setGroup(845)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendString("1")
})
