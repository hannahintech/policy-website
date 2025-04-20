import { render, screen } from '@testing-library/react'
import NotFoundPage from './not-found'
import '@testing-library/jest-dom'

describe('NotFoundPage', () => {
  it('displays the correct heading and message', () => {
    render(<NotFoundPage />)

    expect(screen.getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument()

    expect(
      screen.getByText(
        "Sorry, we couldn't find that page. It may have moved, or it may not exist yet.",
      ),
    ).toBeInTheDocument()

    expect(
      screen.getByText("This is a new website we're currently building - and we'd love your help."),
    ).toBeInTheDocument()
  })

  it('includes contact and GitHub links', () => {
    render(<NotFoundPage />)

    const contactLink = screen.getByRole('link', { name: 'Contact us' })
    const githubLink = screen.getByRole('link', { name: 'suggest an improvement on GitHub' })

    expect(contactLink).toHaveAttribute('href', 'mailto:policy@greenparty.org.uk')
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/hannahintech/policy-website/issues',
    )
  })

  it('has a link to return to homepage', () => {
    render(<NotFoundPage />)

    const homeLink = screen.getByRole('link', { name: 'Back to Homepage' })
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
