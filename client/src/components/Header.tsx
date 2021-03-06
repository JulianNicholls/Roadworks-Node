import React from 'react';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <h1>Roadworks</h1>
      <nav>
        <a href="https://reallybigshoe.co.uk">Home</a>
        <a href="https://reallybigshoe.co.uk/visualiser">Palette Visualiser</a>
        <a href="http://spacex.reallybigshoe.co.uk">SpaceX Info</a>
        <a href="https://reallybigshoe.co.uk/countdown">Countdown Magician</a>
        <a
          href="https://github.com/JulianNicholls"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/ReallyBigShoeUK"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </nav>
    </header>
  );
};

export default Header;
