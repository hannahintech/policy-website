import { render, screen } from '@testing-library/react'
import NotFoundPage from './not-found'
import '@testing-library/jest-dom'

describe('NotFoundPage', () => {
  it('displays the correct heading and message', () => {
    render(<NotFoundPage />)
    expect(screen.getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument()
    expect(
      screen.getByText(
        'Sorry, we couldn’t find that page. It may have moved, or it may not exist yet.',
      ),
    ).toBeInTheDocument()
  })

  it('includes contact and GitHub links', () => {
    render(<NotFoundPage />)
    expect(screen.getByRole('link', { name: 'Contact us' })).toHaveAttribute(
      'href',
      'mailto:policy@greenparty.org.uk',
    )
    expect(screen.getByRole('link', { name: 'suggest an improvement on GitHub' })).toHaveAttribute(
      'href',
      expect.stringContaining('github.com'),
    )
  })

  it('includes a link to go back to the homepage', () => {
    render(<NotFoundPage />)
    expect(screen.getByRole('link', { name: 'Back to Homepage' })).toHaveAttribute('href', '/')
  })
})
