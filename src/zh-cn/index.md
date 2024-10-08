---
# 语言 （可选）
lang: zh-cn
# 网页关键词和描述
keywords: 简历,Hexo主题,简历模板
description: 基于 https://resume.js.org/ 的 hexo 简历模板搭建的在线简历，非常感谢作者！^_^，Github 地址：https://github.com/xaoxuu/resume-docs。<br/>“我希望我在温度高的时候变成水蒸气，升到天上；遇到冷空气，我又可以凝结成水，再次回到大地，滋养土地”。 ——胡歌
# 简历标题
resume_title: jhlz的在线简历
# 应聘者姓名
name: 江湖浪子
avatar: https://gcore.jsdelivr.net/gh/jhlzlove/dist@main/images/doc/avatar.jpeg
# 联系方式
contact:
  - icon: fas fa-globe-asia
    text: https://jhlzlove.github.io
    url: https://jhlzlove.github.io
  # 邮箱
  - icon: fas fa-envelope
    text: 809946991@qq.com
    url: mailto:809946991@qq.com
  # 电话号码
  - icon: fas fa-phone-alt
    text: 手机
    url: tel:17638237970
---

{% raw %}
<center>
<a href='/resume-doc/'>English</a> | <a href='/resume-doc/zh-cn/'>简体中文</a>
</center>
{% endraw %}

## <i class="fas fa-flag"></i> 技术栈

**语言**

熟悉：Java
了解：NodeJs、Kotlin

**框架**

Spring Boot、Spring Cloud、Spring MVC、Spring Data、Spring Security、MyBatis/MyBatis Plus、Hibernate、Jimmer...

**数据库/中间件**

熟悉：MySQL
了解：PostgreSQL、Redis、ElasticSearch、RabbitMQ、Hive

**Devops**

Linux、Shell、Github Action、Jekins

**云计算**

Docker、Podman

**前端**

JavaScript、CSS、HTML、Vue、Element UI

## <i class="fas fa-user-graduate"></i> 教育背景

**xx理工学院 计算机与信息工程系 计应专业 2021届**

河南神都，欢迎大家去游玩~

## <i class="fas fa-user-tie"></i> 工作经历

#### 2023年 ~ 2024/7：远程开发

- 开发并维护日活 3000 的系统，并进行业务扩展开发；
- 带领团队新进成员熟悉业务，管理后端开发进度，及时反馈；

#### 2022年 ~ 2023/9：xxx公司

- 参与解决系统开发中遇到的难题，稳步推进项目开发的进度；
- 及时与上级和客户沟通，修正研发中的错误方向，从而减少返工次数，提升整体效率；
- 帮助公司顺利完成业务开发，上线后系统日活 1000，同时获得了客户的好评；

## <i class="fas fa-award"></i> 项目经验

### 数字孪生高速项目

数字孪生项目，集成 U3D 进行模型道路、人物、车辆、天气、时间的模拟等。客户内部使用系统，帮助企业内部实现真实的场景模拟和预测。前端基于 Vue3 进行开发，后端基于[若依前后端分离开源框架](http://doc.ruoyi.vip/ruoyi-vue/)进行的二次功能开发。

#### 2023/02 ~ 2023/09：于xxx公司开发，团队项目

**技术栈：MySQL、ES、Spring Boot、Spring Security、MyBatis Plus、Nginx、Minio、Redis 等。**

**项目职责**

- 定义热点数据缓存到 Redis 中，降低了 80% 以上的数据库压力；
- 优化 JVM 运行参数，限制堆大小，减少程序对服务器资源的过度占用，进而提升硬件利用率；
- 优化数据存储，定时删除磁盘无用静态资源，提升存储空间的利用率；
- 采用 Nginx 转发静态资源使用 HTTP 协议访问，速度提升了 100 多倍；
- binlog 监听数据变动，实时数据状态推送到 bpm 系统进行审批；
- 解决对接 Open API 的存储、效率问题，使功能能够平稳实现；
- 维护代码，确保代码交付质量；推进公司的代码规范实施；
- 完善公司的知识库以及项目交付资料；

### 智慧数据大屏

展示公司各种业务项目指标和完成度，提高公司内部信息的透明化和自动化，为领导决策提供基础数据支持。前端使用 Fine Report 进行页面的数据展示及开发，不能满足客户需求的使用 Vue 进行开发并嵌入帆软平台。

#### 2023.03 ~ 2023.09：于xxx公司开发，团队项目

**技术栈：FineReport、FineBI、MySQL、Spring Boot、MyBatis Plus、Shiro、Nginx 等。**

**项目职责**

- 使用 Hive + Spark 脚本按照不同的口径进行数据清洗；
- 编写 Shell 脚本定时完成批量同步任务；
- 及时跟踪并反馈用户提出的问题并给出解决方案；
- 系统优化与维护；

### 充电桩平台

随着新能源电、汽车的迅速发展，但是充电设备的不统一和充电的效率问题等矛盾犹存，本平台致力于解提升运营方对不同设备的管控、运营体验，降低管理成本；另一方面对于设备故障等问题即时发出预警，从而减少事故的发生。

#### 2021.08 - 2022.05

**技术栈：Spring Boot、Spring MVC、MyBatis Plus、Shiro、Mqtt、Redis、MySQL等。**

**项目职责**

- 熟悉项目架构和业务方向，并梳理文档，最终在交付文档中复用；
- 独立完成核心业务开发，测试接口功能，测试的覆盖率达 **80%** 以上；
- 定义热点数据缓存到 Redis 中，降低 80% 数据库的访问压力；
- 通过 WebSocket、微信公众号和邮箱实现对管理员的提醒/预警，大大降低事故发生率；
- 对接第三方 API：微信退款、OSS云存储；
- 维护项目代码；负责公司其它项目的一些代码维护与文档的编写汇报。

## <i class="fab fa-github"></i> 开源贡献

omit

## <i class="fas fa-phone-alt"></i> 与我联系

- 能够独立完成业务模块的开发、单测；
- 熟练掌握多种开源框架、工具；业余时间研究过一些源码；
- 熟练掌握 MySQL、Redis，了解 Postgresql，掌握 SQL 优化方法；
- Java 基础扎实，掌握网络协议、多线程开发、网络编程以及常用的数据结构和算法；
- 掌握前端基础知识：HTML、CSS、JavaScript/TypeScript；在前端开发中培养自己的审美；
- 可以熟练的在 Linux 下进行服务开发、部署和维护，可作为日常系统使用；
- 良接口相关功能的实现；好的编码习惯和代码风格，致力于交付高质量的项目代码；
- 具备阅读英文文档的能力；
- 具有一定的学习、抗压能力，擅于独立思考，乐于接触新鲜事物，善于总结分享，与团队成员一起成长；

可转语言，随时到岗。接受 远程/到岗 全职/兼职。

<i class="fas fa-envelope fa-fw"></i> 邮件联系 809946991@qq.com
