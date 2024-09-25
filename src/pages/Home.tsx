import Card from "../components/Card/Card";
import styled from "./home.module.css";
import accordianimg from "../assets/아코디언.png";
import galery from "../assets/갤러리.png";
import lazy from "../assets/레이지 로딩.png";
import linestamp from "../assets/말줄임.png";
import modal from "../assets/모달.png";
import infinite from "../assets/무한스크롤.png";
import selectbox from "../assets/셀렉트박스.png";
import input from "../assets/인풋텍스트.png";
import auto from "../assets/자동완성.png";
import carosel from "../assets/캐러셀.png";
import tab from "../assets/탭메뉴.png";
import toast from "../assets/토스트.png";
import tooltip from "../assets/툴팁.png";
import popover from "../assets/팝오버.png";

const uiComponentsData = [
  {
    imageUrl: accordianimg,
    title: "아코디언",
    description:
      "접었다 펼 수 있는 아코디언 스타일의 컴포넌트입니다. 내용을 간결하게 정리하고 필요시 확장할 수 있습니다.",
  },
  {
    imageUrl: galery,
    title: "갤러리",
    description:
      "이미지를 그리드 형태로 보여주는 갤러리 컴포넌트입니다. 여러 이미지를 효과적으로 표시할 수 있습니다.",
  },
  {
    imageUrl: lazy,
    title: "레이지 로딩",
    description:
      "페이지 로딩 속도를 개선하기 위해 이미지나 컨텐츠를 필요할 때만 로드하는 기능입니다.",
  },
  {
    imageUrl: linestamp,
    title: "말줄임",
    description:
      "긴 텍스트를 특정 길이로 제한하고 끝에 '...'을 추가하는 컴포넌트입니다.",
  },
  {
    imageUrl: modal,
    title: "모달",
    description:
      "페이지 위에 떠 있는 대화상자 형태의 UI 요소로, 사용자의 주의를 끌거나 추가 정보를 표시할 때 사용합니다.",
  },
  {
    imageUrl: infinite,
    title: "무한 스크롤",
    description:
      "사용자가 페이지 하단에 도달하면 추가 컨텐츠를 자동으로 로드하는 기능입니다.",
  },
  {
    imageUrl: selectbox,
    title: "셀렉트박스",
    description:
      "드롭다운 메뉴 형태로 여러 옵션 중 하나를 선택할 수 있게 해주는 컴포넌트입니다.",
  },
  {
    imageUrl: input,
    title: "인풋 텍스트",
    description: "사용자로부터 텍스트 입력을 받는 기본적인 폼 요소입니다.",
  },
  {
    imageUrl: auto,
    title: "자동완성",
    description:
      "사용자가 입력을 시작하면 가능한 옵션을 제안하는 기능으로, 입력 속도와 정확성을 높입니다.",
  },
  {
    imageUrl: carosel,
    title: "캐러셀",
    description:
      "여러 이미지나 컨텐츠를 슬라이드쇼 형태로 보여주는 컴포넌트입니다.",
  },
  {
    imageUrl: tab,
    title: "탭 메뉴",
    description:
      "여러 섹션의 컨텐츠를 탭으로 구분하여 보여주는 네비게이션 컴포넌트입니다.",
  },
  {
    imageUrl: toast,
    title: "토스트",
    description:
      "화면 하단이나 모서리에 잠깐 나타났다 사라지는 알림 메시지 컴포넌트입니다.",
  },
  {
    imageUrl: tooltip,
    title: "툴팁",
    description:
      "요소에 마우스를 올렸을 때 추가 정보를 보여주는 작은 팝업 컴포넌트입니다.",
  },
  {
    imageUrl: popover,
    title: "팝오버",
    description:
      "클릭하면 추가 정보나 관련 작업을 보여주는 작은 오버레이 컴포넌트입니다.",
  },
];

const Home = () => {
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>내가 만든 ui 컴포넌트</h2>
      <div className={styled.wrapper}>
        {uiComponentsData.map((data, index) => (
          <Card
            link={index + 1}
            img={data.imageUrl}
            title={data.title}
            desc={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
