import React from 'react';
import capitalize from 'lodash/capitalize';

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
  },
  resume: {
    url: 'https://www.prabhjotrai.com/Resume_Rai_Prabhjot_Singh.pdf',
    event: 'resume-url'
  },
  'stack-overflow': {
    url: 'https://stackoverflow.com/users/5159284/psr',
    event: 'stack-overflow-url'
  },
  instagram: {
    url: 'https://www.instagram.com/raiprabh',
    event: 'instagram-url'
  }
};

class UserProfile extends React.Component {
  onButtonClick = type => {
    const eventObject = URLS[type];
    window.open(eventObject.url);
    if (window.analytics) {
      window.analytics.track(`${capitalize(type)} Clicked`, {
        type,
        event: eventObject.event
      });
    }
  };

  componentDidMount() {
    if (window.analytics) {
      window.analytics.page('Home');
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Row className="no-margin-no-padding">
            <Col md="12" className="no-margin-no-padding full-vertical-height overflow-hidden">
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
                      <h1 className="title">Prabhjot Singh Rai</h1>
                    </a>
                    <p className="description">
                      CS Grad Student at University of Minnesota
                    </p>
                    <p className="description">
                      Experienced in Fintech and Real Estate Industries
                    </p>
                  </div>
                  <div className="card-description">
                    <center>
                      A full-stack engineer with in-depth knowledge of
                      front-end, back-end and devops. Passionate about AI,
                      robotics, entrepreneurship and development.
                    </center>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
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
                    <Button
                      className="btn-icon btn-round"
                      color="google"
                      onClick={() => this.onButtonClick('stack-overflow')}
                    >
                      <i className="fab fa-stack-overflow" />
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      onClick={() => {
                        this.onButtonClick('facebook');
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
                      color="twitter"
                      onClick={() => this.onButtonClick('instagram')}
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button
                      color="google"
                      onClick={() => this.onButtonClick('resume')}
                    >
                      Resume
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
