$(function() {
    $.get("/classification/list", function(obj) {
        if (obj.status.code !== 0) {
            alert(obj.status.msg);
        } else {
            if(obj.data.length>0){
               for(var i=0;i<obj.data.length;i++){
               	  var name = obj.data[i].name;
                  var homeShow = (obj.data[i].homeshow===1?"<span style='color:green'>YES</span>":"<span style='color:red'>NO</span>")
               	  var nameStr = '"'+name+'"';
               	  var id = obj.data[i].id;
               	  var htmlStr = "<tr>\
                      <td>"+(i+1)+"</td>\
                      <td>"+name+"</td>\
                      <td>"+homeShow+"</td>\
                      <td>\
                        <button class='green_button' onclick='edit("+id+","+nameStr+","+obj.data[i].homeshow+")'>修改</button>\
                      </td>\
                    </tr>"  

               	  $("#datalist").append(htmlStr)
               }
            }
        }
    })
    
    $("#coverCloth").click(function(){
    	coverFun()
    })

    $("#formSubmit").click(function(){

    	var name = $("#editBox input[name='name']").val();
    	var id = $("#editBox input[name='classifiId']").val();

      var homeshow = $("#editBox input[name='isShow']:checked").val();
    	if(name === '' || id === '' || homeshow === '') return alert("输入框内容不能为空！");
    	$.post("/classification/revise",{id:id,name:name,homeshow:homeshow},function(obj){
    		if(obj.status.code !== 0){
    			alert("修改失败,请重试！")
    		}else{
    			alert("修改成功！")
    			coverFun();
    			window.location.reload(); 
    		}
    	})
    })
})

function edit(id,name,homeshow){
    $("#coverCloth").height($(".contentbox").outerHeight())
    $("#coverCloth").width($(".contentbox").outerWidth())
    coverFun()
    $("#editBox input[name='name']").val(name);
    $("#editBox input[name='classifiId']").val(id);
    var showInput = $("#editBox input[name='isShow']");
    for(var i=0;i<showInput.length;i++){
      showInput[i].removeAttribute("checked");
    }
    homeshow == 1 ? showInput[0].setAttribute("checked","true") : showInput[1].setAttribute("checked","true");
}

function coverFun(){
	$("#coverCloth").fadeToggle(300)
    $("#editBox").fadeToggle(300)
}

