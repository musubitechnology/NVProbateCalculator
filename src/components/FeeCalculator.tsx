import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculateStatutoryFees } from '../utils/calculateFees';
import { parseAmount } from '../utils/formatters';
import CurrencyInput from './CurrencyInput';
import FeeBreakdown from './FeeBreakdown';
import LegalInformation from './LegalInformation';

export default function FeeCalculator() {
  const [estateValue, setEstateValue] = useState<string>('');
  const [extraordinaryServices, setExtraordinaryServices] = useState<string>('');
  const [isLegalTextOpen, setIsLegalTextOpen] = useState(false);

  const parsedEstateValue = parseAmount(estateValue);
  const parsedExtraordinaryServices = parseAmount(extraordinaryServices);
  
  const { total: statutoryFees, breakdown } = calculateStatutoryFees(parsedEstateValue);
  const totalFees = statutoryFees + parsedExtraordinaryServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Nevada Probate Fee Calculator
            </h1>
          </div>

          <div className="space-y-6">
            <CurrencyInput
              label="Estate Value"
              value={estateValue}
              onChange={setEstateValue}
              placeholder="Enter estate value"
            />

            <CurrencyInput
              label="Compensation for Extraordinary Services (NRS 150.161)"
              value={extraordinaryServices}
              onChange={setExtraordinaryServices}
              placeholder="Enter compensation for extraordinary services"
            />

            <FeeBreakdown
              breakdown={breakdown}
              statutoryFees={statutoryFees}
              extraordinaryServices={parsedExtraordinaryServices}
              totalFees={totalFees}
              estateValue={parsedEstateValue}
            />

            <LegalInformation
              isOpen={isLegalTextOpen}
              onToggle={() => setIsLegalTextOpen(!isLegalTextOpen)}
            />
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Based on Nevada Revised Statutes (NRS) 150.060</p>
        </div>
      </div>
    </div>
  );
}