---
# 语言 （可选）
lang: zh-cn
# 网页关键词和描述
keywords: 简历,Hexo主题,简历模板
description: 基于 https://resume.js.org/ 的 hexo 简历模板搭建的在线简历，非常感谢作者！^_^，Github 地址：https://github.com/xaoxuu/resume-docs。
# 简历标题
resume_title: 江湖浪子的在线简历
# 应聘者姓名
name: 江湖浪子
avatar: https://fastly.jsdelivr.net/gh/jhlzlove/dist@main/images/doc/avatar.jpeg
# 联系方式
contact:
  - icon: fas fa-globe-asia
    text: https://jhlzlove.github.io
    url: https://jhlzlove.github.io
  # 邮箱
  - icon: fas fa-envelope
    text: 邮箱
    url: mailto:jhlzlove@163.com
  # 电话号码
  - icon: fas fa-phone-alt
    text: 1xxxxxxxxxx
    url: tel:17518990502
---

{% raw %}
<center>
<a href='/resume-doc'>English</a> | <a href='/resume-doc/zh-cn/'>简体中文</a>
</center>
{% endraw %}

## <i class="fas fa-flag"></i> 掌握技能

编程语言：主 Java，将近三年开发经验，基础扎实，对编程有自己的思考理解，可以快速上手；有 JavaScript、Kotlin、Rust、Python 基础（主要是了解一些设计思想，掌握基础语法），有时会使用非 Java 语言编写脚本，就图个简单方便。

框架：Spring 全家桶及其它；

补充知识：数据结构和算法、MySQL、PG、Shell、容器化技术、Linux、消息队列（MQ）、CI/CD等；

可以良好的进行团队间的沟通、协作，对编程感兴趣，希望有志同道合的小伙伴一起 working！

以下公司、学校信息部分隐藏，保护非个人信息。

## <i class="fas fa-user-graduate"></i> 教育背景

**洛阳学院 计算机与信息工程系 计应专业 2021年毕业**


## <i class="fas fa-user-tie"></i> 工作经验


#### 2023年 ~ 2023/9：九兆数据公司

- 主要负责后端 Java 开发，参与项目的 Framework 选型和数据库表结构的定义；对使用的二次开发的框架进行修改、测试，Linux 运维、服务部署等相关事宜；
- 负责对项目中遇到的难题进行攻关，同时更新公司内部知识库，也负责各种技术文档的编写和交付；
- 负责对系统、SQL进行优化；
- 空闲时间帮助打打杂，整理一下环境；


#### 2021年 ~ 2022年：觉云有限公司

- 主要负责后端 Java 开发、bug 修复；
- 帮助公司同事的小忙，协助定位错误并修复，为遇到的难题提供一些自己的建议；


## <i class="fas fa-award"></i> 精选项目

上线项目基本都是公司内部使用（内网环境）；有一个实习时候的项目是对外的，但是地址名称已经忘了；所以该部分浪子准备写自己的开源项目，由于没有完成，先不写；对开源的贡献不打算写。

<!-- {% raw %}
<btns rounded>
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/heartmate/icon.png'>
  心率管家
</a>
<a href='https://apps.apple.com/cn/app/c%E5%85%BB%E8%80%81/id1458315594'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/het-cyanglao/icon.png'>
  C养老
</a>
<a href='https://apps.apple.com/cn/app/c-life%E5%85%BB%E8%80%81/id1393937890'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/het-clife/icon.png'>
  C-Life养老
</a>
<a href='https://apps.apple.com/cn/app/linksmart/id1109303355'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/ht-linksmart/icon.png'>
  LinkSmart
</a>
<a href='https://apps.apple.com/cn/app/hitfit/id1207738581'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/ht-hitfit/icon.png'>
  HitFit
</a>
<a href='https://apps.apple.com/cn/app/%E8%85%95%E8%83%BD%E5%8A%A9%E6%89%8B/id1138242219'>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/ht-fiyta/icon.png'>
  飞亚达腕能助手
</a>
</btns><br>
{% endraw %} -->


### 数字孪生高速项目

基于若依开源框架进行的二次功能开发。

#### 2023/02 ~ 2023/09：于九兆公司开发，团队项目

