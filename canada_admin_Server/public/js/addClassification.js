$(function(){
	$("#formSubmit").click(function(){
		var classifiName = $("input[name='classifiName']").val();
		if(classifiName === '') return alert('分类名不能为空');

		$.post("/classification/add",{name:classifiName},function(obj){
    		if(obj.status.code !== 0){
    			alert("添加失败,请重试！")
    		}else{
    			alert("添加成功！")
    			$("input[name='classifiName']").val('');
    		}
    	})
	})
})
