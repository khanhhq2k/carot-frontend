import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post'
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const FETCH_AREAS = 'fetch_areas';
export const CREATE_AREA = 'create_area';
export const DELETE_AREA = 'delete_area';
export const EDIT_AREA = 'edit_area';
export const UPDATE_AREA = 'update_area';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=khanhqkey123';

const CAROT_URL = 'https://carotvn.ga/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=> callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}

export function fetchAreas(){
  const request = axios.get(`${CAROT_URL}/area/?cm=getlist`);
  return {
    type: FETCH_AREAS,
    payload: request
  };
}

export function createArea(values, callback) {
  const request = axios.post(`${CAROT_URL}/area/?cm=add`, values)
    .then(() => callback());
  return {
    type: CREATE_AREA,
    payload: request
  }
}

export function deleteArea(values){
  const request = axios.post(`${CAROT_URL}/area/?cm=delete`, values);
  return {
    type: DELETE_AREA,
    payload: values.id // return id of deleted area
  }
}

export function editArea(values){
  return {
    type: EDIT_AREA,
    payload: values // return area object but currently we can just take whole state
  }
}

export function updateArea(values){
  return {
    type: UPDATE_AREA,
    payload: values // pass area object to reducer to update it
  }
}
