import { useEffect, useRef, useState } from "react";
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
  const tooltipref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  // useEffect(() => {
  //   const clickOutside = (e: React.MouseEvent) => {
  //     if (
  //       tooltipref.current &&
  //       !tooltipref.current.contains(e.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     window.addEventListener("click", clickOutside);
  //   }
  //   return () => {
  //     window.removeEventListener("click", clickOutside);
  //   };
  // }, [isOpen]);
  const handleClickOutside = (e: MouseEvent) => {
    if (tooltipref.current && !tooltipref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styled.wrapper} ref={tooltipref}>
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
