# 工具

## 个人博客                   

<https://githubyc.github.io/>

## CSDN博客               

https://blog.csdn.net/xysz13

## processOn作图

<https://www.processon.com/;jsessionid=8FFEC28E8030C49D5B248C684A6E2ADC.jvm1>

## Font Awesome

<http://fontawesome.dashgame.com/>

## Typora

下载地址                            <https://typora.io/#windows>

pandoc下载地址             <https://pandoc.org/installing.html>

https://blog.csdn.net/mingzhuo_126/article/details/79941450

## LeetCode

<https://leetcode-cn.com/problemset/all/>

# 公司

## 人员招聘

| 地址                                     | 会员名   | 账号密码             |
| ---------------------------------------- | -------- | -------------------- |
| <https://passport.zhaopin.com/org/login> |          | SZ_xiaoan/SZ0755xakj |
| https://ehire.51job.com/                 | 消安科技 | SZ_xiaoan/SZ0755xakj |

简历筛选：

​	

2-4年

项目经验>3个

## 代码生成器

<http://192.168.188.18:9395/admin/index.html>

## 主机

### 30（代码托管）

| 功能     | 地址                        | 账号密码                  |
| -------- | --------------------------- | ------------------------- |
| 宝塔地址 | http://192.168.188.30:8888/ | gitadmin/gitadmin         |
| Jenkins  | http://192.168.188.30:8080  |                           |
| git      | http://192.168.188.30:8099/ | yuanwenbiao/gitlab1877091 |

### 31（测试服务）

| 功能            | 地址                        | 账号密码                |
| --------------- | --------------------------- | ----------------------- |
| 宝塔地址        | http://192.168.188.31:8888/ | testadmin/testadmin     |
| Jenkins         | http://192.168.188.31:8080  |                         |
| git             | http://192.168.188.31:8099/ |                         |
| windows系统登录 |                             | Administrator/xft123!@# |

### 213（测试机）

Administrator/213

### 245（未使用）

Administrator

### 214（虚拟机）

| 功能     | 地址                         | 账号密码          |
| -------- | ---------------------------- | ----------------- |
| 宝塔地址 | http://192.168.188.214:8888/ | gitadmin/gitadmin |
| Jenkins  | http://192.168.188.214:8080  |                   |
| git      | http://192.168.188.214:8099/ |                   |

## 线上服务器

基础数据库

