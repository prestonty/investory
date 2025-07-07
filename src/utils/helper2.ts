export function dateConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    // var sec = a.getSeconds();

    if (min < 10) {
        (min as any) += "0";
    }

    var midday = "am";

    if (hour == 24) {
        hour -= 12;
        midday = "am";
    } else if (hour > 12) {
        hour -= 12;
        midday = "pm";
    } else if (hour == 12) {
        midday = "pm";
    }
    var time =
        month + " " + day + ", " + year + " " + hour + ":" + min + " " + midday;
    return time;
}
