/**
 * @supported 改为你的设备 ID
 * @Author: Jianxun
 * @Blog: https://lijianxun.top
 */

let Cookie = $prefs.valueForKey("kcjsCookie");

let Req = {
  url: "https://www.kcjisu.casa/user/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Origin: "https://www.kcjisu.casa",
    Referer: "https://www.kcjisu.casa/user",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
  }
};

$task.fetch(Req).then(response => {
  try {
    let doc = JSON.parse(response.body);
    if (doc["ret"] == 1) {
      $notify(
        "卡车极速",
        "成功",
        `${doc["msg"]}\n已使用流量${doc["trafficInfo"]["lastUsedTraffic"]}\n剩余流量${doc["trafficInfo"]["unUsedTraffic"]}`
      );
    } else {
      $notify("卡车极速", "成功", doc["msg"]);
    }
  } catch (error) {
    $notify("卡车极速", "失败", error);
  }
});
