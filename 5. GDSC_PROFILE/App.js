import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <header>
      <div className="cropped">
        <img alt="불러오기 실패" src="img/banner.jpg"></img>
        <h1 className="banner-text">{props.title}</h1>
      </div>
    </header>
  );
}

function H2Title(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <hr />
    </div>
  );
}
function Name(props) {
  return (
    <div className="text-center">
      <h2>민지훈</h2>
    </div>
  );
}
function Article(props) {
  const lis = [];
  const career = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li>
        {t.body + ' '}
        <a href="{t.link}">{t.link}</a>
      </li>
    );
  }
  for (let i = 0; i < props.career.length; i++) {
    let t = props.career[i];
    career.push(<li>{t.body + ' '}</li>);
  }

  return (
    <article>
      🌐 <b>사이트</b>
      <ul>{lis}</ul>
      🪜 <b>경력</b>
      <ul>{career}</ul>
      🪖 <b>병역</b>
      <ul>
        <li>2017.05.23 ~ 2019.02.22 육군 제5보병사단 병장 만기 전역</li>
      </ul>
    </article>
  );
}

function Button(props) {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    setActive(!active);
  };

  return (
    <div>
      <button
        onMouseDown={handleClick}
        onMouseUp={handleClick}
        className={active ? 'button-active' : 'button-normal'}
      >
        {props.name}
      </button>
    </div>
  );
}

