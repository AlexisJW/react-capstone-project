import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGameDetailFromApi } from '../redux/detailSlice';

const Detail = () => {
  const gameDetails = useSelector((state) => state.gameDetail.gameDetail);
  console.log(gameDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameDetailFromApi(id));
    console.log('**** ' + gameDetails);
  }, [dispatch, id]);

  return (
    <div className="parent" data-testid="detailspage">
      <div className="items">
        <img className="image" src={gameDetails.image} alt="game" />
        <p>
          (
          {gameDetails.title}
          )
        </p>
        <h1>{gameDetails.title}</h1>
        <table className="table">
          <tbody>
            <tr>
              <th scope="col">cik (Company Identification Number)</th>
              <td>{gameDetails.id}</td>
            </tr>
            <tr>
              <th scope="col">Sector</th>
              <td>{gameDetails.id}</td>
            </tr>
            <tr>
              <th scope="col">Price</th>
              <td>{gameDetails.id}</td>
            </tr>
            <tr>
              <th scope="col">Currency</th>
              <td>{gameDetails.id}</td>
            </tr>
            <tr>
              <th scope="col">Full Time Employees</th>
              <td>{gameDetails.users}</td>
            </tr>
            <tr>
              <th scope="col">Country</th>
              <td>{gameDetails.id}</td>
            </tr>
            <tr>
              <th scope="col">City</th>
              <td>{gameDetails.id}</td>
            </tr>
            <tr>
              <th scope="col">Phone</th>
              <td>{gameDetails.id}</td>
            </tr>
            <tr>
              <th scope="col">CEO (Chief Executive Officer)</th>
              <td>{gameDetails.id}</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Detail;
