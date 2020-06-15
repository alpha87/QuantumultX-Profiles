/**
 * @supported DF337FE16B54
 */

// 去除 PriceTag 内广告
var obj = JSON.parse($response.body);
obj = [];
$done({ body: JSON.stringify(obj) });
