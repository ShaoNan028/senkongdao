# 森空岛 App

这是一个模仿森空岛的 React 应用程序，使用 React 和 Styled Components (CSS-in-JS) 构建。

## 功能特点

- 底部导航栏：首页、关注、消息、我的主页
- 首页顶部可切换作品分区：推荐、明日方舟、来自星尘、终末地
- 导航栏及分区背景为图片，根据分区作品切换
- 向上滚动后，导航栏内容切换为当前分区名称
- 热点区域：签到福利、工具箱、活动战绩
- 分区下方有 tab 滑动分区，可以切换子分区
- 子分区向上滚动，吸顶在导航栏下方
- 作品展示区域，包含作者、关注按钮、作品名称、作品图片、作品描述

## 技术栈

- React
- React Router
- Styled Components (CSS-in-JS)

## 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start
```

```bash
# 对Web应用更改后，重新构建并更新原生应用
npm run build
npx cap copy
npx cap sync
```