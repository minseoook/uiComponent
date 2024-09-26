import { useState } from "react";
import styled from "./accordian1.module.css";
import { accordianData } from "./data";

const Accordian1 = () => {
  const [index, setindex] = useState(accordianData[0].id);

  const handleClick = (id: number) => {
    setindex((prev) => (prev === id ? 0 : id));
  };
  return (
    <div className={styled.container}>
      {accordianData.map((accordian) => (
        <AccordianItem
          key={accordian.id}
          id={accordian.id}
          title={accordian.title}
          desc={accordian.desc}
          active={index === accordian.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

const AccordianItem = ({
  id,
  title,
  desc,
  active,
  handleClick,
}: {
  id: number;
  title: string;
  desc: string;
  active: boolean;
  handleClick: (id: number) => void;
}) => {
  return (
    <div>
      <h1
        className={`${styled.title} ${active && styled.active}`}
        onClick={() => handleClick(id)}
      >
        {title}
      </h1>
      {active && <p className={styled.desc}>{desc} </p>}
    </div>
  );
};

export default Accordian1;
