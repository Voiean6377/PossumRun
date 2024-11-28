scene.onOverlapTile(SpriteKind.Player, assets.tile`memory_2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - LastPressed >= TimebetweenPresses) {
        mySprite.vy = -150
        LastPressed = game.runtime()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`mine`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`memory_3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`memory_1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
let TimebetweenPresses = 0
let LastPressed = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`black`)
tiles.setCurrentTilemap(tilemap`level_1`)
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
mySprite.setPosition(32, 185)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
LastPressed = 0
TimebetweenPresses = 600
