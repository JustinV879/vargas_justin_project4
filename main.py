while True:
    print("Rotation of Degrees x axis" + input.rotation(Rotation.PITCH))
    if (input.rotation(Rotation.PITCH)) > 15:
        music.pew_pew.play()
        music.set_volume(200)