1. Project framework 的选型，数据库表结构设计；
2. 修改若依前后端分离框架的内部结构和部分代码，使其更加符合公司业务的要求；
3. 对客户给与的资产数据进行清洗，存疑时和客户沟通修改，将正确数据归档，建立基础业务数据支持；
4. 搭建 Linux 线上运行环境：JDK、Minio、FTP、Nginx、MySQL等，部分服务运行在 Docker 中；完成基础资产信息模块的开发测试，优先完成相关数据的导入导出，提高了客户的便捷性和后续数据加工的效率;
5. 对接数据中台的实时数据，完成相应的库表设计和业务实现，基于这些数据完成驾驶舱大屏页面后端的开发工作；后期根据实际情况重新设计接入方式，优化存储效率和查询速度，最终使系统响应时间缩短了60倍左右；
6. 针对 FTP 服务推送的道路事件数据进行存储优化，定时删除，清理磁盘空间；使用 Nginx 转发图片、视频等静态资源，从而使用 http 协议进行访问，访问速度提升了100倍，提升用户体验；
7. 完成数据模型文件模块，采用 Minio 工具进行存储管理，不必使用云存储，提升客户硬盘硬件空间的利用率，帮助客户减少成本；
8. 协助对接海康的实时监控视频，便于在 Web 端能够查看对应道路的实时情况，帮助预防交通事件的发生；核对接入的实时数据是否准确，并对程序和SQL进行相应的优化，以求提高系统的整体响应速度；
9. 优化、维护代码，确保代码质量；编写该项目的接口文档、数据库结构文档等各类相关文档；


### 数据大脑

项目基于 Fine Report（RR） 进行二开，大屏方面基本由 FR 实现，只需要编写 SQL 嵌入即可。对于客户不满意的地方或者实现效果不好的时候，使用 vue 进行项目构建，完成的页面嵌入 FR 中。

#### 2023/04 ~ 2023/09：于九兆公司开发，团队项目

- 负责各类图表信息展示的 SQL 语句编写：财务、商务、人员信息模块各个页面相关指标的SQL统计；
- 使用 Hive + Spark 按照不同的口径和粒度清洗财务、人资、商务等数据，导入不同的数据层中；并根据业务需求按照不同的口径和粒度加工 SQL，放入定时批任务调度中，解放生产力，同时完成数据同步至 MySQL 中；协助使用第三方内部工具完成其它主数据的数据导出、数据清洗；
- 负责搭建 Linux 线上环境的部署（Fr、BI、MySQL等），协助后端进行多个模块的接口开发和功能修改；
- 使用客户已存在的统计系统查询统计数据和现有的统计进行比对，标注错误数据并汇总；然后将客户整理的正确的的填报数据录入对应的数据库中，并完成相关的统计 SQL，嵌入到 FR 中，确保数字大屏展示的信息准确无误；
- 完善公司的知识库内容；负责该项目的接口文档、详细设计说明书、系统使用、维护、安装等技术文档的撰写与修改，确保能够按期交付；


### 企业填报项目

基于 Fine Report（FR）进行二次开发。

#### 2022/10 ~ 2022/07：于九兆公司开发，团队项目

- 参与各个模块的业务功能开发，后期添加嵌入地图，完成国资委地图查询、下钻、点击定位并获取信息等业务功能；
- 参与报表可视化模块统计SQL的编写：经营数据、增长、同比、成本费用、管理费用等。
- 根据 Fine Report 的文档编写短信插件，接入客户指定的短信平台，下发任务时通知填报人，提高企业运营；
- 协助解决项目上线部署遇到的相关问题：首页视频内容播放、单页面图表免登录访问；
- 协助处理统一认证登录（CAS ），帮助客户打通单点登录系统的认证，方便用户；
- 实现填报任务BPM移动端审核，在填报任务上报时，通过MySQL的binlog实现指定表数据的实时监听，获取指定内容处理后发送至 BPM 系统。定时调度任务根据BPM系统状态完成数据状态的修改、汇总，满足客户移动端审批的需求；
- 项目代码的维护和优化；寻找线上项目内存占用过高的原因，调整堆大小，从而使程序良好运行，提高服务器的资源利用率。



## <i class="fab fa-github"></i> 开源贡献

omit

## <i class="fas fa-phone-alt"></i> 与我联系

目前状态为：离职，找工作 ing，100 年内可到岗。

<i class="fas fa-envelope fa-fw"></i> jhlzlove@163.com
<i class="fas fa-phone-alt fa-fw"></i> 175-189-90502


## 主题配置

```yaml
cdn:
  # These base libraries cannot be deleted
  jquery: https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js
  vue: https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js
  # When these CDN resources are deleted, local resources are loaded.
  common: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/js/common.js
  escape: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/js/css.escape.js
  smooth_scroll: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/js/smooth-scroll.min.js
  css: https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume@1.0.0/source/css/style.min.css
  # Optional plug-in: image zoom
  fancybox:
    css: https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css
    js: https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js

# robots meta tag
robots: noindex,nofollow

# the footer of your site
copyright: '[Copyright © 2023-latest jhlz. X](https://jhlzlove.github.io)'
```

<!-- ## 评论

{% raw %}
<script src="https://utteranc.es/client.js"
        repo="xaoxuu/hexo-theme-resume"
        issue-number="18"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
{% endraw %} -->
