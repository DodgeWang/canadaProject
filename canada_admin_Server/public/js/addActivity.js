$(function() {
    $.get("/classification/list", function(obj) {
        if (obj.status.code !== 0) {
            alert(obj.status.msg);
        } else {
            if (obj.data.length > 0) {
                for (var i = 0; i < obj.data.length; i++) {
                    var addDom = "<option value='" + obj.data[i].id + "'>" + obj.data[i].name + "</option>";
                    $('#classifySele').append(addDom);
                }
            }
        }
    })




    $("#formSubmit").click(function() {
        ajaxFileUpload();
    });





    $("#imgfile").change(function(){
         var filepath = $(this).val();
         var extStart = filepath.lastIndexOf(".");
         var ext = filepath.substring(extStart, filepath.length).toUpperCase();
         if (ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
            return alert('图片仅限于png、jpg、jpeg格式！');
         }
         var fileSize = this.files[0].size / 1024;
         if(fileSize > 200){
            return alert('图片不能大于200KB！');
         }
        $.ajaxFileUpload({
        url: '/imgUpload', //用于文件上传的服务器端请求地址
        secureuri: false, //是否需要安全协议，一般设置为false
        fileElementId: 'imgfile', //文件上传域的ID
        dataType: 'json', //返回值类型 一般设置为json
        success: function(obj, status) //服务器成功响应处理函数
            {
                if(obj.status.code === 0){
                    $("#imageshow").attr("src",obj.data.path);
                    $("#formBox input[name='imgpath']").val(obj.data.path);
                }else{
                    alert(obj.status.msg)
                }
                
            },
        error: function(data, status, e) //服务器响应失败处理函数
            {
                alert(e);
            }
        })
    })
})


function ajaxFileUpload() {
   var data = {
       title: $("#formBox input[name='title']").val(),
       url: $("#formBox input[name='url']").val(),
       imgpath: $("#formBox input[name='imgpath']").val(),
       classifyId: $("#classifySele").val()
   }
   for(var i in data){
      if(data[i] == '') return alert('请填写完整信息')
   }
   $.post("/activity/add",data,function(obj){
    console.log(obj)
       if(obj.status.code !== 0){
                alert("添加失败,请重试！");
            }else{
                alert("添加成功！");
                window.location.reload();
        }
   })
}