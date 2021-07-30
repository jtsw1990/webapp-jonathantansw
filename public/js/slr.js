
const sampleX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const sampleY = [0, 2, 1, 4, 2, 4, 2, 7, 5, 6]



let sumX = sampleX.reduce(function (a, b) { return a + b; }, 0);
let sumY = sampleY.reduce(function (a, b) { return a + b; }, 0);
let xSquared = sampleX.map(x => x ** 2);
let ySquared = sampleY.map(x => x ** 2);
let xY = mutliplyArrays(sampleX, sampleY);

let leastSquaresSlope = (10 * xY.reduce(function (a, b) { return a + b; }, 0) - (sumX * sumY)) / (10 * xSquared.reduce(function (a, b) { return a + b; }, 0) - sampleX.reduce(function (a, b) { return a + b; }, 0) ** 2)
let leastSquaresIntercept = (sumY - leastSquaresSlope * sumX) / 10

function mutliplyArrays(a, b) {
    return a.map((e, i) => e * b[i]);
}

function simpleLinearRegressor(x, intercept = leastSquaresIntercept, slope = leastSquaresSlope) {
    return slope * x + intercept
}

const leastSquaresEstimates = sampleX.map((x => simpleLinearRegressor(x)));
const leastSquaresResiduals = sampleY.map((num, idx) => {
    return (num - leastSquaresEstimates[idx]) ** 2;
})

$("#leastSquaresResiduals, #sumSquaredResiduals").html(Math.round(leastSquaresResiduals.reduce(function (a, b) { return a + b; }, 0) * 100) / 100)


var leastSquaresWidget = document.getElementById("leastSquaresWidget");
let mixedChart = new Chart(leastSquaresWidget, {
    data: {
        datasets: [{
            type: "scatter",
            label: "Sample data",
            data: [
                { x: sampleX[0], y: sampleY[0] },
                { x: sampleX[1], y: sampleY[1] },
                { x: sampleX[2], y: sampleY[2] },
                { x: sampleX[3], y: sampleY[3] },
                { x: sampleX[4], y: sampleY[4] },
                { x: sampleX[5], y: sampleY[5] },
                { x: sampleX[6], y: sampleY[6] },
                { x: sampleX[7], y: sampleY[7] },
                { x: sampleX[8], y: sampleY[8] },
                { x: sampleX[9], y: sampleY[9] },
            ], backgroundColor: "rgb(255, 99, 132)"
        }, {
            type: "line",
            label: "Least Squares Estimate",
            data: [
                simpleLinearRegressor(sampleX[0]),
                simpleLinearRegressor(sampleX[1]),
                simpleLinearRegressor(sampleX[2]),
                simpleLinearRegressor(sampleX[3]),
                simpleLinearRegressor(sampleX[4]),
                simpleLinearRegressor(sampleX[5]),
                simpleLinearRegressor(sampleX[6]),
                simpleLinearRegressor(sampleX[7]),
                simpleLinearRegressor(sampleX[8]),
                simpleLinearRegressor(sampleX[9])
            ], borderDash: [10, 5],
        }, {
            type: "line",
            label: "My Line",
            data: [
                sampleX.map(x => simpleLinearRegressor(x))
            ], backgroundColor: "rgb(132, 99, 255)"
        }],
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
});


$("#intercept, #slope").on("change", () => {
    // On slider change, calculate the new slope and intercept
    slopeFloat = parseFloat(document.getElementById("slope").value);
    interceptFloat = parseFloat(document.getElementById("intercept").value);
    // Apply new parameters to linear estimate
    var updatedValues = sampleX.map(x => (x * slopeFloat) + interceptFloat);
    var squaredResiduals = sampleY.map((num, idx) => {
        return (num - updatedValues[idx]) ** 2;
    })
    var sumSquaredResiduals = squaredResiduals.reduce(function (a, b) { return a + b; }, 0);
    // Update the error term in the DOM
    // Rounded to 2dp
    $("#sumSquaredResiduals").html(Math.round(sumSquaredResiduals * 100) / 100);
    // Update the dataset values in chart object for the last line graph
    mixedChart.data.datasets[2].data = updatedValues;
    mixedChart.update();
});


