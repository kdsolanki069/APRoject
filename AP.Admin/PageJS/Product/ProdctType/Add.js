$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    CKEDITOR.replace('txtProducttypedetail');
});
function readURL(input) {

    if (input.files) {
        $('#' + input.name).html('');
        var filesAmount = input.files.length;
        var div = $('<div class="row"></div>').appendTo('#' + input.name);
        var counter = 1;
        for (i = 0; i < filesAmount; i++) {
        
            var reader = new FileReader();
            reader.onload = function (e) {

                $('<div class="img-wrap col-md-3 ' + input.attributes.secondname.value + + '' + counter + ' " > <button type="button" class="close" onclick=RemovePhoto("' + input.attributes.secondname.value + + '' + counter + '")><span>&times;</span></button><img src="' + e.target.result + '" id="' + input.attributes.secondname.value + + '' + counter + '" class="w-100 m-b-40 img-circle"   style="max-width: 300px; max-height: 300px; padding: 20px; "/></div>').appendTo(div);
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

function RemovePhoto(id) {
    debugger
    $('.' + id).remove();
    //$('#imgprofile').attr('src', '~/assets-front/img/profile-picture.png');

}

function GetImageSrting(input, Name, FileType) {
  
    var imagevalue = '';
    if ($("input[name=" + input + "]").val().length > 0) {
        
        var ext = $("input[name=" + input + "]").val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {
      
            $('#Sucesstext').removeClass('text-success');
            $('#Sucesstext').text('invalid File format Please Select png ,jpg or jpeg file for upload ' + Name+'!.');
            $('#Sucesstext').addClass('text-center text-danger semi-bold');
            $('#mySuccess').modal('toggle');

            csrlogo = $('#Logourl').val();
        }
        else {
            
            var Sizecount = 0;
            for (var i = 0; i <= $("input[name=" + input + "]")[0].files.length - 1; i++) {

                var fsize = $("input[name=" + input + "]")[0].files.item(i).size;
                var file = Math.round((fsize / 1024 / 1024));
                // The size of the file. 
                if (file >= 4) {                   
                    Sizecount = Sizecount + 1;
                } 
            }
            if (Sizecount >0) {
                $('#Sucesstext').removeClass('text-success');
                $('#Sucesstext').text(Name + ' File size is large, Upload File Upto 4 MB.');
                $('#Sucesstext').addClass('text-center text-danger semi-bold');
                $('#mySuccess').modal('toggle');
            }
            else
            {
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

       imagevalue = '';
    }
}

$('#btnaddproducttype').click(function () {
    var status = validationdata();
    if (status) {
        InsertUpdateProductType();
    }
    else {
        $('#Modalvalidation').modal("toggle");

    }

});

function InsertUpdateProductType() {
    var Flag = 'I';
    var Type = $('#txtProducttype').val();
    var ProductTypeName = $('#txtProducttypename').val();
    var FrontImage = GetImageSrting("vrlogo1", "Front Image", "F");
    var DiagramImage = GetImageSrting("vrlogo2", "Diagram Image", "D");
    var ProductTypeImage = GetImageSrting("vrlogo3", "Product's Image", "P");
    var ProductTypeDetail = CKEDITOR.instances['txtProducttypedetail'].getData();
    var ProductTypeActive = $('#chkActive').prop("checked") == true ? 1 : 0;  
    UserObject = {
        Flag: Flag,
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
                $('#txttext').text('Product Type Detail Add Sucessfully');
                $('#btnok').attr("href", "/Product/Type");
                $('#Modalalert').modal("toggle");
            }
        }
    }
}
