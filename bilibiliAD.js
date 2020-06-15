/**
 * 去除 bilibili 开屏广告
 */

let obj = JSON.parse($response.body);
obj["data"]["list"] = [];
$done({ body: JSON.stringify(obj) });
