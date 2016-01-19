var expect = require('chai').expect;
var aboutme = require('./aboutme.js');

describe('Student Object', function() {

    it('The object should exist', function () {
        expect(aboutme).to.exist;
    });

    it('should have a name property', function () {
        expect(aboutme.student).to.have.property('name');
    });

    it('should have a gender property', function () {
        expect(aboutme.student).to.have.property('gender');
    });

    it('should have a age property', function () {
        expect(aboutme.student).to.have.property('age');
    });

    it('should have a bio property', function () {
        expect(aboutme.student).to.have.property('bio');
    });

    it('The bio should be desicriptive', function () {
        expect(aboutme.student.bio).to.have.length.above(140);
    });

});
