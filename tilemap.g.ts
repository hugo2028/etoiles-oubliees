// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "map":
            case "map1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000001000000000000000000000000000002020000000000000000000000000000000100000000000000000000000000000004040500000000000000000000000000010000000000000000000000000000000200000000000000000000000000050203000000000000000000000000000000020000000000000000000000000003030102020100000000000000000000020000000000000000000000000000000400000000000000000000000000000004050000000000000000000000000000030000000000000000000000000000000200000000000000000000000000000001000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "vert":
            case "tile1":return tile1;
            case "jaune":
            case "tile2":return tile2;
            case "rouge":
            case "tile3":return tile3;
            case "bleu":
            case "tile4":return tile4;
            case "trou noir":
            case "tile5":return tile5;
            case "transparency16":return transparency16;
            case "arrivée":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
