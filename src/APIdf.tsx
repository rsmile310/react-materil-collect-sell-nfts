import axios from 'axios';

const REGION = 'data';
const URL_PREFIX = `https://${REGION}.mongodb-api.com/app`;
const URL_SUFFIX = 'endpoint/data/beta/action';
const apID = process.env.REACT_APP_REALM_APP_ID;
const aFind = 'findOne';
const aDelete = 'deleteOne';
const aInsert = 'insertOne';
const aUpdate = 'updateOne';


export default axios.create({
  baseURL: `${URL_PREFIX}/${apID}/${URL_SUFFIX}/`
});
