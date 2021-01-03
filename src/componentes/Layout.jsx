import { Container, Row, Col } from 'react-bootstrap'
import React from "react";
// import Navbar from "./NavBar";
import Footer from "./Footer";


export default function Layout(props) {
	return (
		<>
			<Container>
				<Row>
					<Col>
						{/* <Navbar /> */}
						{props.children}
						<Footer />
					</Col>
				</Row>
			</Container>
		</>
	);
}

