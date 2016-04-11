var expect = require('chai').expect;
var app = require('./app.js');

describe('Converter romanos para dacimais', function() {
  it('recebe I e retora 1', function () {
    expect(app.converte('I')).to.equal(1);
  });

  it('recebe II e retorna 2', function () {
    expect(app.converte('II')).to.equal(2);
  });

  it('recebe III e retora 3', function () {
    expect(app.converte('III')).to.equal(3);
  });
  it('recebe IV e retora 4', function () {
    expect(app.converte('IV')).to.equal(4);
  });

  it('recebe V e retora 5', function () {
    expect(app.converte('V')).to.equal(5);
  });

  it('recebe VI e retora 6', function () {
    expect(app.converte('VI')).to.equal(6);
  });

  it('recebe VII e retora 7', function () {
    expect(app.converte('VII')).to.equal(7);
  });
  it('recebe VIII e retora 8', function () {
    expect(app.converte('VIII')).to.equal(8);
  });
  it('recebe IX e retora 9', function () {
    expect(app.converte('IX')).to.equal(9);
  });

  it('recebe XIX e retora 19', function () {
    expect(app.converte('XIX')).to.equal(19);
  });

  it('recebe XXIX e retora 29', function () {
    expect(app.converte('XXIX')).to.equal(29);
  });
  it('recebe L e retorna 50', function () {
    expect(app.converte('L')).to.equal(50);
  });
  it('recebe LXXXVIII e retorna 88', function () {
    expect(app.converte('LXXXVIII')).to.equal(88);
  });
  it('recebe LXXXIX e retorna 89', function () {
    expect(app.converte('LXXXIX')).to.equal(89);
  });

  it('recebe C e retorna 100', function () {
    expect(app.converte('C')).to.equal(100);
  });

  it('recebe D e retorna 500', function () {
    expect(app.converte('D')).to.equal(500);
  });

  it('recebe M e retorna 1000', function () {
    expect(app.converte('M')).to.equal(1000);
  });

});
