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
        const octokit = new Octokit();
        
        const [userResponse, reposResponse] = await Promise.all([
          octokit.request('GET /users/{username}', { username }),
          octokit.request('GET /users/{username}/repos', { username }),
        ]);

        // Get contribution data from the events
        const eventsResponse = await octokit.request('GET /users/{username}/events', { username });
        const contributionCount = eventsResponse.data
          .filter(event => event.type === 'PushEvent')
          .reduce((acc, event) => acc + (event.payload?.commits?.length || 0), 0);

        setData({
          repos: userResponse.data.public_repos,
          followers: userResponse.data.followers,
          contributions: contributionCount,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: 'Error fetching GitHub data',
        }));
      }
    };

    fetchData();
  }, [username]);

  return data;
}