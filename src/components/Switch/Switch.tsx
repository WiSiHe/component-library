import React, { ChangeEvent } from "react";
import clsx from "clsx";

interface ISwitchSizes {
  small: string;
  default: string;
  large: string;
}

interface ISwitchProps {
  ariaLabel?: string;
  isChecked?: boolean;
  disabled?: boolean;
  size?: keyof ISwitchSizes;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Switch = ({
  ariaLabel = "switch",
  isChecked = false,
  disabled = false,
  size = "default",
  label = "",
  handleChange = () => {},
}: ISwitchProps) => {
  const switchSize = {
    small: "w-8 h-4 after:h-3 after:w-3 ",
    default: "w-11 h-6 after:h-5 after:w-5 ",
    large: "w-14 h-8 after:h-5 after:w-5 ",
  };

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          disabled={disabled}
        />
        <div
          className={clsx(
            switchSize[size],
            "bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          )}
        />
        {label && (
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {label}
          </span>
        )}
      </label>
    </>
  );
};

export default Switch;
