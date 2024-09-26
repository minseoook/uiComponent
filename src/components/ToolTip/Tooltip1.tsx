import { useEffect, useState } from "react";
import { TooltipData } from "./data";
import styled from "./tooltip1.module.css";

const Tooltip1 = () => {
  return (
    <div className={styled.container}>
      {TooltipData.map((tooltip) => (
        <Tooltip key={tooltip.id} name={tooltip.name} desc={tooltip.desc} />
      ))}
    </div>
  );
};

const Tooltip = ({ name, desc }: { name: string; desc: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  useEffect(() => {
    const clickOutside = () => {
      setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("click", clickOutside);
    }

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styled.wrapper}>
      <button className={styled.button} onClick={handleClick}>
        {name}
      </button>
      {isOpen && (
        <p className={styled.desc} onClick={(e) => e.stopPropagation()}>
          {desc}
        </p>
      )}
    </div>
  );
};
export default Tooltip1;
