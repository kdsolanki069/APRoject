 // HighCharts starts frome here
// Colros for highcharts
Highcharts.setOptions({
    colors: [success, danger, info, warning, primary, inverse]
})
// Highcharts Stacked
$(function () {
    $('.hicharts-stacked').highcharts({
        chart: {
            type: 'column'
        },credits: {
            enabled: false
        },
        title: {
            text: 'Stacked column chart'
        },
        credits: {
            enabled:false
        },
        xAxis: {
            categories: ['Amazon', 'Flipkart', 'Alibaba', 'Ebay', 'Snapdeal']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Products consumption'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}K)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Iphone',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Blackberry',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Nokia',
            data: [3, 4, 4, 2, 5]
        }]
    });
});
  //--# Highcharts stacked Ended here
  // Highcharts Rotated labels starts here
$(function () {
    $('.highcharts-rotated-label').highcharts({
        chart: {
            type: 'column'
        },credits: {
            enabled: false
        },
        title: {
            text: 'World\'s largest cities per 2014'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Products (Sales)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Sales in 2016: <b>{point.y:.1f}K</b>'
        },
        series: [{
            name: 'Products',
            data: [
                ['Iphone 6s', 23.7],
                ['Iphone 5s', 16.1],
                ['Lenovo', 14.2],
                ['Blackberry Z30', 14.0],
                ['Blackberry Z10', 12.5],
                ['OnePlus', 12.1],
                ['Infocus M808i', 11.8],
                ['Lumia 920', 11.7],
                ['Lumia 735', 11.1],
                ['Lenovo', 11.1],
                ['Samsung', 10.5],
                ['Ipad', 10.4],
                ['Micromax', 10.0],
                ['Asus', 9.3],
                ['Moto G', 9.3],
                ['Hyve buzz', 9.0],
                ['Moto G Plus', 8.9],
                ['Galaxy J7', 8.9],
                ['HTC One M7', 8.9],
                ['HTC One M8', 8.9]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});
// --# Highcharts rotated label ends here
// Highcharts Grouped stacked column
$(function () {
    $('.highcharts-grouped-stacked').highcharts({

        chart: {
            type: 'column'
        },credits: {
            enabled: false
        },

        title: {
            text: 'Total Products consumtion, grouped by gender'
        },
        credits: {
            enabled:false
        },
        xAxis: {
            categories: ['Amazon', 'Flipkart', 'Alibaba', 'Ebay', 'Snapdeal']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of Products'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Sales: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Iphone',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: 'Blackberry',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: 'Nokia',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: 'OnePlus',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
    });
});
//--# Highcharts-grouped-stacked Ends here
// Highcharts Basic Columns starts here
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
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'Blackberry',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'Nokia',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Samsung',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
});
//--# Highcharts basic columns ends here
// Highchart horizontal charts starts here
$(function () {
    $('.highcharts-horizontal').highcharts({
        chart: {
            type: 'bar'
        },credits: {
            enabled: false
        },
        title: {
            text: 'Historic World Population by Region'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Product 1', ' Product 2', 'Product 3', 'Product 4', 'Product 5'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (Sales)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' Sales'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Iphone 1998',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Blackberry 2000',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Nokia 2016',
            data: [1052, 954, 4250, 740, 38]
        }]
    });
});
//--# Highcharts horrizontal ends here
// Highcharts Horizontal stacked chart starts here
$(function () {
    $('.highcharts_horizontal_stacked').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Stacked bar chart'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['Amazon', 'Flipkart', 'Alibaba', 'Ebay', 'Snapdeal']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Product consumption'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Iphone',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Blackberry',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Nokia',
            data: [3, 4, 4, 2, 5]
        }]
    });
});
//--# Highcharts horizontal stacked chart ends here
// Highcharts bar with negative Stacked chart
// Data gathered from http://populationpyramid.net/germany/2015/
$(function () {
    // Age categories
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(window).load(function () {
        $('.highcharts_negative_horizontal_stacked').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid for Germany, 2015'
            },
            credits: {
                enabled: false
            },
            subtitle: {
                text: 'Source: <a href="http://google.com" target="_blank">Population Pyramids of the World from 1950 to 2100</a>'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Using: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Iphone',
                data: [-2.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2,
                    -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4,
                    -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
            }, {
                name: 'Blackberry',
                data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
                    3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9,
                    1.8, 1.2, 0.6, 0.1, 0.0]
            }]
        });
    });
});
//--#Highcharts with negative  stacked chart ends here
// Highchart from Table values
$(function () {
    $('.highcharts_table_velues').highcharts({
        data: {
            // table: 'highcharts_datatable'
            table: document.getElementById('datatable')
        },
        chart: {
            type: 'column'
        },credits: {
            enabled: false
        },
        title: {
            text: 'Data extracted from a HTML table in the page'
        },
        credits: {
            enabled:false
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Sales'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });
});
//--# Highcharts from table ends here
// Highcharts Fixed column Starts Here
$(function () {
    $('.highcharts_fixed_column').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Efficiency Optimization by Branch'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                'Amazon',
                'Flipkart',
                'Alibaba'
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Products'
            }
        }, {
            title: {
                text: 'Products (sales)'
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Iphone',
            color: 'rgba(165,170,217,1)',
            data: [150, 73, 20],
            pointPadding: 0.3,
            pointPlacement: -0.2
        }, {
            name: 'Blackberry',
            color: 'rgba(126,86,134,.9)',
            data: [140, 90, 40],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }, {
            name: 'Nokia',
            color: 'rgba(248,161,63,1)',
            data: [183.6, 178.8, 198.5],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1
        }, {
            name: 'Samsung',
            color: 'rgba(186,60,61,.9)',
            data: [203.6, 198.8, 208.5],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1
        }]
    });
});
// --# Highcharts fixed columns ends here
//  Highcharts Column Range Starts Here
$(function () {
    $('.highcharts_range_column').highcharts({

        chart: {
            type: 'columnrange',
            inverted: true
        },credits: {
            enabled: false
        },

        title: {
            text: 'Temperature variation by month'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Observed in Vik i Sogn, Norway'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: 'Temperature ( °C )'
            }
        },

        tooltip: {
            valueSuffix: '°C'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y + '°C';
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: [
                [-9.7, 9.4],
                [-8.7, 6.5],
                [-3.5, 9.4],
                [-1.4, 19.9],
                [0.0, 22.6],
                [2.9, 29.5],
                [9.2, 30.7],
                [7.3, 26.5],
                [4.4, 18.0],
                [-3.1, 11.4],
                [-5.2, 10.4],
                [-13.5, 9.8]
            ]
        }]

    });
});
//--# Highcharts column range ends here
// Highcharts Columns with Drilldown Starts Here
$(function () {
    // Create the chart
    $('.highcharts_drilldown').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Browser market Sales. January, 2016 to July, 2016'
        },
        credits: {
            enabled: false
        },
        subtitle: {
            text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market Sales'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}k'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}k</b> of sales<br/>'
        },credits: {
            enabled: false
        },

        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Amazon',
                y: 57.33,
                drilldown: 'iExplorer'
            }, {
                name: 'Flipkart',
                y: 25.03, 
                drilldown: 'Chrome'
            }, {
                name: 'Alibaba',
                y: 11.38,
                drilldown: 'Firefox'
            }, {
                name: 'Ebay',
                y: 5.77,
                drilldown: 'Safari'
            }, {
                name: 'Snapdeal',
                y: 1.91,
                drilldown: 'Opera'
            }, {
                name: 'Un Detected',
                y: 1.2,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Amazon',
                id: 'iExplorer',
                data: [
                    [
                        'Month 1',
                        25.13
                    ],
                    [
                        'Month 2',
                        18.2
                    ],
                    [
                        'Month 3',
                        9.11
                    ],
                    [
                        'Month 4',
                        6.33
                    ],
                    [
                        'Month 5',
                        2.06
                    ],
                    [
                        'Month 6',
                        1.5
                    ]
                ]
            }, {
                name: 'Flipkart',
                id: 'Chrome',
                data: [
                    [
                        'Month 1',
                        6
                    ],
                    [
                        'Month 2',
                        5.32
                    ],
                    [
                        'Month 3',
                        4.68
                    ],
                    [
                        'Month 4',
                        3.96
                    ],
                    [
                        'Month 5',
                        3.53
                    ],
                    [
                        'Month 6',
                        2.45
                    ],
                    [
                        'Month 7',
                        2.24
                    ],
                    [
                        'Month 8',
                        1.85
                    ],
                    [
                        'Month 9',
                        1.6
                    ],
                    [
                        'Month 10',
                        0.66
                    ],
                    [
                        'Month 11',
                        0.39
                    ],
                    [
                        'Month 12',
                        0.20
                    ],
                ]
            }, {
                name: 'Alibaba',
                id: 'Firefox',
                data: [
                    [
                        'Month 1',
                        3.76
                    ],
                    [
                        'Month 2',
                        3.32
                    ],
                    [
                        'Month 3',
                        2.41
                    ],
                    [
                        'Month 4',
                        1.27
                    ],
                    [
                        'Month 5',
                        1.02
                    ],
                    [
                        'Month 6',
                        0.33
                    ],
                    [
                        'Month 7',
                        0.22
                    ],
                    [
                        'Month 8',
                        0.15
                    ]
                ]
            }, {
                name: 'Ebay',
                id: 'Safari',
                data: [
                    [
                        'Month 1',
                        2.56
                    ],
                    [
                        'Month 2',
                        0.77
                    ],
                    [
                        'Month 3',
                        0.42
                    ],
                    [
                        'Month 4',
                        0.40
                    ],
                    [
                        'Month 5',
                        0.39
                    ],
                    [
                        'Month 6',
                        0.36
                    ],
                    [
                        'Month 7',
                        0.27
                    ]
                ]
            }, {
                name: 'Snapdeal',
                id: 'Opera',
                data: [
                    [
                        'Month 1',
                        0.44
                    ],
                    [
                        'Month 2',
                        0.34
                    ],
                    [
                        'Month 3',
                        0.27
                    ],
                    [
                        'Month 4',
                        0.26
                    ]
                ]
            }]
        }
    });
});

$(window).load(function(){
    $('.highcharts-window').load(function(){
        credits: {
            enabled: false
        }
    })
        
    
})
// Bar Charts Starts Here
// Basic-line
$(function () {
    $('.basic_line').highcharts({
        title: {
            text: 'Monthly Average Sales',
            x: -20 //center
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Sony', 'Samsung', 'Lumia', 'Lenovo', 'Nokia', 'Lumia 535',
                'HTC', 'Micromax', 'Blackberry', 'Sony', 'Iphone', 'Nokia']
        },
        yAxis: {
            title: {
                text: 'Sales '
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Sony',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Lumia',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Samsung',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'Nokia',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});
// --#Basic line Ends Here

// Ajax-loaded data starts Here
$(function () {

    // Get the CSV and create the chart
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {

        $('.ajax_loaded').highcharts({

            data: {
                csv: csv
            },

            title: {
                text: 'Daily visits at CSK Admin'
            },
            credits: {
                enabled:false
            },

            xAxis: {
                tickInterval: 7 * 24 * 3600 * 1000, // one week
                tickWidth: 0,
                gridLineWidth: 1,
                labels: {
                    align: 'left',
                    x: 3,
                    y: -3
                }
            },

            yAxis: [{ // left y axis
                title: {
                    text: null
                },
                labels: {
                    align: 'left',
                    x: 3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }, { // right y axis
                linkedTo: 0,
                gridLineWidth: 0,
                opposite: true,
                title: {
                    text: null
                },
                labels: {
                    align: 'right',
                    x: -3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }],

            legend: {
                align: 'left',
                verticalAlign: 'top',
                y: 20,
                floating: true,
                borderWidth: 0
            },

            tooltip: {
                shared: true,
                crosshairs: true
            },

            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function (e) {
                                hs.htmlExpand(null, {
                                    pageOrigin: {
                                        x: e.pageX || e.clientX,
                                        y: e.pageY || e.clientY
                                    },
                                    headingText: this.series.name,
                                    maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                        this.y + ' visits',
                                    width: 200
                                });
                            }
                        }
                    },
                    marker: {
                        lineWidth: 1
                    }
                }
            },

            series: [{
                name: 'All visits',
                lineWidth: 4,
                marker: {
                    radius: 4
                }
            }, {
                name: 'New visitors'
            }]
        });
    });

});
// --#Ajax-loaded data Ends Here

// Data lables Starts Here
$(function () {
    $('.data_labels').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        credits: {
            enabled:false
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});
// --#Data labels Ends Here

// Spline Starts Here
$(function () {
    $('.spline').highcharts({
        chart: {
            type: 'spline',
            inverted: true
        },
        title: {
            text: 'Atmosphere Temperature by Altitude'
        },
        credits: {
            enabled:false
        },
       
        xAxis: {
            reversed: false,
            title: {
                enabled: true,
                text: 'Altitude'
            },
            labels: {
                formatter: function () {
                    return this.value + 'km';
                }
            },
            maxPadding: 0.05,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            },
            lineWidth: 2
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x} km: {point.y}°C'
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: 'Temperature',
            data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
        }]
    });
});
// --# Spline Ends Here
// Time-data Starts Here
$(function () {
    $('.time_data').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Snow depth Stockpiles'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Irregular time data in Highcharts JS'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Snow depth (m)'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Samsung 2012-2013',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(1970, 9, 21), 0],
                [Date.UTC(1970, 10, 4), 0.28],
                [Date.UTC(1970, 10, 9), 0.25],
                [Date.UTC(1970, 10, 27), 0.2],
                [Date.UTC(1970, 11, 2), 0.28],
                [Date.UTC(1970, 11, 26), 0.28],
                [Date.UTC(1970, 11, 29), 0.47],
                [Date.UTC(1971, 0, 11), 0.79],
                [Date.UTC(1971, 0, 26), 0.72],
                [Date.UTC(1971, 1, 3), 1.02],
                [Date.UTC(1971, 1, 11), 1.12],
                [Date.UTC(1971, 1, 25), 1.2],
                [Date.UTC(1971, 2, 11), 1.18],
                [Date.UTC(1971, 3, 11), 1.19],
                [Date.UTC(1971, 4, 1), 1.85],
                [Date.UTC(1971, 4, 5), 2.22],
                [Date.UTC(1971, 4, 19), 1.15],
                [Date.UTC(1971, 5, 3), 0]
            ]
        }, {
            name: 'Samsung 2013-2014',
            data: [
                [Date.UTC(1970, 9, 29), 0],
                [Date.UTC(1970, 10, 9), 0.4],
                [Date.UTC(1970, 11, 1), 0.25],
                [Date.UTC(1971, 0, 1), 1.66],
                [Date.UTC(1971, 0, 10), 1.8],
                [Date.UTC(1971, 1, 19), 1.76],
                [Date.UTC(1971, 2, 25), 2.62],
                [Date.UTC(1971, 3, 19), 2.41],
                [Date.UTC(1971, 3, 30), 2.05],
                [Date.UTC(1971, 4, 14), 1.7],
                [Date.UTC(1971, 4, 24), 1.1],
                [Date.UTC(1971, 5, 10), 0]
            ]
        }, {
            name: 'Samsung 2014-2016',
            data: [
                [Date.UTC(1970, 10, 25), 0],
                [Date.UTC(1970, 11, 6), 0.25],
                [Date.UTC(1970, 11, 20), 1.41],
                [Date.UTC(1970, 11, 25), 1.64],
                [Date.UTC(1971, 0, 4), 1.6],
                [Date.UTC(1971, 0, 17), 2.55],
                [Date.UTC(1971, 0, 24), 2.62],
                [Date.UTC(1971, 1, 4), 2.5],
                [Date.UTC(1971, 1, 14), 2.42],
                [Date.UTC(1971, 2, 6), 2.74],
                [Date.UTC(1971, 2, 14), 2.62],
                [Date.UTC(1971, 2, 24), 2.6],
                [Date.UTC(1971, 3, 2), 2.81],
                [Date.UTC(1971, 3, 12), 2.63],
                [Date.UTC(1971, 3, 28), 2.77],
                [Date.UTC(1971, 4, 5), 2.68],
                [Date.UTC(1971, 4, 10), 2.56],
                [Date.UTC(1971, 4, 15), 2.39],
                [Date.UTC(1971, 4, 20), 2.3],
                [Date.UTC(1971, 5, 5), 2],
                [Date.UTC(1971, 5, 10), 1.85],
                [Date.UTC(1971, 5, 15), 1.49],
                [Date.UTC(1971, 5, 23), 1.08]
            ]
        }]
    });
});
// --#Time-data Ends Here
// Logarithamic Starts Here
$(function () {
    $('.logarithamic').highcharts({

        title: {
            text: 'Logarithmic axis demo'
        },
        credits: {
            enabled:false
        },
        xAxis: {
            tickInterval: 1
        },

        yAxis: {
            type: 'logarithmic',
            minorTickInterval: 0.1
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'x = {point.x}, y = {point.y}'
        },

        series: [{
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
            pointStart: 1
        }]
    });
});
// --#Logarithamic Ends Here
//--# Line Charts Ends Here

