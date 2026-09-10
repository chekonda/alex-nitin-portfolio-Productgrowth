import { describe, expect, it } from 'vitest'
import { education, experience, navLinks, profile, projects, skillCategories } from './portfolio'

describe('portfolio data integrity', () => {
  it('has non-empty required profile fields', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.email).toContain('@')
    expect(profile.socials.github).toMatch(/^https:\/\/github\.com\//)
    expect(profile.socials.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//)
  })

  it('gives every experience entry a role, company and at least one responsibility', () => {
    expect(experience.length).toBeGreaterThan(0)
    for (const role of experience) {
      expect(role.company).toBeTruthy()
      expect(role.role).toBeTruthy()
      expect(role.responsibilities.length).toBeGreaterThan(0)
      expect(role.skills.length).toBeGreaterThan(0)
    }
  })

  it('gives every project a working live URL and at least one tag', () => {
    expect(projects.length).toBeGreaterThan(0)
    for (const project of projects) {
      expect(project.liveUrl).toMatch(/^https:\/\//)
      expect(project.tags.length).toBeGreaterThan(0)
    }
  })

  it('has at least one skill in every category', () => {
    expect(skillCategories.length).toBeGreaterThan(0)
    for (const category of skillCategories) {
      expect(category.skills.length).toBeGreaterThan(0)
    }
  })

  it('has education details filled in', () => {
    expect(education.institution).toBeTruthy()
    expect(education.degree).toBeTruthy()
  })

  it('every nav link points to a distinct in-page anchor', () => {
    const hrefs = navLinks.map((link) => link.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
    for (const href of hrefs) {
      expect(href.startsWith('#')).toBe(true)
    }
  })
})
