import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Row>
        <Container>
        <div className="d-flex justify-content-center align-items-center p-3">
            <p className="lead">
                &copy; Copyright @Xernomm
            </p>
        </div>
        </Container>
      </Row>
    </div>
  )
}

export default Footer
