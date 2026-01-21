$(document).ready(function () {
       
    GetCompanyDetails(-1);
    var acc = document.getElementsByClassName("accordion");
    var i;
    GetCompanyDetails(-1);
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
        $('<div class="form-group col-md-5"><input type="text" class="form-control" id="txtpspec' + count + '" placeholder="Product Specification"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtunitprice' + count + '"  onchange="GetAmount(' + count + ')"  value="0" placeholder="Unit Price"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtquantity' + count + '" onchange="GetAmount(' + count +')"  value="0" placeholder="Quantity"></div>').appendTo(dvVar);
        $('<div class="form-group col-md-2"><input type="number" class="form-control" id="txtamount' + count + '" placeholder="Amount" disabled></div>').appendTo(dvVar);
        var panel2maxHeight = panel2.style.maxHeight.replace("px", "");
        panel2.style.maxHeight = parseInt(panel2maxHeight) + 55 + "px";

        if (count > 1) {
            $('#btnRemoveproduct').show();
        }


    }
    
});
var count = 1;

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
            hideLoader();
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

$('#btnAddReplacement').click(function () {
    var status = validationdata();
    if (status) {
        var UserObject =  GetReplacementValue();
        InsertUpdateReplacement(UserObject);
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});

function GetReplacementValue() {
    var UserObject = GetReplacementData();
    return UserObject;
}


function GetReplacementDetail() {
    var orderDetailModelList = [];
    for (var i = 1; i <= count; i++) {
       
        orderDetailModelList.push({
            ProductDetail: $('#txtpspec' + i).val(),
            Quantity: $('#txtquantity' + i).val(),
            ProductPrice: $('#txtunitprice' + i).val()         
        });
        Total = Total + parseInt($('#txtamount' + i).val());
        
    } 
    return orderDetailModelList;
        
}

function GetReplacementData() {
    var CompanyId = $('#ddlcname').val();
    var OrderComments = $('#PComments').val();
    var DiliveryTime = $('#PDiliveryTime').val();
    var GSTApply = $('#PchkApplyGST').prop("checked") == true ? 1 : 0;
    var ShipVia = $('#ddlShipVia').val();
    var freightcharge = $('#PFreight').val();
    var TotalAmount = 0;
     var IsPaid = $('#PchkIsPaid').prop("checked") == true ? 1 : 0;
    
    if ($('#PchkApplyGST').prop("checked") == true) {
        Total = parseInt(Total) + (parseInt(Total) * .18) + parseInt($('#PFreight').val());
        TotalAmount = Total;
    }
    else
    {
        TotalAmount = Total;
    }    
   
    var OrderType = 6;
    var orderDetailModelList = GetReplacementDetail();
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
        freightcharge: freightcharge,
        OrderComments: OrderComments,
        DiliveryTime: DiliveryTime,
        GSTApply: GSTApply,
        ShipVia: ShipVia,
        TotalAmount: TotalAmount,
        OrderType: OrderType,
        orderDetailModelListString: orderDetailModelListString,
        OrderDate: OrderDate,
        OrderNo: OrderNo,
        IsPaid:IsPaid
    };
    return UserObject;
}

function InsertUpdateReplacement(UserObject) {   
   
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
                $('#txtmodaltitle').text('Replacement Detail');
                $('#txttext').text('Replacement Detail Add Sucessfully');
                $('#btnok').attr("href", "/Order/ReplacementList");
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

