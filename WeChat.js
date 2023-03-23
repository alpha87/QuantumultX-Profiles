/**
 * @supported 
 */

// 去除微信公众号文章内广告 
var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({ body: JSON.stringify(obj) });
