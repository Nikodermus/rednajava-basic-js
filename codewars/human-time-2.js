function formatDuration(seconds) {
    var y, d, h, m, s = 0;

    y = Math.floor(seconds / 31536000);
    d = Math.floor((seconds - (y * 31536000)) / 86400);
    h = Math.floor((seconds - (y * 31536000) - (d * 86400)) / 3600);
    m = Math.floor((seconds - (y * 31536000) - (d * 86400) - (h * 3600)) / 60);
    s = seconds - (m * 60) - (h * 3600) - (y * 31536000) - (d * 86400);

    console.log(y, d, h, m, s);

    if (s === 60) {
        m++;
        s = 0;
    }
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    if (d === 365) {
        y++;
        d = 0;
    }

    var hours = h > 0 ? h + " hours" : "";
    var minutes = m > 0 ? m + " minutes" : "";
    var seconds = s > 0 ? s + " seconds" : "";
}