$(document).ready(function () {
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

    OrderID = getUrlVars()["OrderID"];
    GetCompanyDetails(-1);


    function AddRow(main) {
        count++;
        var dvVar = $('<div class="form-row count' + count + '"></div>').appendTo(main);
        $('<div class="form-group col-md-1"><input type="text" class="form-control" id="txtpno' + count + '" placeholder="Product Number" value="' + count + '" disabled></div>').appendTo(dvVar);
        $('<div class="form-group col-md-5"><input type="text" class="form-control" id="txtpspec' + count + '" placeholder="Product Specification"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtunitprice' + count + '"  onchange="GetAmount(' + count + ')"  value="0" placeholder="Unit Price"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtquantity' + count + '" onchange="GetAmount(' + count + ')"  value="0" placeholder="Quantity"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtamount' + count + '" placeholder="Amount" disabled></div>').appendTo(dvVar);
        var panel2maxHeight = panel2.style.maxHeight.replace("px", "");
        panel2.style.maxHeight = parseInt(panel2maxHeight) + 55 + "px";

        if (count > 1) {
            $('#btnRemoveproduct').show();
        }


    }
});

var OrderID;
var count = 0;
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
$('#btnRemoveproduct').click(function () {
     
    $('.count' + count).html('');
    var panel2maxHeight = panel2.style.maxHeight.replace("px", "");
    panel2.style.maxHeight = parseInt(panel2maxHeight) + -55 + "px";
    count--;

    if (count <= 1) {
        $('#btnRemoveproduct').hide();
    }

});
var Total = 0;
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
        complete: function () {
            GetReplacementDetails(OrderID);
        },
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



function GetReplacementDetails(OrderID) {
    showLoader();
    UserObject = {
        OrderID: OrderID,
        Flag: 'S',
        OrderType: 6
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
                $.each(data.OrderModelListData, function (index, obj) {

                    $('#ddlcname').val(obj.CompanyId);
                    text = $("#ddlcname option[value='" + obj.CompanyId + "']").text();
                    $('#select2-ddlcname-container').text(text);

                    $('#ddlShipVia').val(obj.ShipVia);
                    text = $("#ddlShipVia option[value='" + obj.ShipVia + "']").text();
                    $('#select2-ddlShipVia-container').text(text);

                    $('#PDiliveryTime').val(obj.DiliveryTime);
                    $('#PComments').val(obj.OrderComments);
                    $('#PFreight').val(obj.freightcharge);
                    if (obj.GSTApply == 1) {
                        $('#PchkApplyGST').attr('checked', true);
                    }
                    else {
                        $('#PchkApplyGST').prop('checked', false);
                    }

                    if (obj.IsPaid == 1) {
                        $('#PchkIsPaid').attr('checked', true);
                    }
                    else {
                        $('#PchkIsPaid').prop('checked', false);
                    }

                    var main = $('#pdata');
                    var main1 = $('#pdata1');
                    count = 0;
                    $.each(obj.orderDetailModelList, function (index, obj1) {
                        count++;
                        var dvVar = $('<div class="form-row ' + count + '"></div>').appendTo(main);
                        $('<div class="form-group col-md-1"><input type="text" class="form-control" id="' + count + '" placeholder="Product Number" value="' + count + '" disabled></div>').appendTo(dvVar);
                        $('<div class="form-group col-md-5"><input type="text" class="form-control" id="' + count + '" placeholder="Product Specification"  value="' + obj1.ProductDetail + '" disabled></div>').appendTo(dvVar);
                        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="' + count + '"    value="' + obj1.ProductPrice + '" placeholder="Unit Price" disabled></div>').appendTo(dvVar);
                        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="' + count + '"   value="' + obj1.Quantity + '" placeholder="Quantity" disabled></div>').appendTo(dvVar);
                        var totalamount = 0;

                        totalamount = obj1.ProductPrice * obj1.Quantity;
                        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="' + count + '" placeholder="Amount" value="' + totalamount + '" disabled></div>').appendTo(dvVar);
                        var panel2maxHeight = panel2.style.maxHeight.replace("px", "");
                        panel2.style.maxHeight = parseInt(panel2maxHeight) + 55 + "px";

                        if (count > 1) {
                            $('#btnRemoveproduct').show();
                        }

                        var dvVar1 = $('<div class="form-row count' + count + '"></div>').appendTo(main1);
                        $('<div class="form-group col-md-1"><input type="text" class="form-control" id="txtpno' + count + '" placeholder="Product Number" value="' + count + '" disabled></div>').appendTo(dvVar1);
                        $('<div class="form-group col-md-5"><input type="text" class="form-control" id="txtpspec' + count + '" placeholder="Product Specification"  value="' + obj1.ProductDetail + '" ></div>').appendTo(dvVar1);
                        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtunitprice' + count + '"  onchange="GetAmount(' + count + ')"   value="' + obj1.ProductPrice + '" placeholder="Unit Price" ></div>').appendTo(dvVar1);
                        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtquantity' + count + '"  onchange="GetAmount(' + count + ')"  value="' + obj1.Quantity + '" placeholder="Quantity" ></div>').appendTo(dvVar1);
                        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtamount' + count + '" placeholder="Amount" value="' + totalamount + '" disabled></div>').appendTo(dvVar1);

                    });
                });
            }


        }
    }
}


