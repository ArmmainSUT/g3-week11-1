led.plot(1, 1)
led.plot(3, 1)
led.plot(0, 3)
led.plot(1, 4)
led.plot(2, 4)
led.plot(3, 4)
led.plot(4, 3)
basic.forever(function () {
    led.toggle(0, 3)
    led.toggle(1, 4)
    led.toggle(2, 4)
    led.toggle(3, 4)
    led.toggle(4, 3)
    basic.pause(100)
    led.toggle(0, 4)
    led.toggle(1, 3)
    led.toggle(2, 3)
    led.toggle(3, 3)
    led.toggle(4, 4)
    basic.pause(500)
})
