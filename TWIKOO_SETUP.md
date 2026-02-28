# Twikoo 评论系统设置指南

## 在 Netlify 上部署 Twikoo 服务

### 步骤 1: 部署 Twikoo 到 Netlify

1. 访问 https://twikoo.js.org/quick-start.html
2. 点击 "一键部署到 Netlify" 按钮
3. 登录你的 Netlify 账号
4. 在部署页面中，为你的 Twikoo 服务命名
5. 点击 "Deploy site" 按钮开始部署

### 步骤 2: 配置环境变量

1. 部署完成后，进入 Netlify 控制台
2. 找到你的 Twikoo 服务站点
3. 点击 "Site settings" → "Build & deploy" → "Environment"
4. 添加以下环境变量：
   - `MONGODB_URI`：你的 MongoDB 连接字符串（推荐使用 MongoDB Atlas 免费版）
   - `TWIKOO_ADMIN_PASSWORD`：设置一个管理员密码

### 步骤 3: 获取环境 ID

1. 部署成功后，你的 Twikoo 服务会有一个 Netlify 分配的域名（如 `your-twikoo-site.netlify.app`）
2. 这个域名就是你的 `envId`

## 配置本地项目

### 步骤 1: 编辑 .env 文件

将获取到的 `envId` 添加到 `.env` 文件中：

```env
# Twikoo评论系统环境变量
PUBLIC_TWIKOO_ENV_ID=your-twikoo-site.netlify.app

# 邮件发送环境变量
QQ_EMAIL_PASSWORD=
```

### 步骤 2: 测试评论系统

1. 启动本地开发服务器：`npm run dev`
2. 访问博客文章页面，查看评论系统是否正常显示
3. 尝试发表一条评论，测试功能是否正常

## 常见问题

1. **评论系统不显示**：
   - 检查 `envId` 是否正确
   - 检查网络连接是否正常
   - 查看浏览器控制台是否有错误信息

2. **无法提交评论**：
   - 检查 MongoDB 连接是否正常
   - 检查 Netlify 服务是否正常运行

3. **样式问题**：
   - 可以修改 `src/styles/twikoo.css` 文件来自定义样式

## 参考文档

- Twikoo 官方文档：https://twikoo.js.org/
- Netlify 部署指南：https://twikoo.js.org/quick-start.html#netlify
