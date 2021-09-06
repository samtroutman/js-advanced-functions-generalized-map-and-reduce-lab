// Add your functions here
function map(src, callback) {
    const r= [];

    for (let i=0; i < src.length; i++) {
        const value = src[i];
        r.push(callback(value));
    }
    return r;
}

function reduce(src, callback, startingPoint) {
    let total;
    if (startingPoint) {
        total = startingPoint;
        for (let i = 0; i < src.length; i++) {
            total = callback(src[i], total);
          }
    return total;
    }
    else {
        total = src[0];
        for (let i = 1; i < src.length; i++) {
          total = callback(src[i], total);
        }
    return total

    }
  }