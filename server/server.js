const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(helmet());
app.use(express.json());

// 路由
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// 数据库连接
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB 连接成功'))
.catch(err => console.error('MongoDB 连接失败:', err));

// 启动服务器
app.listen(PORT, () => console.log(`服务器运行在端口 ${PORT}`));