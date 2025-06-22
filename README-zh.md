# IT-Tools

这是一个面向开发者和 IT 从业人员的实用工具集合。[立即查看！](https://it-tools.tech)

## 功能与路线图

请查看 [issues](https://github.com/CorentinTh/it-tools/issues) 页面以了解正在开发中的功能。

你有新的工具想法吗？欢迎提交 [功能请求](https://github.com/CorentinTh/it-tools/issues/new/choose)！

## 自托管部署

适用于你的家庭实验室（Homelab）的自托管方案：

**通过 Docker Hub 部署：**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 corentinth/it-tools:latest
```

**通过 GitHub Packages 部署：**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/corentinth/it-tools:latest
```

**其他部署方案：**

- [Cloudron](https://www.cloudron.io/store/tech.ittools.cloudron.html)
- [Tipi](https://www.runtipi.io/docs/apps-available)
- [Unraid](https://unraid.net/community/apps?q=it-tools)

## 贡献指南

### 推荐的 IDE 设置

推荐使用 [VSCode](https://code.visualstudio.com/) 并安装以下插件：

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

建议配置如下：

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "i18n-ally.localesPaths": ["locales", "src/tools/*/locales"],
  "i18n-ally.keystyle": "nested"
}
```

### 对 `.vue` 文件的 TypeScript 支持

TypeScript 默认无法处理 `.vue` 文件的类型信息。我们使用 `vue-tsc` 替代 `tsc` 来进行类型检查。在编辑器中，需要安装 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)，使 TypeScript 支持 `.vue` 类型。

如果你觉得默认的 TypeScript 插件性能不够好，可以启用 Volar 的 **Take Over Mode**，详情可参考 [这里](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)。

#### 启用步骤：

1. 禁用 VSCode 内置的 TypeScript 扩展：
   - 打开命令面板 (`Ctrl+Shift+P`)
   - 输入 `Extensions: Show Built-in Extensions`
   - 找到 `TypeScript and JavaScript Language Features`，右键选择 `Disable (Workspace)`
2. 重新加载 VSCode 窗口：
   - 运行命令 `Developer: Reload Window`

### 项目设置

确保你使用的是 **Node.js v18.x**（推荐使用 LTS 版本），可通过以下命令检查版本：

```bash
node -v
```

推荐使用 `pnpm` 安装依赖，请先全局安装 pnpm（如未安装）：

```sh
npm install -g pnpm
```

然后安装项目依赖：

```sh
pnpm install
```

### 开发环境编译与热重载

```sh
pnpm dev
```

### 生产环境类型检查、编译与压缩

```sh
pnpm build
```

### 单元测试（基于 [Vitest](https://vitest.dev/)）

```sh
pnpm test
```

### 使用 [ESLint](https://eslint.org/) 进行代码规范检查

```sh
pnpm lint
```

### 创建新工具

要创建一个新工具，可以运行以下命令生成基础模板：

```sh
pnpm run script:create:tool my-tool-name
```

该命令将在 `src/tools` 目录下生成对应文件，并自动导入至 [src/tools/index.ts](file:///home/arnold/Documents/js/it-tools/src/tools/index.ts)。你只需将其归类到合适的类别中即可开始开发。

## 许可协议

本项目采用 [GNU GPLv3](LICENSE) 协议。
