import { render, screen } from '@testing-library/react'
import SummerPolicyFestPage from './page'
import '@testing-library/jest-dom'

describe('SummerPolicyFestPage', () => {
  it('renders the correct heading and date', () => {
    render(<SummerPolicyFestPage />)
    expect(screen.getByRole('heading', { name: 'Summer Policy Fest 2025' })).toBeInTheDocument()
    expect(screen.getByText('17-18 May, Birmingham and online')).toBeInTheDocument()
  })

  it('contains expected sections and links', () => {
    render(<SummerPolicyFestPage />)
    expect(screen.getByRole('heading', { name: 'What is Policy Fest?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Format and Timetable' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Registration & Costs' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Venue & Catering' })).toBeInTheDocument()

    const mailLink = screen.getByRole('link', { name: 'policy@greenparty.org.uk' })
    expect(mailLink).toHaveAttribute('href', 'mailto:policy@greenparty.org.uk')
  })
})
