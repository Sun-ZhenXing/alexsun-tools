# Nuxt3 工具合集

## 1. 项目介绍

使用 Nuxt3 开发的工具合集，包含以下工具：

- [x] Diff 工具，比较代码差异，基于 [nuxt-monaco-editor](https://github.com/e-chan1007/nuxt-monaco-editor)
- [x] 从剪切板粘贴图片

## 2. 环境要求

需要安装 `pnpm` 8+，且要求 Node.js >= 16，安装方法：

```bash
npm i -g pnpm
```

或者在启用 `corepack` 时使用 `corepack` 安装最新版本：

```bash
corepack prepare pnpm@latest --activate
```

安装依赖：

```bash
pnpm i
```

升级全部依赖项目：

```bash
pnpm up
```

删除不需要的依赖：

```bash
pnpm store prune
```

## 3. 开发和部署

开发：

```bash
pnpm dev
```

构建：

```bash
pnpm build
```

静态构建：

```bash
pnpm generate
```

Docker 部署：

```bash
docker build -t alexsun-tools .
docker run -d -p 3039:3000 alexsun-tools
```
