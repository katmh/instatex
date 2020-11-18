const Header = () => {
  return (
    <header>
      <h1>
        <span className="insta">insta</span>
        <span className="T">T</span>
        <span className="E">E</span>
        <span className="X">X</span>
      </h1>
      <style jsx>{`
        h1 {
          font: 400 4rem/1 Times New Roman, serif;
          letter-spacing: -1.5px;
          margin: 0 0 2rem;
        }
        .E {
          position: absolute;
          margin-top: 0.6rem;
          margin-left: -0.25rem;
        }
        .X {
          margin-left: 1.75rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
