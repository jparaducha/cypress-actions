import React, { useState, useEffect } from 'react';

const TRAFFIC_STATES = ['#DF4040', '#E9EC6A', '#04CA00'];

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(0);
  const [secondActiveLight, setSecondActiveLight] = useState(5);
  const [country, setCountry] = useState(false);
  const [button1Active, setButton1Active] = useState(true);
  const [button2Active, setButton2Active] = useState(false);

  function changeCountry() {
    setCountry(!country);
    setButton1Active(!button1Active);
    setButton2Active(!button2Active);
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function argentinaPattern() {
    if (country) return;
    await delay(3000);
    if (country) return;
    setActiveLight(1);
    await delay(1000);
    if (country) return;
    setActiveLight(2);
    await delay(3000);
    if (country) return;
    setActiveLight(1);
    await delay(1000);
    if (country) return;
    setActiveLight(0);
  }

  async function belarusPattern() {
    if (!country) return;
    await delay(5000);
    if (!country) return;
    setActiveLight(1);
    setSecondActiveLight(0);
    await delay(1000);
    if (!country) return;
    setActiveLight(2);
    setSecondActiveLight(5);
    await delay(3000);
    if (!country) return;
    setActiveLight(5);
    await delay(500);
    if (!country) return;
    setActiveLight(2);
    await delay(500);
    if (!country) return;
    setActiveLight(5);
    await delay(500);
    if (!country) return;
    setActiveLight(2);
    await delay(500);
    if (!country) return;
    setActiveLight(1);
    await delay(1000);
    if (!country) return;
    setActiveLight(0);
  }

  useEffect(() => {
    let interval;

    if (!country) {
      argentinaPattern();
      interval = setInterval(() => {
        argentinaPattern();
      }, 8000);
    } else if (country) {
      belarusPattern();
      interval = setInterval(() => {
        belarusPattern();
      }, 12000);
    }

    return () => clearInterval(interval);
  }, [country]);

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  };

  const buttonStyle = {
    width: '8vw',
    height: '5vh',
    border: '2px solid green',
    color: 'darkgreen',
    marginRight: '10px',
    cursor: 'pointer',
  };

  return (
    <>
      <div style={navbarStyle}>
        <button
          className="arg-button"
          onClick={changeCountry}
          style={{
            ...buttonStyle,
            backgroundColor: button1Active ? 'lightgreen' : 'white',
          }}
        >
          ARG
        </button>
        <button
          className="blr-button"
          onClick={changeCountry}
          style={{
            ...buttonStyle,
            backgroundColor: button2Active ? 'lightgreen' : 'white',
          }}
        >
          BEL
        </button>
      </div>
      <div className="trafficLight">
        <div className="trafficLight__pole"></div>
        <div className="trafficLight__body">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="trafficLight__body__light"
              style={{
                backgroundColor:
                  i === activeLight || i === secondActiveLight
                    ? TRAFFIC_STATES[i]
                    : '',
                transition: '1s',
                width: '120px',
                height: '120px',
                boxShadow: '10px 0px 0px 0px #0000001a inset',
                borderRadius: '100%',
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
