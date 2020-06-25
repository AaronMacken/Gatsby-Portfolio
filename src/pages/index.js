import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  // when we run a page query, the data is accessible via props.data
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      {/* The project component will take a projects prop of data to create the content for, 
      a title for the top of the page, and a showLink prop, 
      which uses boolean logic to determine if a link will be at the bottom of the page to go to /projects */}
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}

// we are running a page query here for featured projects & passing this data as a prop to the Projects component
// we will have a specific projects page to show all projects that will run the same query but without the featured filter

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        url
        github
        featured
        stack {
          id
          title
        }
        id
      }
    }
  }
`
