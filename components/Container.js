const Container = ({ children }) => {
  return (
    <section>
      <section className="app">{children}</section>
      <style jsx>{`
        section {
          width: 90%;
          max-width: 1000px;
          margin: 4rem auto;
        }
        .app {
          display: grid;
          grid-template-columns: 3fr 2fr;
          grid-column-gap: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Container;
