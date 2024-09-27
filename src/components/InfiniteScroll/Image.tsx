import styled from "./image.module.css";

const Image = ({ src }: { src: string }) => {
  return (
    <div className={styled.imagecontainer}>
      <img src={src} alt="random" />
    </div>
  );
};
export default Image;
