import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        // { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        // { id: "CSS_skill", content: "CSS", porcentage: "75%", value: "75" },
        // { id: "Bootstrap_skill", content: "Bootstrap", porcentage: "70%", value: "70" },
        {
          id: "HTML_skill",
          content: "HTML5",
          // porcentage: "90%",
          // value: "90"
        },
        {
          id: "CSS_skill",
          content: "CSS",
          // porcentage: "90%",
          // value: "90"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          // porcentage: "90%",
          // value: "90"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          // porcentage: "90%",
          // value: "90"
        },
      
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          // porcentage: "80%",
          // value: "80"
        },
        {
          id: "NodeJS_Skill",
          content: "NodeJS",
          // porcentage: "75%",
          // value: "75"
        },
        {
          id: "Mysql_Skill",
          content: "Mysql",
          // porcentage: "85%",
          // value: "85"
        },
        {
          id: "MongoDB_Skill",
          content: "MongoDB",
          // porcentage: "80%",
          // value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Full Stack Web Developer with a background in Business  and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. My colleagues past and present would view me I think as a source of encouragement. I'm always trying to bring out the best in me and others, and to see that our goals are accomplished. Throughout my recent projects I’ve found myself taking a team lead position, and whether it pushed me to work far beyond my time or ability, I made sure that our goals were achieved and we finished with a product that we all felt proud of. "
        },
        // {
        //   id: "second-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
