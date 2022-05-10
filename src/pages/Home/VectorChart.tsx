import { ChartRadar, ChartGrid } from "./../../components/Chart"
import rectangle773 from "../../assets/images/rectangle-773.png";
import rectangle774 from "../../assets/images/rectangle-774.png";
import rectangle775 from "../../assets/images/rectangle-775.png";
import rectangle776 from "../../assets/images/rectangle-776.png";
import rectangle777 from "../../assets/images/rectangle-777.png";

export default function ChartVector(): JSX.Element {
  return (
    <div className="avatar-project-chart-wrapper">
      <div className="radar-chart-wrapper" style={{ position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <ChartGrid />
        </div>
        <div style={{ position: "absolute" }}>
          <ChartRadar />
        </div>
      </div>
      <div className="rectangle-vector-wrapper">
        <div className="rectangle-wrapper-content">
          <p>Category1</p>
          <img alt="rectangle773" src={rectangle773} />
        </div>
        <div className="rectangle-wrapper-content">
          <p>Category2</p>
          <img alt="rectangle774" src={rectangle774} />
        </div>
        <div className="rectangle-wrapper-content">
          <p>Category3</p>
          <img alt="rectangle775" src={rectangle775} />
        </div>
        <div className="rectangle-wrapper-content">
          <p>Category4</p>
          <img alt="rectangle776" src={rectangle776} />
        </div>
        <div className="rectangle-wrapper-content">
          <p>-</p>
          <img alt="rectangle777" src={rectangle777} />
        </div>
      </div>
    </div>
  );
}
