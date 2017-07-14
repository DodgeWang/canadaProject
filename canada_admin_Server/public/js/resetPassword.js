$(function() {

    var oldPassword = $("input[name='oldPassword']");
    var newPassword = $("input[name='newPassword']");
    var confirmNewPass = $("input[name='confirmNewPass']");
    $('#formSubmit').click(function() {
        if (oldPassword.val() === '' || newPassword.val() === '' || confirmNewPass.val() === '') return alert('输入框内容不能为空');
        if (newPassword.val() !== confirmNewPass.val()) {
            return $('#confirm2').show(200);
        } else {
            $('#confirm2').hide(200);
        }
        $.post("/admin/resetPassword", {
                oldpassword: oldPassword.val(),
                newpassword: newPassword.val()
            },
            function(obj) {
                if (obj.status.code !== 0) {
                    if(obj.status.code === 1003){
                    	$("#confirm1").show(200);
                    }else{
                    	alert(obj.status.msg)
                    }
                } else {
                    alert("密码修改成功，请重新登录！");
                    window.parent.location.href='/login'; 
                }
                console.log(obj)
            }, "json");

    })
})