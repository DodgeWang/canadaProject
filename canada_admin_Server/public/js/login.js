$(function() {
    $('#login-sub').click(function() {
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        if (username == '' || password == '') {
            alert('账号或密码不能为空');
        } else {
            $.post("/admin/login", {
                    username: username,
                    password: password
                },
                function(obj) {
                    if (obj.status.code !== 0) {
                        alert(obj.status.msg);
                    } else {
                        window.open('/index', '_self')
                    }
                }, "json");
        }
    })
})