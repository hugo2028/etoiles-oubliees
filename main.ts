namespace SpriteKind {
    export const case_verte = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    console.log("Donne moi la spécialité d'Occitanie")
    if (game.askForString("") == "cassoulet") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 12))
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`rouge`, function (sprite, location) {
    console.log("Quel est la capitale de la France")
    if (game.askForString("") == "Paris") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 13))
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    game.splash("Gagné")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`trou noir`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`vert`, function (sprite, location) {
    console.log("Dans quel pays les émeutes de Stonewall (1969) ont-elles marqué un tournant pour les droits LGBTQ+ ?")
    if (game.askForString("") == "Etats-Unis") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 13))
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
    }
})
let mySprite: Sprite = null
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
mySprite = sprites.create(assets.image`pion`, SpriteKind.Player)
mySprite.startEffect(effects.spray)
tiles.setCurrentTilemap(tilemap`map`)
mySprite.z = 100
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
game.onUpdateInterval(500, function () {
    controller.moveSprite(mySprite)
    console.log("")
})
