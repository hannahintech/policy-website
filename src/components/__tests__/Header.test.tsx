import { render, screen } from '@testing-library/react'
import Header from '../Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />)
    const title = screen.getByRole('link', { name: /gpew policy/i })
    expect(title).toBeInTheDocument()
    expect(title).toHaveAttribute('href', '/')
  })

  it('renders all navigation links', () => {
    render(<Header />)
    const links = ['Policies', 'Process', 'Key Dates', 'PWGs', 'Contact']
    links.forEach(text => {
      expect(screen.getByRole('link', { name: new RegExp(text, 'i') })).toBeInTheDocument()
    })
  })
})
