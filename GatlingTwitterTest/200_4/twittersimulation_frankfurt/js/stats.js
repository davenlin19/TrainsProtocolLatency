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
        "total": "3946",
        "ok": "3946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "254",
        "ok": "254",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "percentiles1": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "percentiles2": {
        "total": "549",
        "ok": "549",
        "ko": "-"
    },
    "percentiles3": {
        "total": "590",
        "ok": "590",
        "ko": "-"
    },
    "percentiles4": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 386,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 10,
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
        "total": "3.898",
        "ok": "3.898",
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
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3946",
        "ok": "3946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "319",
        "ok": "319",
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
        "total": "854",
        "ok": "854",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1352",
        "ok": "1352",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 186,
        "percentage": 93
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 10,
        "percentage": 5
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
        "total": "1.949",
        "ok": "1.949",
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
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles1": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles2": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "percentiles4": {
        "total": "46",
        "ok": "46",
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
        "total": "1.949",
        "ok": "1.949",
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
