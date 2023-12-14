import Clock from 'components/countdownClock/Clock';
import {
  CountdownClockFooterStyles,
  CountdownClockHeaderStyles,
  CountdownClockWrapper,
} from 'components/countdownClock/countdownClock.styles';
import { getTimeRemaining } from 'components/countdownClock/countdownClock.utils';

interface CountdownClockProps {
  countdownHeading?: string;
  countdown: string;
}
const CountdownClock: React.FC<CountdownClockProps> = ({ countdownHeading, countdown }) => {
  const date = new Date(countdown);
  const dateArr = date
    .toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })
    .split(',');

  return (
    <CountdownClockWrapper>
      {countdownHeading && <CountdownClockHeaderStyles>{countdownHeading}</CountdownClockHeaderStyles>}
      <Clock time={getTimeRemaining(countdown)} />
      <CountdownClockFooterStyles>{`${dateArr[0]}, ${dateArr[1]} at ${dateArr[2]
        ?.replace(' AM', 'am')
        .replace(' PM', 'pm')}`}</CountdownClockFooterStyles>
    </CountdownClockWrapper>
  );
};

export default CountdownClock;
