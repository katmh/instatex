import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const Graphic = ({ math }) => {
  return (
    <article>
      <BlockMath math={math} />
      <style jsx>{`
        article {
          border: 1px solid #aaa;
          width: 500px;
          height: 500px;
          font-size: 30px;
        }
      `}</style>
    </article>
  );
};

export default Graphic;
