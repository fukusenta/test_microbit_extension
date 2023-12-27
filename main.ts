/**
 * Provides access to basic micro:bit functionality.
 */
//% color="#00bfff"
namespace Hoge {
    //% blockId=hoge_show_temperature
    //% block="show|temperature $temp"
    export function showTemperature(temp: number): void {
        basic.showString(temp.toString() + "!");
    }
}

// basic.forever(function () {
//     Hoge.showTemperature(5);
// })