import { useState } from "react"

interface DonateButtonProps {
  lang?: string
}

const DonateButton = ({ lang = "zh" }: DonateButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isChinese = lang === "zh"

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-gray-800 px-6 py-2 text-white transition-colors hover:bg-gray-700"
        >
          {isChinese ? "捐赠" : "Donate"}
        </button>
      </div>

      {isModalOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-center text-xl font-bold">
              {isChinese ? "支持作者" : "Support the Author"}
            </h3>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <div className="text-center">
                <p className="mb-2 text-sm">{isChinese ? "微信" : "WeChat"}</p>
                <img
                  src="/images/VX.jpg"
                  alt={isChinese ? "微信收款码" : "WeChat QR Code"}
                  className="h-40 w-40 rounded object-cover"
                />
              </div>
              <div className="text-center">
                <p className="mb-2 text-sm">
                  {isChinese ? "支付宝" : "Alipay"}
                </p>
                <div className="flex h-40 w-40 items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
                  <p className="text-gray-500 dark:text-gray-400">
                    {isChinese ? "请添加支付宝收款码" : "Add Alipay QR Code"}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full rounded-md bg-gray-200 py-2 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {isChinese ? "关闭" : "Close"}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default DonateButton