// Area Charts Starts  Here
// Basic area starts Here
$(function () {
    $('.basic_area').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Sony and Blackberry  stockpiles'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                'thebulletin.metapress.com</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Stockpiles with Product'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 2000,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Sony',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: 'Blackberry',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    });
});
// --# Basic area Ends Here

// Area With Negative Values Starts Here
$(function () {
    $('.area_negative_values').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Area chart with negative values'
        },
        credits: {
            enabled:false
        },
        xAxis: {
            categories: ['Iphone', 'Samsung', 'Lenovo', 'Blackberry', 'Nokia', ]
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Nokia',
            data: [3, 2, 7, 5, 7]
        }, {
            name: 'Iphone',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Lenovo',
            data: [3, 4, 4, -2, 5]
        }, {
            name: 'Blackberry',
            data: [-2, 4, 4, 7, 5]
        }, {
             name: 'Samsung',
            data: [5, 3, 4, 7, 2]
        }]
    });
});
// --#Area with negative values Ends Here 
// Stacked area Starts Here
$(function () {
    $('.stacked_area').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Sales Growthing '
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['2000', '2005', '2010', '2012', '2014', '2016', '2018'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' millions'
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
            name: 'Sony',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Samsung',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Lenovo',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'Nokia',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Blackberry',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
});
// Stacked area Starts Here
//--# Stacked area Ends Here

// Time series Strats Here
$(function () {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

        $('.time_series').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Nokia to Lenovo exchange rate over time'
            },
            credits: {
                enabled:false
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Nokia to Lenovo',
                data: data
            }]
        });
    });
});
// --#Time Series Ends Here
// Percentage Area Starts Here
$(function () {
    $('.percentage_area').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Distribution by Region'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['2012', '2014', '2018', '2020', '2024', '2028', '2030'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
            name: 'Sony',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Iphone',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Samsung',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'Lenovo',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Nokia',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
});
// --# Percentage Area Ends Here
// Area With missing points Starts Here
$(function () {
    $('.area_missing_points').highcharts({
        chart: {
            type: 'area',
            spacingBottom: 30
        },
        title: {
            text: 'Product consumption *'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: '* Jane\'s Product consumption is unknown',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories:['Iphone', 'Samsung', 'Lenovo', 'Blackberry', 'Nokia', 'Sony','HTC','Micromax' ]
        },
        yAxis: {
            title: {
                text: 'Y-Axis'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [0, 1, 4, 4, 5, 2, 3, 7]
        }, {
            name: 'Jane',
            data: [1, 0, 3, null, 3, 1, 2, 1]
        }]
    });
});
// --#Area with missing points Ends Here
// Inverted axes starts Here
$(function () {
    $('.inverted_axes').highcharts({
        chart: {
            type: 'area',
            inverted: true
        },
        title: {
            text: 'Average Product consumption during one week'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            style: {
                position: 'absolute',
                right: '0px',
                bottom: '10px'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Samsung',
                'Sony',
                'Nokia',
                'Blackberry',
                'Lenovo',
                'HTC',
                'Micromax'
            ]
        },
        yAxis: {
            title: {
                text: 'Number of units'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            },
            min: 0
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Lenovo',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Blackberry',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]
    });
});
// --# Inverted axes  Ends here
// Area Spline Starts Here
$(function () {
    $('.area_spline').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Average Products consumption during one Month'
        },
        credits: {
            enabled:false
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Sony',
                'Samsung',
                'Lenovo',
                'Micromax',
                'Nokia',
                'Iphone',
                'Blackberry'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Product units'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Iphone',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Nokia',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]
    });
});
// --# Area Spline Ends Here
// Area range Starts Here
$(function () {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

        $('.area_range').highcharts({

            chart: {
                type: 'arearange',
                zoomType: 'x'
            },

            title: {
                text: 'Sales variation by day'
            },
              credits: {
                enabled:false
            },
            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Samsung',
                data: data
            }]

        });
    });

});
// --# Area range ends Here
// Area range and line Starts Here
$(function () {

    var ranges = [
            [1246406400000, 14.3, 27.7],
            [1246492800000, 14.5, 27.8],
            [1246579200000, 15.5, 29.6],
            [1246665600000, 16.7, 30.7],
            [1246752000000, 16.5, 25.0],
            [1246838400000, 17.8, 25.7],
            [1246924800000, 13.5, 24.8],
            [1247011200000, 10.5, 21.4],
            [1247097600000, 9.2, 23.8],
            [1247184000000, 11.6, 21.8],
            [1247270400000, 10.7, 23.7],
            [1247356800000, 11.0, 23.3],
            [1247443200000, 11.6, 23.7],
            [1247529600000, 11.8, 20.7],
            [1247616000000, 12.6, 22.4],
            [1247702400000, 13.6, 19.6],
            [1247788800000, 11.4, 22.6],
            [1247875200000, 13.2, 25.0],
            [1247961600000, 14.2, 21.6],
            [1248048000000, 13.1, 17.1],
            [1248134400000, 12.2, 15.5],
            [1248220800000, 12.0, 20.8],
            [1248307200000, 12.0, 17.1],
            [1248393600000, 12.7, 18.3],
            [1248480000000, 12.4, 19.4],
            [1248566400000, 12.6, 19.9],
            [1248652800000, 11.9, 20.2],
            [1248739200000, 11.0, 19.3],
            [1248825600000, 10.8, 17.8],
            [1248912000000, 11.8, 18.5],
            [1248998400000, 10.8, 16.1]
        ],
        averages = [
            [1246406400000, 21.5],
            [1246492800000, 22.1],
            [1246579200000, 23],
            [1246665600000, 23.8],
            [1246752000000, 21.4],
            [1246838400000, 21.3],
            [1246924800000, 18.3],
            [1247011200000, 15.4],
            [1247097600000, 16.4],
            [1247184000000, 17.7],
            [1247270400000, 17.5],
            [1247356800000, 17.6],
            [1247443200000, 17.7],
            [1247529600000, 16.8],
            [1247616000000, 17.7],
            [1247702400000, 16.3],
            [1247788800000, 17.8],
            [1247875200000, 18.1],
            [1247961600000, 17.2],
            [1248048000000, 14.4],
            [1248134400000, 13.7],
            [1248220800000, 15.7],
            [1248307200000, 14.6],
            [1248393600000, 15.3],
            [1248480000000, 15.3],
            [1248566400000, 15.8],
            [1248652800000, 15.2],
            [1248739200000, 14.8],
            [1248825600000, 14.4],
            [1248912000000, 15],
            [1248998400000, 13.6]
        ];


    $('.area_range_line').highcharts({

        title: {
            text: 'July Sales'
        },
        credits: {
            enabled:false
        },
        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
           
        },

        legend: {
        },

        series: [{
            name: 'Sony',
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }, {
            name: 'Samsung',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });
});
// --# Area range and line Ends here
// --# Area-Charts End Here

// Pie-charts starts Here
// pie chart Starts Here
$(function () {
    $('.pie_chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        credits: {
            enabled:false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'iExplorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Un Detected',
                y: 0.2
            }]
        }]
    });
});
// --#pie chart Ends Here
// Pie with legend Strats Here
$(function () {

    $(window).load(function () {

        // Build the chart
        $('.pie_legend').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
              credits: {
                enabled:false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'iExplorer',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }, {
                    name: 'Un Detected',
                    y: 0.2
                }]
            }]
        });
    });
});
// --#Pie with legend Ends Here
// Pie with drilldown starts Here
$(function () {
    // Create the chart
    $('.pie_drilldown').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market shares. January, 2015 to May, 2015'
        },
        credits: {
            enabled:false
        },
        subtitle: {
            text: 'Click the slices to view versions. Source: netmarketshare.com.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'iExplorer',
                y: 56.33,
                drilldown: 'iExplorer'
            }, {
                name: 'Chrome',
                y: 24.03,
                drilldown: 'Chrome'
            }, {
                name: 'Firefox',
                y: 10.38,
                drilldown: 'Firefox'
            }, {
                name: 'Safari',
                y: 4.77,
                drilldown: 'Safari'
            }, {
                name: 'Opera',
                y: 0.91,
                drilldown: 'Opera'
            }, {
                name: 'Un Detected',
                y: 0.2,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'iExplorer',
                id: 'iExplorer',
                data: [
                    ['v11.0', 24.13],
                    ['v8.0', 17.2],
                    ['v9.0', 8.11],
                    ['v10.0', 5.33],
                    ['v6.0', 1.06],
                    ['v7.0', 0.5]
                ]
            }, {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    ['v40.0', 5],
                    ['v41.0', 4.32],
                    ['v42.0', 3.68],
                    ['v39.0', 2.96],
                    ['v36.0', 2.53],
                    ['v43.0', 1.45],
                    ['v31.0', 1.24],
                    ['v35.0', 0.85],
                    ['v38.0', 0.6],
                    ['v32.0', 0.55],
                    ['v37.0', 0.38],
                    ['v33.0', 0.19],
                    ['v34.0', 0.14],
                    ['v30.0', 0.14]
                ]
            }, {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    ['v35', 2.76],
                    ['v36', 2.32],
                    ['v37', 2.31],
                    ['v34', 1.27],
                    ['v38', 1.02],
                    ['v31', 0.33],
                    ['v33', 0.22],
                    ['v32', 0.15]
                ]
            }, {
                name: 'Safari',
                id: 'Safari',
                data: [
                    ['v8.0', 2.56],
                    ['v7.1', 0.77],
                    ['v5.1', 0.42],
                    ['v5.0', 0.3],
                    ['v6.1', 0.29],
                    ['v7.0', 0.26],
                    ['v6.2', 0.17]
                ]
            }, {
                name: 'Opera',
                id: 'Opera',
                data: [
                    ['v12.x', 0.34],
                    ['v28', 0.24],
                    ['v27', 0.17],
                    ['v29', 0.16]
                ]
            }]
        }
    });
});
// --# Pie with drilldown Ends Here
//--# Pie Charts Ends Here

