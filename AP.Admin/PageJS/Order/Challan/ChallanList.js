$(document).ready(function () {
    CompanyId = getUrlVars()["CID"];
    Flag = getUrlVars()["Flag"];
     
    if (typeof CompanyId == "undefined" || CompanyId == null|| CompanyId  == 0) {
        CompanyId = -1;
    }
    if (typeof Flag == "undefined" || Flag == "undefined" || Flag == "") {
        Flag = 'S' ;
    }
    GetChallanDetails(-1, CompanyId, Flag);

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

function GetChallanDetails(OrderID, CompanyId, Flag) {
    showLoader();
    UserObject = {
        OrderID: OrderID,
        Flag: Flag,
        OrderType: 3,
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
                if ($.fn.DataTable.isDataTable("#ChallanTable")) {
                    $('#ChallanTable').DataTable().destroy();
                }
                $('#ChallanData').html('');
                CompanyList = data.OrderModelListData;
                $.each(data.OrderModelListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#ChallanData');
                    $('<td> ' + I + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderDate + '</td>').appendTo(tr);
                    $('<td> ' + obj.OrderNo + '</td>').appendTo(tr);
                    $('<td>' + obj.CompanyName + '</br>' + obj.CompanyAddress + ' ' + obj.CompanyState + ' ' + obj.Companycountry + '</td>').appendTo(tr);
                    if (obj.IsPaid == 0) {
                        $('<td><div class="card text-white bg-danger "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Pending</div></div></td>').appendTo(tr);
                    }
                    else if (obj.IsPaid == 1) {

                        $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Paid</div></div></td>').appendTo(tr);
                    }
                    FlagType = "D"
                    $('<td> <button type="button" class="btn btn-warning " onclick="EditOrder(' + obj.OrderID + ')"  title="Edit Quotation!" ><i class= "fa fa-edit"></i></button >  <button type="button" class="btn btn-info " onclick="PrintData(' + obj.OrderID + ')"  title="Print Challan!" ><i class= "fa fa-print"></i></button > <button type="button" class="btn btn-danger " onclick="DeleteOrder(' + obj.OrderID + ')"  title="Print Challan!" ><i class= "fa fa-trash"></i></button ></td>').appendTo(tr);

                    I = I + 1;
                });

                if (!$.fn.DataTable.isDataTable('#ChallanTable')) {
                    $('#ChallanTable').DataTable();
                }
            }


        }
    }
}

function EditOrder(OrderID) {

    window.location.href = '/Order/ChallanEdit?OrderID=' + OrderID;
}

function DeleteOrder(OrderID) {
    GetChallanDetails(OrderID, -1, 'D');
}

function PrintData(OrderID) {
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 3

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
