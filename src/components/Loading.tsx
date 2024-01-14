

import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="animate-spin rounded-full border-t-4 border-blue-500  border-2 h-5 w-5"></div>
      <p className="ml-3 text-white">Loading...</p>
    </div>
  );
};

export default Loading;
