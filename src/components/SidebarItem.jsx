function SidebarItem({ image, userName, lastMessage, time }) {
  return (
    <div className="flex items-center gap-4 px-5 pt-1 transition hover:bg-[#202c33] cursor-pointer">
      <img src={image} alt="" className="w-12 h-12 object-cover rounded-full" />
      <div className="w-full flex items-center justify-between gap-4 border-b border-gray-700 pb-3">
        <div className="py-1">
          <h4>{userName}</h4>
          <p className="text-sm text-gray-400">{lastMessage}</p>
        </div>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}

export default SidebarItem;
