function findSmallestInt(args) {
    var smallest = args[0];
    for (i in args) {
        if (smallest > args[i]) {
            smallest = args[i];
        }
    }
    return smallest;
}