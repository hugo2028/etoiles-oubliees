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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "map":
            case "map1":return tiles.createTilemap(hex`10001000070606060606060606060606160606080b05050505050505040505050e05050c0b0f0d1405050502131405050e05050c0b0e050105050505050e05050e05050c0b0e050505050505050e05050e05050c0b110d0d0d150d150d130d0d1314050c0b0e0505050e050e050505050517030c0b0e0505050e050e050505050504050c0b030505050e0517020505050f12050c0b050505050e0505050505050e05050c0b05050f0d130d1405050505110d140c0b05050e0505050e050505050e05030c0b05050105050f130d100d0d1205050c0b05050505050e05050505050505050c0b05050505050e0505050505050505050905050505050e05050505050505050a`, img`
. . . . . . . . . . . 2 . 2 . . 
2 2 2 2 2 . 2 2 . 2 2 2 . 2 2 . 
2 . . . 2 . 2 . . . 2 2 . 2 2 . 
2 . 2 . 2 . 2 2 2 . 2 2 . 2 2 . 
2 . 2 2 2 2 2 2 2 . 2 2 . 2 2 . 
2 . . . . . . . . . . . . . 2 2 
2 . 2 2 2 . 2 . 2 2 2 2 2 . . 2 
2 . 2 . 2 . 2 . 2 2 2 2 2 . 2 2 
2 . 2 . 2 . 2 . . 2 . 2 . . 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 . 2 2 2 
. 2 2 . . . . . 2 . . 2 . . . 2 
. . 2 . 2 2 2 . 2 2 2 2 . 2 2 2 
. . 2 . 2 2 . . . . . . . 2 2 2 
. . 2 2 2 2 . 2 2 2 2 2 2 2 . . 
. . . . . 2 . 2 . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,myTiles.tile8,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection3,sprites.dungeon.hazardSpike,sprites.vehicle.roadTurn3], TileScale.Sixteen);
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
            case "depart":
            case "tile7":return tile7;
            case "myTile":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
