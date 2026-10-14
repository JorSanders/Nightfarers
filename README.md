# Nightfarers

I kept alt tabbing to wiki pages to compare Nightfarer stats while planning relic setups in Elden Ring Nightreign, so I put all ten of them in one table at level 15 and added the relic bonuses next to the base values.

Live at **https://nightfarers.jor.dev/**

## Features

1. One table with all 10 Nightfarers at level 15, showing DEX, STR, INT, FAI, ARC, VIG, END and MND.
2. Four rows per character: the base stats, each of the two relic setups, and both relics combined. Relic rows show the resulting value with the bonus or malus as a small superscript.
3. Click a stat header to sort every row by that stat, click again to reverse, click once more to clear. The sorted column gets a gold tint and the header announces the sort order to screen readers.
4. Toggle characters on and off with the pill buttons, or use Deselect All and Select All.
5. A bar chart per stat above the table, ranking the selected characters by their best reachable value. Gold is the base value, green is what the best relic setup adds on top.
6. The stat values are my own notes from the game and community wiki pages, so if you spot a wrong number let me know.

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

```
index.html            the page
style.css             styles, built on brand/tokens.css and base.css
src/main.js           stat data, table and chart rendering
brand/                jor.dev tokens, base styles, fonts and logo, copied by the brand install script
favicon.svg           from brand/logo/icon.svg
favicon.ico           32x32 favicon
apple-touch-icon.png  180x180 app icon
og-image.png          1200x630 social preview
CNAME                 nightfarers.jor.dev
robots.txt            crawler policy with the sitemap URL
sitemap.xml           sitemap
README.md             this file
CLAUDE.md             rules for working on this project
LICENSE               the Unlicense
```

## Any issues?

This is a hobby project I have spent quite some hours on. If you have any issues, feel free to open a GitHub issue or contact me. Otherwise, this code is unlicensed, so do whatever you want with it: https://unlicense.org/

## Buy me a coffee

Don't. If you let me know you used or enjoyed this, you have already made the best donation.
