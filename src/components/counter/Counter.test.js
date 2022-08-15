import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

/**
 ** [RENDER] ile herhangi bir componenti render edebiliriz.
 ** [SCREEN] ile o an DOM da olan herhangi bir nesneyi yakalayabiliriz. (id, class, regEx... kullanarak)
 ** [userEvent]
 ** [it(), test()] her iki fonksiyonda aynı işlemi gerçekleştirir.
 ** [describe()] ile componentin tüm teslerini bir araya toplayabiliriz.
 ** [beforeEach()] ile her bir test çalışmadan önce gerçekleşmesini istediğimiz işlemler yapılır.
 ** [afterEach()] ile her bir test çalıştıktan sonra gerçekleşmesini istediğimiz işlemler yapılır.
 ** [beforeAll()] tüm teslerden önce sadece bir defa çalışır.
 ** [afterAll()] tüm testlerden sonra sadece bir defa çalışır.
 */

describe('Counter Tests', () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log('Her testten önce bir kere çalışacağım');
    render(<Counter />);
    increaseBtn = screen.getByText('Increase');
    decreaseBtn = screen.getByText('Decrease');
    count = screen.getByText('0');
  });

  beforeAll(() => {
    console.log('Sadece başta bir kere çalışacağım');
  });

  afterEach(() => {
    console.log('Her testten sonra bir kere çalışacağım');
  });

  afterAll(() => {
    console.log('Sadece sonda bir kere çalışacağım');
  });

  test('increase btn', () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent('1');
  });

  test('decrease btn', () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent('0');
  });
});
