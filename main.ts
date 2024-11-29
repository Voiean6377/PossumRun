scene.onOverlapTile(SpriteKind.Player, assets.tile`memory_2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    500,
    false
    )
    if (game.runtime() - LastPressed >= TimebetweenPresses) {
        mySprite.vy = -150
        LastPressed = game.runtime()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`mine`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk_left`,
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`memory_3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`memory_1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk_right`,
    500,
    true
    )
})
let TimebetweenPresses = 0
let LastPressed = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`black`)
tiles.setCurrentTilemap(tilemap`level_1`)
mySprite = sprites.create(assets.image`sprite`, SpriteKind.Player)
mySprite.setPosition(32, 185)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
LastPressed = 0
TimebetweenPresses = 600
