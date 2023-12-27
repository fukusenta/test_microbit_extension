//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
namespace Hoge {
    //% blockId=hoge_show_temperature
    //% block="show temperature $temp"
    export function showTemperature(temp: number): void {
        basic.showString(temp.toString() + "!");
    }
}

// basic.forever(function() {
//     Hoge.showTemperature(5);
// })