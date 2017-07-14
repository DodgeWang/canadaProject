$(function(){
	$("#formSubmit").click(function(){
		 var filepath = $("#dataFile").val();
         var extStart = filepath.lastIndexOf(".");
         var ext = filepath.substring(extStart, filepath.length).toUpperCase();
         if (ext != ".TXT" && ext != ".txt") {
            return alert('文件仅限于编码格式为UTF-8的txt文件！');
         }
         // var fileSize = $("#dataFile").files[0].size / 1024;
         // if(fileSize > 800){
         //    return alert('图片不能大于200KB！');
         // }
        $.ajaxFileUpload({
        url: '/fileuploads', //用于文件上传的服务器端请求地址
        secureuri: false, //是否需要安全协议，一般设置为false
        fileElementId: 'dataFile', //文件上传域的ID
        dataType: 'json', //返回值类型 一般设置为json
        success: function(obj, status) //服务器成功响应处理函数
            {
                if(obj.status.code === 0){
                    alert('上传成功')
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