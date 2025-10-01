# --- Plateau de jeu de l’oie prototype ---

# Création du pion joueur
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

# Charger ton plateau (dessiné dans l’éditeur)
tiles.set_tilemap(tilemap("map"))

# Placer le joueur sur la tuile départ
tiles.place_on_random_tile(joueur, assets.tile("depart"))

# --- Définir les questions pour les couleurs ---
questions = {
    "caseVert": {"q": "2 + 2 = ?", "rep": "4"},
    "caseJaune": {"q": "Capitale de la France ?", "rep": "paris"},
    "caseRouge": {"q": "3 * 3 = ?", "rep": "9"},
    "caseBleu": {"q": "Couleur du ciel ?", "rep": "bleu"}
}

# Fonction pour poser une question
def poser_question(nomCase: str):
    q = questions[nomCase]
    reponse = game.ask_for_string(q["q"])
    if reponse.lower().strip() == q["rep"]:
        game.splash("Bonne réponse ! Avance")
        joueur.x += 16
    else:
        game.splash("Mauvaise réponse ! Recule")
        joueur.x -= 16

# --- Gestion des cases spéciales ---
scene.on_overlap_tile(SpriteKind.player, assets.tile("caseVert"),
    lambda sprite, location: poser_question("caseVert"))

scene.on_overlap_tile(SpriteKind.player, assets.tile("caseJaune"),
    lambda sprite, location: poser_question("caseJaune"))

scene.on_overlap_tile(SpriteKind.player, assets.tile("caseRouge"),
    lambda sprite, location: poser_question("caseRouge"))

scene.on_overlap_tile(SpriteKind.player, assets.tile("caseBleu"),
    lambda sprite, location: poser_question("caseBleu"))

scene.on_overlap_tile(SpriteKind.player, assets.tile("caseTrou"),
    lambda sprite, location: (
        game.splash("Trou noir ! Retour au départ"),
        tiles.place_on_random_tile(joueur, assets.tile("depart"))
    )
)

scene.on_overlap_tile(SpriteKind.player, assets.tile("arrivee"),
    lambda sprite, location: game.over(True, effects.confetti)
)

# --- Déplacement simple avec A ---
controller.A.on_event(ControllerButtonEvent.PRESSED, lambda: joueur.x += 16)