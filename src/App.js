import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="HomepagLayout">
        <div className="menu bar"></div>
        <article className="home" id="home">
          <h1 className="home_text">Taewon's Portfolio...</h1>
        </article>
        <article className="about_me">
          <div className="about_me_container">
            <div className="article_title">ABOUT ME</div>
            <div className="about_me_content">
              항상 유저친화적인 UI를 만들기위해 노력하는사람이 되겠습니다.
              <br />
              <br />
              감사합니다.
            </div>
          </div>
        </article>
        <article className="skills">
          <div className="skills_container">
            <div className="article_title">SKILLS</div>
            <div className="skills_tech_boxs">
              <div className="tech_box" id="front_end">
                <div className="tech_box_title">Front-end</div>

                <div className="skill_imgae_container" id="html">
                  <div className="skill_label">familiar</div>
                </div>
                <div className="skill_image_container" id="typescript">
                  <div className="skill_label">familiar</div>
                </div>
                <div className="skill_image_container" id="styled-components">
                  <div className="skill_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="react">
                  <div className="skill_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="redux">
                  <div className="skill_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="redux_saga">
                  <div className="skill_label">tried</div>
                </div>
              </div>

              <div className="tech_box" id="back_end">
                <div className="tech_box_title">Back-end</div>

                <div className="skill_image_long_container" id="node_express">
                  <div className="skill_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="mysql">
                  <div className="skill_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="sequelize">
                  <div className="skill_label">familiar</div>
                </div>
                <div className="skill_image_long_container" id="socketio">
                  <div className="skill_label">tried</div>
                </div>
              </div>

              <div className="tech_box" id="deployment">
                <div className="tech_box_title">
                  Deployment && communication
                </div>

                <div className="skill_image_long_container" id="aws">
                  <div className="skill_label">tried</div>
                </div>

                <div className="skill_image_long_container" id="figma">
                  <div className="skill_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="zeplin">
                  <div className="skill_label">tried</div>
                </div>
                <div className="skill_image_long_container" id="slack">
                  <div className="skill_label">tried</div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="projects">
          <div className="projects_container">
            <div className="article_title">PROJECTS</div>
            <div className="projects_boxs">
              <div className="project_box" id="surf">
                <div className="project_title">surf</div>
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
                      소설이어가기 플랫폼으로 누군가 쓰던 글을 이어 쓸수있고,
                      <p></p>
                      내가 글의 첫주자가 될 수 있습니다!
                    </div>
                    <div className="brief_description">
                      <div className="head">주요 기능</div>
                      <div className="body">
                        소설 이어쓰기, 관심가는 소설 좋아요 누르고
                        댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기댓글달기
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">GitHub</div>
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
                  2021.02 - 2021.03(4인 팀프로젝트)
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
                      날씨 알림앱으로 설치만 해놓으면 비가오는날에 자동으로
                      알림이 오는 앱입니다!
                      <p></p>
                      일정을 만들고 친구와 공유해보세요!
                    </div>
                    <div className="brief_description">
                      <div className="head">주요 기능</div>
                      <div className="body">
                        주간 날씨 확인, 일일 날씨 확인, 일정만들기,
                        일정공유하기, 친구추가, 친구삭제
                      </div>
                    </div>
                    <div className="brief_description">
                      <div className="head">GitHub</div>
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
                  <div className="image_container"></div>
                  <div className="project_description"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="contact">
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
                      src={require("./icons/contact_icons/tistory.png")}
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
