// NOTE: this is called leakage of global variable

function wired() {
    height = 50;
    return height;
}

console.log(wired()); // 50

/**
 * wired function will return 50 because
 * if height variable not found in any scope then it'll be automatecally created.
 * SOLVE: "use strict"
 */
