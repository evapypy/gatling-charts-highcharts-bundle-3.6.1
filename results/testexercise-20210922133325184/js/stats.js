var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "2",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "109",
        "ko": "108"
    },
    "maxResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "116"
    },
    "meanResponseTime": {
        "total": "139",
        "ok": "166",
        "ko": "112"
    },
    "standardDeviation": {
        "total": "48",
        "ok": "57",
        "ko": "4"
    },
    "percentiles1": {
        "total": "113",
        "ok": "166",
        "ko": "112"
    },
    "percentiles2": {
        "total": "143",
        "ok": "194",
        "ko": "114"
    },
    "percentiles3": {
        "total": "206",
        "ok": "216",
        "ko": "116"
    },
    "percentiles4": {
        "total": "219",
        "ok": "221",
        "ko": "116"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 50
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
    "count": 2,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.333",
        "ok": "0.667",
        "ko": "0.667"
    }
},
contents: {
"req_form-d359c": {
        type: "REQUEST",
        name: "Form",
path: "Form",
pathFormatted: "req_form-d359c",
stats: {
    "name": "Form",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles1": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "percentiles2": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "percentiles3": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "percentiles4": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
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
        "total": "0.667",
        "ok": "0.667",
        "ko": "-"
    }
}
    },"req_post-03d94": {
        type: "REQUEST",
        name: "Post",
path: "Post",
pathFormatted: "req_post-03d94",
stats: {
    "name": "Post",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "-",
        "ko": "108"
    },
    "maxResponseTime": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "meanResponseTime": {
        "total": "112",
        "ok": "-",
        "ko": "112"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles1": {
        "total": "112",
        "ok": "-",
        "ko": "112"
    },
    "percentiles2": {
        "total": "114",
        "ok": "-",
        "ko": "114"
    },
    "percentiles3": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "percentiles4": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "-",
        "ko": "0.667"
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
