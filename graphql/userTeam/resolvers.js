const Recipe = require('../../models/userTeamDev/userTeam');

module.exports = {
    Query: {
        async userTeam(_, {
            ID
        }) {
            return await Recipe.findById(ID)
        },
        async getUsersTeamDev(_, {
            amount
        }) {
            return await Recipe.find().sort({
                createdAt: -1
            }).limit(amount)
        }
    },
    Mutation: {
        async createUserTeamDev(_, {
            userTeamDevInput: {
                name,
                description,
                charge
            }
        }) {
            const createdUserTeam = new Recipe({
                name: name,
                description: description,
                charge: charge,
                createdAt: new Date().toISOString(),
            });

            const res = await createdUserTeam.save();

            return {
                id: res.id,
                ...res._doc
            }

        },
        async deleteUserTeamDev(_, {
            ID
        }) {
            const wasDeleted = (await Recipe.deleteOne({
                _id: ID
            })).deletedCount;

            return wasDeleted;
        },

        async editUserTeamDev(_, {
            ID,
            userTeamDevInput: {
                name,
                description,
                charge
            }
        }) {
            const wasEdited = (await Recipe.updateOne({
                _id: ID
            }, {
                name: name,
                description: description,
                charge: charge
            })).modifiedCount;
            return wasEdited
        }

    }
};