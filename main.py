while True:
    print("Acceleration in x-direction" + input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X)) > 2000:
        music.pew_pew.play()
        music.set_volume(200)