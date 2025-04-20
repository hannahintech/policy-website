import { render, screen } from '@testing-library/react'
import PoliciesIndexPage from '@/app/policies/page'
import '@testing-library/jest-dom'

it('renders all key policy sections and links', async () => {
  render(await PoliciesIndexPage())

  // Main heading
  expect(screen.getByRole('heading', { name: 'Green Party Policy' })).toBeInTheDocument()

  // Foundational Documents
  expect(screen.getByRole('heading', { name: 'Foundational Documents' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Philosophical Basis & Core Values' })).toHaveAttribute(
    'href',
    '/about',
  )
  expect(screen.getByRole('link', { name: 'Green Party Manifesto' })).toHaveAttribute(
    'href',
    '/manifesto',
  )

  // Live Policy
  expect(screen.getByRole('heading', { name: 'Live Policy (PSS & RoPS)' })).toBeInTheDocument()
  expect(
    screen.getByRole('link', { name: 'Policies for a Sustainable Society (PSS)' }),
  ).toHaveAttribute('href', '/policies/pss')
  expect(screen.getByRole('link', { name: 'Record of Policy Statements (RoPS)' })).toHaveAttribute(
    'href',
    '/policies/rops',
  )

  // Policy Motions
  expect(screen.getByRole('heading', { name: 'Policy Motions' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Example Policy: A Green Future' })).toHaveAttribute(
    'href',
    '/policies/example-policy',
  )
})