// Bubble-Charts Starts Here
// Bubble chart starts here
$(function () {
    $('.bubble_chart').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            spacingRight: 30
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Sugar and fat intake per country'
        },
          credits: {
            enabled:false
        },
        subtitle: {
            text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Daily fat intake'
            },
            labels: {
                format: '{value} gr'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }]
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Daily sugar intake'
            },
            labels: {
                format: '{value} gr'
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
                '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
                '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
                { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
                { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
                { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
                { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
                { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
                { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
                { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
                { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
                { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
                { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
                { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
                { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
                { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
                { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
            ]
        }]

    });
});
// --# Bubble chart Ends here
// 3D Bubbles Starts Here
$(function () {
    $('.3d_bubbles').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            spacingRight: 30
        },

        title: {
            text: 'Highcharts bubbles with radial gradient fill'
        },
          credits: {
            enabled:false
        },

        xAxis: {
            gridLineWidth: 1
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false
        },

        series: [{
            data: [
                [9, 81, 63],
                [98, 5, 89],
                [51, 50, 73],
                [41, 22, 14],
                [58, 24, 20],
                [78, 37, 34],
                [55, 56, 53],
                [18, 45, 70],
                [42, 44, 28],
                [3, 52, 59],
                [31, 18, 97],
                [79, 91, 63],
                [93, 23, 23],
                [44, 83, 22]
            ],
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                    ]
                }
            }
        }, {
            data: [
                [42, 38, 20],
                [6, 18, 1],
                [1, 93, 55],
                [57, 2, 90],
                [80, 76, 22],
                [11, 74, 96],
                [88, 56, 10],
                [30, 47, 49],
                [57, 62, 98],
                [4, 16, 16],
                [46, 10, 11],
                [22, 87, 89],
                [57, 91, 82],
                [45, 15, 98]
            ],
            marker: {
                fillColor: {
                    radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, 'rgba(255,255,255,0.5)'],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                    ]
                }
            }
        }]

    });
});
// --# 3D Bubbles Ends Here
// --# Bubble-charts Ends Here

