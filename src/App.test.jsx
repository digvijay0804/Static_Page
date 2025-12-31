import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from './App'

test('renders h1 heading with name', () => {
  render(<App />)
  const headingElement = screen.getByRole('heading', { level: 1 })
  expect(headingElement).toHaveTextContent(/Pranav/i)
})

test('renders h2 description', () => {
  render(<App />)
  const subHeading = screen.getByText(/lovely Brother/i)
  expect(subHeading).toBeInTheDocument()
})
