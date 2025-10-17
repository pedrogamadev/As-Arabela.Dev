import { useCallback, useRef, useState } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  labelBefore: string;
  labelAfter: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const BeforeAfterSlider = ({ before, after, labelBefore, labelAfter }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = useCallback((clientX: number) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) {
      return;
    }

    const relative = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(clamp(relative));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    updatePosition(event.clientX);

    const move = (moveEvent: PointerEvent) => updatePosition(moveEvent.clientX);
    const stop = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', stop);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', stop, { once: true });
  };

  return (
    <div className="slider" ref={containerRef}>
      <img src={after} alt={labelAfter} loading="lazy" />
      <div className="slider__before" style={{ width: `${position}%` }}>
        <img src={before} alt={labelBefore} loading="lazy" />
      </div>
      <div
        className="slider__handle"
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-label="Comparar antes e depois"
        onPointerDown={onPointerDown}
        style={{ left: `${position}%` }}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
            event.preventDefault();
            setPosition(current => clamp(current - 5));
          }
          if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
            event.preventDefault();
            setPosition(current => clamp(current + 5));
          }
        }}
      >
        <span aria-hidden>{Math.round(position)}%</span>
      </div>
      <input
        className="slider__range"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={event => setPosition(Number(event.target.value))}
        aria-hidden
        tabIndex={-1}
      />
    </div>
  );
};

export default BeforeAfterSlider;
