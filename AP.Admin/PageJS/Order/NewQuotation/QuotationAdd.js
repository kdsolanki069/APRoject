$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});

    GetCompanyDetails(-1);
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
             
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    $('#btnaddproduct').click(function () {

        var main = $('#pdata');
        AddRow(main);


    });

    function AddRow(main) {
        count++;
        var dvVar = $('<div class="form-row count' + count + '"></div>').appendTo(main);
        $('<div class="form-group col-md-1"><input type="text" class="form-control" id="txtpno' + count + '" placeholder="Product Number" value="' + count + '" disabled></div>').appendTo(dvVar);
        $('<div class="form-group col-md-4"><input type="text" class="form-control" id="txtpspec' + count + '" placeholder="Product Specification"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtOldunitprice' + count + '"    value="0" placeholder="Old Unit Price"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtunitprice' + count + '"  onchange="GetAmount(' + count + ')"  value="0" placeholder="New Unit Price"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-1" style="padding: 0px !important;"><input type="number" class="form-control" id="txtquantity' + count + '" onchange="GetAmount(' + count + ')"  value="0" placeholder="Quantity"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtamount' + count + '" placeholder="Amount" disabled></div>').appendTo(dvVar);
        var panel2maxHeight = panel2.style.maxHeight.replace("px", "");
        panel2.style.maxHeight = parseInt(panel2maxHeight) + 55 + "px";

        if (count > 1) {
            $('#btnRemoveproduct').show();
        }


    }


});
$('#btnRemoveproduct').click(function () {

    $('.count' + count).html('');
    var panel2maxHeight = panel2.style.maxHeight.replace("px", "");
    panel2.style.maxHeight = parseInt(panel2maxHeight) + -55 + "px";
    count--;

    if (count <= 1) {
        $('#btnRemoveproduct').hide();
    }

});

var count = 1;
var Total;
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


$('#btnAddQuotation').click(function () {
    var status = validationdata();
    if (status) {
        var UserObject = GetQuotationValue();
        InsertUpdateQuotation(UserObject);
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});

function GetQuotationValue() {
    var UserObject = GetQuotationData();
    return UserObject;
}
function GetQuotationDetail() {
    var orderDetailModelList = [];
    for (var i = 1; i <= count; i++) {

        orderDetailModelList.push({
            ProductDetail: $('#txtpspec' + i).val(),
            Quantity: $('#txtquantity' + i).val(),
            ProductPrice: $('#txtunitprice' + i).val(),
            OLDProductPrice: $('#txtOldunitprice' + i).val(),

        });
    }
    return orderDetailModelList;

}
function GetQuotationData() {
    var CompanyId = $('#ddlcname').val();
    var OrderComments = $('#QComments').val();
    var DiliveryTime = $('#QDiliveryTime').val();
    var GSTApply = $('#QchkApplyGST').prop("checked") == true ? 1 : 0;
    var ShipVia = $('#ddlShipVia').val();
    var OrderType = 7;
    var orderDetailModelList = GetQuotationDetail();
    var orderDetailModelListString = JSON.stringify(orderDetailModelList);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var OrderDate = dd + '/' + mm + '/' + yyyy;
    var OrderNo = dd + '' + mm + '' + yyyy;
    var Flag = 'I';

    UserObject = {
        Flag: Flag,
        CompanyId: CompanyId,
        OrderComments: OrderComments,
        DiliveryTime: DiliveryTime,
        GSTApply: GSTApply,
        ShipVia: ShipVia,
        OrderType: OrderType,
        orderDetailModelListString: orderDetailModelListString,
        OrderDate: OrderDate,
        OrderNo: OrderNo
    };
    return UserObject;
}

function InsertUpdateQuotation(UserObject) {

    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Order/InsertUpdateOrder",
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
                $('#txtmodaltitle').text('Quotation Detail');
                $('#txttext').text('Quotation Detail Add Sucessfully');
                $('#btnok').attr("href", "/Order/PriceChangeQuotationList");
                $('#Modalalert').modal("toggle");
            }
        }
    }
}

function GetAmount(Id) {

    var unitprice = $('#txtunitprice' + Id).val();
    var quantity = $('#txtquantity' + Id).val();
    var FinalTotal = unitprice * quantity;
    $('#txtamount' + Id).val(FinalTotal);

}
