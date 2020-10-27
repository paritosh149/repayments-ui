import numeral from 'numeral';
export function AmountFormat(number) {
  return numeral(number).format('$0,0.00');
}
