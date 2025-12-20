'use client';

import { useState } from 'react';
import { decodeVIN, VINInfo } from '@/lib/vinDecoder';

export default function VinInput() {
  const [vinNumber, setVinNumber] = useState('');
  const [validationError, setValidationError] = useState('');
  const [decodedVinInfo, setDecodedVinInfo] = useState<VINInfo | null>(null);

  const handleVinChange = (inputValue: string) => {
    const uppercaseVin = inputValue.toUpperCase();
    setVinNumber(uppercaseVin);
    setValidationError('');
    
    if (uppercaseVin.length === 17) {
      const vinDecodingResult = decodeVIN(uppercaseVin);
      if (vinDecodingResult.valid) {
        setDecodedVinInfo(vinDecodingResult);
      } else {
        setValidationError('Invalid VIN format');
        setDecodedVinInfo(null);
      }
    } else {
      setDecodedVinInfo(null);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (vinNumber.length !== 17) {
      setValidationError('VIN must be exactly 17 characters.');
      return;
    }
    setValidationError('');
    
    // Redirect to EpicVIN with affiliate ID and VIN
    const epicVinAffiliateId = '0xhataau2iwvr';
    const epicVinCheckUrl = `https://epicvin.com/check-vin?vin=${vinNumber}&a_aid=${epicVinAffiliateId}`;
    
    window.location.href = epicVinCheckUrl;
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-gray-900 rounded-lg p-2 border border-gray-700">
          <input
            type="text"
            value={vinNumber}
            onChange={(changeEvent) => handleVinChange(changeEvent.target.value)}
            placeholder="ENTER VIN NUMBER"
            className="flex-grow bg-transparent text-white px-4 py-3 outline-none font-mono tracking-wider text-lg placeholder-gray-500 w-full"
            maxLength={17}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-cyan-500/50"
          >
            CHECK VIN
          </button>
        </div>
      </form>
      
      {validationError && <p className="text-red-400 mt-2 text-center text-sm">{validationError}</p>}
      
      {decodedVinInfo && decodedVinInfo.valid && (
        <div className="mt-6 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-green-500/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-bold text-white">VIN Decoded Successfully</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Manufacturer</p>
              <p className="text-white font-bold">{decodedVinInfo.manufacturer}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Region</p>
              <p className="text-white font-bold">{decodedVinInfo.region}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-xs mb-1">Model Year</p>
              <p className="text-white font-bold">{decodedVinInfo.year}</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-gray-300">
              💡 <strong>Want the full history?</strong> Click "CHECK VIN" above to see accidents, theft records, mileage rollbacks, and more!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
