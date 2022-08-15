import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

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

describe('Todo Test', () => {
  let todoInput, todoBtn;

  beforeEach(() => {
    render(<Todo />);

    todoBtn = screen.getByText('ADD');
    todoInput = screen.getByPlaceholderText('Add todo');
  });

  test('Varsayılan olarak girilen 3 nesne render edilmeli', () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });

  test('Input ve button DOM da bulunmalı', () => {
    expect(todoBtn).toBeInTheDocument;
    expect(todoInput).toBeInTheDocument;
  });

  test('Inputa string eklenip buttona basılınca listeye eklenmeli', () => {
    // Inputu doldur
    const name = 'Mehmet';
    userEvent.type(todoInput, name);

    //Buttona tıkla
    userEvent.click(todoBtn);
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
