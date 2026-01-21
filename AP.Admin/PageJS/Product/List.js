$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    GetProductDetails(-1);
});
var CompanyList;

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
                var I = 1;
                if ($.fn.DataTable.isDataTable("#ProductTable")) {
                    $('#ProductTable').DataTable().destroy();
                }
                $('#ProductData').html('');               
                $.each(data.ProductListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#ProductData');
                    $('<td> ' + I + '</td>').appendTo(tr);
                    $('<td> ' + obj.Type + '</br>' + obj.ProductSize + '</br> X = ' + obj.ProductX + '&nbsp;&nbsp; U/w =' + obj.ProductUw+'</td>').appendTo(tr);
                    $('<td> ' + obj.ProductCode + '</td>').appendTo(tr);
                    $('<td> ' + obj.ProductPrice + '</td>').appendTo(tr);
                    $('<td> <button type="button" class="btn btn-warning " onclick="EditProduct(' + obj.ProductID + ')"  title="Edit Product!" ><i class= "fa fa-edit"></i></button > </td>').appendTo(tr);
                    I = I + 1;
                });

                if (!$.fn.DataTable.isDataTable('#ProductTable')) {
                    $('#ProductTable').DataTable();
                }
            }


        }
    }
}
function EditProduct(ProductID) {

    window.location.href = '/Product/Edit?ProductID=' + ProductID;
}

