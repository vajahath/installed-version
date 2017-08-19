import * as rootPath from 'app-root-path';

interface InterfacePackage {
	version: string;
}

export = () => {
	let p: InterfacePackage;

	try {
		p = rootPath.require('package.json');
	} catch (err) {
		throw new Error(err);
	}

	return p.version;
};
