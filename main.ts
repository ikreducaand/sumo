let DISTANCIA = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    DISTANCIA = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.pause(500)
    if (DISTANCIA > 1 && DISTANCIA <= 20) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
    }
})
