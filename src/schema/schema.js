import { gql } from 'apollo-server-express';

const schema = gql`
    type Query {
        heroes: [Hero]
    }

    type Hero {
        id: Int!
        name: String!
        displayName: String!
        uri: String!
        abilities: [Ability]
        roles: [Role]
        talents: [Talent]
        enabled: Boolean
        heroUnlockOrder: Int
        team: Int
        cmEnabled: Boolean
        newPlayerEnabled: Boolean
        attackType: AttackType
        startingArmor: Int
        tartingMagicArmor: Int
        startingDamageMin: Int
        startingDamageMax: Int
        attackRate: Float
        attackAnimationPoint: Float
        attackAcquisitionRange: Int
        attackRange: Int
        primaryAttribute: String
        heroPrimaryAttribute: Int
        strengthBase: Int
        strengthGain: Float
        intelligenceBase: Int
        intelligenceGain: Float
        agilityBase: Int
        agilityGain: Float
        hpRegen: Float
        mpRegen: Float
        moveSpeed: Int
        moveTurnRate: Float
        hpBarOffset: Int
        visionDaytimeRange: Int
        visionNighttimeRange: Int
        complexity: Int
        bio: String
        hype: String
        aliases: [String]
    }

    type Ability {
        abilityId: Int
        slot: Int
    }

    type Role {
        roleId: Int
        level: Int
    }

    type Talent {
        abilityId: Int
        slot: Int
    } 

    enum AttackType {
        Melee
        Ranged
    }
`;

export default schema;