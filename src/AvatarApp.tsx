import React, { useState, useEffect } from 'react';
import './App.css';
import Tile from './Tile';
import AddNew from './AddNew';

const AvatarApp: React.FC = () => {
  const [tiles, setTiles] = useState<string[]>([]);
  const [pictures, setPictures] = useState<string[]>([]);

  useEffect(() => {
    console.log("app loaded");

    fetch('https://tinyfac.es/api/data?limit=50&quality=0')
      .then(response => response.json())
      .then(data => {
        const urls = data.map((i: any) => i.url);
        setPictures(urls);
      });
  }, []);

  const addNewTile = () => {
    const randomPicture = pictures[Math.floor(Math.random() * pictures.length)];
    setTiles(prevTiles => [...prevTiles, randomPicture]);
  };

  const refreshAll = () => {
    const newTiles = tiles.map(() => pictures[Math.floor(Math.random() * pictures.length)]);
    setTiles(newTiles);
  };

  return (
    <div className="container">
      {tiles.map((url, index) => (
        <Tile key={index} index={index} url={url} pictures={pictures} setTiles={setTiles} />
      ))}
      <AddNew addNewTile={addNewTile} />
      <div style={{ width: "90vw", display: "inline-block" }}>
        <button onClick={refreshAll} data-cy="refreshButton" className="refresh-button">
          Refresh all
        </button>
      </div>
    </div>
  );
};



export default AvatarApp;