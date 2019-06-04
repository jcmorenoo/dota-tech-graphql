import HeroDefs from './hero';
import AbilityDefs from './ability';
import { gql } from 'apollo-server-express';

const typeDef = gql `
    type Query
`;

const schema = [
    typeDef,
    HeroDefs,
    AbilityDefs
]

export default schema;