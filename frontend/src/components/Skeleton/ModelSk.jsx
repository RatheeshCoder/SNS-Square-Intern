import React from "react";

const ModelSk = () => {
  return (
    <div class="flex flex-col justify-center h-screen animate-pulse">
      <div class="relative flex flex-col max-w-xs p-3 mx-auto space-y-3 bg-white border border-white shadow-lg md:flex-row md:space-x-5 md:space-y-0 rounded-xl md:max-w-3xl">
        <div class="grid w-full bg-gray-200 md:w-1/3 place-items-center">
          <div class="rounded-xl w-24 h-24 md:w-64 md:h-64"></div>
        </div>
        <div class="flex flex-col w-full p-3 space-y-2 bg-white md:w-2/3">
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="flex justify-end">
            <div class="px-4 py-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSk;
