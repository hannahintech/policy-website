import { render, screen } from '@testing-library/react'
import WinterPolicyFestPage from './page'
import '@testing-library/jest-dom'

describe('WinterPolicyFestPage', () => {
  it('renders the main heading and date', () => {
    render(<WinterPolicyFestPage />)
    expect(screen.getByRole('heading', { name: 'Winter Policy Fest 2025' })).toBeInTheDocument()
    expect(screen.getByText('12-18 January, online')).toBeInTheDocument()
  })

  it('includes contact link', () => {
    render(<WinterPolicyFestPage />)
    const link = screen.getByRole('link', { name: 'Contact the PDC or request updates' })
    expect(link).toHaveAttribute('href', '/contact')
  })
})
