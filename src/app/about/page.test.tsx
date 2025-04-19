import { render, screen } from '@testing-library/react'
import AboutPage from './page'
import '@testing-library/jest-dom'

describe('AboutPage', () => {
  it('renders the main heading', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: 'About Green Party Policy' })).toBeInTheDocument()
  })

  it('lists key values and philosophical summary', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: 'Our Core Values' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Philosophical Basis' })).toBeInTheDocument()
    expect(screen.getByText(/system of inequality and unsustainable growth/i)).toBeInTheDocument()
  })
})
