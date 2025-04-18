import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders the current year and correct text', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(`© ${year} Green Party of England & Wales. All rights reserved.`),
    ).toBeInTheDocument()
  })
})
