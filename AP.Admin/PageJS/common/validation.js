function validationdata() {
    check = 0
    $(".requiredfield").each(function () {

        if ($(this).val() == "" || $(this).val() == "-1") {
            check = 1;
            if ($(this).next('label').length > 0) {
                $(this).next('label').addClass("text-danger");
                //$(this).addClass("redcross");
            }
            else if ($(this).prev('label').length > 0) {
                $(this).prev('label').addClass("text-danger");
                // $(this).addClass("redcross");
                //$(this).attr("class", "required form-control");
            }
            else {
                $(this).addClass('redcross');
            }
        }
        else {
            $(this).prev('label').removeClass("text-danger");
            $(this).next('label').removeClass("text-danger");
            $(this).next('label').addClass("norequired");
            $(this).prev('label').addClass("norequired");
            $(this).removeClass('redcross');
            //$(this).next('label').attr("class", "norequired");

        }

    });


    if (check != 0) {
        //hideloading();
        return false;
    }
    else {
        //hideloading();
        return true;
    }
}
