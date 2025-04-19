import { render, screen } from '@testing-library/react'
import AutumnConference2025Page from './page'
import '@testing-library/jest-dom'

describe('AutumnConference2025Page', () => {
  it('renders the correct heading and date', () => {
    render(<AutumnConference2025Page />)
    expect(screen.getByRole('heading', { name: 'Autumn Conference 2025' })).toBeInTheDocument()
    expect(screen.getByText('3-5 October, Bournemouth International Centre')).toBeInTheDocument()
  })

  it('includes contact link for support', () => {
    render(<AutumnConference2025Page />)
    const link = screen.getByRole('link', { name: 'Contact us with questions or support needs' })
    expect(link).toHaveAttribute('href', '/contact')
  })
})
