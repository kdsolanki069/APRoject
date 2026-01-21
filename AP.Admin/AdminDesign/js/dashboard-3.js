// Calendar JS
$(document).ready(function() {

  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  });
});


// Sparkline_one & Sparkline_two JS
$('document').ready(function() {
    $(".sparkline_one").sparkline([4, 8, 6, 8, 9, 8, 9, 8, 6, 8, 9, 10,  9, 8, 6, 9,], {
      type: 'bar',
      height: '40',
      width:'90px',
      barWidth: 8,
      colorMap: {
        '7': '#a1a1a1'
      },
      barSpacing: 2,
      barColor: 'rgba(52, 172, 220, 1)'
    });

    $(".sparkline_two").sparkline([4, 8, 6, 8, 9, 8, 9, 8, 6, 8, 9, 10,  9, 8, 6, 9,11], {
      type: 'line',
      width: '180px',
      height: '40',
      lineColor: '#26B99A',
      fillColor: 'rgba(223, 223, 223, 0.57)',
      lineWidth: 2,
      spotColor: '#26B99A',
      minSpotColor: '#26B99A'
    });
  })

// Area chart & Donut & Activity JS

  $('.rad-activity-body').slimScroll({
    height: '250px',
    color: '#c6c6c6'
  });


  $(".fa-chevron-down").on("click", function() {
    var $ele = $(this).parents('.panel-heading');
    $ele.siblings('.panel-footer').toggleClass("rad-collapse");
    $ele.siblings('.panel-body').toggleClass("rad-collapse", function() {
      setTimeout(function() {
        initializeCharts();
      }, 200);
    });
  });

  $(".fa-close").on("click", function() {
    var $ele = $(this).parents('.panel');
    $ele.addClass('panel-close');
    setTimeout(function() {
      $ele.parent().remove();
    }, 210);
  });

  $(".fa-rotate-right").on("click", function() {
    var $ele = $(this).parents('.panel-heading').siblings('.panel-body');
    $ele.append('<div class="overlay"><div class="overlay-content"><i class="fa fa-refresh fa-2x fa-spin"></i></div></div>');
    setTimeout(function() {
      $ele.find('.overlay').remove();
    }, 2000);
  });


  function initializeCharts() {

    $(".rad-chart").empty();

    Morris.Line({
      lineColors: ['#E67A77', '#D9DD81', '#79D1CF', '#95D7BB'],
      element: 'lineChart',
      data: [{
        year: '2012',
        value: 45,
        value2: 15,
        value3: 95
      }, {
        year: '2014',
        value: 10,
        value2: 40,
        value3: 80
      }, {
        year: '2016',
        value: 45,
        value2: 95,
        value3: 5
      }, {
        year: '2018',
        value: 20,
        value2: 60,
        value3: 40
      }, {
        year: '2020',
        value: 45,
        value2: 0,
        value3: 90
      }],
      xkey: 'year',
      ykeys: ['value', 'value2', 'value3'],
      labels: ['Value', 'value2', 'value3'],
      pointSize: 0,
      hideHover: 'auto'
    });
   
    Morris.Area({
      element: 'areaChart2',
      behaveLikeLine: true,
      padding: 10,
      fillOpacity: .7,
      lineColors: ['red', 'orange'],
      gridEnabled: false,
      gridLineColor: '#dddddd',
      axes: true,
      data: [{
        y: '2012',
        a: 0,
        c: 0
      }, {
        y: '2013',
        a: 75,
        c: 112
      }, {
        y: '2014',
        a: 50,
        c: 72
      }, {
        y: '2015',
        a: 75,
        c: 2
      }, {
        y: '2016',
        a: 150,
        c: 92
      }, {
        y: '2017',
        a: 75,
        c: 22
      }, {
        y: '2018',
        a: 3,
        c: 0
      }],
      xkey: 'y',
      ykeys: ['a', 'c'],
      labels: ['Product', 'Sales'],
      pointSize: 0,
      lineWidth: 0,
      hideHover: 'auto'
    });

  }

  function getTempl(img, text, position) {
    return '<div class="rad-list-group-item ' + position + '"><span class="rad-list-icon pull-' + position + '"><img class="rad-list-img" src=' + img + ' alt="me" /></span><div class="rad-list-content rad-chat"><span class="lg-text">Me</span><span class="sm-text"><i class="fa fa-clock-o"></i> ' + formatTime(new Date()) + '</span><div class="rad-chat-msg">' + text + '</div>';
  }

  function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  initializeCharts();


