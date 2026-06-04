import { useEffect } from 'react';

type Props = {
  active: boolean;
  duration?: number;
  onDone?: () => void;
};

export default function RainbowSwipe({
  active,
  duration = 1500,
  onDone,
}: Props) {
  useEffect(() => {
    if (!active) return;

    const timer = setTimeout(() => {
      onDone?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [active, duration, onDone]);

  if (!active) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',

          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rainbow-diagram-ROYGBIV.svg/1920px-Rainbow-diagram-ROYGBIV.svg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          animation: `rainbowSwipe ${duration}ms ease-in-out forwards`,
        }}
      />

      <style>
        {`
          @keyframes rainbowSwipe {
            0% {
              clip-path: inset(0 100% 0 0); /* helt gömd */
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            50% {
              clip-path: inset(0 0% 0 0); /* fullt synlig */
            }
            100% {
              clip-path: inset(0 0 0 100%); /* försvinner åt höger */
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
