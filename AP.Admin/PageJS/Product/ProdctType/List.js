$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    GetProductType(-1);
});


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
                var I = 1;
                if ($.fn.DataTable.isDataTable("#ProductTypeTable")) {
                    $('#ProductTypeTable').DataTable().destroy();
                }
                $('#ProductTypeData').html('');
                $.each(data.ProductTypeModelListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#ProductTypeData');
                    $('<td> ' + I + '</td>').appendTo(tr);
                    $('<td> ' + obj.Type + '</td>').appendTo(tr);
                    $('<td> ' + obj.ProductTypeName + '</td>').appendTo(tr);
                    var imagepath = "~/Content/ProductType/" + obj.Type + "/" + obj.FrontImage;
                    $('<td><img src="' + imagepath + '" height="300px" width="300px;"></td>').appendTo(tr);
                    $('<td> <button type="button" class="btn btn-warning " onclick="EditProductType(' + obj.ProductTypeId + ')"  title="Edit Product Type!" ><i class= "fa fa-edit"></i></button > </td>').appendTo(tr);
                    I = I + 1;
                });

                if (!$.fn.DataTable.isDataTable('#ProductTypeTable')) {
                    $('#ProductTypeTable').DataTable();
                }
            }


        }
    }
}
function EditProductType(ProductTypeId) {

    window.location.href = '/Product/TypeEdit?ProductTypeId=' + ProductTypeId;
}
