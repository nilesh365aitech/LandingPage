

const BotPurchaseModal = ({ isOpen, onClose, bot, }) => {
    if (!isOpen || !bot) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">{bot.name}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              {/* <X className="w-6 h-6 text-gray-600" /> */}
            </button>
          </div>
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Description</h3>
            <p className="text-gray-600 leading-relaxed">{bot.description}</p>
          </div>
          <div className="p-6 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">${bot.price}</span>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BotPurchaseModal;
  