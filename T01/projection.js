console.log("hallo");

let width = 720;
let height = 360;

const x = longToX(-180)
console.log(x)

const y = latToY(90)
console.log(y)

comparePositions(0, 0, 1, 1)
function longToX(lon) {
    return (lon + 180) * (width / 360)
};

function latToY(lat) {
    return (90 - lat) * (height / 180)
}

function comparePositions(latA, lonA, latB, lonB) {
    
    if (latA > latB) {  // ist südlich
        if (lonA > lonB ) { // westlich
            console.log("B liegt südwestlich von A.")
        }
        if (lonA < lonB) {  // östlich
            console.log("B liegt südöstlich von A.")
        }
        if (lonA == lonB) { // gleicher Längengrad
            console.log("B liegt südlich von A.")
        }
    } 

    if (latA < latB ) { // ist nördlich
        if (lonA > lonB ) { // westlich
            console.log("B liegt nordwestlich von A.")
        }
        if (lonA < lonB) { // östlich
            console.log("B liegt nordöstlich von A.")
        }
        if (lonA == lonB) { // gleicher Längengrad
            console.log("B liegt nördlich von A.")
        }
    }

    if (latA == latB) { // gleicher Breitengrad
        if (lonA > lonB ) { // westlich
            console.log("B liegt westlich von A.")
        }
        if (lonA < lonB) { // östlich
            console.log("B liegt östlich von A.")
        }
        if (lonA == lonB) { // gleicher Längengrad
            console.log("B und A sind identisch.")
        }
    }
} 