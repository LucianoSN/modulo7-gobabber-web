import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
	const tron = Reactotron.configure({
		host: '192.168.56.1',
		port: 9090,
	}).connect();

	tron.clear();

	console.tron = tron;
}
