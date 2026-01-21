var WorkId;
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    WorkId = getUrlVars()["WorkId"]; 
    CKEDITOR.replace('txtworkDescription');
    CKEDITOR.replace('txtworkRemark');
    GetCompanyDetails(-1);
});

function GetCompanyDetails(CompanyId) {
    showLoader();
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
        complete: function () {
             
            GetWorkSheet(WorkId);
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


                $("#ddlcname").append($("<option/>").val('-1').text('Select Client'));
                $.each(data.CompanyDetailModelListData, function (index, obj) {
                    $("#ddlcname").append($("<option/>").val(obj.CompanyId).text(obj.CompanyName));

                });
            }
        }

    }
}
function GetWorkSheet(WorkId) {
    Flag = 'IU';
    UserObject = {
        WorkId: WorkId,       
        Flag: Flag
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/WorkSheet/GetWorkSheet",
        data: JSON.stringify(UserObject),
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

               
                $.each(data.WorkSheetModelListData, function (index, obj) {

                    $('#ddlcname').val(obj.CompanyId);
                    text = $("#ddlcname option[value='" + obj.CompanyId + "']").text();
                    $('#select2-ddlcname-container').text(text);
                    $('#txtworkdate').val(obj.Date);
                    $('#ddlstatus').val(obj.Status); 
                    text = $("#ddlstatus option[value='" + obj.Status+"']").text();
                    $('#select2-ddlstatus-container').text(text);
                    $('#hdnworkid').val(obj.WorkId);                      
                    CKEDITOR.instances['txtworkDescription'].setData(obj.Description);
                    CKEDITOR.instances['txtworkRemark'].setData(obj.Remark);  
                });

            }
        }

    }
}



$('#btneditwork').click(function () {
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
    var WorkId = $('#hdnworkid').val();
    var Date = $('#txtworkdate').val();  
    var Remark = CKEDITOR.instances['txtworkRemark'].getData();
    var Description = CKEDITOR.instances['txtworkDescription'].getData();
    var Status = $('#ddlstatus').val();
    var CompanyId = $('#ddlcname').val();


    UserObject = {
        Flag: Flag,
        Date: Date,
        WorkId: WorkId,
        Description: Description,
        Status: Status,
        Remark: Remark,
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
            if (data.Status == "True") {
                
                $('#txtmodaltitle').text('Work Detail');
                $('#txttext').text('Work Detail Update Sucessfully');
                $('#btnok').attr("href", "/WorkSheet/Detail");
                $('#Modalalert').modal("toggle");
            }
        }
    }
}