[http://xfyhpc.xft119.com:8888](http://xfyhpc.xft119.com:8888/)

root/xft123!@#

123.207.242.145

服务：

### 物联

http://iot.xft119.com:8888

root/xft123!@#

118.89.58.88

服务：消防知识、定时任务、汇聚服务

### 基础数据库

http://other.xft119.com:8888/

root/xft123!@#

139.199.84.155

服务：城中村

### 大亚湾服务器

IP地址：183.62.144.179

dell

root/ 1!deshine

宝塔地址：http://183.62.144.179:8888

dywgafj/ dywgafj123!@#

| 1    | 消防安全自我管理系统 | /www/wwwroot/static | 81   | 前端页面 |      | 80端口不可用，请求地址http://183.62.144.179:81/xfaq/page/login.html |
| ---- | -------------------- | ------------------- | ---- | -------- | ---- | ------------------------------------------------------------ |
|      |                      |                     |      |          |      |                                                              |

# 大亚湾

## 文档

```
交互文档      https://docs.qq.com/doc/DUW9PeFNYVXdFR2h0
线下接口地址
        	http://192.168.188.30:8088/swagger-ui.html
	  		http://192.168.188.30:8088/doc.html
线上接口地址
	    	http://xfyhpc.xft119.com:9005/swagger-ui.html
	   	 	http://xfyhpc.xft119.com:9005/doc.html 
线上汇聚服务	 http://iot.xft119.com:9012/swagger-ui.html 
```

## 服务

```
杨欢			http://192.168.188.73:8002/xfaq/page/login.html
曾培勇			http://192.168.188.161:8848/Git%20project/index.html
测试服务地址    http://192.168.188.31/dyw/page/login.html
线上服务地址    http://xfyhpc.xft119.com
大亚湾服务地址  http://183.62.144.179:81/xfaq/page/login.html
```

| 服务         | 名称                   | 端口 |
| ------------ | ---------------------- | ---- |
| 注册中心     | fire_eureka_server     | 1111 |
| 监控面板服务 | fire_monitor_service   | 2222 |
| 配置中心     | fire_config_server     | 3333 |
| 网关         | fire_api_gateway       | 8888 |
| 基础服务     | fire_base_service      | 8001 |
| 消防业务服务 | fire_business_sevice   | 8002 |
| 消防知识服务 | fire_knowledge_service | 8003 |
| 通用服务     | fire_common_service    | 8004 |
| 文件服务     | fire_file_service      | 8005 |
| 汇聚服务     | fire_converge_service  | 8006 |
| 定时任务     | fire_quartz_task       | 8007 |
| 应急救援     | emergency_fire_station | 8008 |

消防知识写爬虫从http://www.gdfire.gov.cn/ 

## 记录

```
开发节奏如下
1、基础服务（后台）-->网关（后台）-->文档（后台）-->对接（前端）-->消防业务（后台）-->网关（后台）-->文档（后台）-->对接（前端）-->消防知识（后台）-->网关（后台）-->文档（后台）-->对接（前端）-->测试-->修复bug-->测试-->修复bug-->.........
2、老系统数据持续同步过来
```

```
注意事项：
1、用户登录成功之后需要返回当前用户用户信息、角色信息、人员表信息、相关联的建筑、单位以及组织架构信息，并且要缓存到redis 便于其他接口直接调用 不需要再次查询数据库
2、日常检查、设施检查所有的提交均采用异步处理 便于后期并发处理统计、消息推送等事件
3、消防知识发布需要将发布的信息转化成html静态文档的形式存在服务器，html需要自适应。可以参考城中村项目。
fire_fie_service文件服务(采用FTP上传方式，便于后期文件服务器隔离及集群)
4、t_category_configure表初始化数据以identity标识码为key初始化到redis里面，每次新增、修改、删除需立即更新redis
5、子服务无需token校验 子服务接口可直接调用 全部统一在网关进行权限校验
```

```
1、单体应用（前后端分离） 后台+前端  代码生成器  nginx(路由转发、集群、静态资源)+tomcat（后台服务 操作手册 接口文档）
40次/s
1、福田区：单体应用（基础信息、消防检查、消防知识...）
2、厦门市：单体应用（基础信息、消防检查【xxx】、消防知识...）
3、大亚湾: 单体应用（基础信息...）
2、微服务架构(springcloud生态圈开发) 细粒度  粗度
用户体系：用户、角色、菜单、权限
基础服务：网格、建筑、单位、人员...
消防业务：消防日常检查、设施检查、消防物联网...
消防知识：通知公告
户籍化同步服务

redis（NOSQL 内存性数据库 缓存：
避免多请求直接数据库 磁盘）
build_type,build_level,build_uses

前端（基于layui组件，样式）：
下载一些到库里面，注意：文档以html保存好 及相关的附件 到时候方面手机端和PC端展示 和资源的转移
主要是消防新闻和消防知识
最好可以做到定时爬取新的文章 这样库里面的数据实时更新
不是一成不变的
最好实现我们的管理员可以发布 不发布也会定期更新这个网站最新的新闻资讯信息
```

```
含有子系统的消防设施
建筑消防设施火灾自动报警系统	1000001	t_build_facility_fire_alarm_system_sub
建筑消防设施自动喷水灭火系统	1000002	t_build_facility_spray_system_sub
建筑消防设施气体灭火系统			1000004	t_build_facility_gas_extinguishing_system_sub
建筑消防设施火灾应急广播			1000013	t_build_facility_fire_emergency_broadcast_system_sub
建筑消防设施消防供电配电			1000012
t_build_facility_fire_power_supply_and_distribution_system_sub
建筑消防设施室内消火栓				1000031
t_facility_indoor_hydrant_sub
```

```
2019-09-10
1、用户可开通多种角色，登录时在成功后选择角色
2、人员离职记录-添加人员离职记录表，
离职时删除关联关系，回到离职公司时根据身份证直接建立关联关系

账号密码	sz000090837/Qwe123
 1、建筑单元信息 提示操作失败
 2、入驻人员信息 数据重复
 3、关联以下账号，并且丰富建筑、单位、人员、检查、物联数据
 建筑ID 建筑编码CODE 建筑名称 
 440305007004240000101 440305007004240000101 深圳湾科技生态园7栋A、B栋
 4403050070042100007 4403050070042100007 深圳湾科技生态园9栋A座
 4403050070042100003 4403050070042100003 深圳湾科技生态园9栋B座 
建筑编码	0202-GG

灭火器字段缺失3C 标志，QS标志，location
建筑的单元、房间改成字符串类型

2019-06-03
1、查看气体详情时：  category_fire_action_mode_name 返回字符串类型
2、子系统  添加不了  报500错误
3、把有几个有子系统的  在详情里面添加上
4、消防设施统计列表统计数字错误
5、排烟系统  查看详情 category_fire_action_mode_name 返回字符串
1、查看气体详情时：  category_fire_action_mode_name 返回字符串类型    
5、排烟系统  查看详情 category_fire_action_mode_name 返回字符串
6、防烟系统  查看详情 category_fire_action_mode_name 返回字符串
7、新增不了的设施设备 : 气体灭火器、干粉灭火系统、消防供电配电、灭火器、建筑消防设施室外消火栓、建筑消防设施防火阀、建筑消防设施紧急断电配电箱
8、新增完的建筑消防系统配套的文件资料台帐  在统计页面数字没有变化
9、获取建筑消防设施疏散指示列表 解析错误   请把total字段改成整型
1.修改片区统计消防设施
2.查询片区下某类消防设施
3.消火栓添加部件表 
自动喷水灭火系统，系统形式为数组
防烟系统，动作方式为数组
气体灭火系统，动作方式为数组
```

```
所有消防业务检查新增需要使用异步asyn操作
做好线程管理
处理好并发
```

```
1.同步户籍化
4.伪删除处理
5.文件上传接口
6.分类配置缓存未开启
7.物联，优化sql语句，三字段联合查询有问题（）
加字段name:火灾应急广播 消防电梯  其他系统  防火分隔  控制室联动控制  其他设施
建筑code模糊查询
超级管理加一个配置信息管理  可以更新缓存操作 
定时任务管理
```

```
消防设施导入问题
气体灭火
北楼地下室D008   联动控制         2       8       11     75     北楼地下室高、低压配电房
北楼夹层UPS间C002   联动控制                            1       107  北楼夹层UPS电池间
北楼夹层广播间     联动控制                            1       107  北楼一层广播机房
1.火灾自动报警子系统类型匹配
FDK38ZZ（感烟）
光束感烟
FDL25ZZ（差定温）
FMB13ZZ(手报）
FMH01ZZ（消按钮）
2.所有日期按照以下格式之一
2019-07-21 14:29:00
2019-07-21 14:29
2019-07-21 14
2019-07-21
2019-07
2019
3.所有填写的数值不需要带单位，默认是有单位的
4.填写表格时不能多行合并，每行数据独立
5.1048个室内消火栓子系统，未说明子系统类型和所属消火栓系统
```

## 数据库

线上

| 地址              | 数据库名称 | 用户名    | 密码             |
| ----------------- | ---------- | --------- | ---------------- |
| xfyhpc.xft119.com | base       | base      | m3kCXJ76BeaSFwfc |
| xfyhpc.xft119.com | business   | business  | P8kj3MntdDntSLph |
| xfyhpc.xft119.com | knowledge  | knowledge | DsSYd2z4XEfpDAEn |
| xfyhpc.xft119.com | quartz     | quartz    | quartz           |
| xfyhpc.xft119.com | efs        | efs       | RENscDrD7czh85xp |

网页版：http://xfyhpc.xft119.com:888/phpmyadmin_487bf013c56a6ce7/index.php

线下

| 地址           | 数据库名称       | 用户名           | 密码             |
| -------------- | ---------------- | ---------------- | ---------------- |
| 192.168.188.31 | fire_base        | fire_base        | 6Ep2nhLiFkB2RXz8 |
| 192.168.188.31 | fire_business    | fire_business    | 6Ep2nhLiFkB2RXz8 |
| 192.168.188.31 | fire_knowledge   | fire_knowledge   | 6Ep2nhLiFkB2RXz8 |
| 192.168.188.31 | fire_quartz_task | fire_quartz_task | 6Ep2nhLiFkB2RXz8 |
| 192.168.188.31 | fire_efs         | fire_efs         | 6Ep2nhLiFkB2RXz8 |
| 192.168.188.31 | iot              | iot              | 6Ep2nhLiFkB2RXz8 |

fire_base3Z6fc7mRWNpN7fEi[无备份](javascript:;) | [导入](javascript:database.input_database('fire_base');)fire_base[管理](javascript:;) | [工具](javascript:;) | [权限](javascript:;) | [改密](javascript:;) | [删除](javascript:;)

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\msohtmlclip1\01\clip_image004.jpg)



