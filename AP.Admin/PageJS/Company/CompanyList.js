$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    GetCompanyDetails(-1);
});
var CompanyList;

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
                if (CompanyId != -1) {
                     
                    $.each(data.CompanyDetailModelListData, function (index, obj) {

                        $('#cid').val(obj.CompanyId);
                        $('#cname').val(obj.CompanyName);
                        $('#cgst').val(obj.CompanyGST);
                        $('#caddress').val(obj.CompanyAddress);
                        $('#cstate').val(obj.CompanyState);
                        $('#ccountry').val(obj.Companycountry);
                        $('#cpincode').val(obj.CompanyPinCode);
                        $('#cphone').val(obj.CompanyPhone);
                        $('#cemail').val(obj.CompanyEmail);
                        $('#ccontactname').val(obj.ContactPersonName);
                        $('#CompanyModal').modal('toggle');
                        $('.clsbtntext').text('Update Company');
                    });
                }
                else {
                    var I = 1;
                    if ($.fn.DataTable.isDataTable("#CompanyTable")) {
                        $('#CompanyTable').DataTable().destroy();
                    }
                    $('#CompanyData').html('');
                    CompanyList = data.CompanyDetailModelListData;
                    $.each(data.CompanyDetailModelListData, function (index, obj) {
                        var tr = $('<tr></tr>').appendTo('#CompanyData');
                        $('<td> <input type="checkbox" class="check" name="promochechbox" id="' + obj.CompanyId + '"/>' + I + '</td>').appendTo(tr);
                        $('<td><a href="/Company/CompanyDashboard?CID=' + obj.CompanyId + '">' + obj.CompanyName + '</a></td>').appendTo(tr);
                        $('<td>' + obj.CompanyAddress + ' ' + obj.CompanyState + ' ' + obj.Companycountry + '</td>').appendTo(tr);
                        $('<td>' + $.trim(obj.CompanyPhone) + '</td>').appendTo(tr);
                        $('<td>' + $.trim(obj.CompanyEmail) + '</td>').appendTo(tr);
                        $('<td> <button type="button" class="btn btn-warning " onclick="GetCompanyDetails(' + obj.CompanyId + ')"  title="Edit Company!" ><i class= "fa fa-edit"></i></button ></td>').appendTo(tr);
                        I = I + 1;
                    });

                    if (!$.fn.DataTable.isDataTable('#CompanyTable')) {
                        $('#CompanyTable').DataTable();
                    }
                }


            }
        }

    }
}

function InsertUpdatcompanyDetail() {
    var Flag = 'IU';
    var CompanyName = $('#cname').val();
    var CompanyAddress = $('#caddress').val();
    var Companycountry = $('#ccountry').val();
    var CompanyState = $('#cstate').val();
    var CompanyPinCode = $('#cpincode').val();
    var CompanyPhone = $('#cphone').val();
    var CompanyGST = $('#cgst').val();
    var CompanyEmail = $('#cemail').val();
    var CompanyId = $('#cid').val();
    var ContactPersonName = $('#ccontactname').val();

    UserObject = {
        Flag: Flag,
        CompanyName: CompanyName,
        ContactPersonName: ContactPersonName,
        CompanyAddress: CompanyAddress,
        Companycountry: Companycountry,
        CompanyState: CompanyState,
        CompanyPinCode: CompanyPinCode,
        CompanyPhone: CompanyPhone,
        CompanyGST: CompanyGST,
        CompanyId: CompanyId,
        CompanyEmail: CompanyEmail
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Company/InsertUpdatecompanyDetail",
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
                if (CompanyId != -1) {

                    $('cid').val('-1');
                    $('#CompanyModal').modal('toggle');
                    $('#txtmodaltitle').text('Company Detail');
                    $('#txttext').text('Company Detail Update Sucessfully');
                    $('#btnok').attr("href", "/Company/List");
                    $('#Modalalert').modal("toggle");


                }
                else {
                    $('#CompanyModal').modal('toggle');
                    $('#txtmodaltitle').text('Company Detail');
                    $('#txttext').text('Company Detail Add Sucessfully');
                    $('#btnok').attr("href", "/Company/List");
                    $('#Modalalert').modal("toggle");


                }

            }
        }
    }
}

$('#btnaddcompany').click(function () {
     
    var status = validationdata();
    if (status) {
        var btntext = $('#btnaddcompany').text();
        if (btntext == 'Add Company') {
            $('cid').val('-1');

            InsertUpdatcompanyDetail();
        }
        else {
            InsertUpdatcompanyDetail();
        }
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }
});

$('#btnAdd').click(function () {

    $('#cid').val('-1');
    $('#txtEmail').val('');
    $('#txtPhone').val('');
    $('#txtUserName').val('');
    $('#CompanyModal').modal('toggle');
    $('.clsbtntext').text('Add Company');

});

$('#btnprint').click(function () {
     

    var selectedIDs = new Array();
    var rows = $("#CompanyTable").dataTable().fnGetNodes();
    for (var i = 0; i < rows.length; i++) {

        if ($(rows[i].cells[0]).find('input').prop("checked")) {
            selectedIDs.push($(rows[i].cells[0]).find('input').attr("id"));
        }
    }
    var CompanyListData = new Array();
    var Index = 0;
    $.each(CompanyList, function (index, cdata) {
        if (selectedIDs.length > Index) {
            if (cdata.CompanyId == selectedIDs[Index]) {
                CompanyListData.push(cdata);
                Index = Index + 1;
            }
        }
    });
    if (selectedIDs.length > 0) {
        var Printtype = $('#ddltype').val();
        PrintData(CompanyListData, Printtype);
    }
});


function PrintData(UserObject, Printtype) {
    var companyDetailModelliststring = JSON.stringify(UserObject);
    UserObject1 = {
        companyDetailModelliststring: companyDetailModelliststring,
        Printtype: Printtype
    };
    var strhtml = '';
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Company/Print",
        data: JSON.stringify(UserObject1),
        async: false,
        dataType: "json",
        success: OnSuccess,
        complete: function () {
            var w = window.open();
            w.document.open();
            w.document.write(strhtml);
            w.document.close();
        },
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.status == 401) {

                window.location.href = '/Login/Index';
            }
        }
    });
    function OnSuccess(data) {
        strhtml = data.Message;
    }
}
