    var chartist_data = {
    labels: ['Iphone', 'Nokia', 'Blackberry', 'Lenovo', 'Samsung', 'Sony'],
    series: [
    [
        {meta: 'Amazon', value: 10},
        {meta: 'Amazon', value: 50},
        {meta: 'Amazon', value: 30},
        {meta: 'Amazon', value: 10},
        {meta: 'Amazon', value: 50},
        {meta: 'Amazon', value: 30}
    ],
    [
        {meta: 'FlipKart', value: 20},
        {meta: 'FlipKart', value: 40},
        {meta: 'FlipKart', value: 20},
        {meta: 'FlipKart', value: 20},
        {meta: 'FlipKart', value: 40},
        {meta: 'FlipKart', value: 20}
    ],
    [
        {meta: 'ebay ', value: 40},
        {meta: 'ebay ', value: 40},
        {meta: 'ebay ', value: 30},
        {meta: 'ebay ', value: 40},
        {meta: 'ebay ', value: 40},
        {meta: 'ebay ', value: 30}
    ],
    [
        {meta: 'SnapDeal ', value: 30},
        {meta: 'SnapDeal ', value: 20},
        {meta: 'SnapDeal ', value: 10},
        {meta: 'SnapDeal ', value: 30},
        {meta: 'SnapDeal ', value: 20},
        {meta: 'SnapDeal ', value: 10}
    ]
  ]
}
var chartist_line_data ={
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  series: [
    [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
    [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
    [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
  ]
};
var negative_chartist_data = {
  labels: ['Iphone', 'Nokia', 'Blackberry', 'Lenovo', 'Samsung', 'Sony'],
    series: [
        [60,  90, 70, 80, -50, 40 ],
        [-40,  50, -30, 70, 30, -50 ],
        [50,  -30, 40, 50, -60, 30 ],
        [30,  -40, 50, -60, 70, 60]
    ]
};
var chartist_option = {
    seriesBarDistance: 25,
        reverseData: true,
        height: '300px',
        plugins: [
            Chartist.plugins.tooltip({
                currency: 'Profit in $ '
            })
        ],
        axisY: {
            offset: 25
    }
}