/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-grid-system';
const style = {
    "position": "fixed",
    "bottom": "0px"
}
class Footer extends React.Component {
  render() {
    return (
        
            <div style={style}>
            <Container fluid style={{ lineHeight: 'px' }}>
                <Row>
                    <Col >
                        <a href="https://github.com/s1iqbal/SoftwareEng" target="_blank">d2lreimagined ™</a>
                    </Col> 
                    <Col >
                       <a href="https://github.com/s1iqbal/" target="_blank">© {new Date().getFullYear()} Saad Iqbal</a>
                    </Col>
                </Row>
        </Container>
    </div>

    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;