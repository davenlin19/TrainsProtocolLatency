var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1048",
        "ko": "952"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "9",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8169",
        "ok": "8169",
        "ko": "334"
    },
    "meanResponseTime": {
        "total": "133",
        "ok": "249",
        "ko": "6"
    },
    "standardDeviation": {
        "total": "278",
        "ok": "345",
        "ko": "15"
    },
    "percentiles1": {
        "total": "19",
        "ok": "116",
        "ko": "1"
    },
    "percentiles2": {
        "total": "180",
        "ok": "492",
        "ko": "8"
    },
    "percentiles3": {
        "total": "564",
        "ok": "589",
        "ko": "23"
    },
    "percentiles4": {
        "total": "827",
        "ok": "867",
        "ko": "36"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1022,
        "percentage": 51
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 952,
        "percentage": 48
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.397",
        "ok": "3.876",
        "ko": "3.521"
    }
},
contents: {
"add-tweet-84ee7": {
        type: "REQUEST",
        name: "add_tweet",
path: "add_tweet",
pathFormatted: "add-tweet-84ee7",
stats: {
    "name": "add_tweet",
    "numberOfRequests": {
        "total": "1000",
        "ok": "526",
        "ko": "474"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "43",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8169",
        "ok": "8169",
        "ko": "334"
    },
    "meanResponseTime": {
        "total": "240",
        "ok": "453",
        "ko": "4"
    },
    "standardDeviation": {
        "total": "361",
        "ok": "391",
        "ko": "16"
    },
    "percentiles1": {
        "total": "180",
        "ok": "492",
        "ko": "1"
    },
    "percentiles2": {
        "total": "498",
        "ok": "557",
        "ko": "7"
    },
    "percentiles3": {
        "total": "595",
        "ok": "795",
        "ko": "15"
    },
    "percentiles4": {
        "total": "872",
        "ok": "1053",
        "ko": "22"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 500,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 474,
        "percentage": 47
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.699",
        "ok": "1.946",
        "ko": "1.753"
    }
}
    },"get-tweet-e95eb": {
        type: "REQUEST",
        name: "get_tweet",
path: "get_tweet",
pathFormatted: "get-tweet-e95eb",
stats: {
    "name": "get_tweet",
    "numberOfRequests": {
        "total": "1000",
        "ok": "522",
        "ko": "478"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "9",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "210",
        "ok": "169",
        "ko": "210"
    },
    "meanResponseTime": {
        "total": "26",
        "ok": "44",
        "ko": "7"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "28",
        "ko": "15"
    },
    "percentiles1": {
        "total": "18",
        "ok": "36",
        "ko": "1"
    },
    "percentiles2": {
        "total": "40",
        "ok": "62",
        "ko": "15"
    },
    "percentiles3": {
        "total": "93",
        "ok": "98",
        "ko": "27"
    },
    "percentiles4": {
        "total": "111",
        "ok": "118",
        "ko": "64"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 522,
        "percentage": 52
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 478,
        "percentage": 48
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.699",
        "ok": "1.931",
        "ko": "1.768"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
