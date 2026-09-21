# Pasar Sentral Sibu — 诗巫中央市场旅客指南

马来西亚最大室内市场的多语言（马来文 / 英文 / 简体中文）旅客指南站，Astro 静态站，部署至 Cloudflare Pages。

- 线上站点：https://sibucentralmarket.com/
- 默认语言：`ms`（`/`），英文：`/en/`，中文：`/zh/`

## 技术栈

| 项 | 值 |
| --- | --- |
| Astro | 5.18.2（`output: 'static'`） |
| 适配器 | `@astrojs/cloudflare` 12.6.13 |
| Sitemap | `@astrojs/sitemap` 3.7.3（含 `i18n` hreflang 互指） |
| 样式 | Tailwind（`@astrojs/tailwind` 6.0.2） |
| 包管理 | pnpm 9.15.9（engines 锁定，需 `--config.node-linker=hoisted`） |

## 目录结构

```text
src/
├── components/
│   ├── BaseHead.astro      # TDK、canonical、hreflang、OG、geo meta
│   ├── Header.astro        # 导航 + 语言切换器（BM / EN / 中文）
│   ├── Footer.astro        # 快捷链接、地址电话、非官方声明
│   ├── MarketPage.astro    # 三语共用的整页内容区块（13 个 section）
│   └── GA4.astro           # Google Analytics 4（Partytown）
├── i18n/
│   ├── config.ts           # 语言常量、htmlLang/og:locale/hreflang、路径生成
│   ├── ui.ts               # 三语 UI 文案（导航、区块标题、标签、页脚…）
│   └── content.ts          # 三语内容数据（分区 / 票价 / 停车 / 交通 / 美食 / 景点 / FAQ）
├── layouts/BaseLayout.astro # <html lang>、JSON-LD、Header/Footer
├── lib/schema.ts           # TouristAttraction + LocalBusiness / WebSite+WebPage / FAQPage
├── consts.ts               # 站点事实（坐标、电话、评分、营业时间、图库、Maps）
├── pages/
│   ├── index.astro         # ms（默认语言，/）
│   ├── en/index.astro      # en（/en/）
│   └── zh/index.astro      # zh（/zh/）
└── styles/global.css
```

## 本地开发

```sh
$env:NODE_OPTIONS = ""            # 清掉 safe-delete shim，避免 install 失败
$env:CODEBUDDY_SAFE_DELETE_SHIM_DIR = ""
$env:GENIE_TRASH_DIR = ""
$env:PATH = "C:\Users\dcc\.workbuddy\binaries\node\versions\22.12.0;$env:PATH"

node $env:LOCALAPPDATA\pnpm\.tools\pnpm\9.15.9\node_modules\pnpm\bin\pnpm.cjs install --config.node-linker=hoisted
node node_modules\astro\astro.js build     # 产出 dist/
```

> **线上现状（2026-09-21 核对）**：`https://sibucentralmarket.com/en/` 与 `/zh/` 仍返回 404，首页 `<head>` 未输出任何 `hreflang` —— 即线上仍是单语（ms）版本，本仓库的三语改造尚未部署。GSC 报表（近 3 个月点击 0 / 曝光 0）与「单一语言」诊断正对应于此：需先重新构建并部署，再回 GSC 提交 sitemap。

## SEO 检查清单

- [x] `site` 已设为绝对域名 → canonical / OG 绝对 URL / sitemap 正常产出
- [x] `hreflang`：`ms-MY` / `en` / `zh` + `x-default`；`og:locale` + `og:locale:alternate`
- [x] `sitemap-index.xml` 内含三语 `xhtml:link` 互指；`robots.txt` 已声明 Sitemap
- [x] 结构化数据：`TouristAttraction` + `LocalBusiness`（含 geo / openingHours / aggregateRating / hasMap）、`WebSite` + `WebPage`（`workTranslation` 语言互指）、`FAQPage`（与页面可见问答一一对应）
- [x] `<meta name="robots">` 明确 `index, follow, max-image-preview:large`（无 noindex）
- [x] HSTS / 安全头由 `public/_headers` 下发；HTTP→HTTPS 301 需在 Cloudflare 控制台开启 Always Use HTTPS
- [ ] **待办（站外）**：在 Google Search Console 提交 `https://sibucentralmarket.com/sitemap-index.xml`
- [ ] **待办（站外）**：建立 / 认领 Google 商家档案「Sibu Central Market」，官网栏位填入本站
- [ ] **待办（站外）**：争取砂拉越旅游局、Tripadvisor、在地部落格的反向链接
