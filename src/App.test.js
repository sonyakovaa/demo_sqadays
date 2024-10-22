import { render, screen, fireEvent } from '@testing-library/react'
import Button from './App'

test('button содержит текст', () => {
  render(<Button> Button text </Button>)

  expect(screen.getByText(/Button text/i)).toBeInTheDocument()
});

test('button является видимым', () => {
  render(<Button children='Button text' />)

  expect(screen.getByText(/Button text/i)).toBeVisible()
});

test('button неактивен и некликабелен', () => {
  render(<Button disabled children='Button text' />)

  expect(screen.getByText(/Button text/i)).toBeDisabled()
});

test('button активен и кликабелен', () => {
  render(<Button children='Button text' />)

  expect(screen.getByText(/Button text/i)).toBeEnabled()
});

test('button вызывает вывод текста в консоль при клике на него', async () => {
  render(<Button onClick={() => { console.log('SQA Days!') }}>Button text</Button>)

  console.log = jest.fn();
  const btn = screen.getByText(/Button text/i)
  fireEvent.click(btn)

  expect(console.log).toHaveBeenCalledWith('SQA Days!');
});
