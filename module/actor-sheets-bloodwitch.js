/*
 * DCC Blood Witch character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Blood Witch
 * @extends {DCCActorSheet}
 */
class ActorSheetBloodWitch extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-class-sheets/templates/actor-sheet-bloodwitch.html'
    if (data.system.details.sheetClass !== 'BloodWitch') {
      this.actor.update({
        'data.system.class.className': game.i18n.localize('BloodWitch.BloodWitch')
      })
    }
    if (data.system.details.sheetClass !== 'BloodWitch') {
      this.actor.update({
        'data.details.sheetClass': 'Blood Witch',
        'data.class.spellCheckAbility': 'sta',
        'data.details.critRange': 20
      })
    }

    if (data.system.details.sheetClass !== 'BloodWitch') {
      this.actor.update({
        'data.config.attackBonusMode': 'flat',
      })
    }

    return data
  }
}

export {
  ActorSheetBloodWitch
}
