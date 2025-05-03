import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Astro Code",
      description: "Design e Desenvolvimento",
      imgUrl: projImg4,
      link: 'https://astrocode.com.br/'
    },

    {
      title: "Valor de uma vida",
      description: "Design e Desenvolvimento",
      imgUrl: projImg1,
      link: 'https://valordeumavida.com.br/'
    },
    {
      title: "Paulinho Baterias",
      description: "Design e Desenvolvimento",
      imgUrl: projImg2,
      link: 'https://paulinhobaterias.com.br/'
    },
    {
      title: "AGS Trnasportadora",
      description: "Design e Desenvolvimento",
      imgUrl: projImg3,
      link: 'https://agsetonon.com.br/'
    },
    
  
    
  ];
  const projects2 = [

    {
      title: "Super Teliano ",
      description: "Design e Desenvolvimento",
      imgUrl: projImg10,
      link: ''
    },
    
    {
      title: "MARKET SCRIPT ",
      description: "Desenvolvimento de frontend",
      imgUrl: projImg6,
      link: 'https://www.youtube.com/watch?v=asBw3nQ1XOg&start=12'
    },
    
    {
      title: "Trigueiro K9",
      description: "Desenvolvimento de frontend",
      imgUrl: projImg5,
      link: 'https://www.youtube.com/watch?v=tKQrYLsa7lw&start=15'
    },
    
    {
      title: "BOXING FIGHT",
      description: "Desenvolvimento de frontend",
      imgUrl: projImg8,
      link: 'https://www.youtube.com/watch?v=pQSs87NUCtA&start=12'
    },
    
    {
      title: "PETSHOP REALISTA",
      description: "Desenvolvimento de frontend",
      imgUrl: projImg9,
      link: 'https://www.youtube.com/watch?v=pQSs87NUCtA&start=18'
    },

    {
      title: "Trigueiro Auto Escola",
      description: "Desenvolvimento de frontend",
      imgUrl: projImg7,
      link: 'https://www.youtube.com/watch?v=WAVdn4VXbPQ&start=14'
    },
       
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Ao longo da minha trajetória, desenvolvi diversos projetos práticos que evidenciam minhas habilidades em desenvolvimento web, automação, análise de dados e criação de chatbots. Cada projeto reflete meu comprometimento com soluções eficientes e funcionais. Confira alguns dos principais a seguir..</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                 
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                 
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
