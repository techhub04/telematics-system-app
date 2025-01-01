import React, { useImperativeHandle, useState } from "react";
import { forwardRef } from "react";

const countries = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
];

const TSPhoneInput = forwardRef((props, ref) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  useImperativeHandle(ref,()=>({
    getValues:()=>({selectedCountry,phoneNumber}),
    clearValues: ()=>{
      setSelectedCountry("");
      setPhoneNumber("");
    }
  }));

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      setError("");
    } else {
      setError("Phone number should contain only digits.");
    }
  };

  return (
    <div>
      <div>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Phone
      </label>
        <div className="flex space-x-2 items-center mb-4">
          <select
            className="p-1 border  border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCountry.name}
            onChange={(e) => {
              const country = countries.find((c) => c.name === e.target.value);
              setSelectedCountry(country);
            }}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>

          <div className="flex-grow flex items-center space-x-1">
            <span className="p-1 bg-gray-100 border border-gray-300 rounded-l-md">
              {selectedCountry.code}
            </span>
            <input
              type="text"
              required
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Phone number"
              className="w-full p-1 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        
      </div>
    </div>
  );
});

export default TSPhoneInput;
