import { useState } from "react";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function ComponentGrid() {
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <button className="border-gray-300 hover:border-gray-800 active:bg-gray-100 flex w-40 items-center justify-center rounded-md border px-3 py-2 transition-all duration-75 focus:outline-none">
        <p className="text-gray-600">Modal</p>
      </button>
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-40">
            <button className="hover:bg-gray-100 active:bg-gray-200 flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75">
              Item 1
            </button>
            <button className="hover:bg-gray-100 active:bg-gray-200 flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75">
              Item 2
            </button>
            <button className="hover:bg-gray-100 active:bg-gray-200 flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75">
              Item 3
            </button>
          </div>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="border-gray-300 hover:border-gray-800 active:bg-gray-100 flex w-40 items-center justify-between rounded-md border px-4 py-2 transition-all duration-75 focus:outline-none"
        >
          <p className="text-gray-600">Popover</p>
          <ChevronDown
            className={`text-gray-600 h-4 w-4 transition-all ${
              openPopover ? "rotate-180" : ""
            }`}
          />
        </button>
      </Popover>
      <Tooltip content="GitFluence is an opinionated collection of components, hooks, and utilities for your Next.js project.">
        <div className="border-gray-300 hover:border-gray-800 active:bg-gray-100 flex w-40 cursor-default items-center justify-center rounded-md border px-3 py-2 transition-all duration-75 focus:outline-none">
          <p className="text-gray-600">Tooltip</p>
        </div>
      </Tooltip>
    </div>
  );
}
