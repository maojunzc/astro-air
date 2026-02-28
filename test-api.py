import requests
import json

# 测试留言板API
url = "http://localhost:4321/api/guestbook"
headers = {"Content-Type": "application/json"}
data = {
    "name": "测试用户",
    "email": "test@example.com",
    "message": "这是一条测试留言"
}

try:
    response = requests.post(url, headers=headers, data=json.dumps(data))
    print("响应状态码:", response.status_code)
    print("响应内容:", response.json())
except Exception as e:
    print("错误:", str(e))