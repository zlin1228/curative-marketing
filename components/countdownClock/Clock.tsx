/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

import { ClockStyles, NumberStyles, NumberWrapperStyles } from 'components/countdownClock/countdownClock.styles';
import { getCountDownNumbers } from 'components/countdownClock/countdownClock.utils';

import type { FC } from 'react';

interface ClockProps {
  time: number;
}
const Clock: FC<ClockProps> = ({ time }) => {
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    setCountdown(time);
  }, [time]);

  useEffect(() => {
    const timerId = setInterval(() => setCountdown(digit => digit - 1), 1000);

    return () => clearInterval(timerId);
  }, []);

  const countdownNumbers = getCountDownNumbers(countdown);

  return (
    <ClockStyles>
      {countdownNumbers.map((item, index) =>
        item !== ':' ? (
          <NumberWrapperStyles key={index}>
            <NumberStyles>{item}</NumberStyles>
          </NumberWrapperStyles>
        ) : (
          <NumberStyles key={index}>{item}</NumberStyles>
        ),
      )}
    </ClockStyles>
  );
};

export default Clock;
