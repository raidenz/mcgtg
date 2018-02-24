import React from 'react';
import { countGalaxyCredit } from './converter';

describe('Test Converter', () => {  
  it('pish tegj glob glob is 42', () => {
    const data = countGalaxyCredit({ galaxyNumber: 'pish tegj glob glob', creditType: '' })
    expect(data).to.equal(42);
  });
  it('glob prok Silver is 68 Credits', () => {
    const data = countGalaxyCredit({ galaxyNumber: 'glob prok', creditType: 'silver' })
    expect(data).to.equal(68);
  });
  it('glob prok Gold is 57800 Credits', () => {
    const data = countGalaxyCredit({ galaxyNumber: 'glob prok', creditType: 'gold' })
    expect(data).to.equal(57800);
  });
  it('glob prok Iron is 782 Credits', () => {
    const data = countGalaxyCredit({ galaxyNumber: 'glob prok', creditType: 'iron' })
    expect(data).to.equal(782);
  });
  it('I have no idea what you are talking about', () => {
    const data = countGalaxyCredit({ galaxyNumber: 'wood could a woodchuck chuck if a woodchuck could chuck wood', creditType: '' })
    expect(data).to.equal('I have no idea what you are talking about');
  });
})