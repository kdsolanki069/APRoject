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
    GetSaleOrderDetails(-1, CompanyId);
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

function GetSaleOrderDetails(OrderID, CompanyId) {
    showLoader();
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 5,
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
                if ($.fn.DataTable.isDataTable("#SaleOrderTable")) {
                    $('#SaleOrderTable').DataTable().destroy();
                }
                $('#SaleOrderData').html('');
                CompanyList = data.OrderModelListData;
                $.each(data.OrderModelListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#SaleOrderData');
                    $('<td> ' + I + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderDate + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderNo + '</td>').appendTo(tr);
                    $('<td>' + obj.CompanyName + '</br>' + obj.CompanyAddress + ' ' + obj.CompanyState + ' ' + obj.Companycountry + '</td>').appendTo(tr);

                    if (obj.OrderStatus == 0) {
                        $('<td><div class="card text-white bg-danger "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Pending</div></div></td>').appendTo(tr);
                    }
                    if (obj.OrderStatus == 1) {
                        $('<td><div class="card text-white bg-warning"><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">In Progress</div></div></td>').appendTo(tr);
                    }
                    else if (obj.OrderStatus == 2) {

                        $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Completed</div></div></td>').appendTo(tr);
                    }

                    $('<td> <button type="button" class="btn btn-warning " onclick="EditOrder(' + obj.OrderID + ')"  title="Edit Sale Order!" ><i class= "fa fa-edit"></i></button >  <button type="button" class="btn btn-info " onclick="PrintData(' + obj.OrderID + ')"  title="Print Sale Order!" ><i class= "fa fa-print"></i></button ></td>').appendTo(tr);


                    I = I + 1;
                });

                if (!$.fn.DataTable.isDataTable('#SaleOrderTable')) {
                    $('#SaleOrderTable').DataTable();
                }
            }


        }
    }
}

function EditOrder(OrderID) {

    window.location.href = '/PurchaseOrder/SaleEdit?OrderID=' + OrderID;
}

function PrintData(OrderID) {
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 5
    };
    var strhtml = '';
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/PurchaseOrder/PrintPurchaseOrder",
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
