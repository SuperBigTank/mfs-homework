/**1.请使用 Promise 重构之前作业：新闻瀑布流 中的 图片加载 和 加载更多 部分，比较 Promise 写法与之前的写法的区别**/
function asynLoadSyncProcess(urls,process,onerror=null)
{
    var promises=[];
    for(let i=0;i<urls.length;i++)
    {
        (function()
        {
            var image=new Image();
            
            var promise=new Promise(function(resolve,reject)
            {
                image.onload=function()
                {
                    if(i>0)
                        resolve(promises[i-1]);     //以上一个Promise的标识为判断标准
                    else
                        resolve();
                };
                image.onerror=reject;
                image.src=urls[i];
            });
            promise.then(function()
            {
                process(image);
            });
            promise.catch(function(error)
            {
                if(onerror!==null)
                    onerror(error);
            });
    
            promises.push(promise);
        })();
    }
}

/**2.请自行封装 ajaxGet(url) 函数，其返回值为 Promise ，其中 data 为获取的数据（内部使用 XMLHttpRequest）**/
function promiseAjax(url,data){
       var pro = new Promise(function(success,failed){
          //承诺一件事 ： 使用ajax请求服务器的数据  
          var ajax = new XMLHttpRequest();
          if( data ){
              url = url + "?" + data;
          }
          ajax.open("get",url);
          ajax.send();
          ajax.onreadystatechange = function(){
              if( ajax.readyState == 4 && ajax.status == 200 ){
                 //说明承诺的事情 ： 请求服务器数据 成功
                 success(ajax.responseText);
              }
          }      
          //经过一段时间后 如果没有执行success方法  说明承诺的事情没有成功
          setTimeout(function(){
              failed("失败了");
          },5000)    
       })
       //将promise对象返回
       return pro;
   }

/**3.请利用自己实现的 ajaxGet(url) 函数，实现串行（一个接一个的）发送10个请求，来获取下面 api 的前10页数据**/
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>按序串行发送10个ajax</title>
</head>
<body>
	<script>
		function myajax(url,data,method,success,async = true){
		    // 1. 创建对象
		    var xhr
		    if (window.ActiveXObject) {  
		    	xhr =  new ActiveXObject("Microsoft.XMLHTTP");  
		  	} else if (window.XMLHttpRequest) {  
		    	xhr = new XMLHttpRequest();  
		  	}
		    if(method == 'get'){
		        // 处理get请求,data 包含在 url 地址中
		        if(data){
		            url += '?'
		            url += data
		        }
		        // 2.设置方法和url
		        xhr.open(method,url,async)
		        // 3.发送请求
		    	xhr.send()
		    } else {
		        // 处理post请求
		        xhr.open(method,url,async)
		        // 2. 设置请求报文 指定编码格式
		        xhr.setRequestHeader("Content-type","application/json");
		        // 3.发送请求
		        if(data){
		    		// data 在 send 中发送
		            xhr.send(data)
		        }else{
		            xhr.send()
		        }
		    }
		    
		    // 4.注册事件
		    xhr.onreadystatechange = function(){
		        if(xhr.readyState == 4 && xhr.status == 20){
		            // 5.使用回调函数
		            success(xhr.responseText)
		        }
		    } 
		}
		myajax(http://learning-api.mafengshe.com/news',JSON.stringify		({order:1}),'post',(res)=>{
			var data = JSON.parse(res).data
			console.log(data)
		})
 
	</script>
</body>
</html>
