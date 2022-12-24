const config = require('../config.json');
const client = require("..");

client.on('guildMemberUpdate', async (oldMember, newMember) => {
    

const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id))
const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
const NewUserrole = (`${addedRoles.map(r => r.id)}`)
const removUserrole = (`${removedRoles.map(r => r.name)}`)
var BirthMonth =[config.FarvardinRole, config.OrdibeheshtRole, config.KhordadRole, config.TirRole, config.MordadRole, config.ShahrivarRole, config.MehrRole, config.AbanRole, config.AzarRole, config.DeyRole, config.BahmanRole, config.EsfandRole]
var Colorroles = [config.RedRole, config.BlueRole, config.YellowRole, config.GreenRole, config.OrangeRole]
var AgeRole = [config.fifteenRole, config.eighteenRole, config.twentyRole, config.thirtyRole, config.fortyRole]
var biorole =  [config.FarvardinRole, config.OrdibeheshtRole, config.KhordadRole, config.TirRole, config.MordadRole, config.ShahrivarRole, config.MehrRole, config.AbanRole, config.AzarRole, config.DeyRole, config.BahmanRole, config.EsfandRole,config.fifteenRole, config.eighteenRole, config.twentyRole, config.thirtyRole, config.fortyRole,config.RedRole, config.BlueRole, config.YellowRole, config.GreenRole, config.OrangeRole]
var mentionrole = [config.AnnouncementRole, config.UpdateRole, config.EventRole]

//Color Role
const foundColorrole = Colorroles.find(element => element === `${NewUserrole}`);
    if (newMember.roles.cache.has(foundColorrole)) {

        let OtherColorRoles = Colorroles.filter(function (val) {

            return val !== (`${addedRoles.map(r => r.id)}`)
        })
        for (const delcolorroles of OtherColorRoles) {

            if (newMember.roles.cache.hasAny(...OtherColorRoles)) {

                return newMember.roles.remove(OtherColorRoles)

            }
        }
    }

    //Age Role

    const foundAgerole = AgeRole.find(element => element === `${NewUserrole}`);
    if (newMember.roles.cache.has(foundAgerole)) {

        let OtherAgeRoles = AgeRole.filter(function (val) {

            return val !== (`${addedRoles.map(r => r.id)}`)
        })
        for (const delageroles of OtherAgeRoles) {

            if (newMember.roles.cache.hasAny(...OtherAgeRoles)) {

                return newMember.roles.remove(OtherAgeRoles)

            }
        }
    }

    //Birth Month Roles

    const foundBirthrole = BirthMonth.find(element => element === `${NewUserrole}`);
    if (newMember.roles.cache.has(foundBirthrole)) {

        let OtherBirthRoles = BirthMonth.filter(function (val) {

            return val !== (`${addedRoles.map(r => r.id)}`)
        })
        for (const delbirthroles of OtherBirthRoles) {

            if (newMember.roles.cache.hasAny(...OtherBirthRoles)) {

                return newMember.roles.remove(OtherBirthRoles)

            }
        }
    }

    //bio role

    const founBiorole = biorole.find(element => element === `${removUserrole}`);

    if (!newMember.roles.cache.hasAny(founBiorole)) {
      
        if (!newMember.roles.cache.hasAny(...biorole)) {

        newMember.roles.remove(config.BioRole)
        }
    }

    //mention role

    const foudMentiorole = mentionrole.find(element => element === `${removUserrole}`);

    if (!newMember.roles.cache.hasAny(foudMentiorole)) {
      
        if (!newMember.roles.cache.hasAny(...mentionrole)) {

        newMember.roles.remove(config.MentionRole)
        }
    } 
})