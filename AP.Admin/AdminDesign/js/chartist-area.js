// Line Area Chart
new Chartist.Line('.line-area-chart',{
   labels: ['Iphone', 'Samsung', 'Lenovo', 'Blackberry', 'Nokia', 'Sony'],
  series: [
    [5, 9, 7, 8, 5, 1, 4]
  ]
}, {
  low: 0,
  showArea: true,
  showPoint: false,
  height: '300px', 
  chartPadding: {
    right: 30
  }, 
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ]
});

// Animated Area Chart
var chart = new Chartist.Line('.animated-area-chart', {
  labels: ['Iphone', 'Samsung', 'Lenovo', 'Blackberry', 'Nokia', 'Sony'],
  series: [
    [1, 5, 2, 5, 4, 3],
    [2, 3, 4, 8, 1, 2],
    [5, 4, 3, 2, 1, 0.5]
  ]
}, {
  low: 0,
  showArea: true,
  showPoint: false,
  fullWidth: true,
  height: '300px',
  chartPadding: {
    right: 30
  },
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ]
});

chart.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});
var chart = new Chartist.Line('.animated-area-chart-2', {
  labels: ['Sony', 'Samsung', 'Lenovo', 'Blackberry', 'Nokia', 'Iphone'],
  series: [
    [12, 9, 7, 8, 5, 2, 4],
    [4,  5, 3, 7, 3, 4, 2],
    [5,  3, 4, 5, 6, 7, 3],
    [3,  4, 5, 6, 7, 3, 7]
  ]
}, {
  low: 0,
  showArea: true,
  showPoint: true,
  height: '300px',
  chartPadding: {
    right: 30
  },
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ]
});

// Let's put a sequence number aside so we can use it in the event callbacks
var seq = 0,
  delays = 80,
  durations = 500;

// Once the chart is fully created we reset the sequence
chart.on('created', function() {
  seq = 0;
});

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
chart.on('draw', function(data) {
  seq++;

  if(data.type === 'line') {
    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
    data.element.animate({
      opacity: {
        // The delay when we like to start the animation
        begin: seq * delays + 1000,
        // Duration of the animation
        dur: durations,
        // The value where the animation should start
        from: 0,
        // The value where it should end
        to: 1
      }
    });
  } else if(data.type === 'label' && data.axis === 'x') {
    data.element.animate({
      y: {
        begin: seq * delays,
        dur: durations,
        from: data.y + 100,
        to: data.y,
        // We can specify an easing function from Chartist.Svg.Easing
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'label' && data.axis === 'y') {
    data.element.animate({
      x: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 100,
        to: data.x,
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'point') {
    data.element.animate({
      x1: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      x2: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      opacity: {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'grid') {
    // Using data.axis we get x or y which we can use to construct our animation definition objects
    var pos1Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '1'] - 30,
      to: data[data.axis.units.pos + '1'],
      easing: 'easeOutQuart'
    };

    var pos2Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '2'] - 100,
      to: data[data.axis.units.pos + '2'],
      easing: 'easeOutQuart'
    };

    var animations = {};
    animations[data.axis.units.pos + '1'] = pos1Animation;
    animations[data.axis.units.pos + '2'] = pos2Animation;
    animations['opacity'] = {
      begin: seq * delays,
      dur: durations,
      from: 0,
      to: 1,
      easing: 'easeOutQuart'
    };

    data.element.animate(animations);
  }
});

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
chart.on('created', function() {
  if(window.__exampleAnimateTimeout) {
    clearTimeout(window.__exampleAnimateTimeout);
    window.__exampleAnimateTimeout = null;
  }
  window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
});

// Series Override
var chart = new Chartist.Line('.series-override-chart', {
   labels: ['Iphone', 'Samsung', 'Lenovo', 'Blackberry', 'Nokia', 'Sony'],
  // Naming the series with the series object array notation
  series: [{
    name: 'series-1',
    data: [5, 2, -4, 2, 0,  5]
  }, {
    name: 'series-2',
    data: [4, 3, 5, 3, 5, 2]
  }, {
    name: 'series-3',
    data: [2, 4, 3, 1, 5, 2]
  }]
}, {
  fullWidth: true,
   height: '300px',
   chartPadding: {
    right: 30
  },
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ],
  // Within the series options you can use the series names
  // to specify configuration that will only be used for the
  // specific series.
  series: {
    'series-1': {
      lineSmooth: Chartist.Interpolation.step(),
      showArea: true
    },
    'series-2': {
      lineSmooth: Chartist.Interpolation.simple(),
      showArea: true
    },
    'series-3': {
      showPoint: false,
      showArea: true
    }
  }
}, [
  // You can even use responsive configuration overrides to
  // customize your series configuration even further!
  ['screen and (max-width: 320px)', {
    series: {
      'series-1': {
        lineSmooth: Chartist.Interpolation.none()
      },
      'series-2': {
        lineSmooth: Chartist.Interpolation.none(),
        showArea: false
      },
      'series-3': {
        lineSmooth: Chartist.Interpolation.none(),
        showPoint: true
      }
    }
  }]
]);