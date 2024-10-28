import React, { useState } from 'react';

const Select = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left border rounded-lg bg-white hover:bg-gray-50 focus:outline-none"
      >
        {value || "과목 선택"}
      </button>
      
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-50">
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              onSelect: (value) => {
                onValueChange(value);
                setIsOpen(false);
              }
            })
          )}
        </div>
      )}
    </div>
  );
};

const SelectContent = ({ children, onSelect }) => {
  return <div className="py-1">
    {React.Children.map(children, child =>
      React.cloneElement(child, { onSelect })
    )}
  </div>;
};

const SelectItem = ({ value, children, onSelect }) => {
  return (
    <div
      className="px-4 py-2 hover:bg-pink-50 cursor-pointer"
      onClick={() => onSelect && onSelect(value)}
    >
      {children}
    </div>
  );
};

const SelectTrigger = ({ children }) => {
  return <div>{children}</div>;
};

const SelectValue = ({ placeholder, value }) => {
  return <span>{value || placeholder}</span>;
};

export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
};
