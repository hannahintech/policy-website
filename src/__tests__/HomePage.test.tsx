import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import '@testing-library/jest-dom'

it('renders homepage with welcome text and key links', () => {
  render(<HomePage />)

  expect(
    screen.getByRole('heading', { name: 'Welcome to the Green Party Policy Website' }),
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()

  expect(screen.getByText('Summer Policy Fest 2025')).toBeInTheDocument()
  expect(screen.getByText('Winter Policy Fest 2025')).toBeInTheDocument()
  expect(screen.getByText('Autumn Conference 2025')).toBeInTheDocument()

  expect(screen.getByText('Browse All Policies')).toBeInTheDocument()
  expect(screen.getByText('Contact & Accreditation')).toBeInTheDocument()
})