```mysql
# 为没有组织架构的单位添加一级组织架构，ID与单位ID一样
INSERT INTO t_unit_organizational(
	ID,
NAME,
UNIT_ID,
UNIT_CODE,
PID,
DESCRIBES,
CREATER,
CREATER_ID,
CREATETIME
)SELECT
ID,
NAME,
ID,
CODE,
0,
NAME,
'ywb',
'1',
'2019-04-26'
FROM t_unit_info WHERE t_unit_info.ID NOT IN (SELECT UNIT_ID FROM t_unit_organizational)
# 插入符合条件的建筑与单位关系
INSERT INTO t_build_r_unit (
id,
build_id,
build_code,
unit_id,
unit_code,
category_build_r_unit_type_id,
category_build_r_unit_type_name,
category_unit_type_id,
category_unit_type_name,
status,
creater,
creater_id,
createtime,
build_name)
SELECT
	REPLACE(UUID(),"-",""),
	t_build_info.id,
	t_build_info.code,
	'51eee44ee6a44258b9c1d276443e07a0',
	'FASDQZSD',
	'1300005',
	'监管单位',
	'',
	'',
	0,
	'',
	'',
	'2019-09-06 16:00:00',
	t_build_info.name
FROM
	t_build_info
WHERE
	t_build_info.name like '%深圳湾科技生态园%';
#  查询管理处用户
select t_build_r_unit.build_id
,t_personnel_r_unit.unit_id
,auth_user_info.*
,auth_user_r_role.role_id
from auth_user_info 
inner join t_personnel_r_unit 
on auth_user_info.id=t_personnel_r_unit.personnel_id
left join auth_user_r_role
on auth_user_r_role.user_id=auth_user_info.id
left join t_build_r_unit
on t_build_r_unit.unit_id=t_personnel_r_unit.unit_id
where auth_user_r_role.role_id=4
and t_build_r_unit.category_build_r_unit_type_id='1300003'
#  添加角色
auth_role_info
auth_systemparams_r_role
auth_role_open_manage
auth_menu_r_role
# 新增用户
insert into `auth_user_info` 
(`id`, `name`, `code`, `password`, `head_portrait`, `sex`, `phone`, `address`, `email`, `regional_code`, `regional_name`, `remark`, `level`, `active_time`, `status`) values('222','管理处单位','guanlichu','123','http:# 192.168.188.129/62e5b1b0-449c-4840-bfb0-5d73e221cae9.gif','0','13101010101','121','10001@xx.com','440305001001001','广东','备注121','6','2111-11-11 11:11:11','0');
# 新增单位
insert into `t_unit_info` 
(`id`, `code`, `name`, `address`, `region_code`, `region_name`, `establishment_time`, `telephone`, `fax`, `postcode`, `category_unit_type_id`, `category_unit_type_name`, `organization_code`, `corporate_representative_personel_id`, `corporate_representative_personel_name`, `corporate_representative_personel_contact`, `corporate_representative_personel_telephone`, `fire_security_management_personel_id`, `fire_security_management_personel_name`, `fire_security_management_personel_contact`, `fire_security_management_personel_telephone`, `contacter`, `contact_information`, `affiliated_police_station`, `status`, `fixed_assets`, `business_people_maximum_number`, `worker_total`, `jurisdictional_unit`, `category_gas_type_id`, `category_gas_type_name`, `category_economic_ownership_id`, `category_economic_ownership_name`, `key_department_total`, `key_worker_total`, `volunteer_fire_brigades_people_total`, `volunteer_fire_brigades_telephone`, `administrative_license`, `process_conditions`, `dangerous_goods_usage`, `purpose`, `pid`, `describes`, `creater`, `creater_id`, `createtime`, `fire_security_management_personel_idcard`, `corporate_representative_personel_idcard`, `unit_administrative_licensing_situation`, `settling_time`, `category_unit_classification_id`, `category_unit_classification_name`, `e_mail`, `picture_url`) 
values
('guanlichu','guanlichu','管理处','南山区','440305','广东省深圳市南山区',NULL,NULL,NULL,NULL,'1300003','管理处单位','组织机构代码',NULL,'法定代表人1','法定代表人4','法定代表人3','nanshan','消防安全管理人1','消防安全管理人4','nanshan','单位联系人','单位联系人电话',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'单位行政许可情况',NULL,NULL,NULL,NULL,NULL,'ywb','1','2018-11-27 18:40:06','消防安全管理人2','法定代表人2',NULL,'2018-12-03',NULL,NULL,NULL,NULL);
# 新增组织架构
insert into `t_unit_organizational` (`id`, `name`, `unit_id`, `unit_code`, `pid`, `describes`, `creater`, `creater_id`, `createtime`) values('guanlichu','管理处','guanlichu','guanlichu','0','1','ywb','1','2018-10-11 13:44:00');
# 新增单位与建筑关系
insert into `t_build_r_unit` (`id`, `build_id`, `build_code`, `unit_id`, `unit_code`, `category_build_r_unit_type_id`, `category_build_r_unit_type_name`, `category_unit_type_id`, `category_unit_type_name`, `status`, `creater`, `creater_id`, `createtime`) values('50208bea492942b38ff924dc27a55e0e','a4359919628945ca8a643546efdae79a','VZXCX51656Z','guanlichu','guanlichu','1300003','管理处单位',NULL,NULL,'0','vvv','1','2018-12-05 14:07:08');
# 查询单位下所有人员账号信息
select auth_user_r_role.role_id
	,auth_user_info.* 
from t_personnel_r_unit
inner join auth_user_info
on (t_personnel_r_unit.personnel_id=auth_user_info.id 
    and t_personnel_r_unit.unit_id='51eee44ee6a44258b9c1d276443e07a0')
inner join auth_user_r_role
on (auth_user_r_role.user_id=auth_user_info.id)
where t_personnel_r_unit.unit_id='51eee44ee6a44258b9c1d276443e07a0'
# 新增人员
insert into `t_personnel` (`id`, `name`, `head_portrait`, `cardid`, `sex`, `age`, `region_code`, `region_name`, `contact_information`, `is_account_open`, `status`, `describes`, `telephone`) values('222','管理处','http:# 192.168.188.129/9960ed3d-dfd0-4093-9b3c-7760243c5fbf.jpg','','1','0','440305','南山区','23121233','0','0','的大时代','12312312312');
# 新增人员与单位关系
insert into `t_personnel_r_unit` (`id`, `build_id`, `build_code`, `build_name`, `unit_id`, `unit_code`, `unit_name`, `unit_organizational_id`, `unit_organizational_name`, `personnel_id`, `duties`, `role_id`, `role_name`, `status`, `describes`, `creater`, `creater_id`, `createtime`) values('daae70ca09d3455a8b22cdc8330451a9','a4359919628945ca8a643546efdae79a','VZXCX51656Z',NULL,'guanlichu','guanlichu',NULL,'b0d336d4d6bd470e93f833d5574a29a0','vvv','222','','4',NULL,NULL,NULL,'vvv','1','2018-12-03 17:55:47');

# 安眼视频数
select count(*) from iot_video_ezcamera t1
inner join t_build_info t2
on t1.build_id=t2.id
where t2.region_code='';
# 萤石云视频数
select count(*) from iot_video_abaixun t1
inner join t_build_info t2
on t1.build_id=t2.id
where t2.region_code=''

select t1.* from iot_video_ezcamera t1
inner join t_build_info t2
on t1.build_id=t2.id
where t2.region_code=''
order by t1.createtime desc
limit 6;

select t1.* from iot_video_abaixun t1
inner join t_build_info t2
on t1.build_id=t2.id
where t2.region_code=''
order by t1.createtime desc
limit 6;
# 传感器正常异常数
select count(CASE WHEN t1.last_reported_status='0' THEN 1  END) AS a,
count(CASE WHEN t1.last_reported_status='1' THEN 1  END) AS b
from iot_sensor_info t1
inner join t_build_info t2
on t1.build_id=t2.id
where t2.region_code=''
# 按照区统计
select count(1),substr(region_code,1,6) from t_build_check_day
where length(region_code)>=6
group by substr(region_code,1,6);
# 按照街道统计
select count(1),substr(region_code,1,9) from t_build_check_day
where region_code like '440305%'
and length(region_code)>=9
group by substr(region_code,1,9);
# 查询建筑信息，封装数据
select product_type_name
,count(1) as iot_product_name 
from iot_sensor_info
where last_reported_status='1'
and build_id='ded1f06f72e5423b952ff557ecac7dc8'
and last_reported_time>'1'
group by product_type_name;

select detector_type_name
,count(1) as iot_product_name 
from iot_detector_info t1
inner join iot_front_end_processor_r_build t2
on t1.front_end_processor_code=t2.front_end_processor_code
where last_reported_status='1'
and t2.build_id='ded1f06f72e5423b952ff557ecac7dc8'
and t1.last_reported_time>'1'
group by detector_type_name
# 统计建筑的日巡查数据
select count(*),
count(case when check_status='1'then 1 end) as check_abnomal,
count(case when rectification_status='1'then 1 end) as check_abnomal
from t_build_check_day
where build_id='ded1f06f72e5423b952ff557ecac7dc8'
and checktime>'1'
# 统计建筑的月检查数据
select count(*),
count(case when check_status='1'then 1 end) as check_abnomal,
count(case when rectification_status='1'then 1 end) as check_abnomal
from t_build_check_month
where build_id='ded1f06f72e5423b952ff557ecac7dc8'
and checktime>'1'
# 统计建筑的消防控制室检查数据
select count(*),
count(case when check_status='1'then 1 end) as check_abnomal,
count(case when rectification_status='1'then 1 end) as check_abnomal
from t_build_check_control
where build_id='ded1f06f72e5423b952ff557ecac7dc8'
and checktime>'1'
# 电子巡更数据
select count(*)
from t_build_rfid_check
where build_id='ded1f06f72e5423b952ff557ecac7dc8'
and createtime>'2000-01-01';

select count(*)
from t_build_rfid
where id not in 
	(select rfid_id 
     from t_build_rfid_check 
     where createtime>'2000-01-01')
and rfid_type_id='1'
and build_id='ded1f06f72e5423b952ff557ecac7dc8'
# 设施检查数据
select count(*)
from t_build_rfid_equipment_check
where build_id='ded1f06f72e5423b952ff557ecac7dc8'
and checktime>'2000-01-01';

select count(*)
from t_build_rfid
where id not in 
	(select rfid_id 
     from t_build_rfid_equipment_check 
     where createtime>'2000-01-01')
and rfid_type_id='2'
and build_id='ded1f06f72e5423b952ff557ecac7dc8'
# 设施物联数据
select count(*) from iot_sensor_info
where build_id='ded1f06f72e5423b952ff557ecac7dc8';

select count(*) from iot_sensor_info
where build_id='ded1f06f72e5423b952ff557ecac7dc8'
and last_reported_status='1'
and last_reported_time>'2010-01-01'
```

