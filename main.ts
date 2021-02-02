while (true) {
    console.log("Acceleration in x-direction" + input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 2000) {
        music.pewPew.play()
        music.setVolume(200)
    }
    
}
