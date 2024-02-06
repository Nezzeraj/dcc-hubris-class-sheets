/**
 * DCC Mutant character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Mutant
 * @extends {DCCActorSheet}
 */
class ActorSheetMutant extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-classes/templates/actor-sheet-mutant.html'
    if (data.system.details.sheetClass !== 'Mutant') {
      this.actor.update({
        'data.class.className': game.i18n.localize('mutant.Mutant')
      })
    }

    if (data.system.details.sheetClass !== 'Mutant') {
      this.actor.update({
        'data.config.attackBonusMode': 'flat',
      })
    }

    return data
  }
}

export {
  ActorSheetMutant
}
