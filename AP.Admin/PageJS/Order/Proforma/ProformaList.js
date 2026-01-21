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
    GetProformaDetails(-1, CompanyId);
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

function GetProformaDetails(OrderID, CompanyId) {
    showLoader();
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 2,
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
                if ($.fn.DataTable.isDataTable("#ProformaTable")) {
                    $('#ProformaTable').DataTable().destroy();
                }
                $('#ProformaData').html('');
                CompanyList = data.OrderModelListData;
                $.each(data.OrderModelListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#ProformaData');
                    $('<td> ' + I + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderDate + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderNo + '</td>').appendTo(tr);
                    $('<td>' + obj.CompanyName + '</br>' + obj.CompanyAddress + ' ' + obj.CompanyState + ' ' + obj.Companycountry + '</td>').appendTo(tr);
                    $('<td> <button type="button" class="btn btn-warning " onclick="EditOrder(' + obj.OrderID + ')"  title="Edit Quotation!" ><i class= "fa fa-edit"></i></button >  <button type="button" class="btn btn-info " onclick="PrintData(' + obj.OrderID + ')"  title="Print Proforma!" ><i class= "fa fa-print"></i></button ></td>').appendTo(tr);


                    I = I + 1;
                });

                if (!$.fn.DataTable.isDataTable('#ProformaTable')) {
                    $('#ProformaTable').DataTable();
                }
            }


        }
    }
}

function EditOrder(OrderID) {

    window.location.href = '/Order/ProformaEdit?OrderID=' + OrderID;
}

function PrintData(OrderID) {
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 2
    };
    var strhtml = '';
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Order/PrintProforma",
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
