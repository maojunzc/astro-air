import type { APIRoute } from "astro"
import nodemailer from "nodemailer"

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const website = formData.get("website") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "请填写必填字段" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // 配置邮件发送
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
      subject: `新留言 - ${name}`,
      html: `
        <h2>新留言</h2>
        <p><strong>昵称:</strong> ${name}</p>
        <p><strong>邮箱:</strong> ${email}</p>
        ${website ? `<p><strong>网址:</strong> ${website}</p>` : ""}
        <p><strong>留言内容:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p><em>此邮件由网站自动发送</em></p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("邮件发送失败:", error)
    return new Response(JSON.stringify({ error: "邮件发送失败" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
