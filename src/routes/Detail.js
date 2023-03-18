import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGameDetailFromApi } from '../redux/detailSlice';

const Detail = () => {
  const gameDetails = useSelector((state) => state.gameDetail.gameDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameDetailFromApi(id));
  }, [dispatch, id]);

  return (
    <div className="detail-container" data-testid="detailspage">
      <div className="items">
        <img className="image" src={gameDetails.image} alt="game" />
        <h1>{gameDetails.title}</h1>
        <table className="table">
          <tbody>
            <tr>
              <th scope="col"> Description </th>
              <td>{gameDetails.description}</td>
            </tr>
            <tr>
              <th scope="col"> Instructions </th>
              <td>{gameDetails.instructions}</td>
            </tr>
            <tr>
              <th scope="col"> Platforms </th>
              <td>{gameDetails.platforms}</td>
            </tr>
            <tr>
              <th scope="col"> Worth </th>
              <td>{gameDetails.worth}</td>
            </tr>
            <tr>
              <th scope="col"> Users </th>
              <td>{gameDetails.users}</td>
            </tr>
            <tr>
              <th scope="col"> Status </th>
              <td>{gameDetails.status}</td>
            </tr>
            <tr>
              <th scope="col"> Type </th>
              <td>{gameDetails.type}</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Detail;
