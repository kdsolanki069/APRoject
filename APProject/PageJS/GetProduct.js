$(document).ready(function () {
    ProductTypeId = getUrlVars()["ProductTypeId"];
    GetProductType(ProductTypeId);
    
});
var counter = 1;

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
            GetProductDetails(ProductTypeId);
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
                    $('.txttype').text(obj.Type + '  ' + obj.ProductTypeName);
                    $('#lblProducttype').text(obj.Type + '  ' + obj.ProductTypeName);
                    $('#lblproddetails').html('');
                    $('#lblproddetails').html(obj.ProductTypeDetail);
                    DispalyPhoto(1, obj.FrontImage, obj.Type);
                    DispalyPhoto(2, obj.DiagramImage, obj.Type);
                    DispalyPhoto(3, obj.ProductTypeImage, obj.Type);
                });
            }
        }
    }
}

function DispalyPhoto(Id, File, Type) {  
   
    if (File != null && File != '') {
        var Files = File.split(',');
        var filesAmount = Files.length;
        var div;      
        for (i = 0; i < filesAmount; i++) {            
            if (Id == 1) {
                $('#tabPhoto').html('');
                $('#divPhoto').html('');
                 
                var Image = PhotoUrl + '' + Type + '/' + Files[i];               
                div = $(' <div id="thumb' + counter + '" class="tab-pane active"></div>').appendTo('#tabPhoto');                
                $('<a class="active" data-toggle="tab" href="#thumb' + counter + '"> <img src="' + Image + '" alt="product-thumbnail" height="100px" width="100px;"></a>').appendTo('#divPhoto');
                $('<a data-fancybox="images" href="' + Image + '"><img src="' + Image + '" alt="product-view " height="500px" width="500px;"></a>').appendTo(div);
                

            }
            else if (Id == 3) {              
                var Image = PhotoUrl + '' + Type + '/' + Files[i];
                div = $(' <div id="thumb' + counter + '" class="tab-pane "></div>').appendTo('#tabPhoto');
                $(' <a data-fancybox="images" href="' + Image + '"><img src="' + Image + '" alt="product-view" height="500px" width="500px;"></a>').appendTo(div);
                $('<a class="" data-toggle="tab" href="#thumb' + counter + '"> <img src="' + Image + '" alt="product-thumbnail" height="100px" width="100px;"></a>').appendTo('#divPhoto');
                
            }
            else if (Id == 2) {
                $('.Diagaram').html('');
                var Image = PhotoUrl + '' + Type + '/' + Files[i];              
                $('<a data-fancybox="images" href="' + Image + '"><img src="' + Image +'" alt="product-view "  height="500px"></a>').appendTo('.Diagaram');
            }
            counter = counter + 1;
        }
    }
}


function GetProductDetails(ProductTypeId) {
    
    UserObject = {
        ProductTypeId: ProductTypeId,
        Flag: 'SByType'
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
            
                $('#ProductData').html('');
                 
                
                var Data = ProductArray(data.ProductListData);
                 
                $.each(Data, function (index, obj) {
                     
                    firstrow(obj.Producttype);
                   

                    $.each(obj.ProductData, function (index, obj1) {
                        var tr = $('<tr></tr>').appendTo('#ProductData');                       
                            if (I == 1) {
                                $(' <td valign="middle" class="tdstyle" rowspan="' + obj.ProductData.length + '" colspan="1" align="center" width="122"><span class="tdspan">' + obj.Producttype + '<br /></span></td>').appendTo(tr);
                            }                   
                        $('<td valign="middle" class="tdstyle" align="center" width="138"><span class="tdspan">' + obj1.ProductSize + '</span></td>').appendTo(tr);
                        var type = obj.Producttype;
                        if (type == "11V9" || type == "12V9" || type == "15V9" || type == "3A1" || type == "11A2" || type == "12A2" || type == "4A2" || type == "6A2") {
                            $(' <td valign="middle" class="tdstyle" align="center" width="134"><span class="tdspan">' + obj1.ProductUw + ' <br /></span></td>').appendTo(tr);
                        }
                       
                           
                            $(' <td valign="middle" class="tdstyle" align="center" width="138"><span class="tdspan">' + obj1.ProductX+'<br /></span></td>').appendTo(tr);
                            $(' <td valign="middle" class="tdstyle" align="center" width="139"><span class="tdspan">' + obj1.ProductCode+'</span></td>').appendTo(tr);
                        var Grade = '';
                        $.each(obj1.ProductGrade, function (index, obj2) {
                             
                            var count = 0;
                            if (obj2[count] == 'R') {
                                Grade = Grade + '<span class="w3-badge Orange" >R</span>';
                                return true;
                            }
                            else if (obj2[count] == 'M') {
                                Grade = Grade + '<span class="w3-badge Green" >M</span>';
                                return true;
                            }
                            else if (obj2[count] == 'F') {
                                Grade = Grade + '<span class="w3-badge blue"  ">F</span>';
                                return true;
                            }
                            else if (obj2[count] == 'L') {
                                Grade = Grade + '<span class="w3-badge chocolate">L</span>';
                                return true;
                            }
                            else {
                                Grade = Grade + '<span class="w3-badge Green" >M</span>SP ';
                            }
                            count = count + 1;
                             
                        });
                       
                        $(' <td valign="middle" class="tdstyle" align="" style=" margin-left: 10px; width="218"><span class="tdspan">' + Grade+'</span> </td>').appendTo(tr);
                        
                        I = I + 1;
                    });
                  
                });

                var tr = $('<tr></tr>').appendTo('#ProductData');  
                $(' <td valign="top" colspan="6" rowspan="1" class="tdstyle" width="891">Other size can be made according to customers requirement. Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ABC" target="_blank">ABC</a></td>').appendTo(tr);

               
               
            }


        }
    }
}