var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  data = [{
    "label": "Technology",
    "value": 20
  }, {
    "label": "Financial",
    "value": 45
  }, {
    "label": "Industrial Goods",
    "value": 30
  }, {
    "label": "Consumer Goods",
    "value": 10
  }, {
    "label": "Basic Materials",
    "value": 5
  }];

function getDonutData(group, column) {
  function sum(numbers) {
    return _.reduce(numbers, function(result, current) {
      return result + 1;
    }, 0);
  }
  var result = _.chain(getChartData())
    .groupBy(group)
    .map(function(value, key) {
      return {
        label: key,
        value: sum(_.pluck(value, column))
      }
    })
    .value();

  return result;
}

function getChartData() {
  return [

    {
      "_id": {
        "$oid": "52853800bb1177ca391c17ff"
      },
      "Ticker": "A",
      "Profit Margin": 0.137,
      "Institutional Ownership": 0.847,
      "EPS growth past 5 years": 0.158,
      "Total Debt/Equity": 0.5600000000000001,
      "Current Ratio": 3,
      "Return on Assets": 0.089,
      "Sector": "Healthcare",
      "P/S": 2.54,
      "Change from Open": -0.0148,
      "Performance (YTD)": 0.2605,
      "Performance (Week)": 0.0031,
      "Quick Ratio": 2.3,
      "Insider Transactions": -0.1352,
      "P/B": 3.63,
      "EPS growth quarter over quarter": -0.29,
      "Payout Ratio": 0.162,
      "Performance (Quarter)": 0.09279999999999999,
      "Forward P/E": 16.11,
      "P/E": 19.1,
      "200-Day Simple Moving Average": 0.1062,
      "Shares Outstanding": 339,
      "Earnings Date": {
        "$date": 1384464600000
      },
      "52-Week High": -0.0544,
      "P/Cash": 7.45,
      "Change": -0.0148,
      "Analyst Recom": 1.6,
      "Volatility (Week)": 0.0177,
      "Country": "USA",
      "Return on Equity": 0.182,
      "50-Day Low": 0.0728,
      "Price": 50.44,
      "50-Day High": -0.0544,
      "Return on Investment": 0.163,
      "Shares Float": 330.21,
      "Dividend Yield": 0.0094,
      "EPS growth next 5 years": 0.0843,
      "Industry": "Medical Laboratories & Research",
      "Beta": 1.5,
      "Sales growth quarter over quarter": -0.041,
      "Operating Margin": 0.187,
      "EPS (ttm)": 2.68,
      "PEG": 2.27,
      "Float Short": 0.008,
      "52-Week Low": 0.4378,
      "Average True Range": 0.86,
      "EPS growth next year": 0.1194,
      "Sales growth past 5 years": 0.048,
      "Company": "Agilent Technologies Inc.",
      "Gap": 0,
      "Relative Volume": 0.79,
      "Volatility (Month)": 0.0168,
      "Market Cap": 17356.8,
      "Volume": 1847978,
      "Gross Margin": 0.512,
      "Short Ratio": 1.03,
      "Performance (Half Year)": 0.1439,
      "Relative Strength Index (14)": 46.51,
      "Insider Ownership": 0.001,
      "20-Day Simple Moving Average": -0.0172,
      "Performance (Month)": 0.0063,
      "P/Free Cash Flow": 19.63,
      "Institutional Transactions": -0.0074,
      "Performance (Year)": 0.4242,
      "LT Debt/Equity": 0.5600000000000001,
      "Average Volume": 2569.36,
      "EPS growth this year": 0.147,
      "50-Day Simple Moving Average": -0.0055
    }

   ];
}

