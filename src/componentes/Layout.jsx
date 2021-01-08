import { Container, Row, Col } from 'react-bootstrap'
import React from "react";



export default function Layout(props) {
	return (
		<>
			<Container>
				<Row>
					<Col>
						{/* los props son todas las rutas que están en App.jsx */}
						{props.children} 
						
					</Col>
				</Row>
			</Container>
		</>
	);
}

