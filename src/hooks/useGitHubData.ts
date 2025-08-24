import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';

interface GitHubData {
  repos: number;
  followers: number;
  contributions: number;
  loading: boolean;
  error: string | null;
}

export function useGitHubData(username: string) {
  const [data, setData] = useState<GitHubData>({
    repos: 0,
    followers: 0,
    contributions: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
        const octokit = new Octokit({
          auth: githubToken || undefined,
        });

        const [userResponse, reposResponse] = await Promise.all([
          octokit.request('GET /users/{username}', { username }),
          octokit.request('GET /users/{username}/repos', {
            username,
            per_page: 100,
            sort: 'updated'
          }),
        ]);

        // Get contribution data from the events (limited to recent events)
        let contributionCount = 0;
        try {
          const eventsResponse = await octokit.request('GET /users/{username}/events', {
            username,
            per_page: 100
          });
          contributionCount = eventsResponse.data
            .filter(event => event.type === 'PushEvent')
            .reduce((acc, event) => acc + (event.payload?.commits?.length || 0), 0);
        } catch (eventsError) {
          // Events might be private or rate limited, continue without contribution count
          console.warn('Could not fetch contribution data:', eventsError);
        }

        setData({
          repos: userResponse.data.public_repos,
          followers: userResponse.data.followers,
          contributions: contributionCount,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('GitHub API Error:', error);
        setData(prev => ({
          ...prev,
          loading: false,
          error: 'Error fetching GitHub data. Please check your connection.',
        }));
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return data;
}
