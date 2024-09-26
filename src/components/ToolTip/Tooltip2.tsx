import { useEffect } from "react";
import { TooltipData } from "./data";
import styled from "./tooltip1.module.css";
import useTooltipStore from "../../store/singleTooltipStore";

const Tooltip2 = () => {
  return (
    <div className={styled.container}>
      {TooltipData.map((tooltip) => (
        <Tooltip
          key={tooltip.id}
          id={tooltip.id}
          name={tooltip.name}
          desc={tooltip.desc}
        />
      ))}
    </div>
  );
};

const Tooltip = ({
  name,
  desc,
  id,
}: {
  name: string;
  desc: string;
  id: number;
}) => {
  const { index, setTooltip } = useTooltipStore();
  const isOpen = index === id;

  const handleClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setTooltip(index === id ? null : id);
  };

  useEffect(() => {
    const clickOutside = () => {
      setTooltip(null);
    };
    if (isOpen) {
      window.addEventListener("click", clickOutside);
    }

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [isOpen, setTooltip]);

  return (
    <div className={styled.wrapper}>
      <button className={styled.button} onClick={(e) => handleClick(e, id)}>
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
export default Tooltip2;
