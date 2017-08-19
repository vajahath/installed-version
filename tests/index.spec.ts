/* tslint:disable: no-unused-expression arrow-parens */

import * as chai from 'chai';
import version = require('../src/index');

const expect = chai.expect;

describe('Testing installed version', () => {
	it('returns current version of this package', done => {
		const v = version();
		expect(v).not.to.be.undefined;
		expect(v).to.equal('1.0.0');
		done();
	});
});
