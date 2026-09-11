import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { navLinks, profile } from './data/portfolio'

describe('App', () => {
  it('renders without crashing and shows the name', () => {
    render(<App />)
    expect(screen.getAllByText(new RegExp(profile.name)).length).toBeGreaterThan(0)
  })

  it('renders a section for every nav link target', () => {
    render(<App />)
    for (const link of navLinks) {
      const id = link.href.replace('#', '')
      expect(document.getElementById(id), `missing section #${id}`).not.toBeNull()
    }
  })

  it('renders the hero, contact CTA and footer social links', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /download resume/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /email me/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /github/i }).length).toBeGreaterThan(0)
  })
})
