// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Member } = initSchema(schema);

export {
  Member
};