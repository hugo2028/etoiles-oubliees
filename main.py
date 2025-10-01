# --- Plateau de l’oie prototype ---

joueur = sprites.create(img("""
    . . . . . . . . 
    . . f f f f . . 
    . f f 2 2 f f . 
    f f 2 2 2 2 f f 
    f f 2 2 2 2 f f 
    . f f 2 2 f f . 
    . . f f f f . . 
    . . . . . . . . 
"""), SpriteKind.player)

tiles.set_tilemap(tilemap("map"))

# Placer le joueur sur la tuile départ
tiles.place_on_random_tile(joueur, assets.tile("depart"))

# --- Questions par couleur ---
# On n’utilise pas dict + string methods, juste if/else simples

def poser_question_vert():
    reponse = game.ask_for_string("2 + 2 = ?")
    if reponse == "4":
        game.splash("Bonne réponse ! Avance")
        joueur.x = joueur.x + 16
    else:
        game.splash("Mauvaise réponse ! Recule")
        joueur.x = joueur.x - 16

def poser_question_jaune():
    reponse = game.ask_for_string("Capitale de la France ?")
    if reponse == "paris" or reponse == "Paris":
        game.splash("Bonne réponse ! Avance")
        joueur.x = joueur.x + 16
    else:
        game.splash("Mauvaise réponse ! Recule")
        joueur.x = joueur.x - 16

def poser_question_rouge():
    reponse = game.ask_for_string("3 * 3 = ?")
    if reponse == "9":
        game.splash("Bonne réponse ! Avance")
        joueur.x = joueur.x + 16
    else:
        game.splash("Mauvaise réponse ! Recule")
        joueur.x = joueur.x - 16

def poser_question_bleu():
    reponse = game.ask_for_string("Couleur du ciel ?")
    if reponse == "bleu" or reponse == "Bleu":
        game.splash("Bonne réponse ! Avance")
        joueur.x = joueur.x + 16
    else:
        game.splash("Mauvaise réponse ! Recule")
        joueur.x = joueur.x - 16

# --- Gestion des cases spéciales ---
def sur_case_vert(sprite, location):
    poser_question_vert()
scene.on_overlap_tile(SpriteKind.player, assets.tile("caseVert"), sur_case_vert)

def sur_case_jaune(sprite, location):
    poser_question_jaune()
scene.on_overlap_tile(SpriteKind.player, assets.tile("caseJaune"), sur_case_jaune)

def sur_case_rouge(sprite, location):
    poser_question_rouge()
scene.on_overlap_tile(SpriteKind.player, assets.tile("caseRouge"), sur_case_rouge)

def sur_case_bleu(sprite, location):
    poser_question_bleu()
scene.on_overlap_tile(SpriteKind.player, assets.tile("caseBleu"), sur_case_bleu)

def sur_case_trou(sprite, location):
    game.splash("Trou noir ! Retour au départ")
    tiles.place_on_random_tile(joueur, assets.tile("depart"))
scene.on_overlap_tile(SpriteKind.player, assets.tile("caseTrou"), sur_case_trou)

def sur_case_arrivee(sprite, location):
    game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player, assets.tile("arrivee"), sur_case_arrivee)

# --- Déplacement simple avec A ---
def avancer():
    joueur.x = joueur.x + 16
controller.A.on_event(ControllerButtonEvent.PRESSED, avancer)
