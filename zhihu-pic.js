var obj = JSON.parse($response.body);
obj.content = "尹俊勋你个大骗子！！！";
$done({body: JSON.stringify(obj)}); 
$notify("title", $request.url, $response.body);