function App() {
  const topics = [
    { body: '📧 이메일 : astar5327z@gmail.com', link: ' ' },
    {
      body: '✏️ 블로그 : 멋쟁이 노비처럼.',
      link: 'https://afterdawncoding.tistory.com/',
    },
    { body: '📓 Github :', link: 'https://github.com/lazarus0320' },
    {
      body: '😎 Solved.ac :',
      link: 'https://solved.ac/profile/lazarus0320',
    },
  ];
  const career = [
    {
      body: '🏫 University of Donga (Engineering Economy) 2016.03 ~ 2021.12 (휴학 + 군복무)',
    },
    { body: '🏫 University of Donga (Computer Science) 2022.03 ~ ' },
    {
      body: '💼 ThisIs (Donga smart campus aplication dev team) 2022.04 ~',
    },
    { body: '💼 GDSC(Google Developer Student Clubs) 2022.09.19 ~' },
  ];

  return (
    <div>
      <div className="text-center">
        <Header title="GDSC DAU Profile"></Header>
      </div>
      <div className="App">
        <Name></Name>
        <div className="cross-center">
          <img alt="불러오기 실패" width="200" height="200" src="img/min.jpg" />
          <Article topics={topics} career={career}></Article>
        </div>
        <Button name="이미지 변경"></Button>
        <H2Title title="🙋🏻‍♂️About Me."></H2Title>
        <ul>
          <li>
            모르는 것은 배우고, 나누고, 활용하며, 정체되지 않기 위해 항상 새로운
            것에 대해 관심을 기울일 줄 아는 백엔드 개발자가 되고자 합니다.
          </li>
          <p></p>
          <li>
            사람들과 함께 프로젝트를 진행하는 것은 로켓을 쏘아올리는 일과 같다고
            생각합니다. 협업과 탐구를 통해 문제 해결 능력을 기르고, 열정적인
            추진력으로 목표를 향해 나아가는 것이 제가 가고자 하는 방향입니다.
          </li>
        </ul>
        <br />
        <span className="underline">꾸준하고 끈질기게</span>
        <br />
        <br />
        <div className="container">
          <img
            alt="불러오기 실패"
            width="700"
            height="200"
            src="img/zandi1.png"
          />
          <img
            alt="불러오기 실패"
            width="700"
            height="200"
            src="img/zandi2.png"
          />
        </div>
        <br />
        <div className="container">
          <ul>
            <li>
              아직 변변치 않지만, 변치않는 초심으로 자신을 되돌아보고 복습하기
              위해 꾸준하게기록하는 습관을 들이고 있습니다.
            </li>
            <br />
            <li>
              이론과 설계에 대한 집착으로 언젠가 대체할 수 없는 전문성을 가진
              개발자가 되고자합니다.
            </li>
            <br />
            <li>
              협업에 있어서 사람들과의 커뮤니케이션이 가장 중요하다고 생각하고
              있습니다. 치열하고 능동적으로, 함께 머리를 맞대면서 문제 해결
              역량을 기르고 싶습니다.
            </li>
          </ul>
        </div>
        <h2 className="font-blue">🛠 Stacks</h2>
        <hr />
        <br />
        <div className="text-center">
          <h3>Frontend</h3>
        </div>
        <div className="text-center">
          <br />
          백엔드 개발을 위한 기초적인 지식 정도만 숙지하고 있습니다.
          <br />
          간단한 CRUD 기능을 구현할 수 있는 수준입니다.
          <br />
        </div>
        <br />
        <div className="center-container">
          <span className="border-round">HTML</span>
          <span className="border-round">CSS</span>
          <span className="border-round">React</span>
        </div>
        <br />
        <div className="container">
          <h3>Backend</h3>
        </div>
        <div className="text-center">
          <br />
          기본적인 자료구조를 구현할 줄 알며, 알고리즘 문제를 해결할 수
          있습니다.
          <br />
          개발 문서를 읽고 다양한 라이브러리를 활용하여 원하는 기능을 개발한
          경험이 있습니다.
          <br />
          스프링부트를 활용해 기본적인 CRUD 기능을 MVC형식으로 구현할 수
          있습니다.
        </div>
        <br />
        <div className="center-container">
          <span className="border-round">Spring boot</span>
        </div>
        <br />
        <div className="container">
          <h3>ETC</h3>
        </div>
        <br />
        <div className="text-center">
          셀레니움을 활용하여 동적 웹스크래핑을 할 수 있습니다. 웹소켓 API를
          활용해 필요한 기능을 개발할 수 있습니다. <br />
          알고리즘 문제를 풀이하는 주력 언어로 사용하고 있습니다.
        </div>
        <br />
        <div className="center-container">
          <span className="border-round">Python</span>
        </div>
        <br />
        <div className="text-center">
          쿼리문을 활용하여 간단한 CRUD 기능을 구현하고 응용할 수 있습니다.
        </div>
        <br />
        <div className="center-container">
          <span className="border-round">DBMS - MySQL</span>
        </div>
        <br />
        <div className="text-center">
          Github로 branch관리와 commit, Pull-request 등의 기본적인 기능을
          활용하여 프로젝트를 관리한 경험이 있습니다.
        </div>
        <br />
        <div className="center-container">
          <span className="border-round">Github</span>
        </div>
        <h2 className="font-red">🎒 Activity</h2>
        <hr />
        <br />
        <b>2022.04.01 ~</b>
        <br />
        <h3 className="font-blue">디스이즈 16기 서버팀</h3>
        <p className="in">
          교내 스마트폰 캠퍼스 어플리케이션을 제작하는 동아리 디스이즈에서
          서버팀을 담당하고 있습니다.
        </p>
        <p>
          동아리 활동을 하면서 백엔드 개발에 대한 관심이 커지게 되었고, 동아리
          업무 외에도 웹에 대한 개인적인 공부를 해오고 있습니다.
        </p>
        학생정보서비스나 공공기관과 같은 웹페이지의 데이터를 파싱하고, 원하는
        형태로 가공하여 데이터 베이스로 넘기는 방법에 대해 학습하였습니다.
        <p>
          최근에는 리액트 담당 팀원들과 협업하여 새로운 기능을 개발하기 위해
          노력하고 있습니다.
        </p>
        <p></p>
        디스이즈 어플 링크 ->{' '}
        <a href="https://play.google.com/store/apps/details?id=kr.co.thisis.dsisproject">
          https://play.google.com/store/apps/details?id=kr.co.thisis.dsisproject
        </a>
        <p></p>
        <b>활용 SKILL : </b>
        <span className="border-round">Python</span>
        <span className="border-round">Selenium</span>
        <span className="border-round">MySQL</span>
        <span className="border-round">HTML</span>
        <span className="border-round">CSS</span>
        <p></p>
        <hr />
        <br />
        <b>2022.09.19 ~</b>
        <br />
        <h3 className="font-blue">
          GDSC(Google Developer Student Clubs) DAU - Core Member
        </h3>
        <p className="in">
          구글에서 지원하는 대학생 개발자 커뮤니티 동아리의 1기 코어 멤버로서
          활동하고 있습니다.
        </p>
        <p>
          타 학교 GDSC 운영진들과 협업하여 예비 개발자들을 위한 컨퍼러스를
          개최하고, 사회적 공헌활동을 위한 다양한 해커톤을 기획하는 등 멤버들의
          외부활동을 지원하고 있습니다.
        </p>
        GDSC DAU 홈페이지 ->{' '}
        <a href="https://gdsc.community.dev/dong-a-university/">
          https://gdsc.community.dev/dong-a-university/
        </a>
        <br />
        GDSC DAU 인스타그램 ->{' '}
        <a href="https://www.instagram.com/gdsc_dau/">
          https://www.instagram.com/gdsc_dau/
        </a>
        <p></p>
        <hr />
        <br />
        <h3>📘기술 블로그 운영</h3>
        블로그 링크 ->{' '}
        <a href="https://afterdawncoding.tistory.com/">
          https://afterdawncoding.tistory.com/
        </a>
        <p className="in">
          개발 공부를 처음 시작한 순간부터, 학습했던 내용을 정리하고 복습하기
          위해 블로그를 운영하게 되었습니다.
        </p>
        <p>
          툴 사용 방법, 햇갈리는 개념, 여러 문제 해결법과 CS관련 내용까지 가독성
          있게 담아내려고 노력하고 있습니다.
        </p>
        <ul>
          <li>월간 평균 PV 2000</li>
          <li>누적 PV 약 10000+</li>
          <br />
        </ul>
        <h2 className="font-blue">🖥️ Project</h2>
        <hr />
        <br />
        <b>2022.01.02 ~ 2022.01.13</b>
        <p />
        <h3 className="font-blue">GAZA COIN : 비트코인 모의투자 프로그램</h3>
        <b>활용 SKILL : </b>
        <span className="border-round">Python</span>
        <span className="border-round">Pyqt5</span>
        <p />
        <div className="center-container">
          <img src="img/bitcoin.png" alt="불러오기 실패" width="800"></img>
          <p>
            <a href="https://github.com/lazarus0320/GAZACOIN">
              깃허브 레포지토리 링크
            </a>
          </p>
        </div>
        <h3>요약</h3>
        <ul>
          <li>
            업비트 가상화폐 거래소의 API를 이용해 실시간 코인 시세를 받아와
            가상의 돈으로 모의 투자를 할 수 있도록 구현했습니다.
          </li>
          <p />
          <li>
            지정가, 시장가 거래뿐만아니라 매수한 코인을 관리하는 코인 지갑기능,
            호가창 기능등을 구현하였습니다. 명령어를 통해 다른 코인에 대한
            실시간 정보또한 확인할 수 있습니다.
          </li>
          <p />
        </ul>
        <h3>목적</h3>
        <ul>
          <li>
            실거래 이전에 자신의 전략을 모의로 실험할 수 있으며, 가상화폐 거래
            경험이 없는 사람도 리스크없이 방법을 학습할 수 있도록 도움을 주고자
            했습니다.
          </li>
        </ul>
        <h3>성과</h3>
        <ul>
          <li>
            직접 사용하여 전략을 테스트하였고, 수익금으로 학기 시작 전에
            노트북을 장만할 수 있었습니다.
          </li>
        </ul>
        <p />
        <h3>💡알게된 점</h3>
        <ul>
          <li>api 요청 한도를 고려한 설계가 필요함.</li>
          <p />
          <li>
            데이터를 로컬이 아닌 서버에서 관리할 수 있도록 구현하는 것에 대한
            필요성을 느낌.
          </li>
          <p />
          <li>
            무분별한 객체 남발로 인한 메모리 문제를 겪고 코드 설계와 디자인
            패턴에 대한 중요성을 느낌.
          </li>
        </ul>
        <p />
        <hr />
        <p />
        <h3 className="font-blue">Room Cafe KIOSK</h3>
        <b>2022.05.10 ~ 2022.05.23</b>
        <p />
        <b>활용 SKILL : </b>
        <span className="border-round">Java</span>
        <span className="border-round">Swing</span>
        <p />
        <div className="center-container">
          <img src="img/room.jpg" alt="불러오기 실패" width="800"></img>
          <p></p>
          <br />
          <a href="https://github.com/lazarus0320/JAVA-SWING-Room-Cafe-KIOSK-">
            깃허브 레포지토리 링크
          </a>
        </div>
        <h3>요약</h3>
        <ul>
          <li>가상의 룸카페 키오스크 시스템을 구현한 프로젝트입니다.</li>
          <p />
          <li>
            <p />
            룸카페의 예약 기능과 PC방의 음식 주문 기능을 합쳐 원격으로도 방을
            대실하고 음식을 주문할 수 있는 애플리케이션을 만들고자 했습니다.
          </li>
          <p />
          <li>
            회원 가입/로그인/룸대실/퇴실/음식 주문/영수증파일 생성 기능 등이
            구현되었습니다.
          </li>
        </ul>
        <h3>목적</h3>
        <ul>
          <li>
            자바의 객체지향적인 특성을 최대한 활용하고 JSON파일 생성과 파싱
            방법에 대한 학습을 위해 시작한 프로젝트였습니다.
          </li>
        </ul>
        <h3>성과</h3>
        <ul>
          <li>
            본래 의도했던 스마트폰 애플리케이션으로 구현되지 못해 사업성이
            떨어졌으나 로직과 설계에 대해 인정받아 전과생이지만 창업친화형
            프로그래밍 설계 수업에서 고학년들을 재치고 가장 높은 점수를 받을 수
            있었습니다.
          </li>
        </ul>
        <p />
        <h3>💡알게된 점</h3>
        <ul>
          <li>JSON 파일을 활용하는 방법에 대해 숙지함.</li>
          <p />
          <li>
            다양한 사용자를 효율적으로 관리하기 위해 데이터 베이스 공부의
            필요성을 인지함.
          </li>
          <p />
        </ul>
        <p />
        <hr />
        <p />
      </div>
    </div>
  );
}

export default App;
