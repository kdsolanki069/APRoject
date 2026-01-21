   // Input Mask JS Starts Here
   jQuery(function($) {
       $(".phone-num ").mask("?(999) 999-9999 ", {});
       $(".birth-date ").mask("?99/99/9999 ", {});
       $(".product ").mask("a*-999-a999 ", {});
       $(".phone ").mask("(999) 999-9999? x99999 ", {});
       $(".tax ").mask("99-9999999 ", {});
       $(".ssn ").mask("999-99-9999 ", {});
       $(".eyescript ").mask("~9.99 ~9.99 999 ", {});
       $(".card ").mask("9999-9999-9999-9999 ", {});
       $(".phonefield ").mask(" +40 999-999-999 ", {});
       $(".currency ").mask(" $ 999,999,999.99 ", {});
       $(".percent ").mask(" 99% ", {});
       $(".pcip ").mask(" 999.999.999.9999 ", {});
   });
   //*Input Mask JS Ends Here

   // Multi Select JS Starts Here
   $(function() {
       $('#lstFruits').multiselect({
           includeSelectAllOption: true
       });
   });
   //* Multi Select JS Ends Here

   // Touch-spin JS
   // Demo_vertical js
   $("input[name='demo_vertical' ] ").TouchSpin({
       verticalbuttons: true
   });
   // Demo_vertical2 js
   $("input[name='demo_vertical2' ] ").TouchSpin({
       verticalbuttons: true,
       verticalupclass: 'glyphicon glyphicon-plus',
       verticaldownclass: 'glyphicon glyphicon-minus'
   });
   // Demo1 JS
   $("input[name='demo1' ] ").TouchSpin({
       min: 0,
       max: 100,
       step: 0.1,
       decimals: 2,
       boostat: 5,
       maxboostedstep: 10,
       postfix: '%'
   });
   // Demo2 JS
   $("input[name='demo2' ] ").TouchSpin({
       min: -1000000000,
       max: 1000000000,
       stepinterval: 50,
       maxboostedstep: 10000000,
       prefix: '$'
   });
   // Demo3 JS
   $("input[name='demo3' ] ").TouchSpin();
   // Demo_21 JS
   $("input[name='demo3_21' ] ").TouchSpin({
       initval: 40
   });

   // Demo3_22  JS
   $("input[name='demo3_22' ] ").TouchSpin({
       initval: 40
   });
   // Demo4 JS
   $("input[name='demo4' ] ").TouchSpin({
       postfix: "a button ",
       postfix_extraclass: "btn btn-default "
   });
   // Demo 4_2 JS
   $("input[name='demo4_2' ] ").TouchSpin({
       postfix: "a button ",
       postfix_extraclass: "btn btn-default "
   });
   // Demo 5 JS
   $("input[name='demo5' ] ").TouchSpin({
       prefix: "pre ",
       postfix: "post "
   });
   // Demo6 JS
   $("input[name='demo6' ] ").TouchSpin({
       buttondown_class: "btn btn-link ",
       buttonup_class: "btn btn-link "
   });
   // Demo7 JS
   $("input[name='demo7' ] ").TouchSpin({
       replacementval: 10
   });

   // Touch-spin Ends
   // Time Picker Starts
   // Timepicker1 JS
   $('#timepicker1').timepicker();
   // Timepicker2 JS
   $('#timepicker2').timepicker({
       minuteStep: 1,
       template: 'modal',
       appendWidgetTo: 'body',
       showSeconds: true,
       showMeridian: false,
       defaultTime: false
   });
   // Timepicker3 JS
   $('#timepicker3').timepicker({
       minuteStep: 5,
       showInputs: false,
       disableFocus: true
   });
   // Timepicker5 JS
   $('#timepicker5').timepicker({
       template: false,
       showInputs: false,
       minuteStep: 5
   });
   // $('#timepicker5').timepicker('setTime', '12:45 AM');



   // Timepicker Ends
   // Date Picker JS

   jQuery(".date-picker").datepicker();

   jQuery(".date-picker").on("change", function() {
       var id = $(this).attr("id");
       var val = $("label[for='" + id + "']").text();
       jQuery("#msg").text(val + " changed");
   });


   // Demo JS
   $(function() {
       // Date And Range Picker JS
       $('input[name="daterange"]').daterangepicker();
       var start = moment().subtract(29, 'days');
       var end = moment();

       function cb(start, end) {
           $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
       }

       $('#reportrange').daterangepicker({
           startDate: start,
           endDate: end,
           ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
           }
       }, cb);

       cb(start, end);

   });
   // Multi select js
   $('.my-select').multiSelect()
   $('.your-select').multiSelect()
   $('.select-all').click(function() {
       $('.your-select').multiSelect('select_all');
       return false;
   });
   $('.deselect-all').click(function() {
       $('.your-select').multiSelect('deselect_all');
       return false;
   });
   $('.refresh').on('click', function() {
       $('.your-select').multiSelect('refresh');
       return false;
   });

   $('.custom-headers').multiSelect({
       selectableHeader: "<div class='custom-header'>Selectable items</div>",
       selectionHeader: "<div class='custom-header'>Selection items</div>",
       selectableFooter: "<div class='custom-header'>Selectable footer</div>",
       selectionFooter: "<div class='custom-header'>Selection footer</div>"
   });
