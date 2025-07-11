const Naver = () => {
  return (
    <div className="mb-8">
      <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium">
          About
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
          Resume
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
          Projects
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
          Blog
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Naver;
