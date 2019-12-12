var htmlDoc = $response.body;

/*
// 匹配 content .
var regex_html = /"content":.*?"collapsedBy":/g;
match_result = htmlDoc.match(regex_html)[0]

// 提取 content 的图片部分
var regex_match = /\\u003Cfigure\\u003E\\.*?\\u003C\\u002Ffigure\\u003E/g;
content_result = match_result.match(regex_match)

// 使用 <br /> 拼接
var result = content_result.join("\u003Cbr\u002F\u003E")

var regex_html = /"content":.*?"collapsedBy":/g;
match_result = doc.replace(regex_html, `"content": ${result}, "collapsedBy":`);
$done({body: match_result});
*/

console.log(htmlDoc)
