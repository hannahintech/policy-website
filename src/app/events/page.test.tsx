import { render, screen } from '@testing-library/react'
import EventsIndexPage from './page'
import '@testing-library/jest-dom'

describe('EventsIndexPage', () => {
  it('shows upcoming event titles and links', () => {
    render(<EventsIndexPage />)

    // Headings
    expect(screen.getByRole('heading', { name: 'Green Party Events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Past Events' })).toBeInTheDocument()

    // Titles
    expect(screen.getByText('Summer Policy Fest 2025')).toBeInTheDocument()
    expect(screen.getByText('Winter Policy Fest 2025')).toBeInTheDocument()
    expect(screen.getByText('Autumn Conference 2025')).toBeInTheDocument()

    // Event detail links
    const detailLinks = screen.getAllByRole('link', { name: 'Event details' })
    expect(detailLinks).toHaveLength(3)
    expect(detailLinks[0]).toHaveAttribute('href', '/events/summer-2025')
    expect(detailLinks[1]).toHaveAttribute('href', '/events/winter-2025')
    expect(detailLinks[2]).toHaveAttribute('href', '/events/autumn-conference-2025')
  })
})
