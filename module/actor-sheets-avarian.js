/**
 * DCC Avarian character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'
import { hubris } from '/modules/dcc-hubris-classes/helpers/config.mjs'

Hooks.once('init', () => {
  CONFIG.hubris = hubris;
});

/**
 * Extend the zero-level/NPC sheet for Avarian
 * @extends {DCCActorSheet}
 */
class ActorSheetAvarian extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-classes/templates/actor-sheet-avarian.html'
    if (data.system.details.sheetClass !== 'Avarian') {
      this.actor.update({
        "data.class.className": game.i18n.localize('Avarian.Avarian')
      })
    }

    if (data.system.details.sheetClass !== 'Avarian') {
      this.actor.update({
        'data.config.attackBonusMode': 'flat',
      })
    }

    if (this.actor.system.avarianPaths) {
      data.trickster = (this.actor.system.avarianPaths === "trickster")
      data.scoundrel = (this.actor.system.avarianPaths === "scoundrel")
    }

    data.avarianPaths = CONFIG.hubris.avarianPaths;

    return data
  }

}




export {
  ActorSheetAvarian
}