```mysql

```

更新用户的角色信息

```mysql
001 0,1 
002 13,17,18,19,2,23,3,
003 15,20,31,37,4,
004 14,33,36,40,6,8
005 11,12,
未分类：16,21,22,24,25,27,28,29,30,32,39,

update `auth_user_r_role` set role_id='001' where role_id in ('0','1')
update `auth_user_r_role` set role_id='002' where role_id in (13,17,18,19,2,23,3)
update `auth_user_r_role` set role_id='003' where role_id in (15,20,31,37,4)
update `auth_user_r_role` set role_id='004' where role_id in (14,33,36,40,6,8)
update `auth_user_r_role` set role_id='005' where role_id in (11,12)
```

单位统一设置组织架构

```mysql
#为没有组织架构的单位添加一级组织架构，ID与单位ID一样
INSERT INTO t_unit_organizational(
    ID,
    NAME,
    UNIT_ID,
    UNIT_CODE,
    PID,
    DESCRIBES,
    CREATER,
    CREATER_ID,
    CREATETIME
)SELECT
    ID,
    NAME,
    ID,
    CODE,
    0,
    NAME,
    'ywb',
    '1',
    '2019-04-26'
FROM t_unit_info WHERE t_unit_info.ID NOT IN (SELECT UNIT_ID FROM t_unit_organizational)
```

