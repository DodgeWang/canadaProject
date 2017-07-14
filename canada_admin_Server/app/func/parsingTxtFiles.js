var fs = require('fs');
// var mysql = require('./mysql.js');
exports.parsingTxtFiles = function(type,path) {

    fs.readFile(path, { flag: 'r+', encoding: 'utf8' }, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var Infolist = data.split("\r\n");
        var excellist = [];
        var nameList = Infolist[0].split(/\t/);
        for (var i = 1; i < Infolist.length-1; i++) {
            var obj = {};
            var dataList = Infolist[i].split(/\t/);
            for (var s = 0; s < dataList.length; s++) {
                obj[nameList[s]] = dataList[s];
            }
            excellist.push(obj)
        }

        //存入数据库
        console.log(excellist)
        console.log(type)
        // for(var i=0; i<excellist.length;i++){
        // 	var values = [];
        // 	for(var s in excellist[i]){
        // 		if(excellist[i][s] === ''){
        //           values.push('NULL');
        // 		}else{
        // 		  values.push("'"+excellist[i][s]+"'")        			
        // 		}

        // 	}
        //     // console.log(values.join())
        // 	var sqls = "insert into "+ type +" value(" + values.join() +")";
        // 	mysql.exec(sqls,function(){
        // 		console.log("haha")
        // 	})
        // }
    });
}