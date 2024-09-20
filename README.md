# Nuxt3 工具合集

## 1. 项目介绍

使用 Nuxt3 开发的工具合集，包含以下工具：

- [x] Diff 工具，比较代码差异，基于 [nuxt-monaco-editor](https://github.com/e-chan1007/nuxt-monaco-editor)
- [x] 从剪切板粘贴图片
- [x] IEEE754 可视化工具
- [ ] JSON to 代码
- [ ] JSON / YAML / XML 转换
- [ ] Base64 / URL 编码解码
- [x] 二维码生成
- [x] Crontab 表达式解析和生成

## 2. 环境要求

- Node.js >= 20.x
- pnpm >= 9.x

建议使用 `corepack` 安装最新版本的 `pnpm`：

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

安装依赖：

```bash
pnpm i
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
