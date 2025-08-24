import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useGitHubData } from '../useGitHubData';

// Mock Octokit
const mockRequest = vi.fn();
vi.mock('octokit', () => ({
  Octokit: vi.fn().mockImplementation(() => ({
    request: mockRequest,
  })),
}));

describe('useGitHubData', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockRequest.mockClear();
  });

  it('should return initial loading state', () => {
    const { result } = renderHook(() => useGitHubData('testuser'));

    expect(result.current.loading).toBe(true);
    expect(result.current.repos).toBe(0);
    expect(result.current.followers).toBe(0);
    expect(result.current.contributions).toBe(0);
    expect(result.current.error).toBe(null);
  });

  it('should fetch and return GitHub data successfully', async () => {
    const mockUserData = {
      data: {
        public_repos: 25,
        followers: 150,
      },
    };

    const mockReposData = {
      data: [],
    };

    const mockEventsData = {
      data: [
        {
          type: 'PushEvent',
          payload: {
            commits: [{ sha: '123' }, { sha: '456' }],
          },
        },
      ],
    };

    mockRequest
      .mockResolvedValueOnce(mockUserData)
      .mockResolvedValueOnce(mockReposData)
      .mockResolvedValueOnce(mockEventsData);

    const { result } = renderHook(() => useGitHubData('testuser'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    }, { timeout: 3000 });

    expect(result.current.repos).toBe(25);
    expect(result.current.followers).toBe(150);
    expect(result.current.contributions).toBe(2);
    expect(result.current.error).toBe(null);
  });

  it('should handle API errors gracefully', async () => {
    mockRequest.mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useGitHubData('testuser'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    }, { timeout: 3000 });

    expect(result.current.error).toBe('Error fetching GitHub data. Please check your connection.');
    expect(result.current.repos).toBe(0);
    expect(result.current.followers).toBe(0);
    expect(result.current.contributions).toBe(0);
  });

  it('should not fetch data when username is empty', () => {
    const { result } = renderHook(() => useGitHubData(''));

    expect(result.current.loading).toBe(true);
    expect(mockRequest).not.toHaveBeenCalled();
  });
});
