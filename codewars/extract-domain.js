function domainName(url) {
    var filUrl;
    if (url.includes('www')) {
        url = url.substring(url.indexOf('www') + 4, url.length);
        filUrl = url.substring(0, url.indexOf('.'));
        return filUrl;
    } else if (url.includes('//')) {
        url = url.substring(url.indexOf('//') + 2, url.length);
        filUrl = url.substring(0, url.indexOf('.'));
        return filUrl;
    } else {
        filUrl = url.substring(0, url.indexOf('.'));
        return filUrl;
    }
}