@namespace
class SpriteKind:
    case_verte = SpriteKind.create()

def on_overlap_tile(sprite, location):
    print("Donne moi la spécialité d'Occitanie")
    if game.ask_for_string("Donne moi la spécialité d'Occitanie") == "cassoulet":
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 10))
    else:
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
        """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    print("Quel est la capitale de la France")
    if game.ask_for_string("Quel est la capitale de la France") == "paris":
        tiles.place_on_tile(mySprite, tiles.get_tile_location(12, 5))
    else:
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        rouge
        """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    game.splash("Gagné")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_spike,
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
    game.splash("Tu es tombé dans un trou noir")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        trou noir
        """),
    on_overlap_tile4)

def on_overlap_tile5(sprite5, location5):
    print("Dans quel pays les émeutes de Stonewall (1969) ont-elles marqué un tournant pour les droits LGBTQ+ ?")
    if game.ask_for_string("Dans quel pays les émeutes de Stonewall (1969) ont-elles marqué un tournant pour les droits LGBTQ+ ?") == "etats-unis":
        tiles.place_on_tile(mySprite, tiles.get_tile_location(5, 7))
    else:
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        vert
        """),
    on_overlap_tile5)

mySprite: Sprite = None
music.play(music.string_playable("A G A F A G A E ", 120),
    music.PlaybackMode.UNTIL_DONE)
tiles.set_wall_at(tiles.get_tile_location(0, 0), True)
game.splash("Avance sur le plateau et répond aux questions")
mySprite = sprites.create(assets.image("""
    pion
    """), SpriteKind.player)
mySprite.start_effect(effects.spray)
tiles.set_current_tilemap(tilemap("""
    map
    """))
mySprite.z = 100
scene.camera_follow_sprite(mySprite)
tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))

def on_update_interval():
    controller.move_sprite(mySprite)
    print("")
game.on_update_interval(500, on_update_interval)
