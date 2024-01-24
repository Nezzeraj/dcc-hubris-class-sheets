/**
 * DCC Shadowdancer character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Shadowdancer
 * @extends {DCCActorSheet}
 */
class ActorSheetShadowdancer extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-classes/templates/actor-sheet-shadowdancer.html'
    if (data.system.details.sheetClass !== 'Shadowdancer') {
      this.actor.update({
        'data.class.className': game.i18n.localize('shadowdancer.Shadowdancer')
      })
    }


    // Add in Shadowdancer specific data if missing

    if (data.system.details.sheetClass !== 'Shadowdancer') {
      this.actor.update({
        'data.config.attackBonusMode': 'flat',
      })
    }
    return data
  }
}

export {
  ActorSheetShadowdancer
}
