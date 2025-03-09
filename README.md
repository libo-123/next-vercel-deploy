# 学习笔记

## 1、layout和template

template跳转时不会保留状态，layout会保留。  详细看项目测试 dashbord-layout-state


## 2、usePathname

usePathname 可以获取当前的路径，详细看项目测试 dashbord-layout-state
为什么会打印两次？
dev默认开启了严格模式，严格模式下，组件会渲染两次，模拟加载卸载。线上没有

reactStrictMode: false, // 关闭严格模式

## 3、组件网址
https://www.creative-tim.com/  -> twComponents 借助taillwindcssshi实现的组件


## 路由组
()  本身不会映射url

layout共享

可以定义多个rootlayout（可以测试）

1、根据网站的功能进行模块划分

2、根据路由组的页面，共享路由组的layout，并且可以给网站创建多个rootlayout（这样可以成功隔离404页面）


## 优化
字体不满意，如何优化？ 用next/font

1 可以加载谷歌字体（完全够用）

2、可以加载本地字体

import { Geist, Geist_Mono, Comforter } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

className={`${geist.variable} antialiased`}



## vercel发布

1、vercel 部署



