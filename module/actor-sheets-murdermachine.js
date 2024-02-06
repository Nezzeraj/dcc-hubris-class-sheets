/**
 * DCC Murder Machine character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Murder Machine
 * @extends {DCCActorSheet}
 */
class ActorSheetMurderMachine extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-class-sheets/templates/actor-sheet-murdermachine.html'
    if (data.system.details.sheetClass !== 'Murder Machine') {
      this.actor.update({
        'data.class.className': game.i18n.localize('murdermachine.MurderMachine')
      })
    }


    // Add in Murder Machine specific data if missing
    if (data.system.details.sheetClass !== 'MurderMachine') {
      this.actor.update({
        'data.config.attackBonusMode': 'manual',
      })
    }


    return data
  }
}

export {
  ActorSheetMurderMachine
}
