led.toggle(2, 2)
let time = 300
for (let index = 0; index <= 3; index++) {
    basic.pause(time)
    led.toggle(index, 0)
}
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        basic.pause(time)
        led.toggle(4, index)
        led.toggle(index, 0)
    }
    for (let index = 0; index <= 3; index++) {
        basic.pause(time)
        led.toggle(4 - index, 4)
        led.toggle(4, index)
    }
    for (let index = 0; index <= 3; index++) {
        basic.pause(time)
        led.toggle(0, 4 - index)
        led.toggle(4 - index, 4)
    }
    for (let index = 0; index <= 3; index++) {
        basic.pause(time)
        led.toggle(index, 0)
        led.toggle(0, 4 - index)
    }
})
