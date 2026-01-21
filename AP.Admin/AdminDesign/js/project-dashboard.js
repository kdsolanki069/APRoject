(function($) {
    $.fn.odometer = function(options) {
        var settings = {
            showInTime: 1000, // miliseconds
            steps: 10,
            customFormat: function(val, precision, prefix, suffix) {
                precision = typeof(precision) == 'undefined' ? 2 : precision;
                prefix = prefix || '';
                suffix = suffix || '';
                return [prefix, val.toFixed(precision).replace(/./g, function(c, i, a) {
                    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
                }), suffix].join('');
            }
        };
        $.extend(settings, options);
        settings.showInTime = settings.showInTime < 500 ? 500 : settings.showInTime;
        settings.steps = settings.steps < 20 ? 20 : settings.steps;
        this.each(function() {
            var $this = $(this),
                value = parseFloat($this.text());
            if (isNaN(value)) {
                return true;
            }
            var step = (value / settings.showInTime) * settings.steps,
                interval = (settings.showInTime / settings.steps).toFixed(0);
            $this.data('odometer-max-value', value).data('odometer-current', 0).data('odometer-step', step).data('odometer-interval', interval).data('odometer-formatter', settings.customFormat);
            setTimeout($.proxy($.odometer.update, this), interval);
        });
    };
    $.odometer = {
        update: function() {
            var $this = $(this),
                newValue = $this.data('odometer-current') + $this.data('odometer-step');
            if (newValue > $this.data('odometer-max-value')) {
                newValue = $this.data('odometer-max-value');
            }
            $this.text($this.data('odometer-formatter')(newValue, $this.data('precision'), $this.data('prefix'), $this.data('suffix')));
            $this.data('odometer-current', newValue);
            if (newValue != $this.data('odometer-max-value')) {
                setTimeout($.proxy($.odometer.update, this), $this.data('odometer-interval'));
            }
        }
    };
})(jQuery);

$('.odometer').odometer();

// Graphical representation
$(function () {
    $('.highcharts-basic-column').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Reviews Of Products'
        },credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            crosshair: true,
            crosshairs: [{
                dashStyle: 'solid',
                color: inverse
            },
            false],
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Products'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}K</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Iphone',
            data: [49.9, 71.5, 129.2, 54.4]

        }, {
            name: 'Blackberry',
            data: [83.6, 78.8, 93.4, 92.3]

        }, {
            name: 'Nokia',
            data: [48.9, 38.8, 41.4, 47.0]

        }, {
            name: 'Samsung',
            data: [42.4, 33.2,  39.7, 52.6]

        }]
    });
});

//Stacked Area starts here
// Stacked area Starts Here
$(function () {
    $('.stacked_area').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['ECE', 'CSE', 'EEE', 'IT', 'MECH', 'CIVIL', 'AERO'],
            tickmarkPlacement: 'off',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                enabled: false,
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' Projects'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Project 1',
            data: [502, 635, 809, 947, 1402, 3634, 528]
        }, {
            name: 'Project 2',
            data: [106, 107, 111, 133, 221, 767, 176]
        }, {
            name: 'Project 3',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'Project 4',
            data: [18, 31, 54, 156, 339, 818, 121]
        }, {
            name: 'Project 5',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });

    $(".sparkline_two").sparkline([4, 8, 6, 8, 9, 8, 9, 8, 6, 8, 9, 10,  9, 8, 6, 9,11], {
      type: 'line',
      width: '300px',
      height: '40',
      lineColor: '#26B99A',
      fillColor: 'rgba(223, 223, 223, 0.57)',
      lineWidth: 2,
      spotColor: '#26B99A',
      minSpotColor: '#26B99A'
    });
});