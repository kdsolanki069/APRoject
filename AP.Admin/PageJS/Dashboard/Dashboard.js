$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    GetDashboard();
});
var CompanyList;

function GetDashboard() {
    showLoader();
     
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Home/GetDashboard",
        async: true,
        dataType: "json",
        success: OnSuccess,
        complete: function () {
            hideLoader();
        },
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.status == 401) {

                window.location.href = '/Login/Index';
            }
        },
    });
    function OnSuccess(data) {

        if (data != -1) {
            if (data.Status == "True") {
                 
                $('#lblQuatationCount').text(data.DeshboardData.QuatationCount);
                $('#lblPerfomaCount').text(data.DeshboardData.PerfomaCount);
                $('#lblChallanCount').text(data.DeshboardData.ChallanCount);
                $('#lblSOrderCount').text(data.DeshboardData.SOrderCount);
                $('#lblPOrderCount').text(data.DeshboardData.POrderCount);


            }


        }
    }
}
