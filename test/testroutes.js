const request = require('supertest');
const server = require('../index.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
describe('list movies', () => {
  const agent = request.agent(server);

//var server = require('h:/student/src/routes/user.js');
it('should return JSON', function(done) {
  chai.request(server)
    .get('/movies/getmovies')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
describe('add movie', () => {
  const agent = request.agent(server);
it('should add movie', function(done) {
  chai.request(server)
    .post('/movies/addmovie')
    .send({name:'henrique',id:15,language:'english',release_date:'20-07-2017'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
describe('add movie', () => {
  const agent = request.agent(server);
it('should add movie', function(done) {
  chai.request(server)
    .put('/movies/updatemovie')
    .send({name:'henrique',id:15,language:'english',release_date:'20-07-2017'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
describe('add movie', () => {
  const agent = request.agent(server);
it('should add movie', function(done) {
  chai.request(server)
    .post('/movies/getmovie')
    .send({name:'henrique',id:15,language:'english',release_date:'20-07-2017'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});
