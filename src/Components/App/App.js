import { Col, Container, Row } from 'reactstrap';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import './App.css';
import FormComponent from './SubComponents/FormComponent';
import ImageComponent from './SubComponents/ImageComponent';
import TextComponent from './SubComponents/TextComponent';

function App() {
  return (
    <div>
      {/* App */}
      <Header />
      <div className="px-5 main">
        <Container fluid>
          <Row>
            <Col md="6">
              <TextComponent />
              <FormComponent />
            </Col>
            <Col md="6">
              <ImageComponent />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />

    </div>
  );
}

export default App;
