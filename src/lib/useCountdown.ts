import { useEffect, useState } from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** Milliseconds remaining (0 once the target has passed). */
  total: number;
  past: boolean;
};

/**
 * The 500th anniversary of the apparitions at Tepeyac.
 * Our Lady appeared to Saint Juan Diego between 9 and 12 December 1531;
 * the sacred image was imprinted on the tilma on 12 December 1531.
 * Midnight, 12 December 2031, Mexico City time (UTC−6).
 */
export const JUBILEE_TARGET = new Date("2031-12-12T00:00:00-06:00");

function diff(target: Date): TimeLeft {
  const total = target.getTime() - Date.now();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0, past: true };
  }
  const seconds = Math.floor(total / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    total,
    past: false,
  };
}

/** Live countdown to a target date, ticking once per second. */
export function useCountdown(target: Date = JUBILEE_TARGET): TimeLeft {
  const [left, setLeft] = useState<TimeLeft>(() => diff(target));

  useEffect(() => {
    setLeft(diff(target));
    const id = window.setInterval(() => setLeft(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return left;
}
