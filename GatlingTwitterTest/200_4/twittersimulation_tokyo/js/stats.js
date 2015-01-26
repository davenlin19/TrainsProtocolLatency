var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3681",
        "ok": "3681",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "325",
        "ok": "325",
        "ko": "-"
    },
    "percentiles1": {
        "total": "114",
        "ok": "114",
        "ko": "-"
    },
    "percentiles2": {
        "total": "565",
        "ok": "565",
        "ko": "-"
    },
    "percentiles3": {
        "total": "592",
        "ok": "592",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1221",
        "ok": "1221",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 384,
        "percentage": 96
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.744",
        "ok": "3.744",
        "ko": "-"
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
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3681",
        "ok": "3681",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "501",
        "ok": "501",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "313",
        "ok": "313",
        "ko": "-"
    },
    "percentiles1": {
        "total": "564",
        "ok": "564",
        "ko": "-"
    },
    "percentiles2": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "percentiles3": {
        "total": "879",
        "ok": "879",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1350",
        "ok": "1350",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 184,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.872",
        "ok": "1.872",
        "ko": "-"
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
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "635",
        "ok": "635",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles2": {
        "total": "27",
        "ok": "27",
        "ko": "-"
    },
    "percentiles3": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles4": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 200,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.872",
        "ok": "1.872",
        "ko": "-"
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
