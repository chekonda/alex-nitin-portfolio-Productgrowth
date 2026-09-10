import { vi } from 'vitest'
import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement IntersectionObserver — stub it for components
// that use it (useActiveSection) so tests can render them.
class MockIntersectionObserver {
  root: Element | Document | null = null
  rootMargin = ''
  thresholds: ReadonlyArray<number> = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