$('#btnEditproduct').click(function () {
    $('#CompanyModal').modal('toggle');
});

function GetAmount(Id) {

    var unitprice = $('#txtunitprice' + Id).val();
    var quantity = $('#txtquantity' + Id).val();
    var FinalTotal = unitprice * quantity;
    $('#txtamount' + Id).val(FinalTotal);

}

$('#btnaddproduct').click(function () {

    var main = $('#pdata1');
    AddRow(main);


});

function AddRow(main) {
    count++;
    var dvVar = $('<div class="form-row count' + count + '"></div>').appendTo(main);
    $('<div class="form-group col-md-1"><input type="text" class="form-control" id="txtpno' + count + '" placeholder="Product Number" value="' + count + '" disabled></div>').appendTo(dvVar);
    $('<div class="form-group col-md-5"><input type="text" class="form-control" id="txtpspec' + count + '" placeholder="Product Specification"></div>').appendTo(dvVar);
    $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtunitprice' + count + '"  onchange="GetAmount(' + count + ')"  value="0" placeholder="Unit Price"></div>').appendTo(dvVar);
    $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtquantity' + count + '" onchange="GetAmount(' + count + ')"  value="0" placeholder="Quantity"></div>').appendTo(dvVar);
    $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtamount' + count + '" placeholder="Amount" disabled></div>').appendTo(dvVar);
    //var panel2maxHeight = panel2.style.maxHeight.replace("px", "");
    //panel2.style.maxHeight = parseInt(panel2maxHeight) + 55 + "px";

    if (count > 1) {
        $('#btnRemoveproduct').show();
    }
}


function GetReplacementData() {
    var CompanyId = $('#ddlcname').val();
    var OrderComments = $('#PComments').val();
    var DiliveryTime = $('#PDiliveryTime').val();
    var GSTApply = $('#PchkApplyGST').prop("checked") == true ? 1 : 0;
    var IsPaid = $('#PchkIsPaid').prop("checked") == true ? 1 : 0;
    var ShipVia = $('#ddlShipVia').val();
    var Flag = 'U';
    var freightcharge = $('#PFreight').val();
    UserObject = {
        Flag: Flag,
        CompanyId: CompanyId,
        OrderComments: OrderComments,
        DiliveryTime: DiliveryTime,
        GSTApply: GSTApply,
        IsPaid: IsPaid,
        ShipVia: ShipVia,
        freightcharge: freightcharge,
        OrderID: OrderID
    };
    return UserObject;
}

function InsertUpdatReplacement(UserObject) {

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

            $('#txtmodaltitle').text('Replacement Detail');
            $('#txttext').text('Replacement Detail Edit Sucessfully');
            $('#btnok').attr("href", "/Order/ReplacementList");
            $('#Modalalert').modal("toggle");

        }
    }
}

$('#btnEditReplacement').click(function () {
    var status = validationdata();
    if (status) {
        var UserObject = GetReplacementData();
        InsertUpdatReplacement(UserObject);
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});

$('#btneditproduct').click(function () {
    var status = validationdata();
    if (status) {
        var UserObject = GetReplacementDetaildata();
        InsertUpdatReplacementDetail(UserObject);
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});

function InsertUpdatReplacementDetail(UserObject) {

    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Order/InsertUpdateOrderDetail",
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
            $('#CompanyModal').modal('toggle');
            $('#txtmodaltitle').text('Replacement Product Detail');
            $('#txttext').text('Replacement Product Detail Edit Sucessfully');
            $('#btnok').attr("href", "/Order/ReplacementEdit?OrderID=" + OrderID);
            $('#Modalalert').modal("toggle");

        }
    }
}

function GetReplacementDetail() {
    var orderDetailModelList = [];
    for (var i = 1; i <= count; i++) {

        orderDetailModelList.push({
            ProductDetail: $('#txtpspec' + i).val(),
            Quantity: $('#txtquantity' + i).val(),
            ProductPrice: $('#txtunitprice' + i).val(),
            OrderID: OrderID
        });
    }
    return orderDetailModelList;
}
function GetReplacementDetaildata() {
    var orderDetailModelList = GetReplacementDetail();
    var orderDetailModeljsonstring = JSON.stringify(orderDetailModelList);
    var Flag = 'U';
    UserObject = {
        Flag: Flag,
        orderDetailModeljsonstring: orderDetailModeljsonstring,
    };
    return UserObject;
}
