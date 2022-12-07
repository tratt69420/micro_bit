input.onButtonPressed(Button.A, function () {
    speed += -1
    if (speed < 0) {
        speed = 0
    }
    basic.showNumber(speed)
    pins.analogWritePin(AnalogPin.P0, power)
})
input.onButtonPressed(Button.B, function () {
    speed += 1
    if (speed > 9) {
        speed = 9
    }
    basic.showNumber(speed)
    pins.analogWritePin(AnalogPin.P0, power)
})
let power = 0
let speed = 0
let min_power = 300
let max_power = 1023
let power_step = (max_power - min_power) / 9
speed = 0
basic.showNumber(speed)
basic.forever(function () {
    if (speed == 0) {
        power = 0
    } else {
        power = min_power + speed * power_step
    }
})
