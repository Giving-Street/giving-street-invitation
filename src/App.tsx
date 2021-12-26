import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import { ReactComponent as CopySvg } from "./copy.svg";

export default function App() {
  const CopiableLink = () => {
    const [copySuccess, setCopySuccess] = useState("");
    const copiableDiv = useRef(null);

    useEffect(() => {
      if (copySuccess) {
        alert(copySuccess);
      }
    }, [copySuccess]);

    const handleClick = useCallback(() => {
      if (copiableDiv.current) {
        const currentDiv: HTMLDivElement = copiableDiv.current;
        currentDiv.focus();
        navigator.clipboard.writeText(currentDiv.innerHTML ?? "");
        setCopySuccess("클립보드에 저장했습니다.");
      }
    }, []);

    return (
      <div className="copiable-link">
        <div className="direction-copiable-address" ref={copiableDiv}>
          광진구 구의동 240-8 101호
        </div>
        <div className="copy-button" onClick={handleClick}>
          <CopySvg />
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <section id="part-01">
        <div className="title">
          <div className="logo">
            <img src="images/givingStreet.png" alt="Logo" />
          </div>
          <div className="content">
            <span>
              <span className="highlight main">Giving Street | 줄거리</span>
            </span>
            <div className="rules">
              <h3>줄거리 이용 규칙</h3>
              <li>
                윤리를 지키자.{" "}
                <span className="highlight">떳떳하지 않은 일은 하지 말자</span>
              </li>
              <li>
                주방 사용하면,{" "}
                <span className="highlight">
                  공간을 떠나기 전 원상 복구 하고 가기
                </span>
              </li>
              <li>
                <span className="highlight">청소는 나올 때 보다 더 깨끗이</span>
              </li>
              <li>
                지인 초대는 <span className="highlight">미리 이야기하기</span>
              </li>
              <li>
                성선설에 기반해서{" "}
                <span className="highlight">서로 믿고 존중하기</span>
              </li>
              <li>
                <span className="highlight">
                  서로 좋은 영향 주고, 함께 성장하기
                </span>
              </li>
            </div>
          </div>
        </div>
        <div className="content"></div>
      </section>
      <section id="part-02">
        <div className="title">오시는 길</div>
        <div className="content">
          <div className="direction-map">
            <div
              id="daumRoughmapContainer1640515419918"
              className="root_daum_roughmap root_daum_roughmap_landing"
            ></div>
          </div>
          <CopiableLink />
          <div className="info">
            <div>구의역 도보 5분 거리</div>
          </div>
        </div>
      </section>
      <footer>All rights reserved for @giving.street</footer>
    </div>
  );
}
