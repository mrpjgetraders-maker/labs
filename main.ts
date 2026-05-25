/**
 * Interaction Counter
 */
// What happens when you select the Grow Light
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor.overlapsWith(growLightStation)) {
        lightExposure += 1
        // Flash light effect
        plant.startEffect(effects.warmRadial, 500)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        // Evolution Trigger!
        if (lightExposure >= 5 && currentStage == PlantStage.Seed) {
            currentStage = PlantStage.Sprout
// Transform into a cute plant sprout!
            plant.setImage(img`
                . . . . . . 7 7 . . . . . . 
                . . . . . 7 7 7 7 . . . . . 
                . . a a . . 7 7 . . a a . . 
                . a 7 7 a . 7 7 . a 7 7 a . 
                . . a 7 7 a 7 7 a 7 7 a . . 
                . . . a 7 7 7 7 7 7 a . . . 
                . . . . a 7 7 7 7 a . . . . 
                . . . . . 7 7 7 7 . . . . . 
                `)
            game.showLongText("Your seed sprouted into a leafy buddy!", DialogLayout.Bottom)
        }
    }
})
let lightExposure = 0
let cursor: Sprite = null
let growLightStation: Sprite = null
let plant: Sprite = null
enum PlantStage { Seed, Sprout, MonsterPlant }
let currentStage = PlantStage.Seed
// Create the Sprites
// Set background to a cool lab blue/grey
scene.setBackgroundColor(11)
// Starting seed sprite
plant = sprites.create(img`
    . . . . . e e e e . . . . . 
    . . . . e e d d e e . . . . 
    . . . e e d d d d e e . . . 
    . . . e d d d d d d e . . . 
    . . . e d d d d d d e . . . 
    . . . e e d d d d e e . . . 
    . . . . e e d d e e . . . . 
    . . . . . e e e e . . . . . 
    `, SpriteKind.Food)
growLightStation = sprites.create(img`
    . . . . f f f f . . . . 
    . . . f 5 5 5 5 f . . . 
    . . f 5 5 5 5 5 5 f . . 
    . f f f f f f f f f f . 
    `, SpriteKind.Projectile)
growLightStation.setPosition(30, 100)
// Cursor Mechanics
cursor = sprites.create(img`
    . 1 . . . 1 . 
    1 1 1 . 1 1 1 
    . 1 . . . 1 . 
    `, SpriteKind.Player)
controller.moveSprite(cursor)
