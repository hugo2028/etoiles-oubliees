namespace SpriteKind {
    export const case_verte = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile
        `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    console.log("Donne moi la spécialité d'Occitanie")
    if (game.askForString("Donne moi la spécialité d'Occitanie") == "cassoulet") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 10))
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        rouge
        `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    console.log("Quel est la capitale de la France")
    if (game.askForString("Quel est la capitale de la France") == "paris") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 5))
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
    }
    
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    game.splash("Gagné")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        trou noir
        `, function on_overlap_tile4(sprite4: Sprite, location4: tiles.Location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
    game.splash("Tu es tombé dans un trou noir")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        vert
        `, function on_overlap_tile5(sprite5: Sprite, location5: tiles.Location) {
    console.log("Dans quel pays les émeutes de Stonewall (1969) ont-elles marqué un tournant pour les droits LGBTQ+ ?")
    if (game.askForString("Dans quel pays les émeutes de Stonewall (1969) ont-elles marqué un tournant pour les droits LGBTQ+ ?") == "etats-unis") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 7))
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
    }
    
})
let mySprite : Sprite = null
music.play(music.stringPlayable("A G A F A G A E ", 120), music.PlaybackMode.UntilDone)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
game.splash("Avance sur le plateau et répond aux questions")
mySprite = sprites.create(assets.image`
    pion
    `, SpriteKind.Player)
mySprite.startEffect(effects.spray)
tiles.setCurrentTilemap(tilemap`
    map
    `)
mySprite.z = 100
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
game.onUpdateInterval(500, function on_update_interval() {
    controller.moveSprite(mySprite)
    console.log("")
})