角色

| 角色名称               | 角色id | 用户账号 | 用户密码 |
| ---------------------- | ------ | -------- | -------- |
| 大亚湾管理员           | 14     | dayawan  | 123      |
| 片区管理员             | 13     |          |          |
| 监控单位（管理处单位） | 4      | jksgl    | 123456   |
| 监控人员（管理处人员） | 5      | jks      | 123456   |
| 入驻单位               | 10     |          |          |
| 入驻人员               | 11     |          |          |

# 城中村

## 文档

操作手册         <https://www.kancloud.cn/momojane/xitongdayi/737070>

## 地址

线上服务地址         <http://other.xft119.com:9090/>

线上数据库

<http://other.xft119.com:888/phpmyadmin_3836b464a370b659/tbl_row_action.php?db=szum&table=user_info&server=1&target=&token=3e4efb61b971d6bbb308743534204a41>

szum/xft123!@#

## 记录

```
葵涌街道里，高圳头和金葵一区，管道天然气建设请改成立项，管道天然气开户点火请改成非立项
09-21
光明区-凤凰街道-面前岭村-消防安全治理
“宣传站”清空
进度
盐田街道的三村南山村是城市更新的 但是他制定了计划 你帮忙删掉
删除沙头角街道元墩头村第2.2、8.1项上报记录
vv649:
光明区-光明街道-碧眼旧村-市容秩序
“无六乱一超现象”清空进度
vv649:
光明区-光明街道-碧眼旧村-弱电管线
“光纤改造进度”清空进度
09-25
您好，光明新区光明街道市系统需要修改的数据：碧眼新村——燃气安全治理类型——（正确选项是）入户工程
09-26
凯滨新村、下早老村、白云山新村、三合新村、泥头咀村这五个村里面的“三线下地（具备条件）/三线规整（不具备条件）”这一项全部改为"不立项"
观湖街道 锦鲤二村 10.5 10.7 10.8 这三项
招商街道 电动车
09-28
光明区-光明街道-白虎沥村-弱电管线
“光纤改造进度”清空进度
葵涌街道，张屋村和新围，1.1视频门禁上传错资料，麻烦删除进度
光明区-光明街道-新围-污水
“排水设施专业管养”清空进度
沙井 大院根小区改成大园根小区
09-29
龙岗区平湖街道新木社区老村4.1家庭户漏电保护装置的上报记录，没有立项按照立项上报了。
龙华区观湖街道  谷二村 景田小区 的雨污分流（具备条件）/污水就地就近收集处理（不具备条件）
坂田 中心围村和下雪村 食品生产经营者持证持照修改不立项
10-09
葵涌 沙鱼涌 官湖这两个村1.1视频门禁进度删除
10-10
坂田10.8停车场管理子项 修改不立项
10-26 
葵涌 葵兴小区4.3电动车充电集中装置
金葵一区10.1道路硬化
11-29 
石岩 梨园新村 5.5 正规瓶装燃气供应点 修改不立项
龙华区-大浪街道- 新围新村、同胜综合开发区 视频门禁 清零
龙华区-大浪街道-罗屋围村、赤岭头新一村、赖屋山新村、新围新村、石凹村（这几个村需要改的子项目一样的） 管道天然气建设 管道天然气开户点火 光纤改造 三线下地 修改立项
马安山村 视频门禁
12-05        
1、坪山区龙田街道办的12个城中村，污水“排水设施专业管养”这一项为非立项项目，修改成；非立项项目。
2、雨污分流中，东坑居民小组、上坝居民小组、茜坑居民小组等3个为非立项项目，修改成：非立项项目。
12-06
坪山区龙田街道办
消防安全治理这块，12个城中村，宣传栏为立项项目
环境卫生治理这块，“四害防控”、“垃圾收运全程封闭”这两项为立项项目 
01-03
福田-沙头街道-龙秋村 管道天然气开户点火 进度清空
福田-福保街道-石厦村 改为进村
福田-华富街道-田面村 改为进村
01-04
福保街道石厦村 道路硬化 进度改为75
01-08
坪山区-坑梓街道-禾场吓居民小组 管道天然气开户点火 改为立项实施
01-09
坂田街道-大发埔村 燃气安全治理 改成非立项
01-15
华富街道田面村 社会治安 清空
02-12
坪地街道曾屋村 环境卫生
02-27
光明街道新围.旧中学 删除计划
2019-09
1.所有界面基础信息修改实有人口显示，保证已录入信息准确性
2.删除光纤改造，处理18年数据统计维持不变，修改19年子项上报及记录
3.弱电管线、生活污水两大项下多个子项权重变化，修改系统统计算法，之前的进度进行记录
4.提供区、街道、城中村、区进度、街道进度、城中村进度、不同项统计进度分别导出18年和19年的功能
5.进度填报由是否立项区分，修改为统一按照百分数填报
2019-09-09
删除任务
光明街道：荔园、富力区、糖厂，凤凰街道：塘尾新村，马田街道：合水口村、合水口泥围新村、上石家南区、南庄新村 
龙岗宝龙街道：桥背村、汉田村、牛伴岭村、龙信小区
```

