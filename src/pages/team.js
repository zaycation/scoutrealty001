import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Row,
  Col,
  Nav,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap"

import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"

import "./realtors.css"

const teamIndex = () => {
  const team = [
    {
      name: "John Doe",
      username: "johndoe",
      title: "Licensed Real Estate Broker",
      phone: "(661) 123 - 1234",
      email: "john@scoutrealty.com",
      link: "link text",
      slug: `/people/john`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/006/433/original/CWI-3l3shj5gag.gif?1628776643",
    },
    {
      name: "Jean Deaux",
      username: "jeandeaux",
      title: "Licensed Real Estate Broker",
      phone: "(661) 123 - 1234",
      email: "jean@scoutrealty.com",
      link: "link text",
      slug: `/people/jean`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/001/255/original/Amy_Herman_Giphy.gif?1614791034",
    },
    {
      name: "Mary Anne",
      username: "marryanne",
      title: "Licensed Real Estate Broker",
      phone: "(661) 123 - 1234",
      email: "marry@scoutrealty.com",
      link: "link text",
      slug: `/people/marry`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/006/433/original/CWI-3l3shj5gag.gif?1628776643",
    },
    {
      name: "Isaiah Thomas",
      username: "isaiahthomas",
      title: "Software Engineer",
      phone: "(661) 123 - 1234",
      email: "isaiah@scoutrealty.com",
      link: "link text",
      slug: `/people/isaiah`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/001/255/original/Amy_Herman_Giphy.gif?1614791034",
    },
    {
      name: "Norman Cook",
      username: "normancook",
      title: "Public Relations Manager",
      phone: "(661) 123 - 1234",
      email: "norman@scoutrealty.com",
      link: "link text",
      slug: `/people/norman`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/006/433/original/CWI-3l3shj5gag.gif?1628776643",
    },
    {
      name: "Thelma Umana",
      username: "thelmaumana",
      title: "Licensed Insurance Broker",
      phone: "(661) 123 - 1234",
      email: "thelma@scoutrealty.com",
      link: "link text",
      slug: `/people/thelma`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/001/255/original/Amy_Herman_Giphy.gif?1614791034",
    },
  ]

  return (
    <>
      <Navb />
      <Seo title="Realtors" />
      <Container className="mb-5">
        <br />
        <br />
        <Row>
          <Col>
            <div
              className="mt-5 d-flex
              align-items-center
              justify-content-between"
            >
              <div>
                <h3>Introducing...</h3>
                <h2>
                  The <strong className="bold-txt">Scout Realty Team</strong>
                </h2>
              </div>
              <div>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Nav variant="pills" defaultActiveKey="1" className="team-nav mb-3">
              <Nav.Item className="team-nav-item">
                <Nav.Link eventKey="1" href="#/home">
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="team-nav-item">
                <Nav.Link eventKey="2" title="Item">
                  Agents
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="team-nav-item">
                <Nav.Link eventKey="3" title="Item">
                  Studios
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="team-nav-item">
                <Nav.Link eventKey="4" title="Item">
                  Ventures
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          {team.map((member, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} className="my-5">
              <div className="team-card">
                <Image src={member.image} width="100%" rounded />
                <div className="text-overlay d-flex flex-column align-items-center justify-content-center">
                  <h5 className="text-white mt-2">{member.name}</h5>
                  <p className="text-center mx-3">{member.title}</p>
                  <h6 className="text-white learn-btn">Learn More →</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <br />
      </Container>
      <Footr />
    </>
  )
}

export default teamIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