// Combination-Charts Starts Here
// Synchronized Charts Starts here
/*
The purpose of this demo is to demonstrate how multiple charts on the same page can be linked
through DOM and Highcharts events and API methods. It takes a standard Highcharts config with a
small variation for each data set, and a mouse/touch event handler to bind the charts together.
*/

$(function () {

    /**
     * In order to synchronize tooltips and crosshairs, override the
     * built-in events with handlers defined on the parent element.
     */
    $('.synchronized_chart').bind('mousemove touchmove touchstart', function (e) {
        var chart,
            point,
            i,
            event;

        for (i = 0; i < Highcharts.charts.length; i = i + 1) {
            chart = Highcharts.charts[i];
            event = chart.pointer.normalize(e.originalEvent); // Find coordinates within the chart
            point = chart.series[0].searchPoint(event, true); // Get the hovered point

            if (point) {
                point.highlight(e);
            }
        }
    });
    /**
     * Override the reset function, we don't need to hide the tooltips and crosshairs.
     */
    Highcharts.Pointer.prototype.reset = function () {
        return undefined;
    };

    /**
     * Highlight a point by showing tooltip, setting hover state and draw crosshair
     */
    Highcharts.Point.prototype.highlight = function (event) {
        this.onMouseOver(); // Show the hover marker
        this.series.chart.tooltip.refresh(this); // Show the tooltip
        this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
    };

    /**
     * Synchronize zooming through the setExtremes event handler.
     */
    function syncExtremes(e) {
        var thisChart = this.chart;

        if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
            Highcharts.each(Highcharts.charts, function (chart) {
                if (chart !== thisChart) {
                    if (chart.xAxis[0].setExtremes) { // It is null while updating
                        chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, { trigger: 'syncExtremes' });
                    }
                }
            });
        }
    }

    // Get the data. The contents of the data file can be viewed at
    // https://github.com/highcharts/highcharts/blob/master/samples/data/activity.json
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=activity.json&callback=?', function (activity) {
        $.each(activity.datasets, function (i, dataset) {

            // Add X values
            dataset.data = Highcharts.map(dataset.data, function (val, j) {
                return [activity.xData[j], val];
            });

            $('<div class="chart">')
                .appendTo('.synchronized_chart')
                .highcharts({
                    chart: {
                        marginLeft: 40, // Keep all charts left aligned
                        spacingTop: 20,
                        spacingBottom: 20,
                        spacingRight: 30
                    },
                    title: {
                        text: dataset.name,
                        align: 'left',
                        margin: 0,
                        x: 30
                    },
                    credits: {
                        enabled: false
                    },
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        crosshair: true,
                        events: {
                            setExtremes: syncExtremes
                        },
                        labels: {
                            format: '{value} km'
                        }
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        positioner: function () {
                            return {
                                x: this.chart.chartWidth - this.label.width, // right aligned
                                y: -1 // align to title
                            };
                        },
                        borderWidth: 0,
                        backgroundColor: 'none',
                        pointFormat: '{point.y}',
                        headerFormat: '',
                        shadow: false,
                        style: {
                            fontSize: '18px'
                        },
                        valueDecimals: dataset.valueDecimals
                    },
                    series: [{
                        data: dataset.data,
                        name: dataset.name,
                        type: dataset.type,
                        color: Highcharts.getOptions().colors[i],
                        fillOpacity: 0.3,
                        tooltip: {
                            valueSuffix: ' ' + dataset.unit
                        }
                    }]
                });
        });
    });
});
//--# synchronized Ends Here
// Column ,line and pie Starts Here
$(function () {
    $('.combination_chart').highcharts({
        title: {
            text: 'Combination chart'
        },
        credits: {
            enabled:false
        },
        xAxis: {
            categories: ['Sony', 'Lenovo', 'Samsung', 'Nokia', 'Iphone']
        },
        labels: {
            items: [{
                html: 'Total Product consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Sony',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'Lenovo',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Samsung',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Sony',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'Samsung',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Nokia',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
// --# Column, line and pie Ends Here

// Advanced Timeline Starts Here
        

/**
 * This is an advanced demo of setting up Highcharts with the flags feature borrowed from Highstock.
 * It also shows custom graphics drawn in the chart area on chart load.
 */


/**
 * Fires on chart load, called from the chart.events.load option.
 */
function onChartLoad() {

    var centerX = 140,
        centerY = 110,
        path = [],
        angle,
        radius,
        badgeColor = Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.2).get(),
        spike,
        empImage,
        big5,
        label,
        left,
        right,
        years,
        renderer;

    if (this.chartWidth < 530) {
        return;
    }

    // Draw the spiked disc
    for (angle = 0; angle < 2 * Math.PI; angle += Math.PI / 24) {
        radius = spike ? 80 : 70;
        path.push(
            'L',
            centerX + radius * Math.cos(angle),
            centerY + radius * Math.sin(angle)
        );
        spike = !spike;
    }
    path[0] = 'M';
    path.push('z');
    this.renderer.path(path)
        .attr({
            fill: badgeColor,
            zIndex: 6
        })
        .add();

    // Employee image overlay
    empImage = this.renderer.path(path)
        .attr({
            zIndex: 7,
            opacity: 0,
            stroke: badgeColor,
            'stroke-width': 1
        })
        .add();

    // Big 5
    big5 = this.renderer.text('5')
        .attr({
            zIndex: 6
        })
        .css({
            color: 'white',
            fontSize: '100px',
            fontStyle: 'italic',
            fontFamily: '\'Brush Script MT\', sans-serif'
        })
        .add();
    big5.attr({
        x: centerX - big5.getBBox().width / 2,
        y: centerY + 14
    });

    // Draw the label
    label = this.renderer.text('')
        .attr({
            zIndex: 6
        })
        .css({
            color: '#FFFFFF'
        })
        .add();

    left = centerX - label.getBBox().width / 2;
    right = centerX + label.getBBox().width / 2;

    label.attr({
        x: left,
        y: centerY + 44
    });

    // The band
    left = centerX - 90;
    right = centerX + 90;
    this.renderer
        .path([
            'M', left, centerY + 30,
            'L', right, centerY + 30,
            right, centerY + 50,
            left, centerY + 50,
            'z',
            'M', left, centerY + 40,
            'L', left - 20, centerY + 40,
            left - 10, centerY + 50,
            left - 20, centerY + 60,
            left + 10, centerY + 60,
            left, centerY + 50,
            left + 10, centerY + 60,
            left + 10, centerY + 50,
            left, centerY + 50,
            'z',
            'M', right, centerY + 40,
            'L', right + 20, centerY + 40,
            right + 10, centerY + 50,
            right + 20, centerY + 60,
            right - 10, centerY + 60,
            right, centerY + 50,
            right - 10, centerY + 60,
            right - 10, centerY + 50,
            right, centerY + 50,
            'z'
        ])
        .attr({
            fill: badgeColor,
            stroke: '#FFFFFF',
            'stroke-width': 1,
            zIndex: 5
        })
        .add();

    // 2009-2014
    years = this.renderer.text('')
        .attr({
            zIndex: 6
        })
        .css({
            color: '#FFFFFF',
            fontStyle: 'bold',
            fontSize: '10px'
        })
        .add();
    years.attr({
        x: centerX - years.getBBox().width / 2,
        y: centerY + 62
    });


    // Prepare mouseover
    renderer = this.renderer;
    if (renderer.defs) { // is SVG
        $.each(this.get('employees').points, function () {
            var point = this,
                pattern;
            if (point.image) {
                pattern = renderer.createElement('pattern').attr({
                    id: 'pattern-' + point.image,
                    patternUnits: 'userSpaceOnUse',
                    width: 400,
                    height: 400
                }).add(renderer.defs);
                renderer.image(
                    // 'https://www.highcharts.com/images/employees2014/' + point.image + '.jpg',
                    'datas/images/avatars/' + point.image + '.png',
                    centerX - 80,
                    centerY - 80,
                    160,
                    213
                ).add(pattern);

                Highcharts.addEvent(point, 'mouseOver', function () {
                    empImage
                        .attr({
                            fill: 'url(#pattern-' + point.image + ')'
                        })
                        .animate({ opacity: 1 }, { duration: 500 });
                });
                Highcharts.addEvent(point, 'mouseOut', function () {
                    empImage.animate({ opacity: 0 }, { duration: 500 });
                });
            }
        });
    }
}

$(function () {
    var options = {

        chart: {
            events: {
                load: onChartLoad
            }
        },
          credits: {
            enabled:false
        },
        xAxis: {
            type: 'datetime',
            minTickInterval: 365 * 24 * 36e5,
            labels: {
                align: 'left'
            },
            plotBands: [{
                from: Date.UTC(2009, 10, 27),
                to: Date.UTC(2010, 11, 1),
                color: '#EFFFFF',
                label: {
                    text: '<em>Offices:</em><br> Torstein\'s basement',
                    style: {
                        color: '#999999'
                    },
                    y: 180
                }
            }, {
                from: Date.UTC(2010, 11, 1),
                to: Date.UTC(2013, 9, 1),
                color: '#FFFFEF',
                label: {
                    text: '<em>Offices:</em><br> Tomtebu',
                    style: {
                        color: '#999999'
                    },
                    y: 30
                }
            }, {
                from: Date.UTC(2013, 9, 1),
                to: Date.UTC(2014, 10, 27),
                color: '#FFEFFF',
                label: {
                    text: '<em>Offices:</em><br> VikØrsta',
                    style: {
                        color: '#999999'
                    },
                    y: 30
                }
            }]

        },

        title: {
            text: 'Highcharts and Highsoft timeline'
        },

        tooltip: {
            style: {
                width: '250px'
            }
        },

        yAxis: [{
            max: 100,
            labels: {
                enabled: false
            },
            title: {
                text: ''
            },
            gridLineColor: 'rgba(0, 0, 0, 0.07)'
        }, {
            allowDecimals: false,
            max: 15,
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Employees',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true,
            gridLineWidth: 0
        }],

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2
                },
                fillOpacity: 0.5
            },
            flags: {
                tooltip: {
                    xDateFormat: '%B %e, %Y'
                }
            }
        },

        series: [{
            type: 'spline',
            id: 'google-trends',
            dashStyle: 'dash',
            name: 'Google search for <em>highcharts</em>',
            data: [{ x: 1258322400000, /* November 2009 */ y: 0 }, { x: 1260961200000, y: 5 }, { x: 1263639600000, y: 7 }, { x: 1266188400000, y: 5 }, { x: 1268740800000, y: 6 }, { x: 1271368800000, y: 8 }, { x: 1274004000000, y: 11 }, { x: 1276639200000, y: 9 }, { x: 1279274400000, y: 12 }, { x: 1281952800000, y: 13 }, { x: 1284588000000, y: 17 }, { x: 1287223200000, y: 17 }, { x: 1289858400000, y: 18 }, { x: 1292497200000, y: 20 }, { x: 1295175600000, y: 20 }, { x: 1297724400000, y: 27 }, { x: 1300276800000, y: 32 }, { x: 1302904800000, y: 29 }, { x: 1305540000000, y: 34 }, { x: 1308175200000, y: 34 }, { x: 1310810400000, y: 36 }, { x: 1313488800000, y: 43 }, { x: 1316124000000, y: 44 }, { x: 1318759200000, y: 42 }, { x: 1321394400000, y: 47 }, { x: 1324033200000, y: 46 }, { x: 1326711600000, y: 50 }, { x: 1329303600000, y: 57 }, { x: 1331899200000, y: 54 }, { x: 1334527200000, y: 59 }, { x: 1337162400000, y: 62 }, { x: 1339797600000, y: 66 }, { x: 1342432800000, y: 61 }, { x: 1345111200000, y: 68 }, { x: 1347746400000, y: 67 }, { x: 1350381600000, y: 73 }, { x: 1353016800000, y: 63 }, { x: 1355655600000, y: 54 }, { x: 1358334000000, y: 67 }, { x: 1360882800000, y: 74 }, { x: 1363435200000, y: 81 }, { x: 1366063200000, y: 89 }, { x: 1368698400000, y: 83 }, { x: 1371333600000, y: 88 }, { x: 1373968800000, y: 86 }, { x: 1376647200000, y: 81 }, { x: 1379282400000, y: 83 }, { x: 1381917600000, y: 95 }, { x: 1384552800000, y: 86 }, { x: 1387191600000, y: 83 }, { x: 1389870000000, y: 89 }, { x: 1392418800000, y: 90 }, { x: 1394971200000, y: 94 }, { x: 1397599200000, y: 100 }, { x: 1400234400000, y: 100 }, { x: 1402869600000, y: 99 }, { x: 1405504800000, y: 99 }, { x: 1408183200000, y: 93 }, { x: 1410818400000, y: 97 }, { x: 1413453600000, y: 98 }],
            tooltip: {
                xDateFormat: '%B %Y',
                valueSuffix: ' % of best month'
            }
        }, {
            name: 'Revenue',
            id: 'revenue',
            type: 'area',
            data: [[1257033600000, 2], [1259625600000, 3], [1262304000000, 2], [1264982400000, 3], [1267401600000, 4], [1270080000000, 4], [1272672000000, 4], [1275350400000, 4], [1277942400000, 5], [1280620800000, 7], [1283299200000, 6], [1285891200000, 9], [1288569600000, 10], [1291161600000, 8], [1293840000000, 10], [1296518400000, 13], [1298937600000, 15], [1301616000000, 14], [1304208000000, 15], [1306886400000, 16], [1309478400000, 22], [1312156800000, 19], [1314835200000, 20], [1317427200000, 32], [1320105600000, 34], [1322697600000, 36], [1325376000000, 34], [1328054400000, 40], [1330560000000, 37], [1333238400000, 35], [1335830400000, 40], [1338508800000, 38], [1341100800000, 39], [1343779200000, 43], [1346457600000, 49], [1349049600000, 43], [1351728000000, 54], [1354320000000, 44], [1356998400000, 43], [1359676800000, 43], [1362096000000, 52], [1364774400000, 52], [1367366400000, 56], [1370044800000, 62], [1372636800000, 66], [1375315200000, 62], [1377993600000, 63], [1380585600000, 60], [1383264000000, 60], [1385856000000, 58], [1388534400000, 65], [1391212800000, 52], [1393632000000, 72], [1396310400000, 57], [1398902400000, 70], [1401580800000, 63], [1404172800000, 65], [1406851200000, 65], [1409529600000, 89], [1412121600000, 100]],
            tooltip: {
                xDateFormat: '%B %Y',
                valueSuffix: ' % of best month'
            }

        }, {
            yAxis: 1,
            name: 'Highsoft employees',
            id: 'employees',
            type: 'area',
            step: 'left',
            tooltip: {
                headerFormat: '<span style="font-size: 11px;color:#666">{point.x:%B %e, %Y}</span><br>',
                pointFormat: '{point.name}<br><b>{point.y}</b>',
                valueSuffix: ' employees'
            },
            data: [
                { x: Date.UTC(2009, 10, 1), y: 1, name: 'Torstein worked alone', image: 'captain-avatar' },
                { x: Date.UTC(2010, 10, 20), y: 2, name: 'Grethe joined', image: 'captain-avatar2' },
                { x: Date.UTC(2011, 3, 1), y: 3, name: 'Erik joined', image: 'female-avatar' },
                { x: Date.UTC(2011, 7, 1), y: 4, name: 'Gert joined', image: 'plumber-avatar' },
                { x: Date.UTC(2011, 7, 15), y: 5, name: 'Hilde joined', image: 'captain-avatar' },
                { x: Date.UTC(2012, 5, 1), y: 6, name: 'Guro joined', image: 'captain-avatar2' },
                { x: Date.UTC(2012, 8, 1), y: 5, name: 'Erik left', image: 'female-avatar' },
                { x: Date.UTC(2012, 8, 15), y: 6, name: 'Anne Jorunn joined', image: 'female-avatar' },
                { x: Date.UTC(2013, 0, 1), y: 7, name: 'Hilde T. joined', image: 'plumber-avatar' },
                { x: Date.UTC(2013, 7, 1), y: 8, name: 'Jon Arild joined', image: 'captain-avatar' },
                { x: Date.UTC(2013, 7, 20), y: 9, name: 'Øystein joined', image: 'captain-avatar2' },
                { x: Date.UTC(2013, 9, 1), y: 10, name: 'Stephane joined', image: 'female-avatar' },
                { x: Date.UTC(2014, 9, 1), y: 11, name: 'Anita joined', image: 'plumber-avatar' },
                { x: Date.UTC(2014, 10, 27), y: 11, name: ' ', image: 'plumber-avatar' }
            ]

        }]
    };

    // Add flags for important milestones. This requires Highstock.
    if (Highcharts.seriesTypes.flags) {
        options.series.push({
            type: 'flags',
            name: 'Cloud',
            color: '#333333',
            shape: 'squarepin',
            spacingRight: 30,
            y: -80,
            data: [
                { x: Date.UTC(2014, 4, 1), text: 'Highcharts Cloud Beta', title: 'Cloud', shape: 'squarepin' }
            ],
            showInLegend: false
        }, {
            type: 'flags',
            name: 'Highmaps',
            color: '#333333',
            shape: 'squarepin',
            y: -55,
            data: [
                { x: Date.UTC(2014, 5, 13), text: 'Highmaps version 1.0 released', title: 'Maps' }
            ],
            showInLegend: false
        }, {
            type: 'flags',
            name: 'Highcharts',
            color: '#333333',
            shape: 'circlepin',
            data: [
                { x: Date.UTC(2009, 10, 27), text: 'Highcharts version 1.0 released', title: '1.0' },
                { x: Date.UTC(2010, 6, 13), text: 'Ported from canvas to SVG rendering', title: '2.0' },
                { x: Date.UTC(2010, 10, 23), text: 'Dynamically resize and scale to text labels', title: '2.1' },
                { x: Date.UTC(2011, 9, 18), text: 'Highstock version 1.0 released', title: 'Stock', shape: 'squarepin' },
                { x: Date.UTC(2012, 7, 24), text: 'Gauges, polar charts and range series', title: '2.3' },
                { x: Date.UTC(2013, 2, 22), text: 'Multitouch support, more series types', title: '3.0' },
                { x: Date.UTC(2014, 3, 22), text: '3D charts, heatmaps', title: '4.0' }
            ],
            showInLegend: false
        }, {
            type: 'flags',
            name: 'Events',
            color: '#333333',
            fillColor: 'rgba(255,255,255,0.8)',
            data: [
                { x: Date.UTC(2012, 10, 1), text: 'Highsoft won "Entrepeneur of the Year" in Sogn og Fjordane, Norway', title: 'Award' },
                { x: Date.UTC(2012, 11, 25), text: 'Packt Publishing published <em>Learning Highcharts by Example</em>. Since then, many other books are written about Highcharts.', title: 'First book' },
                { x: Date.UTC(2013, 4, 25), text: 'Highsoft nominated Norway\'s Startup of the Year', title: 'Award' },
                { x: Date.UTC(2014, 4, 25), text: 'Highsoft nominated Best Startup in Nordic Startup Awards', title: 'Award' }
            ],
            onSeries: 'revenue',
            showInLegend: false
        });
    }

    $('.advanced_timeline').highcharts(options);
});
//--# Advanced timeline Ends Here
// --# Combination-charts End Here

// Dynamic-Charts Starts Here
// Spline updating Starts here
        

$(function () {
    $(window).load(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('.spline_updating').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 30,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Live random data'
            },
              credits: {
                enabled:false
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
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
    });
});
// --# Spline updating Ends Here
// Click to add a point Starts Here
$(function () {
    $('.click_point').highcharts({
        chart: {
            type: 'scatter',
            margin: [70, 50, 60, 80],
            events: {
                click: function (e) {
                    // find the clicked values and the series
                    var x = e.xAxis[0].value,
                        y = e.yAxis[0].value,
                        series = this.series[0];

                    // Add it
                    series.addPoint([x, y]);

                }
            }
        },
        title: {
            text: 'User supplied data'
        },
          credits: {
            enabled:false
        },
        subtitle: {
            text: 'Click the plot area to add a point. Click a point to remove it.'
        },
        xAxis: {
            gridLineWidth: 1,
            minPadding: 0.2,
            maxPadding: 0.2,
            maxZoom: 60
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            minPadding: 0.2,
            maxPadding: 0.2,
            maxZoom: 60,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            series: {
                lineWidth: 1,
                point: {
                    events: {
                        'click': function () {
                            if (this.series.data.length > 1) {
                                this.remove();
                            }
                        }
                    }
                }
            }
        },
        series: [{
            data: [[20, 20], [80, 80]]
        }]
    });
});
// --#Click to add a point Ends here
// --# Dynamic Charts End Here

// 3D charts Starts Here
// 3D Column column with null and 0 values
$(function () {
    $('.column_null').highcharts({
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 25,
                depth: 70
            }
        },
        title: {
            text: '3D chart with null values'
        }, 
        credits: {
            enabled: false
        },
        subtitle: {
            text: 'Notice the difference between a 0 value and a null point'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {
            categories: Highcharts.getOptions().lang.shortMonths
        },
        yAxis: {
            title: {
                text: null
            }
        },
        series: [{
            name: 'Sales',
            data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3]
        }]
    });
});
//--# 3D Column column with null and 0 values Ends Here

