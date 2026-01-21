
$(document).ready(function () {

   
    GetProductType(-1);
});

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
                $.each(data.ProductTypeModelListData, function (index, obj)
                {
                    $("#ddlProductType").append($("<option/>").val(obj.ProductTypeId).text(obj.Type + ' ( ' + obj.ProductTypeName + ' ) '));

                });

            }
        }
    }
}

$('#btnaddproduct').click(function () {
    var status = validationdata();
    if (status) {
        InsertUpdatProductType();
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});


function InsertUpdatProductType() {
    var Flag = 'I';   
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
                $('#txttext').text('Product  Detail Add Sucessfully');
                $('#btnok').attr("href", "/Product/List");
                $('#Modalalert').modal("toggle");
            }
        }
    }
}

