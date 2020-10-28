import numeral from 'numeral';
export function AmountFormat(number) {
  const value = numeral(number);
  return value.value() != null ? value.format('$0,0.00') : '';
}
