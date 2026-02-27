import { useState } from "react"

interface DonateSectionProps {
  lang?: string
}

const DonateSection = ({ lang = "zh" }: DonateSectionProps) => {
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
            className="relative w-full max-w-md rounded-lg bg-blue-50 p-6 shadow-xl dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
            <h3 className="mb-6 text-center text-xl font-bold text-blue-600 dark:text-blue-400">
              {isChinese ? "请我喝杯咖啡吧~" : "Buy me a coffee~"}
            </h3>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <div className="text-center">
                <img
                  src="/images/alipay-qr.jpg"
                  alt={isChinese ? "支付宝收款码" : "Alipay QR Code"}
                  className="mb-2 h-32 w-32 rounded object-cover"
                />
                <p className="text-sm font-medium">
                  {isChinese ? "支付宝" : "Alipay"}
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/wechat-qr.jpg"
                  alt={isChinese ? "微信收款码" : "WeChat QR Code"}
                  className="mb-2 h-32 w-32 rounded object-cover"
                />
                <p className="text-sm font-medium">
                  {isChinese ? "微信" : "WeChat"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DonateSection
