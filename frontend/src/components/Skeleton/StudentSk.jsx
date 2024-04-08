import React from "react";

const StudentSk = () => {
  return (
    <div class="relative p-5 animate-pulse bg-gray-300 hover:shadow-2xl group rounded-xl">
      <div class="flex items-center gap-4">
        <div class="w-20 h-20 bg-gray-200 rounded"></div>
        <div class="w-fit">
          <div class="h-6 bg-gray-200 rounded w-3/4"></div>
          <div class="mt-2 h-4 bg-gray-200 rounded w-full"></div>
          <div class="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
          <div class="mt-2 h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default StudentSk;
