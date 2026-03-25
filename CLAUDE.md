# CubicCode — Claude 參考文件

## 專案性質

個人實驗性網頁遊戲專案，大量半完成的 prototype。每個子資料夾或根目錄 HTML 都是獨立實驗，不需要統一的建構流程，直接用瀏覽器開啟即可。

## 技術棧

- **Three.js**：3D 渲染，使用 ES6 import（通常從 CDN 載入）
- **Cannon.js**：物理引擎，`cannon.js-master/build/cannon.js` 是本地版本
- **VOX 格式**：MagicaVoxel 體素模型，自製載入器 `VOXLoader_mine.js`
- **Blockly**：視覺化編程，見 `policeThief/` 和 `d4Toolbox.js`

## 開發方向演進

**過去**：Three.js + Cannon.js + MagicaVoxel VOX 模型
- 建立了完整的 VOX 工作流程：建模 → 載入 → 渲染 → 物理模擬
- 實現 VOX 逐幀動畫系統、剛體模擬機器人
- 瓶頸：每個遊戲元素都要在 MagicaVoxel 手工建模，MVP 速度太慢

**現在**：偏好用 emoji 作為遊戲元素，快速產出 MVP

## 建議原則

- 新遊戲/互動想法：優先用 emoji + Canvas/DOM 方案，不要預設回到 VOX 工作流程
- VOX 系統：保留給需要精細視覺效果的場合
- 這裡的程式碼多是實驗性的，不需要過度工程化
- 沒有測試框架，沒有建構工具，保持簡單直接
