$(function() {
    $.get("/lesson/list", {}, function(obj) {
        if (obj.status.code !== 0) {
            alert(obj.status.msg);
        } else {
            if (obj.data.length > 0) {
                $("#noDataBox").hide();
                var htmlDom = '';
                for (var i = 0; i < obj.data.length; i++) {
                    var htmlStr = "<tr>\
                                    <td>" + obj.data[i].p + "</td>\
                                    <td>" + obj.data[i].start_date + ' —— ' + obj.data[i].end_date + "</td>\
                                    <td>" + obj.data[i].start_time + ' —— ' + obj.data[i].end_time + "</td>\
                                    <td>" + obj.data[i].weekly + "</td>\
                                    <td>\
                                      <button class='green_button' onclick='edit(" + JSON.stringify(obj.data[i]) + ")'>修改</button>\
                                    </td>\
                                  </tr>";

                    htmlDom += htmlStr;
                }
                $("#datalist tbody").html(htmlDom);
            } else {
                $("#noDataBox").show();
            }
        }
    })

    $("#coverCloth").click(function() {
        coverFun()
    })

    $("#formSubmit").click(function() {
        var param = subData();
        $.post("/lesson/edit", param, function(obj) {
            if (obj.status.code !== 0) {
                alert("修改失败,请重试！");
            } else {
                alert("修改成功！");
                window.location.reload();
            }
        })
    })
})

function edit(data) {
    $("#coverCloth").height($(".contentbox").outerHeight())
    $("#coverCloth").width($(".contentbox").outerWidth())
    coverFun()
    $("#lessonId").val(data.id)
    $("#startDate").val(data.start_date)
    $("#endDate").val(data.end_date);
    $("#startTime").val(data.start_time)
    $("#endTime").val(data.end_time);
    var weekly = data.weekly.split(",");
    var weekCheck = $("input[name='weekly']");
    for(var i = 0; i<weekCheck.length; i++){
        weekCheck[i].removeAttribute("checked");
    }
    for (var i = 0; i < weekly.length; i++) {
        var num = Number(weekly[i]) - 1;
        weekCheck[num].setAttribute("checked", 'true');
    }
}

function coverFun() {
    $("#coverCloth").fadeToggle(300)
    $("#editBox").fadeToggle(300)
}


function subData() {
    var data = {
        id: $("#lessonId").val(),
        startDate: $("#startDate").val(),
        endDate: $("#endDate").val(),
        startTime: $("#startTime").val(),
        endTime: $("#endTime").val(),
        weekly: ''
    }
    var obj = $("input[name='weekly']");
    var weeklyArr = [];
    for (k in obj) {
        if (obj[k].checked) weeklyArr.push(obj[k].value);
    }
    data.weekly = weeklyArr.toString()

    return data;
}