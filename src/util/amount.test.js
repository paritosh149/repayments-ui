import { AmountFormat } from './amount';

describe('Amount Format function', () => {
  it('formats currency correctly', () => {
    const result = AmountFormat('12');
    expect(result).toEqual('$12.00');
  });

  it('formats currency correctly', () => {
    const result = AmountFormat('12.6789');
    expect(result).toEqual('$12.68');
  });

  it('formats currency correctly', () => {
    const result = AmountFormat('0.0001');
    expect(result).toEqual('$0.00');
  });

  it('formats currency correctly', () => {
    const result = AmountFormat('A');
    expect(result).toEqual('');
  });
});
