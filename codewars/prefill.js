function prefill(n, v) {
    var arr = [];
    if (!isNaN(Number(n))) {
        for (var i = 0; i < n; i++) arr.push(v);
        return arr;
    } else {
        throw new TypeError(n + " is invalid", "", 0);
    }
}