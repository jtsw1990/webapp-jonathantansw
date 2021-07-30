const rangeGenerator = (b, e) => Array.apply(null, Array(e - b)).map((_, i) => {return i+b;});
const foc_sample_x = rangeGenerator(-20, 20)

const foc_sample_y = foc_sample_x.map(x => x ** 2)
const foc_sample_y_prime = foc_sample_x.map(x => 2 * x)

var firstOrderWidgetOne = document.getElementById("firstOrderWidgetOne");
var firstOrderWidgetTwo = document.getElementById("firstOrderWidgetTwo");



let focChartOne = new Chart(firstOrderWidgetOne, {
    data: {
        datasets: [{
            type: "scatter",
            label: "f(x)",
            data: foc_sample_y
            , backgroundColor: "rgb(255, 99, 132)"
        }],
        labels: foc_sample_x
    },
    options: {
        bezierCurve : true
    }
});


let focChartTwo = new Chart(firstOrderWidgetTwo, {
    data: {
        datasets: [{
            type: "scatter",
            label: "f'(x)",
            data: foc_sample_y_prime
            , backgroundColor: "rgb(255, 99, 132)"
        }],
        labels: foc_sample_x
    },
    options: {
        bezierCurve : true
    }
});

$("#foc_x").on("change", () => {
    xValue  = parseFloat(document.getElementById("foc_x").value);
    focChartTwoidx = focChartTwo.data.datasets[0].data.findIndex(e => e == xValue);
    focChartTwo.data.datasets[0].data[focChartTwoidx].pointRadius =  2;
    //console.log(xValue)
    //console.log(focChartTwo.data.datasets[0].data)
    //console.log(focChartTwo.data.datasets[0].data[focChartTwoidx])
    focChartTwo.update()
});