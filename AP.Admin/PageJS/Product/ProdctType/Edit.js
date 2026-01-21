$(document).ready(function () {
    ProductTypeId = getUrlVars()["ProductTypeId"];
    CKEDITOR.replace('txtProducttypedetail');
    GetProductType(ProductTypeId);
});
var ProductTypeId = 0;
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
function readURL(input) {

    if (input.files) {
        $('#' + input.name).html('');
        var filesAmount = input.files.length;
        var div = $('<div class="row"></div>').appendTo('#' + input.name);
        var counter = 1;
        for (i = 0; i < filesAmount; i++) {
             
            var reader = new FileReader();
            reader.onload = function (e) {

                $('<div class="img-wrap col-md-3 ' + input.attributes.secondname.value + + '' + counter + ' " > <button type="button" class="close" onclick=RemovePhoto("' + input.attributes.secondname.value + + '' + counter + '")><span>&times;</span></button><img src="' + e.target.result + '" id="' + input.attributes.secondname.value + + '' + counter + '" class=" m-b-40 img-circle"   style="max-width: 300px; max-height: 300px; padding: 20px; "/></div>').appendTo(div);
                counter = counter + 1;
            }

            reader.readAsDataURL(input.files[i]);


        }
    }
}
$(".vrlogo").change(function () {

    readURL(this);
});
$("#vr-fileupload").click(function () {
    $("#vr-logo-avatar").click();
});
//For Remove Selectd Photo
function RemovePhoto(id) {
    debugger
    $('.' + id).remove();
    //$('#imgprofile').attr('src', '~/assets-front/img/profile-picture.png');

}
//For Dispaly New Selectd Photo
function GetImageSrting(input, Name, FileType) {
    var OldImage = "";
    if (FileType == 'F') {
        OldImage = FrontImage;
    }
    if (FileType == 'D') {
        OldImage = DiagramImage;
    }
    if (FileType == 'P') {
        OldImage = ProductTypeImage;
    }
    var imagevalue = '';
     
    if ($("input[name=" + input + "]").val().length > 0) {

        var ext = $("input[name=" + input + "]").val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {

            $('#Sucesstext').removeClass('text-success');
            $('#Sucesstext').text('invalid File format Please Select png ,jpg or jpeg file for upload ' + Name + '!.');
            $('#Sucesstext').addClass('text-center text-danger semi-bold');
            $('#mySuccess').modal('toggle');

            return OldImage;
        }
        else {

            var Sizecount = 0;
            for (var i = 0; i <= $("input[name=" + input + "]")[0].files.length - 1; i++) {

                var fsize = $("input[name=" + input + "]")[0].files.item(i).size;
                var file = Math.round((fsize / 1024 / 1024));
                // The size of the file. 
                if (file >= 2) {
                    Sizecount = Sizecount + 1;
                }
            }
            if (Sizecount > 0) {
                $('#Sucesstext').removeClass('text-success');
                $('#Sucesstext').text(Name + ' File size is large, Upload File Upto 2 MB.');
                $('#Sucesstext').addClass('text-center text-danger semi-bold');
                $('#mySuccess').modal('toggle');
                return OldImage;
            }
            else {
                var fileUpload = $("input[name=" + input + "]").get(0);
                files = fileUpload.files;
                fileData = new FormData();
                for (var i = 0; i < files.length; i++) {
                    fileData.append(files[i].name, files[i]);
                }
                fileData.append('files', fileUpload);
                fileData.append('ProductType', $('#txtProducttype').val());
                fileData.append('FileType', FileType);
                $.ajax({
                    url: "/Product/ProductTypePhoto/", //AddImage
                    type: "POST",
                    async: false,
                    contentType: false,
                    processData: false,
                    data: fileData,
                    success: function (result) {
                         
                        imagevalue = result;
                    },
                    error: function (err) {

                    }
                });
                return imagevalue;
            }
        }
    }
    else {

        return OldImage;
    }
}
//For Validate And Edit product Type
$('#btnaddproducttype').click(function () {
    var status = validationdata();
    if (status) {
         
        InsertUpdateProductType();
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});
//For Update Product Type Ajex Call
function InsertUpdateProductType() {
    var Flag = 'U';
    var Type = $('#txtProducttype').val();
    var ProductTypeName = $('#txtProducttypename').val();
    var FrontImage = GetImageSrting("vrlogo1", "Front Image", "F");
    var DiagramImage = GetImageSrting("vrlogo2", "Diagram Image", "D");
    var ProductTypeImage = GetImageSrting("vrlogo3", "Product's Image", "P");
    var ProductTypeDetail = CKEDITOR.instances['txtProducttypedetail'].getData();
    var ProductTypeActive = $('#chkActive').prop("checked") == true ? 1 : 0;
    var ProductTypeId = getUrlVars()["ProductTypeId"];
    UserObject = {
        Flag: Flag,
        ProductTypeId: ProductTypeId,
        Type: Type,
        ProductTypeName: ProductTypeName,
        FrontImage: FrontImage,
        DiagramImage: DiagramImage,
        ProductTypeImage: ProductTypeImage,
        ProductTypeDetail: ProductTypeDetail,
        ProductTypeActive: ProductTypeActive
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Product/InsertUpdateProductType",
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
                
                $('#txtmodaltitle').text('Product Type Detail');
                $('#txttext').text('Product Type Detail Edit Sucessfully');
                $('#btnok').attr("href", "/Product/Type");
                $('#Modalalert').modal("toggle");
            }
        }
    }
}
//For Get Product Type Detail From DB
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
                $.each(data.ProductTypeModelListData, function (index, obj) {
                    $('#txtProducttype').val(obj.Type);
                    $('#txtProducttypename').val(obj.ProductTypeName);
                    CKEDITOR.instances['txtProducttypedetail'].setData(obj.ProductTypeDetail);
                    FrontImage = obj.FrontImage;
                    DiagramImage = obj.DiagramImage;
                    ProductTypeImage = obj.ProductTypeImage;
                    DispalyPhoto('flFrontImage', obj.FrontImage, obj.Type, 'vrlogo1');  
                    DispalyPhoto('flDiagramImage', obj.DiagramImage, obj.Type, 'vrlogo2');  
                    DispalyPhoto('flProductPhoto', obj.ProductTypeImage, obj.Type, 'vrlogo3');
                    if (obj.ProductTypeActive == 1) {
                        $('#chkActive').attr('checked', true);
                    }
                    else {
                        $('#chkActive').prop('checked', false);
                    }
                    
                });

                if (!$.fn.DataTable.isDataTable('#ProductTypeTable')) {
                    $('#ProductTypeTable').DataTable();
                }
            }
        }
    }
}
//For Dispaly Old Selectd Photo
function DispalyPhoto(Id,File,Type,name) {
    $('#' + name).html('');  
    if (File != null && File != '')
    {
        var Files = File.split(',');
        var filesAmount = Files.length;
        var div = $('<div class="row"></div>').appendTo('#' + name);
        var counter = 1;
        for (i = 0; i < filesAmount; i++) {            
            var imagepath = "~/Content/ProductType/" + Type + "/" + Files[i];
            $('<div class="img-wrap col-md-3 ' + Id + + '' + counter + ' " > <button type="button" class="close" onclick=RemovePhoto("' + Id + + '' + counter + '")><span>&times;</span></button><img src="' + imagepath + '" id="' + Id + + '' + counter + '" class=" w-100 m-b-40 img-circle"   style="max-width: 300px; max-height: 300px; padding: 20px; "/></div>').appendTo(div);
            counter = counter + 1;
        }
    }
    
}



