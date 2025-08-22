import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import ScrollManager from './ScrollManager';

describe('ScrollManager', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

  it('should scroll to the element with the corresponding hash in the URL', () => {
    const scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    const TestComponent = () => (
      <div>
        <div id="test-section" style={{ height: '1000px' }}></div>
      </div>
    );

    render(
      <MemoryRouter initialEntries={['/#test-section']}>
        <TestComponent />
        <ScrollManager />
      </MemoryRouter>
    );

    vi.advanceTimersByTime(200);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
