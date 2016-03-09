-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 03 月 08 日 11:52
-- 服务器版本: 5.6.21
-- PHP 版本: 5.4.34

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `webapp`
--

-- --------------------------------------------------------

--
-- 表的结构 `base_mood`
--

CREATE TABLE IF NOT EXISTS `base_mood` (
  `mood_id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `mood_title` varchar(200) NOT NULL COMMENT '标题',
  `mood_img` varchar(200) DEFAULT NULL COMMENT '文章标题',
  `mood_content` text NOT NULL COMMENT '文章内容',
  `mood_date` varchar(300) NOT NULL COMMENT '发布日期',
  `mood_write` varchar(100) NOT NULL COMMENT '作者',
  PRIMARY KEY (`mood_id`),
  KEY `mood_img` (`mood_img`),
  KEY `moode_title` (`mood_title`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='心情发布表' AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `base_mood`
--

INSERT INTO `base_mood` (`mood_id`, `mood_title`, `mood_img`, `mood_content`, `mood_date`, `mood_write`) VALUES
(1, '微笑向暖', '\\images\\ueditor\\706788093503606784.jpg', '生命是一趟旅程，我们都在途中;每个人都在不知不觉中路过着沿途的风景。许多时候，生命若水，石过时惊现涟漪，石过后波澜不惊。很多时候又恍然若梦，回首处梦过嫣然，思想时黯然销魂。\n\n　　也许，生命本身就是一个奇迹，一花一世界，一叶一菩提，这奇迹里有太多的酸甜苦辣;也许，生命本身就是一个传说，悲欢离合，每个人都是故事。很喜欢一句话：岁月是白纸上的铅字，擦得再干净也会留下痕迹……经年回眸，那些悄无声息的过往，也便演绎成静水流淌的沧桑，点点滴滴安抚灵魂，温暖生命。\n\n', '2016-03-07 18:26:47', 'admin'),
(2, '春风十里，温暖相待', '\\images\\ueditor\\706788688721481728.jpg', '\n\n　　剪一缕光阴，种于季节深处，浅秋里深埋的那枚红豆，是否早已丰收爱的供养，精心落墨的段段诗行又是否在冬的辗转里已经深深留在你的心里。\n\n　　旧时光阴已经远去，但留在脑海中的记忆却是清晰，我把曾经的美好，临摹成文字，装进我的行囊，偶尔翻阅，偶尔读起，曾经的一幕一幕都在脑海里回放。\n\n　　雨、风……\n\n　　交替着有点凉，对于我这怕冷的人，就是蜗居在家里，隔着窗棂看风，赏雨，然后再想想你\n\n', '2016-03-07 18:29:11', 'admin'),
(3, '一年又一年', '\\images\\ueditor\\706788976610119680.gif', '\n不管你愿不愿意，藏在岁月里的年就这样来了。带着迷茫，带着一份感慨和沧桑，带着我们的希望和憧憬，姗姗而来。\n\n　　时光更替，没有人在乎你眸中的眷恋，也没有人会帮你记录下这一路的酸甜苦辣，季节辗转，大家都匆忙的在路上，太多的情非得已，都化成一缕叹息。\n\n　　渐渐的，光阴写意了一张不再年轻的脸，不知不觉中，父母的鬓角已染上了白发，而我们，也学会了，在生活的漩涡中逆流而上，懂得了什么是坚强。\n\n', '2016-03-07 18:31:32', 'admin'),
(4, '简单而沉静', '\\images\\ueditor\\706789704925843456.jpg', '\n人到中年，简单而沉静。已不再想往那些鲜衣怒马，唇红齿白的光阴，渐渐的向往平和安稳，也许每一天都没有那么美，却总有美好的东西存在。\n\n　　流年逝水，一路上我们失去过，也得到过，所有的留白，都在转身之间，所有的美好，都在回眸之处。历经种种，唯不变的是对生活的执着，对未来的希望。\n\n　　曾经吟唱的歌，依然在耳畔，曾经做过的梦，清亮而久远，我们就这样在似起起落落，磕磕绊绊的走过了一年又一年。\n\n', '2016-03-07 18:33:16', 'admin'),
(6, '敞开自己，生命自会疗愈', '\\images\\ueditor\\706997290816114688.jpg', '\n如果我们敞开自己，生命自会疗如果我们敞开自己，生命自会疗愈。愈。但是生命疗愈我们的方式很奇怪，大多数情况下，我们无法理解，甚至不愿意看见：它让我们经历我们不喜欢的事情，这与我们对事情的期待截然相反，有时让我们很痛苦。它就像是我们的人生伴侣，经常出现，但却不是我们最初想象的样子。可能它把一些我们不喜欢的事情带到我们的身边，或者把我们不想要的事情带给我们，这看起来让我们很受伤；它带给我们的关系与我们头脑中想象的画面完全不同:比如，一次出乎意料的怀孕；一个让你很生气的同事或老板；一场疾病，很可能是很严重的疾病；带走你所爱的人的生命；或者可能是发生在集体层面的事件，比如自然灾害，严重的经济危机，一个政治系统的瓦解导致你的整个人生不得不改变，或者就像我们的前人所经历的<a href="http://www.psy525.cn/disease/15.html" style="color: rgb(76, 76, 76); text-decoration: none;" _href="http://www.psy525.cn/disease/15.html">恐怖的政治运动。生命带给我们无以数计的挑战，与此同时，也给予我们成千上万的成长和成熟的机会。然而，我们需要了解，生命并非按照我们的意愿量身定制，如果它这么做了对我们未必是好事。当我们能领会这一点的时候，我们便离开了孩子和青少年的意识，成为了一个成年人。\n', '2016-03-08 08:17:59', 'admin'),
(7, '绕指薄凉，晕染苍茫', '\\images\\ueditor\\706998032348090368.jpg', '\n北方的雪终是来得早。乍寒的冷，让人刚刚涉足秋凉，来不及将秋的思绪妥帖装帧，这一场初雪，就随一股强劲的风寒悄然而至。独坐寒夜，窗外显得些许苍茫。暮秋的风，已缀满苍凉，吹落片片离殇，还在婉转低唱。是对亲人的眷恋?还是不愿随风彷徨，流离断肠?\n\n　　雪，很轻盈;漫天飞舞的雪，像梨花，飘摇着丝丝缕缕的忧伤。窗外翩翩寒影，却再也望不见熟悉的面孔。或许，真的走远了。或许，我们彼此只是各自人生路上的过客。\n\n　　一眸秋水，一眸怆，柔情许了谁的殇?一池轻寒，一池凉，欲诉相思谁的怅?一抹幽蓝，一抹伤，轻叹流光盈了谁的梦?一枕清欢，一枕泪，却看明月萦了谁的影?\n\n', '2016-03-08 08:20:47', 'admin'),
(8, '岁月成诗，流年凝画', '\\images\\ueditor\\706998181149413376.jpg', '\n六月风拂月漫纱，伏案舒卷墨涵芳。唐诗宋词静默赏，朦胧新韵凝眸观。温馨惬意夏阑珊，华灯接天星灿烂。远山枕水牵云梦，书香幽梦醉流年。\n\n　　岁月成诗，流年凝画，邂逅美丽，温馨惬意，夏的美好嫣然绽放一卷芬芳，墨笔涵香染指凝香，徜徉一卷画卷，花儿舞蹈，清风飘逸。\n\n　　梦醉江南，美景如画，江南梦里水乡，凝着画卷慢慢舒开美丽和诗意，柳色青青，美景熏醉游人梦。晓雾朦胧隐约处，沉香美酒醉意浓，把酒吟诗江南岸，清风奏弦觅小诗，绿水涟漪环翠碧，蝶翩花坊婉露凝。一池清荷霓裳舞，芙蓉出水醉江南。\n\n　　岁月成诗，流年凝画。舒卷品味字里行间，有暗香盈袖，清风飘逸，花儿婷婷，临水踏歌，佳人在水一方，如花开的优雅芬芳，凝一方素笺。\n\n', '2016-03-08 08:21:47', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `base_personaldata`
--

CREATE TABLE IF NOT EXISTS `base_personaldata` (
  `data_id` int(20) NOT NULL AUTO_INCREMENT COMMENT '个人资料ID',
  `data_name` varchar(200) NOT NULL COMMENT '用户姓名',
  `data_age` varchar(100) DEFAULT NULL COMMENT '用户年龄',
  `data_brithday` date DEFAULT NULL COMMENT '用户生日',
  `data_work` varchar(150) DEFAULT NULL COMMENT '工作',
  `data_company` varchar(200) DEFAULT NULL COMMENT '公司',
  `data_phone` varchar(200) NOT NULL COMMENT '电话',
  `data_email` varchar(200) NOT NULL COMMENT '邮箱',
  `data_self` text COMMENT '用户自我描述',
  PRIMARY KEY (`data_id`),
  KEY `data_name` (`data_name`,`data_email`),
  KEY `data_email` (`data_email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='个人资料表' AUTO_INCREMENT=15 ;

--
-- 转存表中的数据 `base_personaldata`
--

INSERT INTO `base_personaldata` (`data_id`, `data_name`, `data_age`, `data_brithday`, `data_work`, `data_company`, `data_phone`, `data_email`, `data_self`) VALUES
(12, 'admin', '24', '1991-12-31', 'web前端设计师', '公司', '18730645632', 'admin@qq.com', '我是一名web前端设计师'),
(13, 'ac', NULL, '2016-04-07', 'java', 'java', '137490985544', 'admin123@qq.com', 'hello'),
(14, 'ac', '24', '0000-00-00', '234', 'java', '137490985544', 'admin123@qq.com', 'hello');

-- --------------------------------------------------------

--
-- 表的结构 `base_todo`
--

CREATE TABLE IF NOT EXISTS `base_todo` (
  `todo_id` int(20) NOT NULL AUTO_INCREMENT,
  `todo_title` varchar(100) NOT NULL,
  `todo_content` varchar(200) NOT NULL,
  `todo_starttime` varchar(50) NOT NULL,
  `todo_endtime` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`todo_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `base_todo`
--

INSERT INTO `base_todo` (`todo_id`, `todo_title`, `todo_content`, `todo_starttime`, `todo_endtime`) VALUES
(1, '去公司完成页面设计', '完成项目的界面设计', '2016-03-07 09:00:26', '2016-03-07 17:42:36'),
(2, '中午回家吃饭', '回家吃午饭，自己下厨。', '2016-03-07 12:00:49', '2016-03-07 13:40:49'),
(3, '完成项目前端设计', '完成项目的html，css，js。', '2016-03-07 17:57:00', '2016-03-07 17:57:01'),
(4, '晚上去参加生日聚会', '参加生日聚会，记得带礼物。', '2016-03-07 20:00:37', '2016-03-07 22:00:37'),
(5, '写下明天的工作计划', '详细的写出具体的工作计划和进程。', '2016-03-07 23:10:27', '2016-03-07 23:40:06'),
(6, '去医院看牙医', '9点的预约看医生。', '2016-03-08 08:24:47', '2016-03-08 08:24:50');

-- --------------------------------------------------------

--
-- 表的结构 `base_users`
--

CREATE TABLE IF NOT EXISTS `base_users` (
  `userid` int(20) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(100) NOT NULL COMMENT '用户名/邮箱',
  `userpwd` char(50) NOT NULL COMMENT '用户密码',
  `userdate` varchar(50) NOT NULL,
  PRIMARY KEY (`userid`),
  KEY `user_name` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='用户表' AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `base_users`
--

INSERT INTO `base_users` (`userid`, `username`, `userpwd`, `userdate`) VALUES
(1, 'admin@qq.com', '202cb962ac59075b964b07152d234b70', '2016-03-07 13:34:37'),
(2, 'admin123@qq.com', '202cb962ac59075b964b07152d234b70', '2016-03-08 10:38:07');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
