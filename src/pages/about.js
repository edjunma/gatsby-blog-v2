import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>This blog was created to combine the knowledge of great individuals.</p>
  </Layout>
)

export default AboutPage
