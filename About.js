import { Card, Col, Container, Row } from "react-bootstrap";
import "./Heading.css";
import Back from "./about.png";
const About = () => {
  return (
    <>
      <section>
        <div className="row-1">
          <h1>The Generics</h1>
        </div>
      </section>
      <div className="container">
        <div className="title">
          <h1>About</h1>
          <div className="row">
            <div className="col-6 " id="first">
              <img src={Back} />
            </div>
            <div className="col-6" id="content">
              <p>
                Lorem ipsum carrots enhanced rebates. Excellent sayings of a man
                of sorrows, hates no prosecutors will unfold in the enduring of
                which were born in it? Often leads smallest mistake some pain
                main responsibilities are to stand for the right builder of
                pleasure, accepted explain up to now. , The things we are
                accusing of these in the explication of the truth receives from
                the flattery of her will never be the trouble and they are
                refused to the pleasures and the pleasures of the pain, explain
                the treatment of excepturi of the blessed sufferings. I never
                said will unfold in him receives at another time he may please
                the one that those works, we are less than they, this refused to
                the pleasures of deleniti? Those are! Will unfold in times of
                pleasure, this pain will be a right enjoyed by corrupt, are
                accusing him of all pleasures, and seek his own, or, to the
                needs of the agony of the choice. We hate the fellow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
