/**
 * DCC Alchemist character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Alchemist
 * @extends {DCCActorSheet}
 */
class ActorSheetAlchemist extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  /**  getData () {
    #const data = super.getData()*/
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-classes/templates/actor-sheet-alchemist.html'
    data.system.class.className = game.i18n.localize('Alchemist.Alchemist')
    if (data.system.details.sheetClass !== 'Alchemist') {
      this.actor.update({
        'data.class.className': game.i18n.localize('Alchemist.Alchemist')
      })
    }

    // Add in Alchemist specific data if missing
    if (!data.system.skills.alchemicalTinkeringDie) {
      this.actor.update({
        'data.system.skills.alchemicalTinkeringDie': {
          label: 'Alchemist.alchemicalTinkeringDie',
          die: '1d20'
        }
      })
    }

    if (data.system.details.sheetClass !== 'Alchemist') {
      this.actor.update({
        'data.config.attackBonusMode': 'flat',
      })
    }

    return data
  }
}

export {
  ActorSheetAlchemist
}
