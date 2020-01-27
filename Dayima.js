/**
 * @supported 
 */

// 去除大姨妈内广告
var obj = JSON.parse($response.body);
obj.data = [];
obj.gdtPrice = {};
obj.sdkAd = {};
$done({ body: JSON.stringify(obj) });
