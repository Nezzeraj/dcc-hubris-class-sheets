/**
 * DCC Half Demon character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Half Demon
 * @extends {DCCActorSheet}
 */
class ActorSheetHalfDemon extends DCCActorSheet {

  /** @override */
  static get defaultOptions() {
    let options = super.defaultOptions
    options.classes.push('dcc-hubris')
    return options
  }

  /** @override */
  async getData(options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-hubris-classes/templates/actor-sheet-halfdemon.html'
    if (data.system.details.sheetClass !== 'Half Demon') {
      this.actor.update({
        'data.system.class.className': game.i18n.localize('halfdemon.HalfDemon')
      })
    }

    if (data.system.details.sheetClass !== 'Half Demon') {
      this.actor.update({
        'data.details.sheetClass': 'Half Demon',
        'data.class.spellCheckAbility': 'int',
        'data.details.critRange': 20
      })
    }

    if (data.system.skills.patron) {
      this.actor.update({
        'system.class.patron': {
          label: 'HalfDemon.Patron',
        }
      })
    }

    if (data.system.details.sheetClass !== 'Half Demon') {
      this.actor.update({
        'data.config.attackBonusMode': 'flat',
      })
    }

    return data
  }
}

export {
  ActorSheetHalfDemon
}
