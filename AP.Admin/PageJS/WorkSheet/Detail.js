$(document).ready(function () {
    //$(document).keypress(function (event) {
    //    var keycode = (event.keyCode ? event.keyCode : event.which);
    //    if (keycode == '13') {
    //        $('#vr-sc').hide();
    //        $("#btnApplysearch").click();
    //    }
    //});
    GetWorkSheet();
});


function GetWorkSheet() {
    showLoader();
    Flag = 'S';
    var WorkId = -1;
    UserObject = {
        WorkId: WorkId,
        Flag: Flag
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/WorkSheet/GetWorkSheet",
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
                if ($.fn.DataTable.isDataTable("#worksheetTable")) {
                    $('#worksheetTable').DataTable().destroy();
                    }
                $('#WorkSheetData').html('');
                   
                $.each(data.WorkSheetModelListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#WorkSheetData');
                        $('<td> ' + I + '</td>').appendTo(tr);
                        $('<td>' + obj.Date + '</td>').appendTo(tr);
                        $('<td>' + obj.CompanyName+ '</td>').appendTo(tr);
                        $('<td>' + obj.Description + '</td>').appendTo(tr);
                        if (obj.Status == 0) {
                            $('<td><div class="card text-white bg-danger "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Pending</div></div></td>').appendTo(tr);
                        }
                        if (obj.Status == 1) {
                            $('<td><div class="card text-white bg-warning"><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">In Progress</div></div></td>').appendTo(tr);
                        }
                        else if (obj.Status == 2) {

                            $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Completed</div></div></td>').appendTo(tr);
                        }
                    
                    $('<td> <button type="button" class="btn btn-warning " onclick="Editworksheet(' + obj.WorkId + ')"  title="Edit Work Detail!" ><i class= "fa fa-edit"></i></button ></td>').appendTo(tr);
                        I = I + 1;
                    });

                if (!$.fn.DataTable.isDataTable('#worksheetTable')) {
                    $('#worksheetTable').DataTable();
                    }
               


            }
        }

    }
}



$('#btnAdd').click(function () {

    window.location.href = '/WorkSheet/Add';
});

function Editworksheet(WorkId) {

    window.location.href = '/WorkSheet/Edit?WorkId=' + WorkId;
}