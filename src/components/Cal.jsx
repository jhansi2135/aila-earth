import "./Cal.css";
import Learn from "./Learn.png";
import Attract from "./Attract.png";
import Act from "./Act.png";

export function Cal() {
  return (
    <div className="cal">
      <p id="num">
        {" "}
        <b>186000 t. </b>
        <br />
        <b>co2e reduced by Aila </b>
      </p>

      <p id="num1">
        <b>How does Aila platform work ?</b>
      </p>
      <div className="icon">
        <div className="icon1">
          <img src={Learn} type=".png" alt="icon" />
          <br /> <br />
          <a href="#">Learn</a>
          <p>
            With automated emission accounting protocol. Results reveal the
            climate health index of the company.
          </p>
        </div>

        <div className="icon1">
          <a href="#Market">
            <img src={Act} type=".png" alt="icon" />
            <br /> <br />
            Act
          </a>
          <p>
            By providing reports and omni-channel shareable content to
            communicate the actions taken. Aila also tracks the SME's climate
            impact overtime.
          </p>
        </div>

        <div className="icon1">
          <img src={Attract} type=".png" alt="icon" />
          <br /> <br />
          <a href="#">Attract</a>
          <p>
            Through a marketplace that offers a fast and efficient way to shrink
            carbon footprint by switching to green goods and services.
          </p>
        </div>
      </div>
    </div>
  );
}
