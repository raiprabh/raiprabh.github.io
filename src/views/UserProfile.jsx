import React from 'react';

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
} from 'reactstrap';

const URLS = {
  facebook: {
    url: 'https://www.facebook.com/raiprabhjot',
    event: 'facebook-url'
  },
  twitter: {
    url: 'https://twitter.com/rai_prabh',
    event: 'twitter-url'
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/prabhjotrai/',
    event: 'linkedin-url'
  },
  github: {
    url: 'https://www.github.com/raiprabh',
    event: 'github-url'
  }
}

class UserProfile extends React.Component {

  onButtonClick = type => {
    const eventObject = URLS[type];
    window.open(eventObject.url);
    if (analytics) {
      analytics.track('Profile Button Clicked', {
        type,
        event
      })
    }
  }

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
                        src={require('assets/img/headshot.jpg')}
                      />
                      <h5 className="title">Prabhjot Singh Rai</h5>
                    </a>
                    <p className="description">
                      Principal Engineer at{' '}
                      <a href={'https://www.flyhomes.com'} target={'blank'}>
                        Flyhomes
                      </a>
                    </p>
                  </div>
                  <div className="card-description">
                    <center>
                      A full-stack engineer with in-depth knowledge of
                      front-end, back-end and devops. Passionate about AI,
                      robots, entrepreneurship and development.
                    </center>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      onClick={() => {
                        this.onButtonClick('facebook')
                      }}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      onClick={() => this.onButtonClick('twitter')}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="google"
                      onClick={() => this.onButtonClick('linkedin')}
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="google"
                      onClick={() => this.onButtonClick('github')}
                    >
                      <i className="fab fa-github" />
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
