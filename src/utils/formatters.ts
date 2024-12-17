export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatInputValue = (value: string): string => {
  // Remove all characters except numbers and decimal point
  const cleanValue = value.replace(/[^\d.]/g, '');
  
  // Ensure only one decimal point
  const parts = cleanValue.split('.');
  const wholePart = parts[0];
  const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  
  // Format the whole number part with commas
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return formattedWholePart + decimalPart;
};

export const parseAmount = (value: string): number => {
  return parseFloat(value.replace(/,/g, '')) || 0;
};

export const formatForSpreadsheet = (
  breakdown: Array<{ range: string; amount: number }>,
  statutoryFees: number,
  extraordinaryServices: number,
  totalFees: number,
  estateValue: number
): string => {
  const lines = [
    ['Nevada Probate Fee Calculation', ''],
    ['', ''],
    ['Estate Value', formatCurrency(estateValue)],
    ['', ''],
    ['Fee Breakdown', 'Amount'],
    ...breakdown.map(item => [item.range, formatCurrency(item.amount)]),
    ['', ''],
    ['Statutory Fees Total', formatCurrency(statutoryFees)],
    ['Extraordinary Services', formatCurrency(extraordinaryServices)],
    ['', ''],
    ['Total Fees', formatCurrency(totalFees)]
  ];

  return lines.map(line => line.join('\t')).join('\n');
};