const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: '服务正常',
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ 后端已启动：http://localhost:${PORT}/api/health`);
});