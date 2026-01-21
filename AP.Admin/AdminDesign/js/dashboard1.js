// Token field for Quick mail
jQuery(function() {
    jQuery('#myTab a:last').tab('show')
})
$(function() {

});

$(function() {
    // Stack Value
    $('.stack-value').highcharts({
        chart: {
            type: 'spline',
            backgroundColor: "rgb(243, 139, 156)",
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            height: 200,
            spacingLeft: 0,
            events: {
                load: function() {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function() {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 2000);
                }
            }
        },
        credits: {
            enabled: false
        },
        title: {
            align: "left",
            floating: false,
            margin: 15,
            style: {
                "color": "#fff",
                "fontSize": "38px"
            },
            text: "Stack Value",
            useHTML: false,
            verticalAlign: " ",
            widthAdjust: -44,
            x: 10,
            y: 40,
        },
        subtitle: {
            align: "left",
            floating: true,
            margin: 15,
            style: {
                "color": "#fff",
                "fontSize": "14px"
            },
            text: "Live Stream",
            useHTML: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            widthAdjust: 44,
            x: 100,
            y: 5,
            right: 0
        },
        xAxis: {
            lineColor: 'transparent',
            tickColor: 'transparent',
            labels: {
                enabled: false
            }
        },
        yAxis: {
            gridLineColor: 'transparent',
            title: {
                text: null
            },
            labels: {
                formatter: function() {
                    return null;
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.0f}</b><br/>{point.x}',
            animation: true,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderColor: null,
            borderRadius: 0,
            borderWidth: 0,
            crosshairs: undefined,
            dateTimeLabelFormats: undefined,
            enabled: true,
            followPointer: false,
            followTouchMove: true,
            formatter: undefined,
            shadow: false,
            style: {
                "color": "#fff"
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Live Stack Value',
            lineWidth: 1,
            dashStyle: 'dash',
            zones: [{
                value: 32,
                color: '#fff'
            }, {
                value: 55,
                color: '#fff'
            }, {
                color: '#297ee2'
            }],
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())

        }]
    });
    // Token Field
    $('.tf-email').tokenfield();
    // Monthly Sales
    $('.monthly-sales').highcharts({
        chart: {
            type: 'spline',
            marginRight: -10,
        },
        title: {
            text: '', // Add here the title of Chart
            x: 20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            x: 1000
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}  <b>{point.y:,.0f}</b> {series.name} <br/> Profit {point.x:,.0f}',
            animation: true,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderColor: null,
            borderRadius: 0,
            borderWidth: 0,
            crosshairs: undefined,
            dateTimeLabelFormats: undefined,
            enabled: true,
            followPointer: false,
            followTouchMove: true,
            formatter: undefined,
            shadow: false,
            crosshairs: [true, false],
            style: {
                "color": "#fff"
            }
        },
        series: [{
            name: 'Electronics',
            data: [60, 50, 80, 30, 50, 30, 90],
            allowPointSelect: true,
            lineWidth: 4,
            color: '#f6adb9',
            shadow: {
                color: 'rgba(0,0,0,0.3)',
                width: 5,
                offsetX: 5,
                offsetY: 0
            }
        }, {
            name: 'Smart Phones',
            data: [40, 40, 20, 10, 50, 32, 40],
            allowPointSelect: true,
            lineWidth: 4,
            color: '#ffc27b',
            shadow: {
                color: 'rgba(0,0,0,0.3)',
                width: 5,
                offsetX: 5,
                offsetY: 0
            }
        }, {
            name: 'Computers',
            data: [40, 30, 50, 20, 50, 70, 10],
            allowPointSelect: true,
            lineWidth: 4,
            color: success,
            shadow: {
                color: 'rgba(0,0,0,0.3)',
                width: 5,
                offsetX: 5,
                offsetY: 0
            }
        }]
    });
    // year-report
    var spline_chart_options = {
        grid: {
            hoverable: true,
            borderWidth: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            clickable: true,
            margin: {
                top: 10,
                right: 10,
                bottom: 0,
                left: 10
            },
            mouseActiveRadius: 100
        },
        xaxis: {
            show: true,
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yaxis: {
            // ticks: true,
        },
        tooltip: {
            defaultTheme: true,
            backgroundColor: {
                linearGradient: [0, 0, 0, 60],
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#E0E0E0']
                ]
            },
            borderWidth: 1,
            borderColor: '#AAA',
        },

        colors: ["#212721"]
    };
    // Report 
    var spline_chart_data = {
        splines: {
            show: true,
            tension: 0.4,
            lineWidth: 4,
            fill: 0,
            height: '100px',
        },
        points: {
            show: true,
            lineWidth: 1.5,
            radius: 3,
            symbol: "circle",
            fill: true,
            fillColor: "#fff"
        },
        data: [
            [1, 3500],
            [2, 3600],
            [3, 4000],
            [4, 3800],
            [5, 5000],
            [6, 3800],
            [7, 4200]
        ]
    };
    var SpLineChart = $.plot($(".year-report"), [spline_chart_data], spline_chart_options);

    // SWeET ALERT 
    swal({
        title: "Welcome back Admin",
        text: "How's you doing? Check the Sales page.",
        timer: 3000,
        animation: "slide-from-top",
        showConfirmButton: false,
        imageUrl: 'datas/images/avatars/captain-avatar.png'
    });
    
    $('#tf1').tokenfield({
        source: ['zeasts@aol.com ', ' zeasts@fb.com'],
        delay: 100,
        // showAutocompleteOnFocus: true;
    });

    $.fn.pageMe = function(opts) {
        var $this = this,
            defaults = {
                perPage: 7,
                showPrevNext: false,
                hidePageNumbers: false
            },
            settings = $.extend(defaults, opts);

        var listElement = $this;
        var perPage = settings.perPage;
        var children = listElement.children();
        var pager = $('.pager');

        if (typeof settings.childSelector != "undefined") {
            children = listElement.find(settings.childSelector);
        }

        if (typeof settings.pagerSelector != "undefined") {
            pager = $(settings.pagerSelector);
        }

        var numItems = children.size();
        var numPages = Math.ceil(numItems / perPage);

        pager.data("curr", 0);

        if (settings.showPrevNext) {
            $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
        }

        var curr = 0;
        while (numPages > curr && (settings.hidePageNumbers == false)) {
            $('<li><a href="#" class="page_link">' + (curr + 1) + '</a></li>').appendTo(pager);
            curr++;
        }

        if (settings.showPrevNext) {
            $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
        }

        pager.find('.page_link:first').addClass('active');
        pager.find('.prev_link').hide();
        if (numPages <= 1) {
            pager.find('.next_link').hide();
        }
        pager.children().eq(1).addClass("active");

        children.hide();
        children.slice(0, perPage).show();

        pager.find('li .page_link').click(function() {
            var clickedPage = $(this).html().valueOf() - 1;
            goTo(clickedPage, perPage);
            return false;
        });
        pager.find('li .prev_link').click(function() {
            previous();
            return false;
        });
        pager.find('li .next_link').click(function() {
            next();
            return false;
        });

        function previous() {
            var goToPage = parseInt(pager.data("curr")) - 1;
            goTo(goToPage);
        }

        function next() {
            goToPage = parseInt(pager.data("curr")) + 1;
            goTo(goToPage);
        }

        function goTo(page) {
            var startAt = page * perPage,
                endOn = startAt + perPage;

            children.css('display', 'none').slice(startAt, endOn).show();

            if (page >= 1) {
                pager.find('.prev_link').show();
            } else {
                pager.find('.prev_link').hide();
            }

            if (page < (numPages - 1)) {
                pager.find('.next_link').show();
            } else {
                pager.find('.next_link').hide();
            }

            pager.data("curr", page);
            pager.children().removeClass("active");
            pager.children().eq(page + 1).addClass("active");

        }
    };

    // Data for chartist
    var chartist_data = {
        labels: ['1', '2', '3'],
        series: [
            [
                { meta: 'Amazon', value: 100 },
                { meta: 'Amazon', value: 500 },
                { meta: 'Amazon', value: 300 }
            ],
            [
                { meta: 'FlipKart', value: 200 },
                { meta: 'FlipKart', value: 400 },
                { meta: 'FlipKart', value: 200 }
            ],
            [
                { meta: 'ebay ', value: 400 },
                { meta: 'ebay ', value: 400 },
                { meta: 'ebay ', value: 300 }
            ],
            [
                { meta: 'SnapDeal ', value: 300 },
                { meta: 'SnapDeal ', value: 200 },
                { meta: 'SnapDeal ', value: 100 }
            ]
        ]
    }

    var chartist_option = {
        seriesBarDistance: 12,
        reverseData: true,
        plugins: [
            Chartist.plugins.tooltip({
                currency: 'Sales in $',
                appendToBody: true
            })
        ],
        axisY: {
            offset: 2
        },
        axisX: {
            offset: 2
        }
    }
    var pie_data = {
        series: [1000, 650, 350]
    }
    var pie_options = {
            height: '5em',
            width: '5em',
            showPoint: false,
            fullWidth: true,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
            axisX: { showGrid: false, showLabel: false, offset: 0 },
            axisY: { showGrid: false, showLabel: false, offset: 0 },
            tooltipFormat: '{{offset:offset}} ({{percent.1}}%)',
            tooltipValueLookups: {
                'offset': {
                    0: 'First',
                    1: 'Second',
                    2: 'Third'
                }
            },
            plugins: [
                Chartist.plugins.tooltip({
                    currency: 'Sales in $',
                    appendToBody: true
                })
            ],
        }
        // Sales Chart above the clouds
    new Chartist.Bar('.bar-sales', chartist_data, chartist_option);
    // Orders Status
    new Chartist.Pie('.order-status', pie_data, pie_options);
    new Chartist.Line('.profit-weekly', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [12, 9, 7, 8, 5, 6, 7],
            [2, 1, 3.5, 7, 3, 3, 2],
            [1, 3, 9, 5, 6, 5, 6]
        ]
    }, {
        fullWidth: true,
        chartPadding: {
            right: 20
        },
        axisX: {
            showGrid: false,
            offset: 20,
        },
        axisY: {
            offset: 20,
            labelInterpolationFnc: function(value) {
                return value + '+'
            }
        },
        plugins: [
            Chartist.plugins.tooltip({
                currency: 'Sales increase by ',
                appendToBody: true
            })
        ]

    });
    // Monthly Charts in Profit panel
    new Chartist.Line('.bar-chart', {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        series: [
            [1, 2, 3, 1, -2],
            [-2, -1, -2, -1, -1],
            [0, 0, 0, 1, 2],
            [2.5, 2, 1, 0.5, 3]
        ]
    }, {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: true,
        fullWidth: true,
        axisX: {
            showLabel: true,
            showGrid: true,
            showGrid: true,
            offset: 20
        },chartPadding: {
            right: 40
        },
        axisY: {
            showLabel: true,
            showGrid: true,
            showGrid: true,
            offset: 10
        },
        plugins: [
            Chartist.plugins.tooltip({
                currency: 'Sales  ',
                appendToBody: true
            })
        ]
    });
    var chart = new Chartist.Line('.line-chart', {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [
                { meta: 'Sales', value: 5 },
                { meta: 'Sales', value: 4 },
                { meta: 'Sales', value: 6 },
                { meta: 'Sales', value: 5 },
                { meta: 'Sales', value: 3 },
                { meta: 'Sales', value: 5 },
                { meta: 'Sales', value: 7 },
                { meta: 'Sales', value: 3 },
                { meta: 'Sales', value: 5 },
                { meta: 'Sales', value: 6 },
                { meta: 'Sales', value: 2 },
                { meta: 'Sales', value: 1 },
            ],
            [
                { meta: 'Expected', value: 5 },
                { meta: 'Expected', value: 4 },
                { meta: 'Expected', value: 6 },
                { meta: 'Expected', value: 2 },
                { meta: 'Expected', value: 3 },
                { meta: 'Expected', value: 2 },
                { meta: 'Expected', value: 5 },
                { meta: 'Expected', value: 1 },
                { meta: 'Expected', value: 7 },
                { meta: 'Expected', value: 3 },
                { meta: 'Expected', value: 4 },
                { meta: 'Expected', value: 7 }
            ]
        ]
    }, {

        low: 0,
        chartPadding: {
            right: 20
        },
        axisX: {
            showGrid: false,
            offset: 20
        },
        axisY: {
            offset: 20,
            labelInterpolationFnc: function(value) {
                return value + '+'
            }
        },
        high: 8,
        fullWidth: true,
        plugins: [
            Chartist.plugins.tooltip()
        ]
    });
    // Products View
    var pie_data = {
        labels: ['Viewing', 'Ordered', 'Caneled'],
        series: [50, 40, 30]
    };

    var pie_options = {
        plugins: [
            Chartist.plugins.tooltip({
                currency: 'Products View ',
                appendToBody: false
            })
        ],

        labelInterpolationFnc: function(value) {
            return value[0]
        }
    };


    var data = {
        series: [5, 3, 4]
    };

    var sum = function(a, b) {
        return a + b };

    new Chartist.Pie('.products-view', pie_data, pie_options);


    // Chartist ends here



    // Sparkline starts here
    $('#composite2').sparkline([35, 35, 32, 38, 42, 33, 39, 34, 45, 32, 31, 35, 45, 40, 30], {
        type: 'line',
        lineColor: '#99dada',
        width: '100%',
        height: '100px',
        lineWidth: 3,
        fillColor: 'transparent',
    });
    $('#composite2').sparkline([-10, 15, 13, 14, 22, 25, 15, 20, 11, 12, 14, 20, 25, 30, 22], {
        type: 'line',
        lineColor: '#f6adb9',
        width: '100%',
        height: '100px',
        lineWidth: 3,
        fillColor: 'transparent',
        composite: true
    });

    //Quick-mail Text Editor 
    $('.wysiwyg-controls a').on('click', function(e) {
        e.preventDefault();
        document.execCommand($(this).data('role'), false);
    });
    $('input:checkbox').change(function() {
        if ($(this).is(":checked")) {
            $(this).parent().find("label").addClass("striked");
            $(this).closest(".todo_list").find(".show_btns").addClass("hidden");
        } else {
            $(this).parent().find("label").removeClass("striked")
            $(this).closest(".todo_list").find(".show_btns").removeClass("hidden");
        }
    });
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
    // Highcharts Sparkline
    /**
     * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
     * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
     */
    Highcharts.SparkLine = function(a, b, c) {
        var hasRenderToArg = typeof a === 'string' || a.nodeName,
            options = arguments[hasRenderToArg ? 1 : 0],
            defaultOptions = {
                chart: {
                    renderTo: (options.chart && options.chart.renderTo) || this,
                    backgroundColor: null,
                    borderWidth: 0,
                    type: 'area',
                    margin: [2, 0, 2, 0],
                    width: 120,
                    height: 20,
                    style: {
                        overflow: 'visible'
                    },
                    skipClone: true
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: []
                },
                yAxis: {
                    endOnTick: false,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    hideDelay: 0,
                    shared: true,
                    padding: 0,
                    positioner: function(w, h, point) {
                        return { x: point.plotX - w / 2, y: point.plotY - h };
                    }
                },
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
                        negativeColor: '#910000',
                        borderColor: 'silver'
                    }
                }
            };

        options = Highcharts.merge(defaultOptions, options);

        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
            new Highcharts.Chart(options, b);
    };

    var start = +new Date(),
        $tds = $('td[data-sparkline]'),
        fullLen = $tds.length,
        n = 0;

    // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
    // can take some seconds, so we split the input into chunks and apply them in timeouts
    // in order avoid locking up the browser process and allow interaction.
    function doChunk() {
        var time = +new Date(),
            i,
            len = $tds.length,
            $td,
            stringdata,
            arr,
            data,
            chart;

        for (i = 0; i < len; i += 1) {
            $td = $($tds[i]);
            stringdata = $td.data('sparkline');
            arr = stringdata.split('; ');
            data = $.map(arr[0].split(', '), parseFloat);
            chart = {};

            if (arr[1]) {
                chart.type = arr[1];
            }
            $td.highcharts('SparkLine', {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', Q{point.x}:</span><br/>',
                    pointFormat: '<b>{point.y}.000</b> USD'
                },
                chart: chart
            });

            n += 1;

            // If the process takes too much time, run a timeout to allow interaction with the browser
            if (new Date() - time > 500) {
                $tds.splice(0, i + 1);
                setTimeout(doChunk, 0);
                break;
            }

            // Print a feedback on the performance
            if (n === fullLen) {
                $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
            }
        }
    }
    doChunk();
    // ODOMETER
    $('.odometer').odometer();
    // QUICK MAIL
    $('.myTable').pageMe({ pagerSelector: '#myPager', showPrevNext: true, hidePageNumbers: false, perPage: 3 });
    // HIGHCHARTS
	Highcharts.setOptions({
   		global: {
        	useUTC: false
    	}
	})
});


