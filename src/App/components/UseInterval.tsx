import { useEffect, useState } from 'react';

const useInterval = (f: TimerHandler, delay: number) => {
  const [timer, setTimer] = useState<any>(null);

  const start = () => {
    if (timer) return;
    setTimer(setInterval(f, delay));
  };

  const stop = () => {
    if (!timer) return;
    setTimer(clearInterval(timer));
  };

  // eslint-disable-next-line
  useEffect(() => stop, []);

  return [start, stop, timer != null] as const;
};

export default useInterval;