## 数据库

| 地址           | 数据库名称 | 用户名 | 密码      |
| -------------- | ---------- | ------ | --------- |
| 192.168.188.31 | szum       | szum   | xft123!@# |

```mysql
# 查询用户密码（已知街道名称）
select password from user_info where name like '%街道%'

# 删除计划
select * from `plan_village_info` where name in ('茜坑新村');
select * from `plan_info` where village_name in ('茜坑新村');

delete from `plan_village_info` where name in ('茜坑新村');
delete from `plan_info` where village_name in ('茜坑新村');
# 查询每个街道录入城中村数量
select area_info.name as '区名称',street_info.name as '街道名称',street_code as '街道编号',count(1) as '录入城中村数量' from village_info
  inner join street_info on street_info.code=village_info.street_code
  inner join area_info on area_info.code=street_info.area_code
  group by street_code;
# 查询每个街道制定计划的城中村数量
select area_info.name as '区名称',street_info.name as '街道名称',street_code as '街道编号',count(1) as '制定计划城中村数量' from plan_info
  inner join street_info on street_info.code=plan_info.street_code
  inner join area_info on area_info.code=street_info.area_code
group by street_code;
# 统计区已录入的城中村数量
SELECT count(CASE WHEN code IS NOT null THEN 1  END) AS '所有城中村数量',
count(CASE WHEN code like '440303%' THEN 1  END) AS '罗湖区',
count(CASE WHEN code like '440304%' THEN 1  END) AS '福田区',
count(CASE WHEN code like '440305%' THEN 1  END) AS '南山区',
count(CASE WHEN code like '440306%' THEN 1  END) AS '宝安区',
count(CASE WHEN code like '440307%' THEN 1  END) AS '龙岗区',
count(CASE WHEN code like '440308%' THEN 1  END) AS '盐田区',
count(CASE WHEN code like '440309%' THEN 1  END) AS '光明新区',
count(CASE WHEN code like '440317%' THEN 1  END) AS '坪山区',
count(CASE WHEN code like '440326%' THEN 1  END) AS '龙华区',
count(CASE WHEN code like '440327%' THEN 1  END) AS '大鹏新区'
FROM village_info
# 统计区已制定计划的城中村数量
SELECT count(CASE WHEN village_code IS NOT null THEN 1  END) AS '所有城中村数量',
count(CASE WHEN village_code like '440303%' THEN 1  END) AS '罗湖区',
count(CASE WHEN village_code like '440304%' THEN 1  END) AS '福田区',
count(CASE WHEN village_code like '440305%' THEN 1  END) AS '南山区',
count(CASE WHEN village_code like '440306%' THEN 1  END) AS '宝安区',
count(CASE WHEN village_code like '440307%' THEN 1  END) AS '龙岗区',
count(CASE WHEN village_code like '440308%' THEN 1  END) AS '盐田区',
count(CASE WHEN village_code like '440309%' THEN 1  END) AS '光明新区',
count(CASE WHEN village_code like '440317%' THEN 1  END) AS '坪山区',
count(CASE WHEN village_code like '440326%' THEN 1  END) AS '龙华区',
count(CASE WHEN village_code like '440327%' THEN 1  END) AS '大鹏新区'
FROM plan_info
# 排除组织架构的无效信息
SELECT * FROM `organizational_info` WHERE code not in ( select code from village_info ) and length(code)>9
# 查询重复组织架构
SELECT code,count(1) as a FROM `organizational_info` group by code having a>1
SELECT * FROM `organizational_info` WHERE code ='440309002001'

18年
入户：13（管道天然气建设）,14（管道天然气开户点火）
进村：15（正规瓶装燃气供应点）,44（管道天然气建设）
其他：45（正规瓶装燃气供应点）

# 修改燃气治理为进村
delete from plan_item where item_id in (13,14,15,44,45) and plan_id=(select id from plan_info where village_name like '%长圳东片区%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
('00a3294b38664bd99c43d613cc6e1341', (select id from plan_info where village_name like '%%'), '15', '', '', '', '', '', '', '0', '0', '非立项实施', '0'),
('00a3294b38664bd99c43d613cc6e1342', (select id from plan_info where village_name like '%%'), '44', '', '', '', '', '', '', '0', '0', '非立项实施', '0')
# 修改燃气治理为入户
delete from plan_item where item_id in (13,14,15,44,45) and plan_id=(select id from plan_info where village_name like '%红星社区红星畔新村%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
('00a3294b38664bd99c43d613cc6e1341', (select id from plan_info where village_name like '%%'), '13', '', '', '', '', '', '', '0', '0', '非立项实施', '0'),
('00a3294b38664bd99c43d613cc6e1342', (select id from plan_info where village_name like '%%'), '14', '', '', '', '', '', '', '0', '0', '非立项实施', '0')
# 修改燃气治理为其他情况
delete from plan_item where item_id in (13,14,15,44,45) and plan_id=(select id from plan_info where village_name like '%二十二小区%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
('00a3294b38664bd99c43d613cc612358', (select id from plan_info where village_name like '%二十二小区%'), '45', '', '', '', '', '', '', '0', '0', '非立项实施', '0')

19年
入户：201913（管道天然气建设）, 201914（管道天然气开户点火）)
进村：201915（正规瓶装燃气供应点）, 201944（管道天然气建设）
其他：201945（正规瓶装燃气供应点）
# 修改燃气治理为进村
delete from plan_item where item_id in (201913, 201914, 201915, 201944, 201945) and plan_id=(select id from plan_info where village_name like '%长圳东片区%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%%'), '201915', '', '', '', '', '', '', '0', '0', '非立项实施', '0'),
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%%'), '201944', '', '', '', '', '', '', '0', '0', '非立项实施', '0')
# 修改燃气治理为入户
delete from plan_item where item_id in (201913, 201914, 201915, 201944, 201945) and plan_id=(select id from plan_info where village_name like '%红星社区红星畔新村%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%%'), '201913', '', '', '', '', '', '', '0', '0', '非立项实施', '0'),
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%%'), '201914', '', '', '', '', '', '', '0', '0', '非立项实施', '0')
# 修改燃气治理为其他情况
delete from plan_item where item_id in (201913, 201914, 201915, 201944, 201945) and plan_id=(select id from plan_info where village_name like '%二十二小区%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%二十二小区%'), '201945', '', '', '', '', '', '', '0', '0', '非立项实施', '0')

# 修改弱电管线下地
delete from plan_item where item_id in (2019060101, 2019060102, 2019060103, 2019060201, 2019060202) and plan_id=(select id from plan_info where village_name like '%二十二小区%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%二十二小区%'), ' 2019060101', '', '', '', '', '', '', '0', '0', '非立项实施', '0'),
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%二十二小区%'), ' 2019060102, '', '', '', '', '', '', '0', '0', '非立项实施', '0'),
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%二十二小区%'), ' 2019060103, '', '', '', '', '', '', '0', '0', '非立项实施', '0')
# 修改弱电管线不下地
delete from plan_item where item_id in (2019060101, 2019060102, 2019060103, 2019060201, 2019060202) and plan_id=(select id from plan_info where village_name like '%二十二小区%')
INSERT INTO `szum`.`plan_item` (`id`, `plan_id`, `item_id`, `reform_before_content`, `reform_before_remark`, `plan_content`, `plan_remark`, `current_content`, `current_remark`, `completion_rate`, `is_project_approval`, `current_progress`, `status`) VALUES 
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%二十二小区%'), ' 2019060201', '', '', '', '', '', '', '0', '0', '非立项实施', '0'),
(REPLACE(UUID(), '-', ''), (select id from plan_info where village_name like '%二十二小区%'), ' 2019060202', '', '', '', '', '', '', '0', '0', '非立项实施', '0')

# 修改子项是否立项(已知城中村名称，子项名称)
SELECT * FROM `plan_item` WHERE plan_id=(select id from plan_info where village_name like '%%') and item_id=(SELECT id FROM `item_info` WHERE name like '%%')
SELECT * FROM plan_item WHERE plan_id=(select id from plan_info where village_name like '%迳口新村%') and item_id=(SELECT id FROM item_info WHERE name like '%管道天然气%')

# 按街道、子项名称查询
SELECT * FROM plan_item 
WHERE plan_id in (select id from plan_info where street_name like '%龙田%') and item_id in (SELECT id FROM item_info WHERE name like '%排水设施%')
# 按街道、子项名称修改成不立项
UPDATE plan_item SET COMPLETION_RATE=0,IS_PROJECT_APPROCAL=0,CURRENT_PROGRESS='非立项实施' 
WHERE plan_id in (select id from plan_info where street_name like '%龙田%') and item_id in (SELECT id FROM item_info WHERE name like '%排水设施%')
# 按街道、子项名称修改成立项
UPDATE plan_item SET COMPLETION_RATE=0,IS_PROJECT_APPROCAL=1,CURRENT_PROGRESS='立项' 
WHERE plan_id in (select id from plan_info where street_name like '%龙田%') and item_id in (SELECT id FROM item_info WHERE name like '%排水设施%')
SELECT * FROM plan_item WHERE plan_id in (select id from plan_info where street_name like '%龙田%') and item_id in (SELECT id FROM item_info WHERE name like '%雨污分流%')
# 按城中村名称、子项名称查询
SELECT * FROM plan_item WHERE plan_id in (select id from plan_info where village_name in ('')) and item_id in (SELECT id FROM item_info WHERE name in (''))
# 按城中村名称、子项名称修改成立项
UPDATE plan_item SET COMPLETION_RATE=0,IS_PROJECT_APPROVAL=1,CURRENT_PROGRESS='立项' 
WHERE plan_id in (select id from plan_info where village_name in ('')) and item_id in (SELECT id FROM item_info WHERE name in (''))
# 按城中村名称、子项名称修改成不立项
UPDATE plan_item SET COMPLETION_RATE=0,IS_PROJECT_APPROVAL=0,CURRENT_PROGRESS='非立项实施' 
WHERE plan_id in (select id from plan_info where village_name in ('')) and item_id in (SELECT id FROM item_info WHERE name in (''))
# 修改子项进度
update plan_item set completion_rate='' WHERE plan_id in (select id from plan_info where village_name in('')) and item_id in (SELECT id FROM item_info WHERE name in (''))
# 查询子项进度
SELECT * FROM plan_item WHERE plan_id in (select id from plan_info where village_name in('')) and item_id in (SELECT id FROM item_info WHERE name in (''))
# 修改上报记录进度 
update plan_item_report_info set completion_rate='' where plan_item_id=(SELECT id FROM plan_item WHERE plan_id in (select id from plan_info where village_name in('')) and item_id in (SELECT id FROM item_info WHERE name in ('')))
and completion_rate>''
SELECT * FROM plan_item WHERE plan_id in (select id from plan_info where village_name in('玉田村')) and item_id in (SELECT id FROM item_info WHERE name in ('视频门禁'))

# 查询街道本周有哪些城中村未上报
select t1.id,t2.plan_id from plan_info t1
left join 
(
SELECT plan_id FROM `plan_item_report_info` WHERE plan_id in (SELECT id FROM plan_info 
WHERE id in (select id from plan_info where street_name like '%大浪%') 
and completion_rate !=100)
and report_time > '2018-12-02'
group by plan_id
) as t2
on t1.id=t2.plan_id
WHERE t1.id in (select id from plan_info where street_name like '%大浪%') 

# 查询各城中村各子项进度
select t5.name as '区',t4.name as '街道',t3.village_name as '城中村',t2.name as '子项',t1.completion_rate from plan_item t1
inner join item_info t2
on t1.item_id=t2.id
inner join plan_info t3
on t1.plan_id=t3.id
inner join street_info t4
on t4.code=t3.street_code
inner join area_info t5
on t5.code=t4.area_code
order by t3.village_code;
# 查询各街道进度
SELECT * FROM street_statistics t1
inner join 
(SELECT street_code as code,avg(completion_rate) as comle FROM `plan_info` WHERE particular_year='2018' group by street_name order by street_code) t2
on t1.street_code=t2.code
WHERE t1.particular_year='2018' 
# 查询各区进度
SELECT * FROM area_statistics t1
inner join 
(SELECT area_code as code,avg(completion_rate) as comle FROM `plan_info` WHERE particular_year='2018' group by area_code order by area_code) t2
on t1.area_code=t2.code
WHERE t1.particular_year='2018'
and t1.completion_rate!=t2.comle
# 更新各街道进度
UPDATE street_statistics t1 ,(SELECT street_code as code,avg(completion_rate) as comle FROM `plan_info` WHERE particular_year='2018' group by street_name order by street_code) t2
set t1.completion_rate =t2.comle
WHERE t1.particular_year='2018' 
and  t1.street_code=t2.code
# 更新各区进度
UPDATE area_statistics t1 ,(SELECT area_code as code,avg(completion_rate) as comle FROM `plan_info` WHERE particular_year='2018' group by area_name order by area_code) t2
set t1.completion_rate =t2.comle
WHERE t1.particular_year='2018' 
and  t1.area_code=t2.code
# 更新某区进度
UPDATE area_statistics t1 ,(SELECT area_name as name,avg(completion_rate) as comle FROM 
plan_info WHERE particular_year='2018' and area_code='440317' group by area_name order by area_code) t2 
set t1.completion_rate =t2.comle 
WHERE t1.particular_year='2018' and  t1.area_name=t2.name
# 领导权限控制
UPDATE street_statistics t1 ,(SELECT street_name as name,avg(completion_rate) as comle 
FROM `plan_info` WHERE particular_year='2018' and  street_code='440306001' group by street_name order by 
street_code) t2
set t1.completion_rate =t2.comle
WHERE t1.particular_year='2018' 
and  t1.street_name=t2.name
```

# 城市安全隐患排查

<http://58.60.185.51:5750/xfyhpc-web/system.do?toHomePage>

# 重大危险源

http://other.xft119.com:9092/

# 户籍化

广东省户籍化地址     

http://210.76.69.38:85/xflogin.aspx 

nanshan/123456

线上接口地址                            http://xft119.com:8080/swagger-ui.html 
