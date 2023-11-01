//=============================================================================
// DispWeaponOnlyOnce.js
//=============================================================================
/*:
 * @plugindesc Don't display weapon name on equip slot
 * @author Sasuke KANNAZUKI
 *
 * @help
 * This plugin does not provide plugin commands.
 *
 * [Summary]
 * On dual wield actor's slot, display 'Weapon' 2 times.
 * This plugin omits second weapon slot's name
 * if the actor is dual wield.
 *
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc 二刀流の際、装備スロットの２つ目の「武器」の文字を省略します。
 * @author 神無月サスケ
 *
 * @help
 * このプラグインには、プラグインコマンドはありません。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(function () {

  var _Window_EquipSlot_slotName = Window_EquipSlot.prototype.slotName;
  Window_EquipSlot.prototype.slotName = function (index) {
    if (index === 1 && this._actor.isDualWield()) {
      return '';
    }
    return _Window_EquipSlot_slotName.call(this, index);
  };

})();
