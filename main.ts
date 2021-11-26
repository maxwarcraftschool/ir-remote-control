let speedmeter = 0
let afstand = 0
irRemote.connectInfrared(DigitalPin.P11)
let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
let val = 0
let val2 = 0
basic.forever(function () {
    afstand = turtleBit.ultra()
    if (turtleBit.ultra() > 11) {
        turtleBit.Motor(LR.LeftSide, MD.Back, speedmeter)
        turtleBit.Motor(LR.RightSide, MD.Back, speedmeter)
    } else {
        turtleBit.Motor(LR.LeftSide, MD.Forward, speedmeter)
        turtleBit.Motor(LR.RightSide, MD.Forward, speedmeter)
    }
})
basic.forever(function () {
    if (val2 == 82) {
        speedmeter = 0
    } else if (val2 == 22) {
        speedmeter = 10
    } else if (val2 == 25) {
        speedmeter = 20
    } else if (val2 == 13) {
        speedmeter = 30
    } else if (val2 == 12) {
        speedmeter = 40
    } else if (val2 == 24) {
        speedmeter = 50
    } else if (val2 == 94) {
        speedmeter = 60
    } else if (val2 == 8) {
        speedmeter = 70
    } else if (val2 == 28) {
        speedmeter = 80
    } else {
        speedmeter = 90
    }
})
basic.forever(function () {
    val = irRemote.returnIrButton()
    if (val != 0) {
        val2 = val
        if (val2 == 70) {
            turtleBit.run(DIR.Run_forward, 90)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (val2 == 68) {
            turtleBit.Motor(LR.LeftSide, MD.Forward, 60)
            turtleBit.Motor(LR.RightSide, MD.Forward, 85)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        } else if (val2 == 67) {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            turtleBit.Motor(LR.LeftSide, MD.Forward, 50)
        } else if (val2 == 21) {
            turtleBit.run(DIR.Run_back, 90)
            strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        } else if (val2 == 64) {
            turtleBit.state(MotorState.stop)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})
