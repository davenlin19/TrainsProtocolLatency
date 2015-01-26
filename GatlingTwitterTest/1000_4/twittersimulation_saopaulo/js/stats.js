var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "980",
        "ko": "1020"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "9",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "4873",
        "ok": "4873",
        "ko": "217"
    },
    "meanResponseTime": {
        "total": "128",
        "ok": "245",
        "ko": "15"
    },
    "standardDeviation": {
        "total": "227",
        "ok": "280",
        "ko": "15"
    },
    "percentiles1": {
        "total": "23",
        "ok": "106",
        "ko": "13"
    },
    "percentiles2": {
        "total": "102",
        "ok": "491",
        "ko": "18"
    },
    "percentiles3": {
        "total": "557",
        "ok": "570",
        "ko": "31"
    },
    "percentiles4": {
        "total": "817",
        "ok": "858",
        "ko": "96"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 956,
        "percentage": 48
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 21,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1020,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.697",
        "ok": "3.771",
        "ko": "3.925"
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
        "ok": "492",
        "ko": "508"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "57",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "4873",
        "ok": "4873",
        "ko": "38"
    },
    "meanResponseTime": {
        "total": "222",
        "ok": "442",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "292",
        "ok": "280",
        "ko": "4"
    },
    "percentiles1": {
        "total": "25",
        "ok": "493",
        "ko": "8"
    },
    "percentiles2": {
        "total": "490",
        "ok": "552",
        "ko": "11"
    },
    "percentiles3": {
        "total": "570",
        "ok": "792",
        "ko": "19"
    },
    "percentiles4": {
        "total": "858",
        "ok": "916",
        "ko": "28"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 468,
        "percentage": 47
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 21,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 508,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.848",
        "ok": "1.893",
        "ko": "1.955"
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
        "ok": "488",
        "ko": "512"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "260",
        "ok": "260",
        "ko": "217"
    },
    "meanResponseTime": {
        "total": "34",
        "ok": "47",
        "ko": "22"
    },
    "standardDeviation": {
        "total": "27",
        "ok": "29",
        "ko": "18"
    },
    "percentiles1": {
        "total": "23",
        "ok": "41",
        "ko": "17"
    },
    "percentiles2": {
        "total": "45",
        "ok": "66",
        "ko": "24"
    },
    "percentiles3": {
        "total": "93",
        "ok": "97",
        "ko": "46"
    },
    "percentiles4": {
        "total": "111",
        "ok": "123",
        "ko": "98"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 488,
        "percentage": 49
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
        "count": 512,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.848",
        "ok": "1.878",
        "ko": "1.97"
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
