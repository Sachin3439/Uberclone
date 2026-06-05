import React from 'react'

const LocationSearchPanel = ({ suggestions = [], error, activeField, onSelectSuggestion }) => {
  const title = activeField === "destination" ? "Choose destination" : "Choose pickup location";

  return (
    <div className="px-4 py-3">
      <h4 className="text-base font-semibold mb-3">{title}</h4>

      {error ? (
        <div className="text-sm text-red-600 mb-3">{error}</div>
      ) : null}

      {suggestions.length > 0 ? (
        suggestions.map((item, idx) => {
          const label = item.description || item.title || item.name || item;
          return (
            <div
              key={idx}
              onClick={() => onSelectSuggestion(label)}
              className="flex items-center justify-start gap-4 my-2 bg-gray-100 p-3 rounded-xl cursor-pointer hover:bg-gray-200"
            >
              <h2 className="bg-[#eee] w-10 h-8 rounded-full flex items-center justify-center ">
                <i className="ri-map-pin-line"></i>
              </h2>
              <h4 className="font-medium">{label}</h4>
            </div>
          );
        })
      ) : (
        <div className="text-sm text-gray-600">Enter a pickup or destination address to see suggestions.</div>
      )}
    </div>
  );
}

export default LocationSearchPanel