controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`black`)
tiles.setCurrentTilemap(tilemap`level0`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c c c . 
    . . . . . . . . . c c c c c c c 
    . . . . . . . . . c c c c c c c 
    . . . . e e e e e e c c c c c c 
    . . . e e e e e e e e c c c c . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . . e . . . . e . . . . . 
    . . . . . e . . . . e . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(31, 220)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
