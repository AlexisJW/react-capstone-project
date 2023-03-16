import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesFromApi } from '../redux/gameSlice';
import HomeItem from '../components/HomeItem';

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (games.length === 0) {
      dispatch(getGamesFromApi());
    }
  }, [games, dispatch]);

  return (
    <div className="context">
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Game"
          value={search}
        />
      </div>

      <div className="card">
        {games
          .filter((game) => {
            if (search === '') {
              return game;
            } if (
              game.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return game;
            }
            return null;
          })
          .map((game) => (
            <div
              className="repeated-card"
              key={uuidv4()}
              onClick={() => navigate(`/detail/${game.id}`)}
              aria-hidden="true"
            >
              <HomeItem title={game.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
