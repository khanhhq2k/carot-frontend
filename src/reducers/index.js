import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

import AreasReducer from './reducer_areas';

const rootReducer = combineReducers({
  areas: AreasReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
