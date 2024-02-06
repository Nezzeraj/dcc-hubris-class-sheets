/**
 * DCC Druid character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Druid
 * @extends {DCCActorSheet}
 */
class ActorSheetDruid extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-class-sheets/templates/actor-sheet-druid.html'
    if (data.system.details.sheetClass !== 'Druid') {
      this.actor.update({
        'data.class.className': game.i18n.localize('Druid.Druid')
      })
    }

    if (data.system.details.sheetClass !== 'Druid') {
      this.actor.update({
        'data.config.attackBonusMode': 'flat',
      })
    }

    return data
  }
}

export {
  ActorSheetDruid
}
