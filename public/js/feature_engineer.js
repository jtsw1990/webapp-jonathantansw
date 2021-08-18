$.ajax({
    url: "/assets/xor.csv",
    dataType: "text",
}).done(parseData);

var cols = [];
var a_x1 = [];
var a_x2 = [];
var b_x1 = [];
var b_x2 = [];
var y = [];

function parseData(data) {
    var allRows = data.split(/\r?\n|\r/);
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        var rowCells = allRows[singleRow].split(',');
        if (singleRow === 0) {
            rowCells.forEach((x) => cols.push(x));
        } else {
            if (rowCells[2] == "a") {
                a_x1.push(parseInt(rowCells[0], 10));
                a_x2.push(parseInt(rowCells[1], 10));
            } else {
                b_x1.push(parseInt(rowCells[0], 10));
                b_x2.push(parseInt(rowCells[1], 10));
            }
        }
    }
    var trace1 = {
        x: a_x1,
        y: a_x2,
        mode: "markers",
        type: "scatter",
        name: "a",
        marker: { size: 5 }
    };
    var trace2 = {
        x: b_x1,
        y: b_x2,
        mode: "markers",
        type: "scatter",
        name: "b",

        marker: { size: 5 }
    };
    var data = [trace1, trace2];
    var layout = {
        xaxis: {
            range: [0, 600]
        },
        yaxis: {
            range: [0, 600]
        },
        title: "Simple XOR example"
    };
    Plotly.newPlot("featurePlot", data, layout);
}

a_x1s = a_x1.map((x) => x ** 2);
a_x2s = a_x2.map((x) => x ** 2);
b_x1s = b_x1.map((x) => x ** 2);
b_x2s = b_x2.map((x) => x ** 2);
a_x1x2 = a_x1.map((e, i) => e + a_x2[i]);
b_x1x2 = b_x1.map((e, i) => e + b_x2[i]);


var x1strace1 = {
    x: a_x1,
    y: a_x2,
    z: a_x1.map((x) => x ** 2),
    mode: "markers",
    marker: {
        size: 5,
        line: {
            width: 0.5
        },
        opacity: 0.8
    },
    type: "scatter3d"
}

var x1strace2 = {
    x: b_x1,
    y: b_x2,
    z: b_x1.map((x) => x ** 2),
    mode: "markers",
    marker: {
        size: 5,
        line: {
            width: 0.5
        },
        opacity: 0.8
    },
    type: "scatter3d"
}

var x1sdata = [x1strace1, x1strace2];
var x1slayout = {
    title: "Added x1s",
    xaxis: { title: "x1" },
    yaxis: { title: "x2" },
    zaxis: { title: "x12" }
};
/*
$("#add_x1s").click(function () {
    Plotly.react("featurePlot", x1sdata, x1slayout)
});
*/

