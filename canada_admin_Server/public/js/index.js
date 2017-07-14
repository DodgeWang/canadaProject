$(function() {
    pageframe();
    $.get("/admin/managerInfo", function(obj) {
        if (obj.status.code === 0) $("#username").text(obj.data.username);
    })

    $("#UserSettingButton").click(function() {
        $("#UserSettingBox").fadeToggle(200);
    })


    $(".first-nav").click(function() {
        $(this).parent().find('ul').toggle(300);
    })

    //退出登录
    $("#exit").click(function() {
        var r = confirm("您确定退出后台管理系统？")
        if (r == true) {
            $.get("/admin/exit", function(obj) {
                if (obj.status.code === 0) window.open('/login', '_self');
            })
        }
    })
})

window.onresize = function() {
    pageframe();
}

function pageframe() {
    var win_Width = window.innerWidth;
    var win_Height = window.innerHeight;
    $("#page-right").width(win_Width - 180);
    $("#page-right").height(win_Height);
    $("#page-left").height(win_Height);
    $("#page-content").height(win_Height - 66);
    $("#page-content").width(win_Width - 180);
    $("#page-menu").height(win_Height - 100);


}