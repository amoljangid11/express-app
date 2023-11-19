const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Make sure to provide the correct path to your Express app file
const expect = chai.expect;

chai.use(chaiHttp);

describe('Express App', () => {
  // Test middleware
  it('should execute middleware', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });

  // Test / route
  it('should return "Hello, World!" for / route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });

  // Test /api/data route
  it('should return JSON data for /api/data route', (done) => {
    chai.request(app)
      .get('/api/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('API data response');
        done();
      });
  });
});
