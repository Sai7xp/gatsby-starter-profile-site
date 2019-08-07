import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { graphql } from "gatsby"
import Card from "../components/card"

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges

  return (
    <div className="container-fluid">
      <Appbar />
      <div className="row">
        {projectList.map(({ node }) => {
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              link={node.link}
              key = {node.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
        }
      }
    }
  }
`
