import { useState } from 'react';

interface DonateButtonProps {
  lang?: string;
}

const DonateButton = ({ lang = 'zh' }: DonateButtonProps) => {
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
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              {isChinese ? '支持作者' : 'Support the Author'}
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="text-center">
                <p className="mb-2 text-sm">{isChinese ? '微信' : 'WeChat'}</p>
                <img 
                  src="/images/VX.jpg" 
                  alt={isChinese ? '微信收款码' : 'WeChat QR Code'} 
                  className="w-40 h-40 object-cover rounded" 
                />
              </div>
              <div className="text-center">
                <p className="mb-2 text-sm">{isChinese ? '支付宝' : 'Alipay'}</p>
                <div className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    {isChinese ? '请添加支付宝收款码' : 'Add Alipay QR Code'}
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isChinese ? '关闭' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateButton;