function indexAD(obj) {
  // 去除 IT 之家首页滚动板块广告
  return obj.filter(item => !(item["isad"]));
}

function newslistAD(obj) {
  // 去除 IT 之家新闻列表广告
  let data = obj["newslist"];
  obj["newslist"] = data.filter(item => !("aid" in item));
  return obj;
}

let obj = JSON.parse($response.body);
if (obj["newslist"]) {
  $done({ body: JSON.stringify(newslistAD(obj)) });
} else {
  $done({ body: JSON.stringify(indexAD(obj)) });
}
