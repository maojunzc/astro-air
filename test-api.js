// 测试留言板API
import http from 'http';

// 手动构建JSON字符串，确保格式正确
const data = '{"name":"测试用户","email":"test@example.com","website":"https://example.com","message":"这是一条测试留言"}';

console.log('发送的数据:', data);
console.log('数据长度:', data.length);

const options = {
  hostname: 'localhost',
  port: 4321,
  path: '/api/guestbook',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length.toString()
  }
};

const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  
  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  
  res.on('end', () => {
    console.log(`响应体: ${responseBody}`);
    console.log('请求完成');
  });
});

req.on('error', (e) => {
  console.error(`请求错误: ${e.message}`);
});

// 发送数据
req.write(data);
req.end();