# QuantumultX Profiles

------

<img src="https://img.shields.io/github/stars/alpha87/QuantumultX-Profiles?label=Stars&style=flat-square">    <img src="https://img.shields.io/github/forks/alpha87/QuantumultX-Profiles?label=Fork&style=flat-square">   <img src="https://img.shields.io/github/watchers/alpha87/QuantumultX-Profiles?label=Watchers&style=flat-square">

一份你值得拥有的 QuantumultX **真·小白配置**。

如果你是从小火箭（Shadowrocket）过来的，这份配置正好适合你，规则简单实用，配合简单好理解的去广告 JavaScript 脚本，达到国内直连，国外扶梯，去 YouTube 5秒广告的使用效果。

如果你是从其他软件过来的，这份配置也正好适合你，规则简单实用，配合简单好理解的去广告 JavaScript 脚本，达到国内直连，国外扶梯，去 YouTube 5秒广告的使用效果。

只需导入自己的节点信息就可开始使用！什么麻烦看不懂的配置统统走开，我只想简单快速上网！

如果这份配置帮助到你，还请点击上方 **star** 支持作者。

想要了解更多？作者个人博客：[https://lijianxun.top](https://lijianxun.top)

感谢支持 🙏

# 使用方式

## 下载导入配置文件

<div align=center><img width="50%" height="50%" src="https://i.loli.net/2020/06/17/LC6OTPX1zNKjJQZ.jpg"></div>

点击**下载**，将下边的链接拷贝到输入框。

https://raw.githubusercontent.com/alpha87/QuantumultX-Profiles/master/quantumultX_profile.conf

保存即可。

~~如果在使用（微信公众号，大姨妈，IT之家）中报错，是因为没有导入对应去广告 JavaScript 脚本。~~

~~需要把脚本拷贝到本地 QuantumultX 下的 Scripts 路径下。~~

已经将去广告部分默认添加到远程重写部分，无需手动添加（需要配合新版 `v1.0.10`）。

具体可以看文章介绍 [QuantumultX 配置文件以及常用的脚本推荐](https://lijianxun.top/?p=106)

## 曲线救国使用远程

详情见[一行代码搞定 Quantumult X 远程脚本](https://lijianxun.top/339.html)。简单来说，使用远程脚本的思路是请求远程代码链接，使用 JavaScript 自带函数 `eval()` 运行远程代码，达到使用远程脚本的功能。目前只测试了京东签到脚本，应该所有脚本都是没问题的。

贴出这一行代码：

```javascript
$task.fetch({ url: "https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js" }).then(response => {eval(response.body);});
```

有兴趣使用远程脚本的朋友可以试试。

## 使用远程 JS

[![Netlify Status](https://api.netlify.com/api/v1/badges/7043c3c1-7ee8-4158-883f-a321ac10f0c7/deploy-status)](https://app.netlify.com/sites/musing-galileo-d17927/deploys)

**限定 QuantumultX 版本为 1.0.3。**

之后版本不再支持远程 JavaScript。

一键添加设备ID：https://remotejs.lijianxun.top/

## 进阶教程

很多人都在推荐神机规则，虽然很好，但是策略很多，小白一开始不容易上手。

对于小白来说不友好，只是简单的想科学上网，去去广告，策略太多反而更加迷惑。

看明白小白配置以后，想进阶可以了解一下这份教程，比较全面。

https://www.notion.so/Quantumult-X-1d32ddc6e61c4892ad2ec5ea47f00917

# 开发不易，感谢支持！

[赞赏名单](https://lijianxun.top/about)

<div align=center><img width="260" height="260" src="https://i.loli.net/2020/04/11/8SbdAIZ6CYlBqey.jpg"></div>

![](https://i.loli.net/2020/06/17/ZpwDfJmCGEoKqnb.png)