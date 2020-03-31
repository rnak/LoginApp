import { createStore , applyMiddleware } from 'redux'
import reducers from '../reducers'
import createSagaMiddleware from 'redux-saga'
import Sagas from '../sagas'

const ConfigureStore		=	() => {
	
	const sagaMiddleware 	=	createSagaMiddleware();
	const middleware 		= [ sagaMiddleware ]
	let store = createStore( reducers, applyMiddleware( ...middleware ) );
    const autoRestartSaga = function(middleWare){
		middleWare.done.catch(function(err){
		console.log('Error occured during saga operation :: ' , err);
		autoRestartSaga(sagaMiddleware.run( Sagas ));
	});
	}
	autoRestartSaga( sagaMiddleware.run( Sagas ) );
	return store;
}
export default ConfigureStore;