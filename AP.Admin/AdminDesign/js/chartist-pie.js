
// Pie Chartist starts from here
var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.simple-pie-chart', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  },
  height: '300px',
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ],
}); 
// Pie Charts with custom Labels
var data = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  },
   height: '300px',
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ]
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('.pie-chart-label', data, options, responsiveOptions);
