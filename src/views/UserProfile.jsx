import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12" className="full-vertical-height overflow-hidden">
              <Card className="card-user full-height">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/headshot.jpg")}
                      />
                      <h5 className="title">Prabhjot Singh Rai</h5>
                    </a>
                    <p className="description">Principal Software Engineer at <a href={'https://www.flyhomes.com'} target={'blank'}>Flyhomes</a></p>
                  </div>
                  <div className="card-description">
                    <center>
                      A full-stack engineer with in-depth knowledge of front-end, back-end and devops. Passionate about AI, robots, entrepreneurship and development.
                    </center>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook" onClick={() => {
                      window.open('https://www.facebook.com/raiprabhjot')
                    }}>
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter" onClick={() => {
                      window.open('https://twitter.com/rai_prabh')
                    }}>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google" onClick={() => {
                      window.open('https://www.linkedin.com/in/prabhjotrai/')
                    }}>
                      <i className="fab fa-linkedin" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
