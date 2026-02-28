// 测试留言板API
const http = require('http');

const data = JSON.stringify({
  name: '测试用户',
  email: 'test@example.com',
  website: 'https://example.com',
  message: '这是一条测试留言'
});

const options = {
  hostname: 'localhost',
  port: 4322,
  path: '/api/guestbook',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  
  res.on('data', (chunk) => {
    console.log(`响应体: ${chunk}`);
  });
  
  res.on('end', () => {
    console.log('请求完成');
  });
});

req.on('error', (e) => {
  console.error(`请求错误: ${e.message}`);
});

// 发送数据
req.write(data);
req.end();