function dms2Dec() {
    lat2_1 = Number(document.getElementById("lat2_1").value);
    lat2_2 = Number(document.getElementById("lat2_2").value);
    lat2_3 = Number(document.getElementById("lat2_3").value);
    lat2_4 = document.getElementById("lat2_4").value;

    if (lat2_1 >= 0) {
        templat = lat2_1 + (lat2_2 / 60) + (Number(lat2_3 + '.' + lat2_4) / (60 * 60));
    } else {
        templat = lat2_1 - (lat2_2 / 60) - (Number(lat2_3 + '.' + lat2_4) / (60 * 60));
    }
    document.getElementById("lat1").value = templat;

    lng2_1 = Number(document.getElementById("lng2_1").value);
    lng2_2 = Number(document.getElementById("lng2_2").value);
    lng2_3 = Number(document.getElementById("lng2_3").value);
    lng2_4 = document.getElementById("lng2_4").value;

    if (lng2_1 >= 0) {
        templng = lng2_1 + (lng2_2 / 60) + (Number(lng2_3 + '.' + lng2_4) / (60 * 60));
    } else {
        templng = lng2_1 - (lng2_2 / 60) - (Number(lng2_3 + '.' + lng2_4) / (60 * 60));
    }
    document.getElementById("lng1").value = templng;
};
