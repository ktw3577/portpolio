import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="HomepagLayout">
        <header className="header">
          <div className="header_content">
            <a href="#home">
              <div className="header_title">Taewon's Portfolio</div>
            </a>
            <input type="checkbox" id="menu_check" />
            <label htmlFor="menu_check">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="header_navigation">
              <a href="#home">
                <div className="navigation_point">Home</div>
              </a>
              {/* 
              <a href="#about">
                <div className="navigation_point">About me</div>
              </a> 
              */}
              <a href="#skills">
                <div className="navigation_point">Skills</div>
              </a>
              <a href="#projects">
                <div className="navigation_point">Projets</div>
              </a>
              <a href="#contact">
                <div className="navigation_point"> Contact</div>
              </a>
            </div>
          </div>
        </header>
        <article className="home" id="home">
          <div className="home_content">
            <div className="home_text">웹개발자 김태원의 포트폴리오입니다</div>
            {/* 
            <a href="#skills" className="next_button">
              더 알아보기
            </a>
            */}
          </div>
        </article>
        {/*
           <article className="about_me" id="about">
           <div className="about_me_container">
             <div className="article_title">ABOUT ME</div>
             <div className="about_me_content">
               항상 유저친화적인 UI를 만들기위해 노력하는사람이 되겠습니다.
               <br />
               <br />
               감사합니다.
             </div>
           </div>
         </article >
        */}
        <article className="skills" id="skills">
          <div className="skills_container">
            <div className="article_title" id="skills_title">
              SKILLS
            </div>
            <div className="skills_tech_boxs">
              <div className="tech_box" id="front_end">
                <div className="tech_box_title">Front-end</div>

                <div className="skill_imgae_container" id="html">
                  <div className="skill_label" id="triple_label">
                    familiar
                  </div>
                </div>
                <div className="skill_image_container" id="typescript">
                  <div className="skill_label">familiar</div>
                </div>
                <div className="skill_image_container" id="styled-components">
                  <div className="skill_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="react">
                  <div className="skill_long_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="react_native">
                  <div className="skill_long_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="redux">
                  <div className="skill_long_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="redux_saga">
                  <div className="skill_long_label">tried</div>
                </div>
              </div>

              <div className="tech_box" id="back_end">
                <div className="tech_box_title">Back-end</div>

                <div className="skill_image_long_container" id="node_express">
                  <div className="skill_long_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="mysql">
                  <div className="skill_long_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="sequelize">
                  <div className="skill_long_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="socketio">
                  <div className="skill_long_label">tried</div>
                </div>
              </div>

              <div className="tech_box" id="deployment">
                <div className="tech_box_title">Deployment & communication</div>

                <div className="skill_image_long_container" id="aws">
                  <div className="skill_long_label">tried</div>
                </div>

                <div className="skill_image_long_container" id="figma">
                  <div className="skill_long_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="zeplin">
                  <div className="skill_long_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="slack">
                  <div className="skill_long_label">tried</div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="projects" id="projects">
          <div className="projects_container">
            <div className="article_title">PROJECTS</div>
            <div className="projects_boxs">
              <div className="project_box" id="surf">
                <div className="project_title">Surf</div>
                <div className="project_period">2021.02(4인 팀프로젝트)</div>
                <div className="project_contents">
                  <div className="image_container">
                    <input
                      type="radio"
                      name="slide"
                      id="surf_slide01"
                      defaultChecked
                    />
                    <input type="radio" name="slide" id="surf_slide02" />
                    <input type="radio" name="slide" id="surf_slide03" />
                    <input type="radio" name="slide" id="surf_slide04" />
                    <input type="radio" name="slide" id="surf_slide05" />
                    <input type="radio" name="slide" id="surf_slide06" />

                    <div className="image_slider">
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/surf/mainPage.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/surf/login.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/surf/createWave.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/surf/joinWave.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/surf/myPage.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/surf/changeAvarta.gif")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="slide_controler">
                      <label htmlFor="surf_slide01" className="current_slide" />
                      <label htmlFor="surf_slide02" className="current_slide" />
                      <label htmlFor="surf_slide03" className="current_slide" />
                      <label htmlFor="surf_slide04" className="current_slide" />
                      <label htmlFor="surf_slide05" className="current_slide" />
                      <label htmlFor="surf_slide06" className="current_slide" />
                    </div>
                  </div>
                  <div className="project_description">
                    <div className="main_description">
                      소설릴레이 플랫폼으로 혼자 소설을 전부 쓰기 힘들거나,
                      시간이 부족한 사람, 다같이 릴레이형식으로 소설을
                      써보고싶은 사람들을 위해 만들게된 웹서비스입니다.
                      <p />
                      첫번째 팀프로젝트로 팀원들과 Github, Zeplin, Slack 등의
                      도구들로 협업을 해보며 그동안 배웠던 Html, Css, React,
                      Nodejs, Express 등을 좀 더 체화하고 Gitbook과 Postman을
                      이용해 RESTful한 API관리 경험을 쌓을 수 있었고, AWS를
                      이용한 배포경험, 그에대한 AWS결제 Lisk관리도 경험해 볼 수
                      있었습니다.
                    </div>
                    <div className="brief_description">
                      <div className="head">주요 기능</div>
                      <div className="body">
                        소설 쓰기, 다른유저와 함께 릴레이 소설 쓰기, 작품 주제별
                        필터링, 마이 페이지관리(내가 쓴글, 릴레이에 참여한 글,
                        좋아요 누른 글, 나의 등급, 아바타관리 등)
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Github</div>
                      <a
                        className="body"
                        href="https://github.com/ktw3577/surf_server"
                      >
                        https://github.com/ktw3577/surf_server
                      </a>
                    </div>
                    <div className="brief_description">
                      <div className="head">Frontend</div>
                      <div className="body">React, Redux, Javascript</div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Backend</div>
                      <div className="body">
                        NodeJs, Express, Sequelize, Passport
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Database</div>
                      <div className="body">MySQL</div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Deployment</div>
                      <div className="body">
                        AWS(S3, RDS, EC2, CloudFornt, Route53, Certificate
                        Manager)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_box" id="umbrella">
                <div className="project_title">우산챙겨</div>
                <div className="project_period">
                  2021.02 - 2021.03(3인 팀프로젝트)
                </div>
                <div className="project_contents">
                  <div className="image_container">
                    <input
                      type="radio"
                      name="slide"
                      id="umbrella_slide01"
                      defaultChecked
                    />
                    <input type="radio" name="slide" id="umbrella_slide02" />
                    <input type="radio" name="slide" id="umbrella_slide03" />
                    <input type="radio" name="slide" id="umbrella_slide04" />
                    <input type="radio" name="slide" id="umbrella_slide05" />
                    <input type="radio" name="slide" id="umbrella_slide06" />

                    <div className="image_slider">
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/umbrella/mainPage.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/umbrella/login.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/umbrella/wether.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/umbrella/addSchedule.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/umbrella/shareSchedule.gif")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/umbrella/acceptFriend.gif")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="slide_controler">
                      <label
                        htmlFor="umbrella_slide01"
                        className="current_slide"
                      />
                      <label
                        htmlFor="umbrella_slide02"
                        className="current_slide"
                      />
                      <label
                        htmlFor="umbrella_slide03"
                        className="current_slide"
                      />
                      <label
                        htmlFor="umbrella_slide04"
                        className="current_slide"
                      />
                      <label
                        htmlFor="umbrella_slide05"
                        className="current_slide"
                      />
                      <label
                        htmlFor="umbrella_slide06"
                        className="current_slide"
                      />
                    </div>
                  </div>
                  <div className="project_description">
                    <div className="main_description">
                      사용자가 만든 일정에 대한 날씨 정보를 제공하고 관리할 수
                      있게 도와주는 애플리케이션입니다.
                      <p></p>
                      2번째 팀프로젝트로 Expo를 기반으로 React-native를 사용한
                      앱개발 경험을 할 수 있었고, Typescript를 적용해봄으로써
                      규모가 커질수록 에러핸들링의 어려움으로 인해 Typescript의
                      필요성을 확실히 느낄 수 있었습니다.
                    </div>
                    <div className="brief_description">
                      <div className="head">주요 기능</div>
                      <div className="body">
                        주간 날씨 확인, 일일 날씨 확인, 일정만들기,
                        일정공유하기, 친구추가, 친구삭제
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Github</div>
                      <a
                        href="https://github.com/ktw3577/umbrella_server"
                        className="body"
                      >
                        https://github.com/ktw3577/umbrella_server
                      </a>
                    </div>
                    <div className="brief_description">
                      <div className="head">Frontend</div>
                      <div className="body">
                        React Native, Expo, Typescript, Redux, Styled Component,
                        Socket.io
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">API</div>
                      <div className="body">OpenWeather, Kakao map</div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Backend</div>
                      <div className="body">
                        Express, Typescript, Sequelize, Passport, Socket.io
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Database</div>
                      <div className="body">MySQL</div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Deployment</div>
                      <div className="body">AWS(S3, RDS, EC2, Route53)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_box" id="portfolio">
                <div className="project_title">포트폴리오 웹사이트</div>
                <div className="project_period">2022.02(1인 프로젝트)</div>
                <div className="project_contents">
                  <div className="image_container">
                    <input
                      type="radio"
                      name="slide"
                      id="portfolio_slide01"
                      defaultChecked
                    />
                    <input type="radio" name="slide" id="portfolio_slide02" />
                    <input type="radio" name="slide" id="portfolio_slide03" />
                    <input type="radio" name="slide" id="portfolio_slide04" />

                    <div className="image_slider">
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/portfolio/home.png")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/portfolio/skills.png")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/portfolio/projects.png")}
                          alt=""
                        />
                      </div>
                      <div className="image_slide">
                        <img
                          className="image"
                          src={require("./images/portfolio/contact2.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="slide_controler">
                      <label
                        htmlFor="portfolio_slide01"
                        className="current_slide"
                      />
                      <label
                        htmlFor="portfolio_slide02"
                        className="current_slide"
                      />
                      <label
                        htmlFor="portfolio_slide03"
                        className="current_slide"
                      />
                      <label
                        htmlFor="portfolio_slide04"
                        className="current_slide"
                      />
                    </div>
                  </div>
                  <div className="project_description">
                    <div className="main_description">
                      포트폴리오 용도로 만든 웹사이트입니다.
                      <p />
                      기업과제로 html과 css만을 사용하는 과제들이 많아 html과
                      css만을 사용해 만들어보았습니다. 이 과정을 통해 좀더 깊게
                      html과 css를 이해할 수 있게됬고, Javascript와 React를
                      이용한 script들의 유용성과 필요성을 다시 느낄 수 있었고,
                      Netlify를 통한 배포경험도 해볼 수 있었습니다.
                    </div>
                    <div className="brief_description">
                      <div className="head">주요 기능</div>
                      <div className="body">
                        포트폴리오, 기술스택 소개, 프로젝트 경험소개, 연락망
                        소개
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">Github</div>
                      <a
                        href="https://github.com/ktw3577/portpolio"
                        className="body"
                      >
                        https://github.com/ktw3577/portpolio
                      </a>
                    </div>

                    <div className="brief_description">
                      <div className="head">Deployment</div>
                      <div className="body">Netlify</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="contact" id="contact">
          <div className="contact_container">
            <div className="article_title">CONTACT</div>
            <div className="contact_box">
              <div className="contact_links">
                <div className="icon_wrapper">
                  <a href="https://github.com/ktw3577">
                    <img
                      src={require("./icons/contact_icons/git-hub.png")}
                      alt=""
                    />
                  </a>
                </div>
                <a className="link_url" href="https://github.com/ktw3577">
                  github.com/ktw3577
                </a>
              </div>
              <div className="contact_links">
                <div className="icon_wrapper">
                  <a href="https://commonseed.tistory.com/">
                    <img
                      src={require("./icons/contact_icons/tistory2.png")}
                      alt=""
                    />
                  </a>
                </div>
                <a className="link_url" href="https://commonseed.tistory.com/">
                  https://commonseed.tistory.com/
                </a>
              </div>
              <div className="contact_links">
                <div className="icon_wrapper">
                  <img
                    src={require("./icons/contact_icons/gmail.png")}
                    alt=""
                  />
                </div>
                <div className="link_url">taewongim06@gmail.com</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
