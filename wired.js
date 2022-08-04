// NOTE: this is called leakage of global variable

function wired() {
    height = 50;
    return height;
}

console.log(wired()); // 50

/**
 * wired function will return 50 because
 * if height variable not found untill root scope then it'll created.
 * SOLUTION: "use strict"
 */
