
var chart = new Chartist.Bar('.animated-chart', chartist_data, chartist_option);

// Let's put a sequence number aside so we can use it in the event callbacks
var seq = 0,
delays = 80,
durations = 1500;

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
// Animated Chartist Ends here

// Negative chartist_data
new Chartist.Bar('.negative-chartist-chart', negative_chartist_data, chartist_option);
// Chartist Bar with peak circles
var chart = new Chartist.Bar('.peak-chartist-chart', chartist_data, chartist_option);

// Listen for draw events on the bar chart
chart.on('draw', function(data) {
  // If this draw event is of type bar we can use the data to create additional content
  if(data.type === 'bar') {
    // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
    data.group.append(new Chartist.Svg('circle', {
      cx: data.x2,
      cy: data.y2,
      r: Math.abs(Chartist.getMultiValue(data.value)) / 30 / 10 + 18
    }, 'ct-slice-pie'));
  }
});
// Stacked Bar Chart
new Chartist.Bar('.onebar-chart', chartist_data, {
    stackBars: true,
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ],
    height: '300px',
    axisY: {
        labelInterpolationFnc: function(value) {
        return (value) + 'k';
    }
  }
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});
//Horizontal  Bar Chart
new Chartist.Bar('.horizontal-bar-chart', {
  labels: ['Product 1', 'Product 2', 'Product 3'],
  series: [
    [
        {meta: 'Amazon', value: 1000},
        {meta: 'Amazon', value: 5000},
        {meta: 'Amazon', value: 3000},

    ],
    [
        {meta: 'FlipKart', value: 2000},
        {meta: 'FlipKart', value: 4000},
        {meta: 'FlipKart', value: 2000},

    ],
    [
        {meta: 'ebay ', value: 4000},
        {meta: 'ebay ', value: 4000},
        {meta: 'ebay ', value: 3000},

    ]

  ]
}, {
    seriesBarDistance: 27,
    reverseData: true,
    height: '300px',
    plugins: [
        Chartist.plugins.tooltip({
            currency: 'Profit in $ '
        })
    ],
    horizontalBars: true,
    axisY: {
        offset: 60
    }
});

