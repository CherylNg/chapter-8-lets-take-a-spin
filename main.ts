input.onButtonPressed(Button.A, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 50)
    basic.pause(randint(200, 1000))
    edubitMotors.brakeMotor(MotorChannel.M1)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
