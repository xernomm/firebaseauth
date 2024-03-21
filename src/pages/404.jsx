import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
     <Container>
        <Row>
            <div className="">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className=''>
                    <h1 className="display-2 text-center">
                        404 - Not Found
                    </h1>
                    <hr />
                    <p className="lead text-center">
                        Lu nyari apaan anjeng.
                    </p>
                    <div className="d-flex justify-content-center">
                    <Link to="/" className='btn btn-danger mt-5 col-12 p-2'>
                        Balik sini anj
                    </Link>
                    </div>
                    
                    </div>
                </div>
            </div>
        </Row>
     </Container>
    </>
  )
}
