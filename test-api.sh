#!/bin/bash

# 测试留言板API
curl -X POST http://localhost:4321/api/guestbook \
  -H "Content-Type: application/json" \
  -d '{"name":"测试用户","email":"test@example.com","website":"https://example.com","message":"这是一条测试留言"}'

# 输出响应
 echo "\nAPI响应:"
