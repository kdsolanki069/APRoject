$(document).ready(function () {

    CID = getUrlVars()["CID"];
    GetCompanyDetails(CID);

});

function GetCompanyDetails(CompanyId) {
    showLoader();
    UserObject = {
        CompanyId: CompanyId
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Company/GetCompanyDetails",
        data: JSON.stringify(UserObject),
        async: true,
        dataType: "json",
        success: OnSuccess,
        complete: function () {
            GetDashboard(CID);
            GetCompanyProduct(CID);
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
                if (CompanyId != -1) {
                     
                    $.each(data.CompanyDetailModelListData, function (index, obj) {
                        var cname = obj.CompanyName;
                        var ret = cname.split(" ");
                        var shortCode = '';
                        for (i = 0; i < ret.length; i++) {
                            shortCode = shortCode + '' + ret[i].charAt(0).toUpperCase();
                        }

                        $('.cshortname').text(shortCode);
                        //$('#cid').val(obj.CompanyId);
                        $('.cname').text(obj.CompanyName);
                        $('#cgst').text(obj.CompanyGST);
                        $('#caddress').text(obj.CompanyAddress + ' (' + obj.CompanyPinCode + ') ' + obj.CompanyState + ' ' + obj.Companycountry);
                        $('#cphone').text(obj.CompanyPhone);
                        $('#cemail').text(obj.CompanyEmail);
                        $('#ccontactname').text(obj.ContactPersonName);

                    });
                }
            }
        }

    }
}

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
function GetDashboard(CID) {
    showLoader();
     
    UserObject = {
        CompanyId: CID
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Company/GetCompanyDashboard",
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
                 
                $('#lblQuatationCount').text(data.DeshboardData.QuatationCount);
                $('#lblPerfomaCount').text(data.DeshboardData.PerfomaCount);
                $('#lblChallanCount').text(data.DeshboardData.ChallanCount);
                $('#lblSOrderCount').text(data.DeshboardData.SOrderCount);
                $('#lblPOrderCount').text(data.DeshboardData.POrderCount);
                $('.lnkPurchase').attr("href", "/PurchaseOrder/List?CID=" + CID);
                $('.lnkSale').attr("href", "/PurchaseOrder/SaleList?CID=" + CID);
                $('.lnkChallan').attr("href", "/order/ChallanList?CID=" + CID);
                $('.lnkProforma').attr("href", "/order/ProformaList?CID=" + CID);
                $('.lnkQuotation').attr("href", "/order/QuotationList?CID=" + CID);
            }
        }
    }
}


function GetCompanyProduct(CID) {
    showLoader();
     
    UserObject = {
        CompanyId: CID
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Company/GetCompanyProduct",
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
                if ($.fn.DataTable.isDataTable("#tblProductDetail")) {
                    $('#tblProductDetail').DataTable().destroy();
                }
                $('#ProductData').html('');
                CompanyList = data.CompanyDetailModelListData;
                $.each(data.OrderDetailModelListData, function (index, obj) {
                    var tr = $('<tr></tr>').appendTo('#ProductData');

                    $('<td>' + I + '</td>').appendTo(tr);
                    if (obj.OrderType == 1) {
                        $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Quotation</div></div></td>').appendTo(tr);
                    }
                    if (obj.OrderType == 2) {
                        $('<td><div class="card text-white bg-success"><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Proforma</div></div></td>').appendTo(tr);
                    }
                    else if (obj.OrderType == 3) {

                        $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Challan</div></div></td>').appendTo(tr);
                    }
                    else if (obj.OrderType == 4) {

                        $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Purchase Order</div></div></td>').appendTo(tr);
                    }
                    else if (obj.OrderType == 5) {

                        $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Sale Order</div></div></td>').appendTo(tr);
                    }
                    else if (obj.OrderType == 6) {

                        $('<td><div class="card text-white bg-success "><div class="card-body" style="padding-top: 5px;padding-left: 5px;padding-right: 5px;padding-bottom: 5px;text-align: center;">Replacement</div></div></td>').appendTo(tr);
                    }
                    $('<td>' + obj.OrderNo + '</td>').appendTo(tr);
                    $('<td>' + $.trim(obj.ProductDetail) + '</td>').appendTo(tr);
                    $('<td>' + $.trim(obj.ProductPrice) + '</td>').appendTo(tr);

                    I = I + 1;
                });

                if (!$.fn.DataTable.isDataTable('#tblProductDetail')) {
                    $('#tblProductDetail').DataTable();
                }
            }
        }
    }
}
