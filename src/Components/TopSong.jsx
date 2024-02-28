import { useEffect, useState } from "react";

const TopSong = () => {
  const [topTracks, setTopTracks] = useState([]);

  const token = 'BQDG2BGTvTXziPNudWt0Ypj99Xd4jAKXACoojPJntSK-H2oQ-gcFyCOWVxPRPnRubxbh9WclCFQcNUDxoDkxzdvQsAxlQWNJUaIpoAIMOgVwq7ur1grLTg70qqpyetFtXFyfQW5sf-S9Y00_E_UgXQ4F9-03o-jSXhPnL3plejE5N-vy-HDBSr_Y3rA1Khf9IykmGTCc2Ae1fPX19z7aybH8n5EnYmG8Hg5aeJ7wukEw_8ASqZn7NcDI_D9Z8WmHtII8ptyzIVzO7RTiwxT8';
  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async function getTopTracks() {
    try {
      const data = await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5',
        'GET'
      );
      setTopTracks(data.items || []); // Set to an empty array if 'items' is undefined
    } catch (error) {
      console.error('Error fetching top tracks:', error);
    }
  }

  useEffect(() => {
    getTopTracks();
  }, []); // Empty dependency array ensures that the effect runs once on component mount

  return (
    <div>
      <h1>Your Top Tracks</h1>
      <ul>
        {topTracks &&
          topTracks.map(({ name, artists, id }) => (
            <li key={id}>
              {`${name} by ${artists.map((artist) => artist.name).join(', ')}`}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TopSong;

