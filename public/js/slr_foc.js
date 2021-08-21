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
            label: "f(x) = x^2",
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
            label: "f'(x) = 2x",
            data: foc_sample_y_prime
            , backgroundColor: "rgb(255, 99, 132)"
        }],
        labels: foc_sample_x
    },
    options: {
        bezierCurve : true
    }
});
