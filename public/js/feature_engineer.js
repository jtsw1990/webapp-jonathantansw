$.ajax({
    url: "/assets/xor.csv",
    dataType: "text",
}).done(parseData);

var cols = [];
var a_x1 = [];
var a_x2 = [];
var b_x1 = [];
var b_x2 = [];

var a_x1s = [];
var a_x2s = [];
var b_x1s = [];
var b_x2s = [];
var a_x1x2 = [];
var b_x1x2 = [];

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
                a_x1s.push(parseInt(rowCells[0], 10) ** 2);
                a_x2s.push(parseInt(rowCells[1], 10) ** 2);
                a_x1x2.push(parseInt(rowCells[0], 10) * parseInt(rowCells[1], 10))
            } else {
                b_x1.push(parseInt(rowCells[0], 10));
                b_x2.push(parseInt(rowCells[1], 10));
                b_x1s.push(parseInt(rowCells[0], 10) ** 2);
                b_x2s.push(parseInt(rowCells[1], 10) ** 2);
                b_x1x2.push(parseInt(rowCells[0], 10) * parseInt(rowCells[1], 10))
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
        title: "Simple XOR example"
    };
    Plotly.newPlot("featurePlot", data, layout);
}

// Original trace
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
    title: "Simple XOR example"
};

// x1s trace
var x1strace1 = {
    x: a_x1,
    y: a_x2,
    z: a_x1s,
    mode: "markers",
    type: "scatter3d",
    marker: { size: 5 }
}
var x1strace2 = {
    x: b_x1,
    y: b_x2,
    z: b_x1s,
    mode: "markers",
    type: "scatter3d",
    marker: { size: 5 }
}
var x1sdata = [x1strace1, x1strace2];
var englayout = {
    title: "feature extracted",
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    },
    xaxis: { title: "x1" },
    yaxis: { title: "x2" },
    zaxis: { title: "x3" }
};

//x2s trace
var x2strace1 = {
    x: a_x1,
    y: a_x2,
    z: a_x2s,
    mode: "markers",
    type: "scatter3d",
    marker: { size: 5 }
}
var x2strace2 = {
    x: b_x1,
    y: b_x2,
    z: b_x2s,
    mode: "markers",
    type: "scatter3d",
    marker: { size: 5 }
}
var x2sdata = [x2strace1, x2strace2];

// x1x2 trace
var x1x2trace1 = {
    x: a_x1,
    y: a_x2,
    z: a_x1x2,
    mode: "markers",
    type: "scatter3d",
    marker: { size: 5 }
}
var x1x2trace2 = {
    x: b_x1,
    y: b_x2,
    z: b_x1x2,
    mode: "markers",
    type: "scatter3d",
    marker: { size: 5 }
}
var x1x2data = [x1x2trace1, x1x2trace2];

$("#add_x1s").click(function () {
    Plotly.react("featurePlot", x1sdata, englayout)
});

$("#add_x2s").click(function () {
    Plotly.react("featurePlot", x2sdata, englayout)
});

$("#add_x1x2").click(function () {
    Plotly.react("featurePlot", x1x2data, englayout)
});

$("#reset").click(function () {
    Plotly.react("featurePlot", data, layout)
});


