export const calculateStatutoryFees = (estateValue: number): { total: number; breakdown: Array<{ range: string; amount: number }> } => {
  const breakdown: Array<{ range: string; amount: number }> = [];
  let remainingValue = estateValue;
  let total = 0;

  // First $100,000 at 4%
  const firstTier = Math.min(100000, remainingValue);
  if (firstTier > 0) {
    const amount = firstTier * 0.04;
    breakdown.push({ range: "First $100,000 (4%)", amount });
    total += amount;
    remainingValue -= firstTier;
  }

  // Next $100,000 at 3%
  const secondTier = Math.min(100000, remainingValue);
  if (secondTier > 0) {
    const amount = secondTier * 0.03;
    breakdown.push({ range: "Next $100,000 (3%)", amount });
    total += amount;
    remainingValue -= secondTier;
  }

  // Next $800,000 at 2%
  const thirdTier = Math.min(800000, remainingValue);
  if (thirdTier > 0) {
    const amount = thirdTier * 0.02;
    breakdown.push({ range: "Next $800,000 (2%)", amount });
    total += amount;
    remainingValue -= thirdTier;
  }

  // Next $9,000,000 at 1%
  const fourthTier = Math.min(9000000, remainingValue);
  if (fourthTier > 0) {
    const amount = fourthTier * 0.01;
    breakdown.push({ range: "Next $9,000,000 (1%)", amount });
    total += amount;
    remainingValue -= fourthTier;
  }

  // Next $15,000,000 at 0.5%
  const fifthTier = Math.min(15000000, remainingValue);
  if (fifthTier > 0) {
    const amount = fifthTier * 0.005;
    breakdown.push({ range: "Next $15,000,000 (0.5%)", amount });
    total += amount;
    remainingValue -= fifthTier;
  }

  // Amounts above $25,000,000 (court determined)
  if (remainingValue > 0) {
    breakdown.push({ 
      range: "Amount above $25,000,000", 
      amount: 0
    });
  }

  return { total, breakdown };
};