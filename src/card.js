import React from 'react';
import styled from '@emotion/styled';

const Component = styled('card')`
  .card {
    background-image: url("https://admissions.dartmouth.edu/sites/admissions.prod/files/styles/slide/public/admissions/content/season/hero_1920x1135_bakersummernight.jpg?itok=5nNEuclp");
    background-repeat: no-repeat;
    background-size: 600px 350px;
    height: 350px;
    width: 600px;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .text {
    position: absolute;
    bottom: 50px;
    line-height: 1.4;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .collegename {
    font-size: 38px;
    color: white;
    font-weight: 1000;
    display: flex;
    justify-content: center;
    font-family: "Arial Black", Gadget, sans-serif;
  }

  button {
    background-color: rgb(0, 100, 0);
    border-radius: 5px;
    border: none;
    position: absolute;
    bottom: 0;
    margin-bottom: 15px;
    padding: 5px;
    font-family: Arial, Helvetica, sans-serif;
    width: 30%;
    height: 40px;
    font-size: 16px;
    color: white;
    transition: .3s;
  }

  button:hover {
    cursor: pointer;
    background-color: rgb(0, 150, 0);
    box-shadow: 2px 4px 5px rgb(0, 0, 0);
  }

  button:focus {
    outline: none;
  }
`;

const Card = ({ handleClick }) => {
  return (
    <Component>
      <div className="card">
        <div className="text">
          <span className="collegename">
            <span>Dartmouth</span>
          </span>
        </div>
        <button type="button" onClick={handleClick}>Learn More</button>
      </div>
    </Component>
  );
};

export default Card;
