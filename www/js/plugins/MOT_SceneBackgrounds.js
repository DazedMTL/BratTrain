//=============================================================================
// MOT_SceneBackgrounds.js
//=============================================================================
// MOTplugin - シーン背景の個別設定
// 作者: 翠 (http://midori.wp.xdomain.jp/)
// Version: 1.1
// 最終更新日: 2016/02/16
//=============================================================================
//■更新履歴
/*
  2016/02/01 - 公開
  2016/02/16 - 説明文等を更新
  
*/
//=============================================================================
/*■利用規約
 *-クレジットの表記
 *  クレジットの表記は基本的に不要です。
 *  表記する場合はホームページを参照してください。
 *  営利目的での使用する場合は表記してください。
 *
 *  表記例
 *  スクリプト素材 翠 (http://midori.wp.xdomain.jp/)
 *  または
 *  スクリプト素材 HM Project (http://midori.wp.xdomain.jp/)
 *
 *-スクリプトの改変/配布
 *  スクリプトの改変はご自由に行ってください。
 *  改変を行って発生したバグ等には対処しません。
 *
 *-スクリプトの再配布
 *  そのままの再配布は禁止とさせていただきます。
 *  改造した物を配布する場合、オリジナルのクレジットを残してもらえれば
 *  配布することを可能とします。
 *  ※改造の有無に関わらず素材を有料で配布する場合は禁止とさせていただきます。
 *  ※ゲームに含まれる場合のみ再配布可能とします。
 *
 *-使用可能なゲームのジャンル
 *  エログロなんでも使用可能です。
 *
*/
//=============================================================================
/*:
 * @plugindesc シーン毎に背景の指定を可能にします。
 * @author 翠
 * @help
 * ■利用規約
 * 本プラグインの中に記述してある物、または配布サイト
 * の利用規約をご確認ください。
 * 
 * ■プラグイン概要
 * デフォルトのシーン背景を個別で指定可能にします
 * 
 * ■使用方法
 * 各項目に使用する画像名を拡張子抜きで記述して、その画像を
 * img/systemフォルダに入れてください。
 * 背景を使用しない場合は空文字を指定してください。
 * 背景が未設定の場合一括指定で指定した背景を読み込みます。
 * 一括指定を設定していない場合は、デフォルトと同じ挙動になります。
 *
 *
 * @param 背景一括指定
 * @desc 以下のシーン全ての背景を設定します。
 * @default
 *
 * @param ショップ画面
 * @desc
 * @default
 *
 * @param 名前入力画面
 * @desc
 * @default
 *
 * @param セーブ画面
 * @desc
 * @default
 *
 * @param ロード画面
 * @desc
 * @default
 *
 * @param メニュー画面
 * @desc
 * @default
 *
 * @param アイテム画面
 * @desc
 * @default
 *
 * @param スキル画面
 * @desc
 * @default
 *
 * @param 装備画面
 * @desc
 * @default
 *
 * @param ステータス画面
 * @desc
 * @default
 *
 * @param オプション画面
 * @desc
 * @default
 *
 * @param ゲーム終了画面
 * @desc
 * @default
 */
//=============================================================================
var Imported = Imported || {};
Imported.MOT_SceneBackGrounds = true;
//=============================================================================
var MOT = MOT || {};
MOT.SceneBacks = MOT.SceneBacks || {};
//=============================================================================
MOT.Parameters = PluginManager.parameters('MOT_SceneBackgrounds');
MOT.Param = MOT.Param || {};
//=============================================================================
MOT.Param.BackGroundsAll = String(MOT.Parameters['背景一括指定']);
MOT.Param.BackGroundMenu = String(MOT.Parameters['メニュー画面']);
MOT.Param.BackGroundItem = String(MOT.Parameters['アイテム画面']);
MOT.Param.BackGroundSkill = String(MOT.Parameters['スキル画面']);
MOT.Param.BackGroundEquip = String(MOT.Parameters['装備画面']);
MOT.Param.BackGroundStatus = String(MOT.Parameters['ステータス画面']);
MOT.Param.BackGroundOptions = String(MOT.Parameters['オプション画面']);
MOT.Param.BackGroundSave = String(MOT.Parameters['セーブ画面']);
MOT.Param.BackGroundLoad = String(MOT.Parameters['ロード画面']);
MOT.Param.BackGroundGameEnd = String(MOT.Parameters['ゲーム終了画面']);
MOT.Param.BackGroundShop = String(MOT.Parameters['ショップ画面']);
MOT.Param.BackGroundName = String(MOT.Parameters['名前入力画面']);
//=============================================================================
//=============================================================================
// Scene_xxx
//=============================================================================
Scene_MenuBase.prototype.checkBackgrounds = function (file) {
    if (file === '') file = MOT.Param.BackGroundsAll;
    return (file !== '') ? ImageManager.loadSystem(file) : SceneManager.backgroundBitmap();
};
MOT.SceneBacks.Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function () {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundsAll);
    this.addChild(this._backgroundSprite);
};
Scene_Menu.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundMenu);
};
Scene_Item.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundItem);
};
Scene_Skill.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundSkill);
};
Scene_Equip.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundEquip);
};
Scene_Status.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundStatus);
};
Scene_Options.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundOptions);
};
Scene_Save.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundSave);
};
Scene_Load.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundLoad);
};
Scene_GameEnd.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundGameEnd);
};
Scene_Shop.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundShop);
};
Scene_Name.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._backgroundSprite.bitmap = this.checkBackgrounds(MOT.Param.BackGroundName);
};
