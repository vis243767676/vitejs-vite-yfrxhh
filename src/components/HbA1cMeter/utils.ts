export const calculateMeterPosition = (value: number): number => {
  const MIN_VALUE = 5.7;  // Start of pre-diabetic range
  const MAX_VALUE = 6.5;  // Start of diabetic range
  
  // Calculate position based on the pre-diabetic range (5.7% - 6.5%)
  const normalizedValue = Math.max(MIN_VALUE, Math.min(value, MAX_VALUE));
  return ((normalizedValue - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 33.33 + 33.33;
};