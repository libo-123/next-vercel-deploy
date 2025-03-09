# 学习笔记

## 1、layout和template

template跳转时不会保留状态，layout会保留。  详细看项目测试 dashbord-layout-state


## 2、usePathname

usePathname 可以获取当前的路径，详细看项目测试 dashbord-layout-state
为什么会打印两次？
dev默认开启了严格模式，严格模式下，组件会渲染两次，模拟加载卸载。线上没有

reactStrictMode: false, // 关闭严格模式

## 3、useRouter

useRouter 可以获取当前的路径，详细看项目测试 dashbord-layout-state
