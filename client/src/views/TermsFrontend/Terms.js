import React, { Component } from 'react';
import { CardBody, Col, Container, Row, Card, Input, CardFooter, Button } from 'reactstrap';

class Terms extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <Card >
                <CardBody>
                  <Row className="mb-3 ku-border">
                    <Col>
                      <h3>ข้อกำหนดและเงื่อนไข</h3>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="10" className="mr-auto ml-auto" style={{ maxHeight: "60vh", overflowX: "auto" }}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at luctus nibh. Proin porta, dui eu lacinia feugiat, nibh neque aliquet mi, a vulputate est nulla at nibh. Phasellus quis ipsum consectetur, viverra massa in, feugiat arcu. Suspendisse potenti. Aliquam mattis quam ut lacus vehicula, in hendrerit nunc semper. Nam ultrices nisi sit amet ipsum egestas, id vulputate enim lobortis. Aenean nec tellus ac orci porttitor semper. Aliquam et turpis non nisi consequat rhoncus accumsan ac orci. Donec quis imperdiet quam. Phasellus in sodales sapien. Pellentesque ac lorem placerat, commodo magna in, dictum nulla. Nunc sed cursus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in sem eu elit dignissim facilisis.
                      </p>
                      <p>
                        In hac habitasse platea dictumst. Donec aliquam magna ligula, at tristique enim efficitur eget. Sed imperdiet ex mauris, eget dictum ligula suscipit sit amet. Sed id orci nec ipsum sagittis rutrum vel non turpis. Aliquam scelerisque risus vitae elementum placerat. Integer bibendum imperdiet velit, sodales imperdiet quam pellentesque vitae. Quisque quis ipsum et orci gravida fermentum. Nullam ut condimentum massa. Pellentesque vel neque sed dui vestibulum cursus. Vivamus aliquam orci eu libero hendrerit condimentum. Curabitur arcu leo, vestibulum non blandit et, malesuada at nisl. Mauris placerat, dolor nec vehicula semper, ex neque semper arcu, et facilisis massa dui sagittis purus. Mauris sed imperdiet felis. Nullam sed pulvinar arcu, id tristique risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                      </p>
                      <p>
                        Praesent sit amet dolor massa. Duis viverra dictum nunc. Duis eu finibus sapien, vel dictum turpis. Sed vel magna ac mi luctus convallis at elementum risus. Morbi eget tortor nunc. Curabitur ut massa ultrices, scelerisque lorem ac, facilisis purus. Maecenas at venenatis velit. Sed ut ex eget ante mattis dapibus. Quisque ultricies, enim vel dapibus feugiat, erat ligula dapibus urna, sed tincidunt velit tortor aliquam libero. Curabitur sed scelerisque neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus pharetra at nunc quis suscipit. Suspendisse posuere mauris a arcu cursus imperdiet. Pellentesque neque diam, blandit in tristique sollicitudin, rutrum vel lacus.
                      </p>
                      <p>
                        Pellentesque vulputate, velit sit amet placerat finibus, arcu neque auctor nisl, in iaculis sem tellus nec turpis. Integer tincidunt, justo non efficitur faucibus, ex enim posuere eros, vel ullamcorper diam risus nec turpis. Ut bibendum lectus eu est dapibus malesuada. Quisque quis ultricies erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec arcu nibh, pharetra at justo sed, mollis aliquet dui. Nunc tempus non sem nec venenatis. Pellentesque ut porttitor ipsum.
                      </p>
                      <p>
                        Quisque vel eleifend ante. Vestibulum elementum turpis nec tortor tristique bibendum. Vestibulum sollicitudin ex non tincidunt feugiat. Vestibulum placerat eros vitae sapien eleifend consequat id in mauris. Morbi sit amet velit eget libero pharetra viverra nec viverra ex. Nunc lacinia, massa posuere consequat aliquet, diam dui fermentum odio, eget scelerisque libero tortor in ex. Vivamus id arcu faucibus, maximus lorem eget, rhoncus dolor. Phasellus ultrices eu erat et suscipit. Praesent pellentesque nisi felis, et pretium ipsum luctus eu. Vivamus auctor ultricies urna, ac commodo tortor consectetur vitae. Nullam libero lorem, aliquam ut quam vitae, sodales pharetra lorem. Aliquam dictum metus leo, nec pretium tortor facilisis at. Proin ut velit maximus metus vestibulum malesuada. Mauris in neque ut ligula semper rhoncus ac id velit.
                      </p>
                    </Col>
                  </Row>
                </CardBody>
                <CardBody>
                  <Col xs="10" className="mr-auto ml-auto">
                    <Input type="checkbox" />
                    <p>ไม่แสดงอีก</p>
                  </Col>
                </CardBody>
                <CardFooter className="bg-white">
                  <Row className="align-items-center">
                    <Col md="9" className="mr-auto ml-auto mb-1 mb-xl-0">
                    </Col>
                    <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
                      <Button block color="primary" className="font-weight-bold">ยอมรับ</Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Terms;
