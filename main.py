@namespace
class SpriteKind:
    case_verte = SpriteKind.create()

def on_overlap_tile(sprite, location):
    print("Donne moi la spécialité d'Occitanie")
    if game.ask_for_string("") == "Cassoulet":
        tiles.place_on_tile(mySprite, tiles.get_tile_location(10, 12))
    else:
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
        """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    print("Quel est la capitale de la France")
    if game.ask_for_string("") == "Paris":
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 13))
    else:
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        rouge
        """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    print("Dans quel pays les émeutes de Stonewall (1969) ont-elles marqué un tournant pour les droits LGBTQ+ ?")
    tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        trou noir
        """),
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    print("Dans quel pays les émeutes de Stonewall (1969) ont-elles marqué un tournant pour les droits LGBTQ+ ?")
    if game.ask_for_string("") == "Etats-Unis":
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 13))
    else:
        tiles.place_on_tile(mySprite, tiles.get_tile_location(6, 15))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        vert
        """),
    on_overlap_tile4)

mySprite: Sprite = None
tiles.set_wall_at(tiles.get_tile_location(0, 0), True)
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