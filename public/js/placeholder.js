
const marker_outline_color = "#001"
const marker_fill_color = ["#00f", "#00f", "#f00", "#f00", "#f00", "#f00", "#f00", "#00f", "#00f"]

var trace1 = {
    x: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    z: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    mode: "markers",
    marker: {
        size: 8,
        color: marker_fill_color,
        line: {
            color: marker_outline_color,
            width: 0.5
        },
        opacity: 0.8
    },
    type: "scatter3d"
}


var trace2 = {
    x: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    z: [16, 9, 4, 1, 0, 1, 4, 9, 16],
    mode: "markers",
    marker: {
        size: 8,
        color: marker_fill_color,
        line: {
            color: marker_outline_color,
            width: 0.5
        },
        opacity: 0.8
    },
    type: "scatter3d"
}


var data = [trace1];
var layout = {
    title: "test old",
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    },
    xaxis: { title: "x1" },
    yaxis: { title: "y" }
};
Plotly.newPlot('myDiv', data, layout);

var updatedData = [trace2];
var updatedLayout = {
    title: "test old",
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    },
    xaxis: { title: "x1" },
    yaxis: { title: "x2" },
    zaxis: { title: "y" }
};

$("#add_feature").click(function () {
    Plotly.react("myDiv", updatedData, updatedLayout)
});


$("#remove_feature").click(function () {
    Plotly.react("myDiv", data, layout)
});


