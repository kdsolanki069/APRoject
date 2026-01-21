$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});

    CompanyId = getUrlVars()["CID"];
     
    if (CompanyId == undefined || CompanyId == "undefined") {
        CompanyId = -1;
    }
    GetQuotationDetails(-1, CompanyId);
});
var CompanyList;

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

function GetQuotationDetails(OrderID, CompanyId) {
    showLoader();
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 1,
        CompanyId: CompanyId
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Order/GetOrder",
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
                var I = 1;
                if ($.fn.DataTable.isDataTable("#QuotationTable")) {
                    $('#QuotationTable').DataTable().destroy();
                }
                $('#QuotationData').html('');
                CompanyList = data.OrderModelListData;
                $.each(data.OrderModelListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#QuotationData');
                    $('<td> ' + I + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderDate + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderNo + '</td>').appendTo(tr);
                    $('<td>' + obj.CompanyName + '</br>' + obj.CompanyAddress + ' ' + obj.CompanyState + ' ' + obj.Companycountry + '</td>').appendTo(tr);
                    $('<td> <button type="button" class="btn btn-warning " onclick="EditOrder(' + obj.OrderID + ')"  title="Edit Quotation!" ><i class= "fa fa-edit"></i></button >  <button type="button" class="btn btn-info " onclick="PrintData(' + obj.OrderID + ')"  title="Edit Company!" ><i class= "fa fa-print"></i></button ></td>').appendTo(tr);
                    I = I + 1;
                });

                if (!$.fn.DataTable.isDataTable('#QuotationTable')) {
                    $('#QuotationTable').DataTable();
                }
            }


        }
    }
}
function EditOrder(OrderID) {

    window.location.href = '/Order/QuotationEdit?OrderID=' + OrderID;
}


function PrintData(OrderID) {
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 1
    };
    var strhtml = '';
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Order/PrintQuotation",
        data: JSON.stringify(UserObject),
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
            GetDashboard(CID);
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
                        var cname = obj.CompanyName;
                        var ret = cname.split(" ");
                        var shortCode = '';
                        for (i = 0; i < ret.length; i++) {
                            shortCode = shortCode + '' + ret[i].charAt(0).toUpperCase();
                        }

                        $('.cshortname').text(shortCode);
                        //$('#cid').val(obj.CompanyId);
                        $('.cname').text(obj.CompanyName);
                        $('#cgst').text(obj.CompanyGST);
                        $('#caddress').text(obj.CompanyAddress + ' (' + obj.CompanyPinCode + ') ' + obj.CompanyState + ' ' + obj.Companycountry);
                        $('#cphone').text(obj.CompanyPhone);
                        $('#cemail').text(obj.CompanyEmail);
                        $('#ccontactname').text(obj.ContactPersonName);

                    });
                }
            }
        }

    }
}
