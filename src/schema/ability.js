import { gql } from 'apollo-server-express';

const schema = gql`
    extend type Query {
        abilities: [Ability]
    }

    type Ability {
        id: Int
        name: String
        displayName: String
        uri: String
        type: Int
        behavior: Int
        unitTargetType: Int
        unitTargetTeam: Int
        unitTargetFlags: Int
        unitDamageType: Int
        spellImmunity: Int
        isOnCastbar: Boolean
        isOnLearnbar: Boolean
        fightRecapLevel: Int
        isGrantedByScepter: Boolean
        hasScepterUpgrade: Boolean
        maxLevel: Int
        levelsBetweenUpgrade: Int
        requiredLevel: Int
        hotKeyOverride: String
        displayAdditionalHeroes: Boolean
        castRange: [Int]
        castRangeBuffer: [Int]
        castPoint: [Float]
        channelTime: [Float]
        cooldown: [Int]
        damage: [Int]
        manaCost: [Int]
        modifierSupportValue: String
        modifierSupportBonus: String
        description: [String]
        attributes: [String]
        lore: String
        notes: [String]
        isTalent: Boolean
        isUltimate: Boolean
        shouldDrawHeroPage: Boolean
    }    
`;

export default schema;