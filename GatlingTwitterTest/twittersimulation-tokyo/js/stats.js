var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles1": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles2": {
        "total": "482",
        "ok": "482",
        "ko": "-"
    },
    "percentiles3": {
        "total": "501",
        "ok": "501",
        "ko": "-"
    },
    "percentiles4": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 199,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 1
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
        "total": "4.824",
        "ok": "4.824",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "399",
        "ok": "399",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "155",
        "ok": "155",
        "ko": "-"
    },
    "percentiles1": {
        "total": "482",
        "ok": "482",
        "ko": "-"
    },
    "percentiles2": {
        "total": "493",
        "ok": "493",
        "ko": "-"
    },
    "percentiles3": {
        "total": "510",
        "ok": "510",
        "ko": "-"
    },
    "percentiles4": {
        "total": "709",
        "ok": "709",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 99,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 1
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
        "total": "2.412",
        "ok": "2.412",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 100,
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
        "total": "2.412",
        "ok": "2.412",
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
