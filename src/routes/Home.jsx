import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesFromApi } from '../redux/gameSlice';

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);

  useEffect(() => {
    if (games.length === 0) {
      dispatch(getGamesFromApi());
    }
  }, [games, dispatch]);

  return (
    <main className="home-main">
      <section className="home-section">
        <center>
          {games.map((game) => (
            <>
              <h2 className="we" key={game.id}>
                {' '}
                {game.title}
                {' '}
              </h2>
            </>
          ))}
          <h1> HOME </h1>
        </center>
      </section>
    </main>
  );
};

export default Home;