var Product = [];
var ProductData = [];


function ProductArray(ProductListData) {
    var I = 0;   
        if (ProductListData.length > 0) {
            Product.push({
            Producttype: ProductListData[0].Type,
            ProductData: ProductDataArray(ProductListData),           
        });
    }
    return Product;
}
function ProductDataArray(ProductListData) {
    var I = 0;
    var ProductCode = '';

    for (var i = 0; i < ProductListData.length; i++) {
         
        if (ProductCode.trim() != ProductListData[i].ProductCode.trim()) {
           
            ProductData.push({
                ProductSize: ProductListData[i].ProductSize,
                ProductX: ProductListData[i].ProductX,
                ProductUw: ProductListData[i].ProductUw,
                ProductCode: ProductListData[i].ProductCode,
                ProductGrade: ProductGrade(ProductListData, ProductListData[i].ProductCode.trim()),               
            });
             
            ProductCode = ProductListData[i].ProductCode.trim();
        }
    }
    return ProductData;
}
function ProductGrade(ProductListData, ProductCode) {
    var ProductGrade = [];
    
    for (var i = 0; i < ProductListData.length; i++) {
        if (ProductCode.trim() == ProductListData[i].ProductCode.trim()) {
            ProductGrade.push(ProductListData[i].ProductGrade.trim());
        }        
    }
    return ProductGrade;
}


function firstrow(type) {
    var tr = $('<tr></tr>').appendTo('#ProductData');   
    $(' <td valign="middle" class="tdstyle" align="center" width="122"><strong><span class="tdspan">Model</span></strong></td>').appendTo(tr);
    $('<td valign="middle" class="tdstyle" align="center" width="138"><strong><span class="tdspan">Size (mm) </br> Dia X  Thick X bore</span></strong></td>').appendTo(tr);
    if (type == "11V9" || type == "12V9" || type == "15V9" || type == "3A1") {
        $(' <td valign="middle" class="tdstyle" align="center" width="134"><strong><span class="tdspan">U (mm)<br /></span></strong></td>').appendTo(tr);

    }
    if (type == "11A2" || type == "12A2" || type == "4A2" || type == "6A2") {
        $(' <td valign="middle" class="tdstyle" align="center" width="134"><strong><span class="tdspan">W (mm)<br /></span></strong></td>').appendTo(tr);

    }   
    $('<td valign="middle" class="tdstyle" align="center" width="138"><strong><span class="tdspan">X (mm)</span></strong></td>').appendTo(tr);
    $('<td valign="middle" class="tdstyle" align="center" width="139"><strong><span class="tdspan">Code No</span></strong></td>').appendTo(tr);
    $(' <td valign="middle" class="tdstyle" align="center" width="218"><strong><span class="tdspan">Grade <br /></span></strong></td>').appendTo(tr);
  
}