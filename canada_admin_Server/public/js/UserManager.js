$(function() {
    var page = 1;
    var size = 12;

    userList(page, size, 0)
        //上一页
    $("#prev").click(function() {
        if (page === 1) return alert('已经是第一页');
        page -= 1;
        userList(page, size, 1);
    })

    //下一页
    $("#next").click(function() {
        userList(page + 1, size, 2);
    })


    function userList(pageNum, sizeNum, type) {
        $.get("/user/list", { page: pageNum, size: sizeNum }, function(obj) {
            if (obj.status.code !== 0) {
                alert(obj.status.msg);
            } else {
                if (obj.data.length > 0) {
                    $("#pageBox").show();
                    $("#noDataBox").hide();
                    var htmlDom = '';
                    for (var i = 0; i < obj.data.length; i++) {
                        var username = obj.data[i].username;
                        var id = obj.data[i].id;
                        var htmlStr = "<tr>\
                                    <td>" + ((pageNum - 1) * sizeNum + i + 1) + "</td>\
                                    <td>" + username + "</td>\
                                    <td>\
                                      <button class='red_button' onclick='resetPass(" + id + ")'>重置密码</button>\
                                    </td>\
                                  </tr>";

                        htmlDom += htmlStr;
                    }
                    $("#datalist tbody").html(htmlDom);
                    if (type === 2) page += 1;
                } else {
                    switch (type) {
                        case 0:
                            $("#datalist tbody").empty();
                            $("#pageBox").hide();
                            $("#noDataBox").show();
                            break;
                        case 2:
                            alert('已经是最后一页');
                            break;
                    }
                }
            }
        })
    }




    //更新用户
    $("#updateUser").click(function(){
        $.get("/user/updateUser",{}, function(obj) {
            if (obj.status.code !== 0) {
                alert("更新失败");
            } else {
                userList(1, size, 0);
                alert('更新用户成功！');
            }
        })
    })
})


//重置密码
function resetPass(id) {
    var r = confirm("确定重置此用户密码？")
    if (r == true) {
        $.post("/user/resetPassword", { userId: id }, function(obj) {
            if (obj.status.code !== 0) {
                alert(obj.status.msg);
            } else {
                alert('密码重置成功！')
            }
        })
    }
}



