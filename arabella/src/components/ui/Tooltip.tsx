import { useId, useState } from 'react';

type TooltipProps = {
  text: string;
  ariaLabel: string;
};

const Tooltip = ({ text, ariaLabel }: TooltipProps) => {
  const tooltipId = useId();
  const [isOpen, setIsOpen] = useState(false);

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);
  const toggleTooltip = () => setIsOpen(prev => !prev);

  return (
    <span
      className={`tooltip ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
    >
      <button
        type="button"
        className="tooltip__trigger"
        aria-label={ariaLabel}
        aria-describedby={tooltipId}
        aria-expanded={isOpen}
        onClick={toggleTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
      >
        ?
      </button>
      <span id={tooltipId} role="tooltip" className="tooltip__content">
        {text}
      </span>
    </span>
  );
};

export default Tooltip;
