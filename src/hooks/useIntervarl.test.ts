import { renderHook } from '@testing-library/react-hooks';
import useInterval from './useInterval';

const cbMock = () => console.log('cbMock');

describe('Teste custom Hook useIntervel', () => {
  it('Should running the mock', () => {
    const callbackMock = jest.spyOn(console, 'log');
    const { result } = renderHook(() => useInterval(cbMock, 1000));
    expect(result.current).toBeUndefined();
    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
});
