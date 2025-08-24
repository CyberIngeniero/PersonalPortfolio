import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock components
vi.mock('../ThemeToggle', () => ({
  default: () => <button data-testid="theme-toggle">Theme Toggle</button>,
}));

vi.mock('../Search', () => ({
  default: () => <div data-testid="search">Search</div>,
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Code: () => <div data-testid="code-icon">Code</div>,
  Github: () => <div data-testid="github-icon">Github</div>,
  Linkedin: () => <div data-testid="linkedin-icon">Linkedin</div>,
  Twitter: () => <div data-testid="twitter-icon">Twitter</div>,
  Download: () => <div data-testid="download-icon">Download</div>,
}));

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('Header', () => {
  it('renders the site name', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    expect(screen.getByText('CyberIngeniero')).toBeInTheDocument();
  });

  it('renders navigation menu items', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Success Cases')).toBeInTheDocument();
  });

  it('renders theme toggle and search components', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
