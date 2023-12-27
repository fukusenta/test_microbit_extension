namespace Hoge {
    //% color=190 weight=100 icon="\f840" block="Basic Blocks"
    export function showTemperature(temp: number): void {
        basic.showString(temp.toString() + "!");
    }
}

// basic.forever(function() {
//     Hoge.showTemperature(5);
// })