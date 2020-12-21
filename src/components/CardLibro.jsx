import React from 'react'
import {Card} from 'react-bootstrap'

export default function CardLibro() {
    return (
        <Card>
            <Card.Header>titulo</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                      Cuerpo del la card
                    </p>
                    <footer className="blockquote-footer">
                        Cita.... <cite title="Source Title">Source Title</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
        </Card>
    )
}
