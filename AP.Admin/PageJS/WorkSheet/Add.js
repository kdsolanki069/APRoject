$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    CKEDITOR.replace('txtworkDescription');
    GetCompanyDetails(-1);
});

function GetCompanyDetails(CompanyId) {

    UserObject = {
        CompanyId: CompanyId
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Company/GetCompanyDetails",
        data: JSON.stringify(UserObject),
        async: true,
        dataType: "json",
        success: OnSuccess,
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.status == 401) {

                window.location.href = '/Login/Index';
            }
        },
    });
    function OnSuccess(data) {
    
        if (data != -1) {
            if (data.Status == "True") {                             
                  

                $("#ddlcname").append($("<option/>").val('-1').text('Select Client'));
                $.each(data.CompanyDetailModelListData, function (index, obj) {
                    $("#ddlcname").append($("<option/>").val(obj.CompanyId).text(obj.CompanyName));

                });
            }
        }

    }
}


$('#btnaddwork').click(function () {
    var status = validationdata();
    if (status) {
        InsertUpdateWorkSheet();
    }
    else {
        $('#Modalvalidation').modal("toggle");
        
    }

});

function InsertUpdateWorkSheet() {
    var Flag = 'IU';
    var Date = $('#txtworkdate').val();
    var Description = CKEDITOR.instances['txtworkDescription'].getData(); 
    var Status = 0;
    var CompanyId = $('#ddlcname').val();

     
    UserObject = {
        Flag: Flag,
        Date: Date,
        Description: Description,
        Status: Status,       
        CompanyId: CompanyId
        
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/WorkSheet/InsertUpdateWorkSheet",
        data: JSON.stringify(UserObject),
        async: true,
        dataType: "json",
        success: OnSuccess,
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.status == 401) {

                window.location.href = '/Login/Index';
            }
        },
    });
    function OnSuccess(data) {        
        if (data != -1) {
            if (data.Status == "True")
            {                
                $('#txtmodaltitle').text('Work Detail');
                $('#txttext').text('Work Detail Add Sucessfully');
                $('#btnok').attr("href", "/WorkSheet/Detail");
                $('#Modalalert').modal("toggle");
            }
        }
    }
}

