import { createStore,applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import thunk from 'redux-thunk';

// Um modo de passar o objeto de despacho
export const Store = createStore(Reducers,applyMiddleware(thunk));

// Outro modo de passar o objeto de despachho
// export const Store = applyMiddleware(thunk)(createStore)(Reducers);