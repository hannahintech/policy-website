import { render, screen } from '@testing-library/react'
import PoliciesIndexPage from '@/app/policies/page'
import '@testing-library/jest-dom'

it('renders links to available policies', async () => {
  render(await PoliciesIndexPage())

  const link = screen.getByRole('link', { name: 'Example Policy: A Green Future' })
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', '/policies/example-policy')
})
