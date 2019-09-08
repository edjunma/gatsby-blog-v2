import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import authors from '../util/authors'
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'
import EdmondImage from '../images/edmond.jpg'
import JayImage from '../images/jay.jpg'
import NormanImage from '../images/norman.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img
          src={EdmondImage}
          style={{ maxWidth: '100%' }}
          alt="Edmond profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={JayImage} style={{ maxWidth: '100%' }} alt="Jay profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[1].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img
          src={NormanImage}
          style={{ maxWidth: '100%' }}
          alt="Norman profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[2].name}</CardTitle>
            <CardText>{authors[2].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[2].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
