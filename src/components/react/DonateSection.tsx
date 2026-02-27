import { useState } from 'react';

interface DonateSectionProps {
  lang?: string;
}

const DonateSection = ({ lang = 'zh' }: DonateSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isChinese = lang === 'zh';

  return (
    <>
      <div className="flex justify-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          {isChinese ? '捐赠' : 'Donate'}
        </button>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
              {isChinese ? '请我喝杯咖啡吧~' : 'Buy me a coffee~'}
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="text-center">
                <img 
                  src="/images/alipay-qr.jpg" 
                  alt={isChinese ? '支付宝收款码' : 'Alipay QR Code'} 
                  className="w-32 h-32 object-cover rounded mb-2" 
                />
                <p className="text-sm font-medium">{isChinese ? '支付宝' : 'Alipay'}</p>
              </div>
              <div className="text-center">
                <img 
                  src="/images/wechat-qr.jpg" 
                  alt={isChinese ? '微信收款码' : 'WeChat QR Code'} 
                  className="w-32 h-32 object-cover rounded mb-2" 
                />
                <p className="text-sm font-medium">{isChinese ? '微信' : 'WeChat'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateSection;