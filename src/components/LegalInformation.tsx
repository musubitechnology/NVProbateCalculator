import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface LegalInformationProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function LegalInformation({ isOpen, onToggle }: LegalInformationProps) {
  return (
    <div className="mt-8">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-lg text-left"
      >
        <span className="font-medium text-gray-700">Legal Information (NRS 150.060)</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 space-y-4">
          {/* Legal text content */}
          <p>3. If the attorney is requesting compensation based on the hourly rate of the attorney, he or she may include, as part of that compensation for ordinary services, a charge for legal services or paralegal services performed by a person under the direction and supervision of the attorney.</p>
          
          <p>4. If the attorney is requesting compensation based on the value of the estate accounted for by the personal representative, the court shall allow compensation of the attorney for ordinary services as follows:</p>
          
          <ul className="list-none pl-4 space-y-2">
            <li>(a) For the first $100,000, at the rate of 4 percent;</li>
            <li>(b) For the next $100,000, at the rate of 3 percent;</li>
            <li>(c) For the next $800,000, at the rate of 2 percent;</li>
            <li>(d) For the next $9,000,000, at the rate of 1 percent;</li>
            <li>(e) For the next $15,000,000, at the rate of 0.5 percent; and</li>
            <li>(f) For all amounts above $25,000,000, a reasonable amount to be determined by the court.</li>
          </ul>
          
          <p>5. Before an attorney may receive compensation based on the value of the estate accounted for by the personal representative, the personal representative must sign a written agreement as required by subsection 8. The agreement must be prepared by the attorney and must include detailed information, concerning, without limitation:</p>
          
          <ul className="list-none pl-4 space-y-2">
            <li>(a) The schedule of fees to be charged by the attorney;</li>
            <li>(b) The manner in which compensation for extraordinary services may be charged by the attorney; and</li>
            <li>(c) The fact that the court is required to approve the compensation of the attorney pursuant to subsection 8 before the personal representative pays any such compensation to the attorney.</li>
          </ul>
          
          <p>6. For the purposes of determining the compensation of an attorney pursuant to subsection 4, the value of the estate accounted for by the personal representative:</p>
          
          <p>(a) Is the total amount of the appraisal of property in the inventory, plus:</p>
          <ul className="list-none pl-8 space-y-2">
            <li>(1) The gains over the appraisal value on sales; and</li>
            <li>(2) The receipts, less losses from the appraisal value on sales; and</li>
          </ul>
          
          <p>(b) Does not include encumbrances or other obligations on the property of the estate.</p>
          
          <p>7. In addition to the compensation for ordinary services of an attorney set forth in this section, an attorney may also be entitled to receive compensation for extraordinary services as set forth in NRS 150.061.</p>
          
          <p className="mt-4">
            <a 
              href="https://www.leg.state.nv.us/NRS/NRS-150.html#NRS150Sec060" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              View full statute on Nevada Legislature website
            </a>
          </p>
        </div>
      )}
    </div>
  );
}