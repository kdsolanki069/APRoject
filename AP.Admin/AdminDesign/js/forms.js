(function($) {
    $(function() {
        var addFormGroup = function(event) {
            event.preventDefault();

            var $formGroup = $(this).closest('.form-group');
            var $multipleFormGroup = $formGroup.closest('.multiple-form-group');
            var $formGroupClone = $formGroup.clone();

            $(this)
                .toggleClass('btn-success btn-add btn-danger btn-remove')
                .html('–');

            $formGroupClone.find('input').val('');
            $formGroupClone.find('.concept').text('Phone');
            $formGroupClone.insertAfter($formGroup);

            var $lastFormGroupLast = $multipleFormGroup.find('.form-group:last');
            if ($multipleFormGroup.data('max') <= countFormGroup($multipleFormGroup)) {
                $lastFormGroupLast.find('.btn-add').attr('disabled', true);
            }
        };

        var removeFormGroup = function(event) {
            event.preventDefault();

            var $formGroup = $(this).closest('.form-group');
            var $multipleFormGroup = $formGroup.closest('.multiple-form-group');

            var $lastFormGroupLast = $multipleFormGroup.find('.form-group:last');
            if ($multipleFormGroup.data('max') >= countFormGroup($multipleFormGroup)) {
                $lastFormGroupLast.find('.btn-add').attr('disabled', false);
            }

            $formGroup.remove();
        };
        var selectFormGroup = function(event) {
            event.preventDefault();

            var $selectGroup = $(this).closest('.input-group-select');
            var param = $(this).attr("href").replace("#", "");
            var concept = $(this).text();

            $selectGroup.find('.concept').text(concept);
            $selectGroup.find('.input-group-select-val').val(param);

        }

        var countFormGroup = function($form) {
            return $form.find('.form-group').length;
        };

        $(document).on('click', '.btn-add', addFormGroup);
        $(document).on('click', '.btn-remove', removeFormGroup);
        $(document).on('click', '.dropdown-menu a', selectFormGroup);

    });
    // CSK Select JS Sttarts Here
    $.fn.sddl = function(opts){
        $(this).each(function(){
            $(this).after("<div class='sddl'><div class='sddl-label'></div><ul class='sddl-options'></ul></div>");
            var dd = $(this),
                dopts = dd.children(),
                sddl = $('.sddl'),
                sddlOptions = $('.sddl-options'), 
                label = $('.sddl-label');
            
            //  initial setup
            sddlOptions.append("<li><input type='text' class='sddl-search' placeholder='Search' /></li>"); 
            dopts.each(function(){
               sddlOptions.append("<li>" + this.innerHTML + "</li>"); 
            });
            var children = sddlOptions.children().not(":eq(0)");
            label.text(dopts[0].innerHTML);
            dd.hide();
            
            //  width and position
            sddl.width(dd.width()+'px');
            sddlOptions.css({
                width: label.width()+'px', 
                left: label.offset().left+'px',
                top: (label.offset().top + label.outerHeight()) + 'px'
            });
            sddlOptions.hide();
         
            //  Events
            label.click(function(){ sddlOptions.show() });
            children.click(function(){
                dd.val(this.innerHTML);
                label.text($(this).text());
                sddlOptions.hide();
                children.show();
            });
            $('.sddl-search').keyup(function(){
                var term = $(this).val().toLowerCase();
                children.each(function(){
                    if($(this).text().toLowerCase().indexOf(term) == -1) {
                        $(this).hide();
                    }else{
                        $(this).show();
                    }
                });
            });
            
        });     
    };
})(jQuery);

// --#CSK Select JS Ends Here
// Card
$(".card ").mask("9999-9999-9999-9999 ", {});