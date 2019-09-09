import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from '~/store/modules/rootReducer';
import rootSaga from '~/store/modules/rootSaga';

const sagaMonitor =
	process.env.NODE_ENV === 'development'
		? console.tron.createSagaMonitor()
		: null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(rootReducer, [sagaMiddleware]);

sagaMiddleware.run(rootSaga);

export default store;
