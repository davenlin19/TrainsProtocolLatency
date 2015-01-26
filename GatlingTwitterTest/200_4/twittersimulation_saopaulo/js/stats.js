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
        "total": "4054",
        "ok": "4054",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "329",
        "ok": "329",
        "ko": "-"
    },
    "percentiles1": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "548",
        "ok": "548",
        "ko": "-"
    },
    "percentiles3": {
        "total": "592",
        "ok": "592",
        "ko": "-"
    },
    "percentiles4": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 383,
        "percentage": 96
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.887",
        "ok": "3.887",
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
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4054",
        "ok": "4054",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "percentiles1": {
        "total": "549",
        "ok": "549",
        "ko": "-"
    },
    "percentiles2": {
        "total": "574",
        "ok": "574",
        "ko": "-"
    },
    "percentiles3": {
        "total": "865",
        "ok": "865",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1354",
        "ok": "1354",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 183,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.943",
        "ok": "1.943",
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
        "total": "374",
        "ok": "374",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "percentiles2": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles3": {
        "total": "39",
        "ok": "39",
        "ko": "-"
    },
    "percentiles4": {
        "total": "45",
        "ok": "45",
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
        "total": "1.943",
        "ok": "1.943",
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
