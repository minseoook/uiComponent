import styled from "./accordian3.module.css";
import { accordianData } from "./data";

const Accordian3 = () => {
  return (
    <div className={styled.container}>
      {accordianData.map((accordian) => (
        <AccordianItem
          key={accordian.id}
          title={accordian.title}
          desc={accordian.desc}
          open={accordian.id === 1}
        />
      ))}
    </div>
  );
};

const AccordianItem = ({
  open,
  title,
  desc,
}: {
  open: boolean;
  title: string;
  desc: string;
}) => {
  return (
    <details name="hello" open={open}>
      <summary className={styled.title}>{title}</summary>
      <div className={styled.desc}>{desc}</div>
    </details>
  );
};

export default Accordian3;
