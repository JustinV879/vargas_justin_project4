while (true) {
    console.log("Rotation of Degrees x axis" + input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 15) {
        music.pewPew.play()
        music.setVolume(200)
    }
    
}
