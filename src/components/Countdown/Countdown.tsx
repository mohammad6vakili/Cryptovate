import React from "react";
import { intervalToDuration } from "date-fns";
import Typography from "../Typography";
import { CountdownInterface } from './types';
import useLocalStorage from "use-local-storage";
import "./style.scss";



function Countdown (targetDate: Date): Duration {
  return intervalToDuration({
    start: Date.now(),
    end: targetDate,
  });
}

export function LandingTime(props: CountdownInterface): JSX.Element {
  const { targetDate } = props;
  const inialState = Countdown(targetDate);
  const [state, setState] = React.useState<Duration>(inialState);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      const remainingTime = Countdown(targetDate);
      setState(remainingTime);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [state]);

  return (
    <React.Fragment>
      <div className="flex-box flex-box--items-start">
        <div>
          <div className="box">
            <Typography
              className={theme==="dark" ? "mv-timer-bg-dark" : "mv-timer-bg-light"}
              type="paragraph2"
              label={state.hours as string | undefined}
            />
          </div>
          <Typography label="Hours" type="title2" />
        </div>
        <small className="mv-seperate-timer">:</small>
        <div>
          <div className="box">
            <Typography
              type="paragraph2"
              label={state.minutes as string | undefined}
            />
          </div>
          <Typography label="Minutes" type="title2" />
        </div>
        <small className="mv-seperate-timer">:</small>
        <div>
          <div className="box">
            <Typography
              type="paragraph2"
              label={state.seconds as string | undefined}
            />
          </div>
          <Typography label="Seconds" type="title2" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingTime;