// 3D column with stacking and grouping starts here
        

$(function () {
    $('.3d_column_grouping').highcharts({
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            }
        },

        title: {
            text: 'Total Product consumption, grouped by gender'
        },
         credits: {
            enabled: false
        },
        xAxis: {
            categories: ['Sony', 'Lenovo', 'Blackberry', 'Samsung', 'Nokia']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of Sales'
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            }
        },

        series: [{
            name: 'Sony',
            data: [5, 3, 4, 7, 2],
        }, {
            name: 'Blackberry',
            data: [3, 4, 4, 2, 5],
        }, {
            name: 'Samsung',
            data: [2, 5, 6, 2, 1],
        }, {
            name: 'Lenovo',
            data: [3, 0, 4, 4, 3],
        }]
    });
});

//--# 3D column with stacking and grouping Ends here
// 3D-pie Starts here
        

$(function () {
    $('.3d_pie').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Product Share '
        },
         credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Product share',
            data: [
                ['Sony', 45.0],
                ['IE', 26.8],
                {
                    name: 'Lenovo',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Nokia', 8.5],
                ['HTC', 6.2],
                ['Others', 0.7]
            ]
        }]
    });
});
// --#3D-pie Ends here
// 3D-donut Starts Here
        

$(function () {
    $('.3d_donut').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'weekly Product delivery'
        },
         credits: {
            enabled: false
        },
        
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Delivered amount',
            data: [
                ['Sony', 8],
                ['Lenovo', 3],
                ['Samsung', 1],
                ['Nokia', 6],
                ['Lumia 535', 8],
                ['Iphone', 4],
                ['Micromax', 4],
                ['Lumia', 1],
                ['HTC', 1]
            ]
        }]
    });
});
// --# 3D-donut Ends Here
// --#3D-Charts Ends Here

// Sparkline-Charts Starts Here
$(function () {
    /**
     * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
     * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
     */
    Highcharts.SparkLine = function (a, b, c) {
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
                    positioner: function (w, h, point) {
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

});


$(".full-width").click(function(e) {
    e.preventDefault();
    setInterval(function() {

        // var closeone = $(this).closest('.panel').find('.panel-body')
        $(window).resize(function() {
           $('body').prepend( function(){
                $(window).trigger('resize');
            });
         })
        // var yourClass = $(".panel-body ").children().prop("class");
        // $(yourClass).highcharts().reflow();
        // alert(closeone);
    }, 1);
});