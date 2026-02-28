import type { APIRoute } from "astro"
import nodemailer from "nodemailer"

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log("==========================================")
    console.log("收到留言请求")
    console.log("请求方法:", request.method)
    console.log("请求URL:", new URL(request.url).pathname)
    console.log("请求头:", Object.fromEntries(request.headers))
    
    // 尝试从JSON获取数据
    let name = "", email = "", website = "", message = ""
    
    try {
      const contentType = request.headers.get('content-type')
      
      if (contentType?.includes('application/json')) {
        try {
          const jsonData = await request.json()
          console.log("从JSON获取数据:", jsonData)
          name = jsonData.name || ""
          email = jsonData.email || ""
          website = jsonData.website || ""
          message = jsonData.message || ""
        } catch (jsonError) {
          console.log("JSON解析失败", jsonError.message)
          return new Response(JSON.stringify({ error: "JSON格式错误" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          })
        }
      } else if (contentType?.includes('application/x-www-form-urlencoded')) {
        try {
          const formData = await request.formData()
          console.log("从formData获取数据:", Object.fromEntries(formData))
          name = formData.get("name")?.toString() || ""
          email = formData.get("email")?.toString() || ""
          website = formData.get("website")?.toString() || ""
          message = formData.get("message")?.toString() || ""
        } catch (formError) {
          console.log("formData解析失败", formError.message)
          return new Response(JSON.stringify({ error: "表单数据格式错误" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          })
        }
      } else {
        console.log("不支持的内容类型:", contentType)
        return new Response(JSON.stringify({ error: "不支持的内容类型" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        })
      }
    } catch (error) {
      console.error("数据解析失败:", error)
      return new Response(JSON.stringify({ error: "数据解析失败" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    console.log("表单数据:", { name, email, website, message })

    if (!message || message.trim() === "") {
      console.log("留言内容为空")
      return new Response(JSON.stringify({ error: "请填写留言内容" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // 如果没有提供姓名，使用默认值
    const displayName = name || "匿名"
    const displayEmail = email || "未知"

    console.log("处理后的留言数据:", { displayName, displayEmail, website, message })

    // 配置邮件发送
    if (process.env.QQ_EMAIL_PASSWORD) {
      try {
        console.log("尝试发送邮件")
        const transporter = nodemailer.createTransporter({
          service: "qq",
          auth: {
            user: "2316562571@qq.com",
            pass: process.env.QQ_EMAIL_PASSWORD,
          },
        })

        const mailOptions = {
          from: "2316562571@qq.com",
          to: "2316562571@qq.com",
          subject: `新留言 - ${displayName}`,
          html: `
            <h2>新留言</h2>
            <p><strong>昵称:</strong> ${displayName}</p>
            <p><strong>邮箱:</strong> ${displayEmail}</p>
            ${website ? `<p><strong>网址:</strong> ${website}</p>` : ""}
            <p><strong>留言内容:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <p><em>此邮件由网站自动发送</em></p>
          `,
        }

        await transporter.sendMail(mailOptions)
        console.log("邮件发送成功")
      } catch (emailError) {
        console.error("邮件发送失败:", emailError)
        // 邮件发送失败不影响留言提交
      }
    } else {
      console.log("未配置邮箱密码，跳过邮件发送")
    }

    console.log("留言处理成功")
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("留言处理失败:", error)
    return new Response(JSON.stringify({ error: "留言处理失败" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
