// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
    [
        { "name": "__nullPlugin1__", "status": false, "description": "▼▼▼▼初期プラグイン▼▼▼▼", "parameters": {} },
        { "name": "Community_Basic", "status": true, "description": "基本的なパラメーターを設定するプラグインです。", "parameters": { "cacheLimit": "20", "screenWidth": "816", "screenHeight": "624", "changeWindowWidthTo": "", "changeWindowHeightTo": "", "renderingMode": "auto", "alwaysDash": "off" } },
        { "name": "MadeWithMv", "status": true, "description": "メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。", "parameters": { "Show Made With MV": "false", "Made with MV Image": "MadeWithMv", "Show Custom Splash": "true", "Custom Image": "CircleLogo", "Fade Out Time": "120", "Fade In Time": "120", "Wait Time": "160" } },
        { "name": "__nullPlugin2__", "status": false, "description": "▼▼▼▼表示システム系プラグイン▼▼▼▼", "parameters": {} },
        { "name": "Lunatlazur_ActorNameWindow", "status": true, "description": "名前ウィンドウ表示プラグイン", "parameters": { "テキストカラー": "0" } },
        { "name": "MovieManager", "status": true, "description": "動画管理プラグイン", "parameters": {} },
        { "name": "TRP_SkitConfig", "status": true, "description": "TRP_Skitの設定用プラグイン。TRP_Skitより上に配置。", "parameters": { "categoryBasic": "==============================", "SkitActorSettings": "[\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"アリア\\\",\\\"fileName\\\":\\\"11_alia\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"ココ\\\",\\\"fileName\\\":\\\"12_coco\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"ミヤコ\\\",\\\"fileName\\\":\\\"13_miyako\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"ツヅミ\\\",\\\"fileName\\\":\\\"14_tsudumi\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"アイ\\\",\\\"fileName\\\":\\\"15_ai\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"コマリ\\\",\\\"fileName\\\":\\\"16_komari\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"イチル\\\",\\\"fileName\\\":\\\"17_ichiru\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"ルナ\\\",\\\"fileName\\\":\\\"18_luna\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"モブA\\\",\\\"fileName\\\":\\\"19_mobA\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"モブB\\\",\\\"fileName\\\":\\\"20_mobB\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\",\"{\\\"name\\\":\\\"\\\",\\\"inputName\\\":\\\"おっさん\\\",\\\"fileName\\\":\\\"\\\",\\\"displayOffsetY\\\":\\\"0\\\",\\\"animationOffsetX\\\":\\\"0\\\",\\\"animationOffsetY\\\":\\\"0\\\"}\"]", "firstPictureId": "11", "lastPictureId": "29", "useDefaultExpression": "true", "categoryDisplayPosition": "────────────────", "zOrder": "2", "verticalPositionType": "1", "baseOffsetY": "0", "xPosition": "[\"{\\\"name\\\":\\\"中央\\\",\\\"position\\\":\\\"5.0\\\"}\",\"{\\\"name\\\":\\\"center\\\",\\\"position\\\":\\\"5.0\\\"}\",\"{\\\"name\\\":\\\"左\\\",\\\"position\\\":\\\"2.0\\\"}\",\"{\\\"name\\\":\\\"left\\\",\\\"position\\\":\\\"2.0\\\"}\",\"{\\\"name\\\":\\\"右\\\",\\\"position\\\":\\\"8.0\\\"}\",\"{\\\"name\\\":\\\"right\\\",\\\"position\\\":\\\"8.0\\\"}\"]", "noReverse": "false", "noAnimationMirror": "", "useRightDirection": "false", "bustsScale": "100", "border": "================================", "macro": "[\"{\\\"name\\\":\\\"pop1\\\",\\\"macro\\\":\\\"jump shizu t 30 d 180\\\"}\",\"{\\\"name\\\":\\\"pop2\\\",\\\"macro\\\":\\\"jump shizu t 80\\\"}\",\"{\\\"name\\\":\\\"pop\\\",\\\"macro\\\":\\\"sequence shizu t d pop1 pop2\\\"}\",\"{\\\"name\\\":\\\"double1\\\",\\\"macro\\\":\\\"jump shizu t 30 1.7\\\"}\",\"{\\\"name\\\":\\\"double\\\",\\\"macro\\\":\\\"sequence shizu t d double1 double1\\\"}\",\"{\\\"name\\\":\\\"nod\\\",\\\"macro\\\":\\\"jump shizu t 25 0.9 180\\\"}\",\"{\\\"name\\\":\\\"stamp1\\\",\\\"macro\\\":\\\"jump shizu t 5 0.3\\\"}\",\"{\\\"name\\\":\\\"stamp\\\",\\\"macro\\\":\\\"sequence shizu t t stamp1 stamp1 stamp1 stamp1 stamp1 stamp1\\\"}\",\"{\\\"name\\\":\\\"slide\\\",\\\"macro\\\":\\\"slidef shizu t\\\"}\",\"{\\\"name\\\":\\\"slidef\\\",\\\"macro\\\":\\\"shake shizu t 10 1 15 t\\\"}\",\"{\\\"name\\\":\\\"slideb\\\",\\\"macro\\\":\\\"shake shizu t 10 1 15\\\"}\",\"{\\\"name\\\":\\\"tremble\\\",\\\"macro\\\":\\\"shake shizu t 4 10 6\\\"}\",\"{\\\"name\\\":\\\"rock\\\",\\\"macro\\\":\\\"shake shizu t 5 5 25 t\\\"}\",\"{\\\"name\\\":\\\"push\\\",\\\"macro\\\":\\\"shake shizu t 17 1 16 t\\\"}\",\"{\\\"name\\\":\\\"attack\\\",\\\"macro\\\":\\\"shake shizu t 17 1 15\\\"}\"]", "macro2": "[]", "macro3": "[]", "macro4": "[]", "macro5": "[\"{\\\"name\\\":\\\"loopstamp1\\\",\\\"macro\\\":\\\"jump shizu t 5 0.3\\\"}\",\"{\\\"name\\\":\\\"loopstamp\\\",\\\"macro\\\":\\\"loop shizu t d stamp1\\\"}\",\"{\\\"name\\\":\\\"looptremble1\\\",\\\"macro\\\":\\\"shake shizu t 4 10 2\\\"}\",\"{\\\"name\\\":\\\"looptremble\\\",\\\"macro\\\":\\\"loop shizu t d looptremble1\\\"}\",\"{\\\"name\\\":\\\"looprock1\\\",\\\"macro\\\":\\\"shake shizu t 5 4 25 t\\\"}\",\"{\\\"name\\\":\\\"looprock\\\",\\\"macro\\\":\\\"loop shizu t d looprock1\\\"}\",\"{\\\"name\\\":\\\"loopfloat1\\\",\\\"macro\\\":\\\"y shizu t 10 45\\\"}\",\"{\\\"name\\\":\\\"loopfloat2\\\",\\\"macro\\\":\\\"y shizu t -10 45\\\"}\",\"{\\\"name\\\":\\\"loopfloat\\\",\\\"macro\\\":\\\"loop shizu t d loopfloat1 loopfloat2\\\"}\"]", "mobNames": "[]", "controlCharacters": "{\"expression\":\"SE\",\"pose\":\"SP\",\"animation\":\"SA\",\"motion\":\"SM\"}", "disableWebGLTone": "false", "categoryAppearCommands": "────────────────", "defaultPositionX": "center", "pushInMargin": "2", "pushInSpeed": "5", "fadeIn": "{\"duration\":\"12\",\"wait\":\"true\",\"easeType\":\"3\",\"pushIn\":\"true\"}", "slideIn": "{\"speed\":\"4\",\"slideLength\":\"1\",\"wait\":\"true\",\"easeType\":\"3\",\"pushIn\":\"true\"}", "moveIn": "{\"speed\":\"14\",\"wait\":\"true\",\"easeType\":\"3\",\"pushIn\":\"true\"}", "categoryDisappearCommands": "────────────────", "defaultDisappear": "1", "fadeOut": "{\"duration\":\"12\",\"wait\":\"true\",\"easeType\":\"3\"}", "slideOut": "{\"speed\":\"6\",\"slideLength\":\"1\",\"wait\":\"true\",\"easeType\":\"3\"}", "moveOut": "{\"speed\":\"14\",\"wait\":\"true\",\"easeType\":\"3\"}", "categoryExpCommands": "────────────────", "expression": "{\"duration\":\"4\",\"wait\":\"false\"}", "pose": "{\"style\":\"1\",\"duration\":\"16\",\"wait\":\"false\",\"easeType\":\"0\"}", "categoryMoveCommands": "────────────────", "speed": "[\"{\\\"name\\\":\\\"verySlow\\\",\\\"speed\\\":\\\"3.0\\\"}\",\"{\\\"name\\\":\\\"slow\\\",\\\"speed\\\":\\\"6.0\\\"}\",\"{\\\"name\\\":\\\"littleSlow\\\",\\\"speed\\\":\\\"9.0\\\"}\",\"{\\\"name\\\":\\\"normal\\\",\\\"speed\\\":\\\"12.0\\\"}\",\"{\\\"name\\\":\\\"littleFast\\\",\\\"speed\\\":\\\"15.0\\\"}\",\"{\\\"name\\\":\\\"fast\\\",\\\"speed\\\":\\\"20.0\\\"}\",\"{\\\"name\\\":\\\"veryFast\\\",\\\"speed\\\":\\\"30.0\\\"}\"]", "move": "{\"speed\":\"12\",\"wait\":\"false\",\"easeType\":\"3\"}", "yMove": "{\"duration\":\"20\",\"wait\":\"false\",\"easeType\":\"3\"}", "jump": "{\"height\":\"80\",\"gravity\":\"1.5\",\"wait\":\"false\"}", "step": "{\"height\":\"20\",\"gravity\":\"0.5\",\"speed\":\"1.5\",\"wait\":\"false\",\"relative\":\"0\",\"easeType\":\"3\"}", "flip": "{\"num\":\"1\",\"durationPerCount\":\"14\",\"wait\":\"true\",\"easeType\":\"0\"}", "shake": "{\"strength\":\"8\",\"count\":\"2\",\"durationPerCount\":\"6\",\"wait\":\"false\",\"easeType\":\"3\"}", "angle": "{\"angle\":\"360\",\"duration\":\"60\",\"relative\":\"1\",\"wait\":\"false\",\"easeType\":\"3\"}", "scale": "{\"scaleX\":\"100\",\"scaleY\":\"100\",\"duration\":\"20\",\"relative\":\"0\",\"wait\":\"false\",\"easeType\":\"3\"}", "categoryEffectCommands": "────────────────", "animation": "{\"list\":\"[]\",\"focus\":\"true\",\"mirror\":\"false\",\"wait\":\"false\"}", "opacity": "{\"duration\":\"20\",\"opacity\":\"0\",\"relative\":\"0\",\"wait\":\"false\",\"easeType\":\"3\"}", "focus": "{\"duration\":\"10\",\"wait\":\"false\",\"easeType\":\"3\"}", "unFocus": "{\"duration\":\"10\",\"tone\":\"-90 -90 -90 0\",\"scale\":\"97\",\"wait\":\"false\",\"easeType\":\"3\"}", "emphasize": "{\"duration\":\"20\",\"tone\":\"0 0 0 0\",\"scaleX\":\"120\",\"scaleY\":\"120\",\"num\":\"1\",\"interval\":\"20\",\"wait\":\"true\",\"easeType\":\"3\"}", "tint": "{\"duration\":\"20\",\"tone\":\"0 0 0 0\",\"wait\":\"false\"}" } },
        { "name": "TRP_Skit", "status": true, "description": "立ち絵操作プラグイン。", "parameters": {} },
        { "name": "MessageWindowHidden", "status": true, "description": "メッセージウィンドウ一時消去プラグイン", "parameters": { "triggerButton": "[\"右クリック\",\"shift\"]", "triggerSwitch": "0", "linkPictureNumbers": "[]", "linkShowPictureNumbers": "[]", "disableLinkSwitchId": "0", "disableSwitchId": "0", "disableInBattle": "false", "disableInChoice": "true" } },
        { "name": "QueueAnimation", "status": true, "description": "SpriteやWindowにアニメーション機能を追加。", "parameters": {} },
        { "name": "MessageTextAnimation", "status": true, "description": "メッセージの文字に動きをつける演出", "parameters": {} },
        { "name": "WindowChange", "status": true, "description": "ウィンドウスキンをゲーム途中で変更できるようにします。", "parameters": { "SkinCount": "7", "SkinId": "18", "SkinChangeId": "19", "MSkinChangeId": "20", "TSkin": "0" } },
        { "name": "LL_VariableWindowMV", "status": true, "description": "変数を画面にウィンドウで表示します。", "parameters": {} },
        { "name": "MenuSubCommand", "status": true, "description": "メニュー画面のサブコマンドプラグイン", "parameters": { "サブコマンド": "", "コマンド追加位置": "0", "サブメニュー横幅": "0", "選択アクターID変数": "0", "ウィンドウスキン": "", "オプション消去": "false", "ゲーム終了消去": "false", "横並びサブメニュー": "false", "サブメニュー逐次消去": "true", "サブメニューX座標": "0", "サブメニューY座標": "0", "サブメニュー揃え": "", "メニューピクチャ別管理": "false" } },
        { "name": "LL_MenuScreenBaseMV", "status": true, "description": "メニュー画面立ち絵設定の共通ベースプラグインです。", "parameters": { "menuPictures": "[\"{\\\"actorId\\\":\\\"3\\\",\\\"stateId\\\":\\\"\\\",\\\"switchId\\\":\\\"\\\",\\\"imageName\\\":\\\"artes_normal\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\",\\\"pinchPercentage\\\":\\\"25\\\",\\\"pinchImageName\\\":\\\"\\\"}\",\"{\\\"actorId\\\":\\\"3\\\",\\\"stateId\\\":\\\"31\\\",\\\"switchId\\\":\\\"\\\",\\\"imageName\\\":\\\"aiden_normal\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\",\\\"pinchPercentage\\\":\\\"25\\\",\\\"pinchImageName\\\":\\\"\\\"}\"]", "onSpbPlugin": "", "onSpbPluginEnable": "false" } },
        { "name": "LL_MenuScreenCustomMV", "status": true, "description": "メニュー画面レイアウトをカスタマイズします。", "parameters": { "numVisibleRows": "1", "maxCols": "1", "layoutSettings": "", "actorNameLH": "9", "actorLevelLH": "10", "actorIconLH": "10", "actorClassLH": "-1", "actorGaugeLH": "11", "lvPadding": "84", "pictureSettings": "", "menuWindowPictureX": "0", "menuWindowPictureY": "0", "menuWindowPictureScale": "100", "menuHelpSettings": "", "menuHelpWindowEnable": "true", "menuHelpTexts": "[\"{\\\"symbol\\\":\\\"アイテム\\\",\\\"helpText\\\":\\\"入手したアイテムを使用します。\\\"}\",\"{\\\"symbol\\\":\\\"スキル\\\",\\\"helpText\\\":\\\"習得したスキルを使用します。\\\"}\",\"{\\\"symbol\\\":\\\"装備\\\",\\\"helpText\\\":\\\"装備を変更します。\\\"}\",\"{\\\"symbol\\\":\\\"ステータス\\\",\\\"helpText\\\":\\\"ステータスを確認します。\\\"}\",\"{\\\"symbol\\\":\\\"並び替え\\\",\\\"helpText\\\":\\\"パーティの並び順を変更します。\\\"}\",\"{\\\"symbol\\\":\\\"オプション\\\",\\\"helpText\\\":\\\"オプション画面を開きます。\\\"}\",\"{\\\"symbol\\\":\\\"セーブ\\\",\\\"helpText\\\":\\\"これまでのデータをセーブします。\\\"}\",\"{\\\"symbol\\\":\\\"ゲーム終了\\\",\\\"helpText\\\":\\\"ゲームを終了します。\\\"}\"]", "leftBlockLabel": "暴走カウンター：", "leftBlockValue": "$gameVariables.value(4)   // 変数ID:1の値", "leftBlockAlign": "left", "rightBlockLabel": "暴走値：", "rightBlockValue": "$gameVariables.value(3)   // 変数ID:1の値", "rightBlockAlign": "right" } },
        { "name": "MenuCallCommon", "status": true, "description": "Xボタンorマウスの右クリックでメニュー画面を開くかわりにコモンイベントを動作させるプラグイン", "parameters": { "ComEvent": "30", "ComCloseEvent": "31", "ComSwitch": "30" } },
        { "name": "Menu_tp", "status": true, "description": "キャンプメニューにもＴＰ表示", "parameters": {} },
        { "name": "TitleCommandPosition", "status": true, "description": "タイトルコマンドウィンドウの位置を変更します。", "parameters": { "Offset X": "275", "Offset Y": "85", "Width": "240", "Background": "0" } },
        { "name": "LL_MenuScreenStatusMV", "status": true, "description": "ステータス画面に立ち絵を表示します。", "parameters": { "pictureSettings": "", "statusWindowPictureX": "250", "statusWindowPictureY": "25", "statusWindowPictureOpacity": "255", "windowSettings": "", "showActorFace": "false", "showExpInfos": "off", "showEquipLists": "true", "showLines": "false" } },
        { "name": "Torigoya_SkillCutIn", "status": true, "description": "スキル発動前カットイン表示プラグイン (v.1.3.2)", "parameters": { "base": "", "actorConfig": "[\"{\\\"target\\\":\\\"\\\",\\\"actorId\\\":\\\"3\\\",\\\"skillId\\\":\\\"300\\\",\\\"render\\\":\\\"\\\",\\\"picture\\\":\\\"Skill_ChikubiROCK\\\",\\\"pictureX\\\":\\\"0\\\",\\\"pictureY\\\":\\\"0\\\",\\\"pictureScale\\\":\\\"1\\\",\\\"advanced\\\":\\\"\\\",\\\"backColor1\\\":\\\"\\\",\\\"backColor2\\\":\\\"\\\",\\\"backTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"128\\\\\\\"}\\\",\\\"borderTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backImage1\\\":\\\"Skill_BG1\\\",\\\"backImage2\\\":\\\"\\\",\\\"borderImage\\\":\\\"\\\",\\\"borderBlendMode\\\":\\\"\\\",\\\"sound\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"echioto_あはぁ〜んアハ\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"target\\\":\\\"\\\",\\\"actorId\\\":\\\"3\\\",\\\"skillId\\\":\\\"233\\\",\\\"render\\\":\\\"\\\",\\\"picture\\\":\\\"Skill_HipPenpen\\\",\\\"pictureX\\\":\\\"0\\\",\\\"pictureY\\\":\\\"0\\\",\\\"pictureScale\\\":\\\"1\\\",\\\"advanced\\\":\\\"\\\",\\\"backColor1\\\":\\\"\\\",\\\"backColor2\\\":\\\"\\\",\\\"backTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"128\\\\\\\"}\\\",\\\"borderTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backImage1\\\":\\\"Skill_BG1\\\",\\\"backImage2\\\":\\\"\\\",\\\"borderImage\\\":\\\"\\\",\\\"borderBlendMode\\\":\\\"\\\",\\\"sound\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"echioto_あはぁ〜んアハ\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"target\\\":\\\"\\\",\\\"actorId\\\":\\\"3\\\",\\\"skillId\\\":\\\"235\\\",\\\"render\\\":\\\"\\\",\\\"picture\\\":\\\"Skill_GSpotAtack\\\",\\\"pictureX\\\":\\\"0\\\",\\\"pictureY\\\":\\\"0\\\",\\\"pictureScale\\\":\\\"1\\\",\\\"advanced\\\":\\\"\\\",\\\"backColor1\\\":\\\"\\\",\\\"backColor2\\\":\\\"\\\",\\\"backTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"128\\\\\\\"}\\\",\\\"borderTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backImage1\\\":\\\"Skill_BG1\\\",\\\"backImage2\\\":\\\"\\\",\\\"borderImage\\\":\\\"\\\",\\\"borderBlendMode\\\":\\\"\\\",\\\"sound\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"echioto_あはぁ〜んアハ\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"target\\\":\\\"\\\",\\\"actorId\\\":\\\"3\\\",\\\"skillId\\\":\\\"237\\\",\\\"render\\\":\\\"\\\",\\\"picture\\\":\\\"Skill_TaneTsukePress\\\",\\\"pictureX\\\":\\\"0\\\",\\\"pictureY\\\":\\\"0\\\",\\\"pictureScale\\\":\\\"1\\\",\\\"advanced\\\":\\\"\\\",\\\"backColor1\\\":\\\"\\\",\\\"backColor2\\\":\\\"\\\",\\\"backTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"128\\\\\\\"}\\\",\\\"borderTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backImage1\\\":\\\"Skill_BG1\\\",\\\"backImage2\\\":\\\"\\\",\\\"borderImage\\\":\\\"\\\",\\\"borderBlendMode\\\":\\\"\\\",\\\"sound\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"echioto_あはぁ〜んアハ\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"note\\\":\\\"\\\"}\",\"{\\\"target\\\":\\\"\\\",\\\"actorId\\\":\\\"3\\\",\\\"skillId\\\":\\\"239\\\",\\\"render\\\":\\\"\\\",\\\"picture\\\":\\\"Skill_GSpotAtack\\\",\\\"pictureX\\\":\\\"0\\\",\\\"pictureY\\\":\\\"0\\\",\\\"pictureScale\\\":\\\"1\\\",\\\"advanced\\\":\\\"\\\",\\\"backColor1\\\":\\\"\\\",\\\"backColor2\\\":\\\"\\\",\\\"backTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"-128\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"128\\\\\\\"}\\\",\\\"borderTone\\\":\\\"{\\\\\\\"isUse\\\\\\\": false, \\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backImage1\\\":\\\"Skill_BG1\\\",\\\"backImage2\\\":\\\"\\\",\\\"borderImage\\\":\\\"\\\",\\\"borderBlendMode\\\":\\\"\\\",\\\"sound\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"echioto_あはぁ〜んアハ\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"note\\\":\\\"\\\"}\"]", "enemyConfig": "[]", "common": "", "commonBackImage1": "CutIn_back1", "commonBackImage2": "CutIn_back2", "commonBorderImage": "CutIn_border", "commonBorderBlendMode": "add", "commonBorderSpeed": "30", "commonSound": "{\"name\":\"Skill2\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}", "cutInLayer": "foreground", "cutInOpenAndCloseTime": "50", "cutInStopTime": "20", "commonActor": "", "actorBackColor1": "#ffadf3", "actorBackColor2": "#ff66fd", "actorBackTone": "{\"red\":\"-128\",\"green\":\"-128\",\"blue\":\"128\"}", "actorBorderTone": "{\"red\":\"0\",\"green\":\"0\",\"blue\":\"0\"}", "commonEnemy": "", "enemyBackColor1": "#330000", "enemyBackColor2": "#ff6666", "enemyBackTone": "{\"red\":\"128\",\"green\":\"-128\",\"blue\":\"-128\"}", "enemyBorderTone": "{\"red\":\"0\",\"green\":\"0\",\"blue\":\"0\"}" } },
        { "name": "TitleImageChange", "status": true, "description": "タイトル画面変更プラグイン", "parameters": { "進行度変数": "17", "優先度変数": "0", "タイトル1の進行度": "1", "タイトル1の画像": "test1", "タイトル1のBGM": "かわいいおもちゃ工場のテーマ", "タイトル2の進行度": "2", "タイトル2の画像": "title2", "タイトル2のBGM": "切なく激しいクラシカルワルツ", "タイトル3の進行度": "3", "タイトル3の画像": "title3", "タイトル3のBGM": "感傷的なピアノアンビエント", "以降の進行度": "", "以降の画像": "", "以降のBGM": "" } },
        { "name": "FixImageLoading", "status": true, "description": "画像ロード時のチラつき防止プラグイン", "parameters": {} },
        { "name": "MPP_MapLight", "status": true, "description": "マップの明るさを設定できるようにします。", "parameters": { "Light Colors": "[\"255,255,255\",\"192,128,64\",\"32,32,32\",\"192,192,192\"]", "Front Light": "{\"Radius\":\"6\",\"Angle\":\"90\",\"Oy\":\"4\",\"Turn Duration\":\"24\"}", "Darkness Size": "3", "Additive Alpha": "0", "Darkness Priority": "9" } },
        { "name": "MPP_MapLight_Op2", "status": true, "description": "リージョンでそのタイルの明るさが変わります。", "parameters": { "Light Level 1 Regions": "1,9,17,25,33,41,49,57", "Light Level 2 Regions": "2,10,18,26,34,42,50,58", "Light Level 3 Regions": "3,11,19,27,35,43,51,59", "Light Level 4 Regions": "4,12,20,28,36,44,52,60", "Light Level 5 Regions": "5,13,21,29,37,45,53,61", "Light Level 6 Regions": "6,14,22,30,38,46,54,62", "Light Level 7 Regions": "7,15,23,31,39,47,55,63" } },
        { "name": "__nullPlugin3__", "status": false, "description": "▼▼▼▼操作システム系プラグイン▼▼▼▼", "parameters": {} },
        { "name": "UTA_MessageSkip", "status": true, "description": "特定キーを押す事でメッセージをスキップできるようにします。", "parameters": { "Skip Key": "control", "Show Trace": "false" } },
        { "name": "MNKR_TimerEX", "status": true, "description": "タイマーをカウントアップ・ダウン、表示・非表示を切り替えできるようにします。", "parameters": { "countUpSwitch": "11", "hideSwitch": "10", "countStopValue": "2" } },
        { "name": "CRTA_TimerManager", "status": true, "description": "v1.1.0 タイマー関係の管理プラグイン", "parameters": { "Font Size": "32", "Width": "96", "Height": "48", "Position X": "0", "Position Y": "0" } },
        { "name": "MKR_PlayerMoveForbid", "status": true, "description": "(v1.0.5) プレイヤー移動禁止プラグイン", "parameters": { "Default_Move_Flag": "8", "Default_Menu_Flag": "true", "Enter Flag": "true" } },
        { "name": "ConditionalItem", "status": true, "description": "アイテムやスキルに、使用対象の条件を設定します。", "parameters": { "Tag Name": "condition_item" } },
        { "name": "UTA_CommonSave", "status": true, "description": "共有のセーブデータを作成し、指定したスイッチ・変数の状態をセーブデータ間で共有します。", "parameters": { "Target Switches": "170,172,181,183,191,193,205,207,213,216", "Target Variables": "17,172,26", "Is Auto": "true", "Auto on Gameover": "true", "Show Trace": "false" } },
        { "name": "Torigoya_FrameTween", "status": true, "description": "[鳥小屋.txt ベースプラグイン] Tweenアニメーション (v.2.1.0)", "parameters": {} },
        { "name": "CharacterFreeze", "status": true, "description": "キャラクター停止プラグイン", "parameters": { "freezeSwitchId": "33", "freezePictureId": "0", "freezePictureName": "", "freezePictureX": "0", "freezePictureY": "0", "freezePictureOpacity": "255", "freezePictureBlendMode": "0", "freezeBgmVolume": "100", "freezeAnimation": "false", "freezeParallelMapEvent": "false" } },
        { "name": "AutoReviveItem", "status": true, "description": "特定のアイテムを持っていた場合死んでも蘇生するプラグイン", "parameters": { "RestoreHPtype": "0", "RestoreHPRatio": "100", "RestoreHPnum": "100", "RestoreMP": "false", "RestoreMPtype": "0", "RestoreMPRatio": "100", "RestoreMPnum": "100", "MarkStateNotClear": "true", "ExecuteCommonEvent": "true", "CallCommonEvent": "45" } },
        { "name": "HIME_PreTitleEvents", "status": false, "description": "Build your own sequence of events that should occur before\r\nthe title screen begins", "parameters": { "Pre-Title Map ID": "230", "Use As Title": "false\r" } },
        { "name": "MOT_SceneBackgrounds", "status": true, "description": "シーン毎に背景の指定を可能にします。", "parameters": { "背景一括指定": "", "ショップ画面": "", "名前入力画面": "", "セーブ画面": "セーブ", "ロード画面": "", "メニュー画面": "", "アイテム画面": "アイテム", "スキル画面": "", "装備画面": "そうび", "ステータス画面": "ステータス", "オプション画面": "おぷしょん", "ゲーム終了画面": "ばいばい" } },
        { "name": "damageFloor", "status": true, "description": "床ダメージを変数により指定するプラグインです", "parameters": { "ダメージ床変数": "9" } },
        { "name": "YEP_EventChasePlayer", "status": true, "description": "v1.02 プレイヤーが特定のイベントに近づくと、イベントがプレイヤーを追いかけたりプレイヤーから逃げます", "parameters": { "Sight Lock": "300", "See Player": "true", "Alert Timer": "120", "Alert Balloon": "1", "Alert Sound": "発見音", "Alert Common Event": "0", "Return After": "true", "Return Wait": "180" } },
        { "name": "VanguardAndRearguard", "status": true, "description": "前衛後衛プラグイン", "parameters": { "前衛ステートID": "43", "後衛ステートID": "44", "メニューチェンジ可能": "false", "先頭アクター固定スイッチ": "0", "後衛防御": "true", "チェンジスキルID": "0", "後衛時X補正": "48", "後衛時Y補正": "0", "チェンジ速度": "8", "アイコン非表示": "false", "フェイスシフト": "true", "前衛に詰める": "false", "アクターに適用": "true", "敵キャラに適用": "true", "後衛メンバー上限": "0", "敵キャラ後衛ラインX座標": "0", "敵キャラ後衛ラインY座標": "0" } },
        { "name": "EventDebugger", "status": false, "description": "イベントデバッグプラグイン", "parameters": { "ステップ開始": "F7", "ステップイン": "F11", "ステップオーバー": "F10", "続行": "F6", "表示切替": "F6", "変数監視": "F1", "監視最大数": "3", "イベントテスト": "true", "機能キー抑制": "false", "OK動作": "F11", "キャンセル動作": "F6", "Ctrl同時押し": "false", "Alt同時押し": "false", "スクリプトデバッグ": "1", "CTRLで無効化": "false" } },
        { "name": "ItemNameEscape", "status": false, "description": "項目名の制御文字適用プラグイン", "parameters": {} },
        { "name": "EquipInfoAllView", "status": true, "description": "ショップで装備品を購入する際、詳細な情報を\r\n表示することができます", "parameters": { "manual1": "", "manual2": "", "manual3": "", "manualColorNumber": "17" } },
        { "name": "DarkPlasma_ShopStock", "status": true, "description": "在庫ありショップ", "parameters": { "stockIdVariable": "50", "stockNumberLabel": "在庫数", "soldOutLabel": "売り切れ", "shopStock": "[\"{\\\"id\\\":\\\"69\\\",\\\"stockItemList\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"291\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"292\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"293\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"270\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"271\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"272\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"273\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"274\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"275\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"id\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"310\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"count\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"stockWeaponList\\\":\\\"[]\\\",\\\"stockArmorList\\\":\\\"[]\\\",\\\"autoSupplyType\\\":\\\"0\\\",\\\"autoSupplyFrequency\\\":\\\"5\\\"}\"]", "addStockWhenSellItem": "false", "soldOutItemAtBottom": "true" } },
        { "name": "NoF5Reload", "status": true, "description": "F5キーによるリロードを無効にします。", "parameters": {} }
    ];
