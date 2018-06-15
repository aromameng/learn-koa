use koa_demo;

CREATE TABLE   IF NOT EXISTS  `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT, # 用户ID
  `email` varchar(255) DEFAULT NULL,    # 邮箱地址
  `password` varchar(255) DEFAULT NULL, # 密码
  `name` varchar(255) DEFAULT NULL,     # 用户名
  `nick` varchar(255) DEFAULT NULL,     # 用户昵称
  `detail_info` longtext DEFAULT NULL,  # 详细信息
  `create_time` varchar(20) DEFAULT NULL,   # 创建时间
  `modified_time` varchar(20) DEFAULT NULL, # 修改时间
  `level` int(11) DEFAULT NULL, # 权限级别
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入默认信息
INSERT INTO `user_info` set name='admin001', email='admin001@example.com', password='123456';

select * from user_info;

create database koa_test;

use koa_test;

select * from users;
select * from posts;

insert into users(name,pass) values('aa','123');

show variables like '%char%';

set character_set_server=utf8;
set character_set_database=utf8;
show variables like '%char%';

set global character_set_database=utf8;
set global character_set_server=utf8;

show variables like '%char%';
