var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1059",
        "ko": "941"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8144",
        "ok": "8144",
        "ko": "420"
    },
    "meanResponseTime": {
        "total": "138",
        "ok": "253",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "290",
        "ok": "361",
        "ko": "20"
    },
    "percentiles1": {
        "total": "22",
        "ok": "125",
        "ko": "4"
    },
    "percentiles2": {
        "total": "196",
        "ok": "474",
        "ko": "13"
    },
    "percentiles3": {
        "total": "556",
        "ok": "570",
        "ko": "24"
    },
    "percentiles4": {
        "total": "827",
        "ok": "855",
        "ko": "105"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1031,
        "percentage": 52
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 24,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 941,
        "percentage": 47
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.145",
        "ok": "3.783",
        "ko": "3.362"
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
        "ok": "528",
        "ko": "472"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "74",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8144",
        "ok": "8144",
        "ko": "420"
    },
    "meanResponseTime": {
        "total": "242",
        "ok": "453",
        "ko": "6"
    },
    "standardDeviation": {
        "total": "381",
        "ok": "425",
        "ko": "21"
    },
    "percentiles1": {
        "total": "187",
        "ok": "474",
        "ko": "4"
    },
    "percentiles2": {
        "total": "482",
        "ok": "547",
        "ko": "9"
    },
    "percentiles3": {
        "total": "571",
        "ok": "800",
        "ko": "15"
    },
    "percentiles4": {
        "total": "855",
        "ok": "1103",
        "ko": "26"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 500,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 24,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 472,
        "percentage": 47
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.573",
        "ok": "1.886",
        "ko": "1.686"
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
        "ok": "531",
        "ko": "469"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "358",
        "ok": "358",
        "ko": "137"
    },
    "meanResponseTime": {
        "total": "34",
        "ok": "54",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "39",
        "ko": "18"
    },
    "percentiles1": {
        "total": "20",
        "ok": "43",
        "ko": "4"
    },
    "percentiles2": {
        "total": "48",
        "ok": "76",
        "ko": "16"
    },
    "percentiles3": {
        "total": "112",
        "ok": "119",
        "ko": "27"
    },
    "percentiles4": {
        "total": "137",
        "ok": "170",
        "ko": "110"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 531,
        "percentage": 53
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
        "count": 469,
        "percentage": 47
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.573",
        "ok": "1.897",
        "ko": "1.676"
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
