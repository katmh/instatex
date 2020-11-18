import Header from "./Header";

const Controls = ({ math, onChange }) => {
  return (
    <section>
      <Header />

      <h2>The Math</h2>
      <textarea className="math-input" value={math} onChange={onChange} />

      <h2>The Pizzazz</h2>
      <p>coming soon!</p>

      <style jsx>{`
        .math-input {
          width: 100%;
          height: 6rem;
          resize: none;
          padding: 0.5rem;
          font-size: 1.15rem;
          color: #222;
        }
      `}</style>
    </section>
  );
};

export default Controls;
