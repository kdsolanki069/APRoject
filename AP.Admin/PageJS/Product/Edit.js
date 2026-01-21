$(document).ready(function () {
    GetProductType(-1);
    ProductID = getUrlVars()["ProductID"];
    GetProductDetails(ProductID);
});
var ProductID = 0;
var FrontImage = "";
var DiagramImage = "";
var ProductTypeImage = "";

//For Get Url Variabale Value
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

//For Get Product Type Detail From DB For Dropdown Selection
function GetProductType(ProductTypeId) {
    showLoader();
    UserObject = {
        ProductTypeId: ProductTypeId,
        Flag: 'S'
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Product/GetProductType",
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
                $("#ddlProductType").append($("<option/>").val('-1').text('Select Product Type'));
                $.each(data.ProductTypeModelListData, function (index, obj) {
                    $("#ddlProductType").append($("<option/>").val(obj.ProductTypeId).text(obj.Type + ' ( ' + obj.ProductTypeName + ' ) '));

                });

            }
        }
    }
}

function GetProductDetails(ProductID) {
    showLoader();
    UserObject = {
        ProductID: ProductID,
        Flag: 'S'
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Product/GetProduct",
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
                $.each(data.ProductListData, function (index, obj) {

                    $('#ddlProductType').val(obj.ProductTypeId);
                    text = $("#ddlProductType option[value='" + obj.ProductTypeId + "']").text();
                    $('#select2-ddlProductType-container').text(text);                    
                    $('#txtProductsize').val(obj.ProductSize);
                    $('#txtProductx').val(obj.ProductX);
                    $('#txtProductuw').val(obj.ProductUw);
                    $('#txtProductgrade').val(obj.ProductGrade);
                    $('#txtProductcode').val(obj.ProductCode);
                    $('#txtProductprice').val(obj.ProductPrice);
                    $('#txtProductcompany').val(obj.ProductCompany);
                    $('#txtProductabrasive').val(obj.ProductAbrasive);
                    $('#txtProductweight').val(obj.ProductWeight);
                    $('#txtProductquality').val(obj.ProductQuality);
                    $('#txtProductmovement').val(obj.ProductMovement);
                    if (obj.ProductActive == 1) {
                        $('#chkActive').attr('checked', true);
                    }
                    else {
                        $('#chkActive').prop('checked', false);
                    }
                });
            }
        }
    }
}

$('#btneditproduct').click(function () {
    var status = validationdata();
    if (status) {
        InsertUpdatProductType();
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});

function InsertUpdatProductType() {
    var Flag = 'U';
    var ProductID = getUrlVars()["ProductID"];
    var ProductTypeId = $('#ddlProductType').val();
    var ProductSize = $('#txtProductsize').val();
    var ProductX = $('#txtProductx').val();
    var ProductUw = $('#txtProductuw').val();
    var ProductGrade = $('#txtProductgrade').val();
    var ProductCode = $('#txtProductcode').val();
    var ProductPrice = $('#txtProductprice').val();
    var ProductCompany = $('#txtProductcompany').val();
    var ProductAbrasive = $('#txtProductabrasive').val();
    var ProductWeight = $('#txtProductweight').val();
    var ProductQuality = $('#txtProductquality').val();
    var ProductMovement = $('#txtProductmovement').val();
    var ProductActive = $('#chkActive').prop("checked") == true ? 1 : 0;
    var Changeby = 0;
    UserObject = {
        Flag: Flag,
        ProductID: ProductID,
        ProductTypeId: ProductTypeId,
        ProductSize: ProductSize,
        ProductX: ProductX,
        ProductUw: ProductUw,
        ProductGrade: ProductGrade,
        ProductCode: ProductCode,
        ProductPrice: ProductPrice,
        ProductCompany: ProductCompany,
        ProductAbrasive: ProductAbrasive,
        ProductWeight: ProductWeight,
        ProductQuality: ProductQuality,
        ProductMovement: ProductMovement,
        ProductActive: ProductActive,
        Changeby: Changeby
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Product/InsertUpdateProduct",
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
                InsertUpdatProductType
                $('#txtmodaltitle').text('Product  Detail');
                $('#txttext').text('Product  Detail Edit Sucessfully');
                $('#btnok').attr("href", "/Product/List");
                $('#Modalalert').modal("toggle");
            }
        }
    }
}