/**
 * @supported 设备 ID
 * @Author: Jianxun
 * @Blog: https://lijianxun.top
 * @使用介绍：https://lijianxun.top/61.html
 */

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("kcjsCookie") != undefined) {
    if ($prefs.valueForKey("kcjsCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "kcjsCookie");
      if (!cookie) {
        $notify("更新卡车极速Cookie失败！", "", "");
      } else {
        $notify("更新卡车极速Cookie成功 🎉", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "kcjsCookie");
    if (!cookie) {
      $notify("首次写入卡车极速Cookie失败！", "", "");
    } else {
      $notify("首次写入卡车极速Cookie成功 🎉", "", "");
    }
  }
}
$done({});
