import circleChart from "../../assets/images/chart-circle.png";
import rectangle773 from "../../assets/images/rectangle-773.png";
import rectangle774 from "../../assets/images/rectangle-774.png";
import rectangle775 from "../../assets/images/rectangle-775.png";
import rectangle776 from "../../assets/images/rectangle-776.png";
import rectangle777 from "../../assets/images/rectangle-777.png";

export default function ChartCircle(): JSX.Element {
  return (
    <div className="avatar-project-chart-wrapper">
      <div className="circle-chart-wrapper">
        <img alt="circle chart" src={circleChart} />
      </div>
      <div className="rectangle-wrapper">
        <div className="rectangle-wrapper-content">
          <p>Platform free</p>
          <img alt="rectangle773" src={rectangle773} />
        </div>
        <div className="rectangle-wrapper-content">
          <p>Collector cut</p>
          <img alt="rectangle774" src={rectangle774} />
        </div>
        <div className="rectangle-wrapper-content">
          <p>Project cut</p>
          <img alt="rectangle775" src={rectangle775} />
        </div>
        <div className="rectangle-wrapper-content">
          <p>Donation cut</p>
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
