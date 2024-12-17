import React from 'react';
import { formatCurrency, formatForSpreadsheet } from '../utils/formatters';
import { BreakdownItem } from '../types';
import CopyButton from './CopyButton';

interface FeeBreakdownProps {
  breakdown: BreakdownItem[];
  statutoryFees: number;
  extraordinaryServices: number;
  totalFees: number;
  estateValue: number;
}

export default function FeeBreakdown({ 
  breakdown, 
  statutoryFees, 
  extraordinaryServices, 
  totalFees,
  estateValue
}: FeeBreakdownProps) {
  const handleCopy = () => {
    const formattedText = formatForSpreadsheet(
      breakdown,
      statutoryFees,
      extraordinaryServices,
      totalFees,
      estateValue
    );
    navigator.clipboard.writeText(formattedText);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Fee Breakdown</h2>
        <CopyButton onCopy={handleCopy} />
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 space-y-3">
        {breakdown.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-gray-600">{item.range}</span>
            <span className="font-medium">{formatCurrency(item.amount)}</span>
          </div>
        ))}
        
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Statutory Fees Total</span>
            <span className="font-semibold">{formatCurrency(statutoryFees)}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Extraordinary Services</span>
            <span className="font-semibold">{formatCurrency(extraordinaryServices)}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-lg font-bold">
            <span className="text-gray-800">Total Fees</span>
            <span className="text-indigo-600">{formatCurrency(totalFees)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}