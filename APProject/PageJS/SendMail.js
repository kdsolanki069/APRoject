

$('#btnsendmail').click(function () {
    var Name = $('#txtName').val();
    var EmailId = $('#txtEmail').val();
    var Subject = $('#txtSubject').val();
    var EmailMessage = $('#txtMassage').val();
    UserObject = {
        Name: Name,
        EmailId: EmailId,
        Subject: Subject,
        EmailMessage: EmailMessage,
        ToEmailId: 'ABC'
    };
    $.ajax({
        type: "Post",
        contentType: "application/json; charset=utf-8",
        url: "/Home/SendEmail",
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
            alert("Mail Send Sucessfully");
        }
    }
});
