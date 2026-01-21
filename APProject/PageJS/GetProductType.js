$(document).ready(function () {
  
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
               
                $('#ProductTypeData').html('');
                $.each(data.ProductTypeModelListData, function (index, obj) {
                    var div1 = $('<div class="shop-item col-lg-6 col-md-6 col-sm-6 col-xs-12"></div>').appendTo('#ProductTypeData');
                    var div2 = $('<div class="inner-box"></div>').appendTo(div1);

                    var FrontImage = PhotoUrl + '' + obj.Type + '/'+ obj.FrontImage;
                    $('<div class="image-box"><div class="image"><a href="/Product/detail?ProductTypeId=' + obj.ProductTypeId + '"><img src="' + FrontImage + '" alt="" height="300px" width="150px;" /></a></div></div>').appendTo(div2);
                    $('<div class="lower-content"><div class="price-box"><h3><a href="/Product/detail?ProductTypeId=' + obj.ProductTypeId + '">' + obj.Type + ' </a></h3><div class="">' + obj.ProductTypeName + '</div></div></div>').appendTo(div2);
                });
            }
        }
    }
}
