$(document).ready(function () {

    GetProductType(-1);
});

function GetProductType(ProductTypeId) {
     
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
                 
                //$('#ProductTypeData').html('');
                $.each(data.ProductTypeModelListData, function (index, obj) {
                    if ($("a").hasClass(obj.Type)) {

                         
                        $("." + obj.Type).attr("href", "/Product/detail?ProductTypeId=" + obj.ProductTypeId);
                    }
                    //var div1 = $('<div class="services-block">   </div >').appendTo('#ProductTypeData');
                    //var div2 = $('<div class="inner-box"></div>').appendTo(div1);
                    //var div3 = $(' <div class="image-box"></div>').appendTo(div2);

                    //var FrontImage = PhotoUrl + '' + obj.Type + '/' + obj.FrontImage;
                    //$('<figure><img src="' + FrontImage + '"  height="300px" width="150px;"></figure>').appendTo(div3);
                    //$('<div class="overlay-box">   <div class="btn-box"> <a href="/Product/detail?ProductTypeId=' + obj.ProductTypeId + '"><i class="icon arrow-top-right"></i>Read More</a> </div> </div>').appendTo(div3);
                    //$('<div class="title"><h3>' + obj.ProductTypeName + '(' + obj.Type + ')</h3> <i class="icon flaticon-user-1"></i></div>').appendTo(div3);

                    //$('<div class="image-box"><div class="image"><a href="/Product/detail?ProductTypeId=' + obj.ProductTypeId + '"><img src="' + FrontImage + '" alt="" height="300px" width="150px;" /></a></div></div>').appendTo(div2);
                    //$('<div class="lower-content"><div class="price-box"><h3><a href="/Product/detail?ProductTypeId=' + obj.ProductTypeId + '">' + obj.Type + ' </a></h3><div class="">' + obj.ProductTypeName + '</div></div></div>').appendTo(div2);
                });
            }
        }
    }
}
