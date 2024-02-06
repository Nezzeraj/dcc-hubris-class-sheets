/**
 * DCC Ekrask character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Ekrask
 * @extends {DCCActorSheet}
 */
class ActorSheetEkrask extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-class-sheets/templates/actor-sheet-ekrask.html'
    if (data.system.details.sheetClass !== 'Ekrask') {
      this.actor.update({
        'data.class.className': game.i18n.localize('Ekrask.Ekrask')
      })
    }
    if (data.system.details.sheetClass !== 'Ekrask') {
      this.actor.update({
        'data.config.attackBonusMode': 'manual',
      })
    }

    if (data.system.details.sheetClass !== 'Alchemist') {
      this.actor.update({
        'data.config.attackBonusMode': 'manual',
      })
    }

    return data
  }
}

export {
  ActorSheetEkrask
}
