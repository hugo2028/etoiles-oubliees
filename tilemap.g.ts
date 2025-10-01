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
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
