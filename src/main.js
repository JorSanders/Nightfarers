const STATS = ["DEX", "STR", "INT", "FAI", "ARC", "VIG", "END", "MND"];

const DATA = [
  {
    name: "Wylder",
    base: { VIG: 52, MND: 19, END: 27, STR: 50, DEX: 40, INT: 15, FAI: 15, ARC: 10 },
    relics: [
      { label: "+INT/FAI −STR/DEX", VIG: 0, MND: 0, END: 0, STR: -7, DEX: -5, INT: 15, FAI: 15, ARC: 0 },
      { label: "+MND −VIG", VIG: -5, MND: 10, END: 0, STR: 0, DEX: 0, INT: 0, FAI: 0, ARC: 0 },
    ],
  },
  {
    name: "Guardian",
    base: { VIG: 60, MND: 14, END: 38, STR: 41, DEX: 31, INT: 10, FAI: 21, ARC: 10 },
    relics: [
      { label: "+MND/FAI −VIG", VIG: -6, MND: 8, END: 0, STR: 0, DEX: 0, INT: 0, FAI: 17, ARC: 0 },
      { label: "+STR/DEX −VIG", VIG: -8, MND: 0, END: 0, STR: 9, DEX: 19, INT: 0, FAI: 0, ARC: 0 },
    ],
  },
  {
    name: "Duchess",
    base: { VIG: 39, MND: 27, END: 18, STR: 11, DEX: 45, INT: 42, FAI: 27, ARC: 11 },
    relics: [
      { label: "+MND/FAI −INT", VIG: 0, MND: 3, END: 0, STR: 0, DEX: 0, INT: -5, FAI: 13, ARC: 0 },
      { label: "+VIG/STR −MND", VIG: 3, MND: -14, END: 0, STR: 24, DEX: 0, INT: 0, FAI: 0, ARC: 0 },
    ],
  },
  {
    name: "Recluse",
    base: { VIG: 33, MND: 30, END: 23, STR: 12, DEX: 19, INT: 51, FAI: 51, ARC: 10 },
    relics: [
      { label: "+INT/FAI −MND", VIG: 0, MND: -13, END: 0, STR: 0, DEX: 0, INT: 12, FAI: 12, ARC: 0 },
      { label: "+VIG/END/DEX −INT/FAI", VIG: 4, MND: 0, END: 5, STR: 0, DEX: 20, INT: -10, FAI: -10, ARC: 0 },
    ],
  },
  {
    name: "Ironeye",
    base: { VIG: 37, MND: 14, END: 28, STR: 19, DEX: 57, INT: 7, FAI: 13, ARC: 13 },
    relics: [
      { label: "+ARC −DEX", VIG: 0, MND: 0, END: 0, STR: 0, DEX: -9, INT: 0, FAI: 0, ARC: 15 },
      { label: "+VIG/STR −DEX", VIG: 5, MND: 0, END: 0, STR: 20, DEX: -13, INT: 0, FAI: 0, ARC: 0 },
    ],
  },
  {
    name: "Raider",
    base: { VIG: 56, MND: 10, END: 37, STR: 68, DEX: 19, INT: 3, FAI: 12, ARC: 10 },
    relics: [
      { label: "+ARC −VIG", VIG: -4, MND: 0, END: 0, STR: 0, DEX: 0, INT: 0, FAI: 0, ARC: 17 },
      { label: "+MND/INT −VIG/END", VIG: -8, MND: 9, END: -4, STR: 0, DEX: 0, INT: 35, FAI: 0, ARC: 0 },
    ],
  },
  {
    name: "Executor",
    base: { VIG: 46, MND: 11, END: 27, STR: 25, DEX: 63, INT: 8, FAI: 6, ARC: 28 },
    relics: [
      { label: "+DEX/ARC −VIG", VIG: -7, MND: 0, END: 0, STR: 0, DEX: 9, INT: 0, FAI: 0, ARC: 12 },
      { label: "+VIG/END −ARC", VIG: 5, MND: 0, END: 6, STR: 0, DEX: 0, INT: 0, FAI: 0, ARC: -13 },
    ],
  },
  {
    name: "Revenant",
    base: { VIG: 34, MND: 31, END: 17, STR: 21, DEX: 21, INT: 30, FAI: 51, ARC: 12 },
    relics: [
      { label: "+STR −FAI", VIG: 0, MND: 0, END: 0, STR: 25, DEX: 0, INT: 0, FAI: -6, ARC: 0 },
      { label: "+VIG/END −MND", VIG: 5, MND: -11, END: 5, STR: 0, DEX: 0, INT: 0, FAI: 0, ARC: 0 },
    ],
  },
  {
    name: "Scholar",
    base: { VIG: 41, MND: 20, END: 25, STR: 14, DEX: 18, INT: 28, FAI: 15, ARC: 50 },
    relics: [
      { label: "+END/DEX −INT/ARC", VIG: 0, MND: 0, END: 6, STR: 0, DEX: 40, INT: -4, FAI: 0, ARC: -20 },
      { label: "+MND −VIG", VIG: -3, MND: 9, END: 0, STR: 0, DEX: 0, INT: 0, FAI: 0, ARC: 0 },
    ],
  },
  {
    name: "Undertaker",
    base: { VIG: 48, MND: 14, END: 22, STR: 50, DEX: 13, INT: 5, FAI: 41, ARC: 10 },
    relics: [
      { label: "+DEX −VIG/FAI", VIG: -5, MND: 0, END: 0, STR: 0, DEX: 19, INT: 0, FAI: -13, ARC: 0 },
      { label: "+MND/FAI −STR", VIG: 0, MND: 9, END: 0, STR: -15, DEX: 0, INT: 0, FAI: 12, ARC: 0 },
    ],
  },
];

const active = new Set(DATA.map((character) => character.name));
let sortStat = null;
let sortDirection = "desc";

const tbody = document.getElementById("tbody");
const chartsSection = document.getElementById("chartsSection");
const liveStatus = document.getElementById("liveStatus");
const toggleAllButton = document.getElementById("btnAll");
const characterFilters = document.getElementById("charFilters");

function buildRows() {
  const rows = [];
  DATA.filter((character) => active.has(character.name)).forEach((character) => {
    const base = character.base;
    const firstRelic = character.relics[0];
    const secondRelic = character.relics[1];
    const bothDelta = {};
    const withFirst = {};
    const withSecond = {};
    const withBoth = {};
    for (const stat of STATS) {
      withFirst[stat] = base[stat] + firstRelic[stat];
      withSecond[stat] = base[stat] + secondRelic[stat];
      withBoth[stat] = base[stat] + firstRelic[stat] + secondRelic[stat];
      bothDelta[stat] = firstRelic[stat] + secondRelic[stat];
    }
    rows.push({ char: character.name, type: "rb", label: "Base", stats: base, deltas: null });
    rows.push({ char: character.name, type: "r1", label: firstRelic.label, stats: withFirst, deltas: firstRelic });
    rows.push({ char: character.name, type: "r2", label: secondRelic.label, stats: withSecond, deltas: secondRelic });
    rows.push({ char: character.name, type: "r3", label: "Both relics", stats: withBoth, deltas: bothDelta });
  });
  return rows;
}

function cell(value, delta, isSorted) {
  const sortedClass = isSorted ? " sc" : "";
  if (delta === 0) return `<td class="${sortedClass}"><span class="sv">${value}</span></td>`;
  const positive = delta > 0;
  const sign = positive ? "+" : "";
  return `<td class="${sortedClass}" aria-label="${value}, ${sign}${delta} from relics"><span class="sv ${positive ? "vp" : "vn"}" aria-hidden="true">${value}</span><span class="dv ${positive ? "dp" : "dn"}" aria-hidden="true">${sign}${delta}</span></td>`;
}

function renderCharts() {
  const characters = DATA.filter((character) => active.has(character.name));

  let html = "";
  for (const stat of STATS) {
    const items = characters.map((character) => {
      const base = character.base[stat];
      const withFirst = base + character.relics[0][stat];
      const withSecond = base + character.relics[1][stat];
      const delta = character.relics[0][stat] + character.relics[1][stat];
      const withBoth = base + delta;
      const best = Math.max(base, withFirst, withSecond, withBoth);
      return { name: character.name, base, both: withBoth, delta, best };
    });
    items.sort((a, b) => b.best - a.best);

    const maxValue = items.length ? Math.max(...items.map((item) => item.best), 1) : 1;

    const isSelected = stat === sortStat;
    html += `<div class="chart-box${isSelected ? " chart-sorted" : ""}">`;
    html += `<div class="chart-title" aria-hidden="true">${stat}</div>`;

    for (const item of items) {
      const percent = (value) => ((Math.max(value, 0) / maxValue) * 100).toFixed(2);
      const baseWidth = percent(item.base);
      const bestBonus = item.best - item.base;

      let segments = `<div class="chart-seg chart-seg-base" style="left:0;width:${baseWidth}%"></div>`;
      if (bestBonus > 0) {
        segments += `<div class="chart-seg chart-seg-pos" style="left:${baseWidth}%;width:${(percent(item.best) - parseFloat(baseWidth)).toFixed(2)}%"></div>`;
      }

      html += `<div class="chart-row">`;
      html += `<div class="chart-name" aria-hidden="true">${item.name}</div>`;
      html += `<div class="chart-track" aria-hidden="true">${segments}</div>`;
      html += `<div class="chart-val" aria-hidden="true">${item.best}</div>`;
      html += `</div>`;
    }

    if (!items.length) {
      html += `<div class="chart-empty" aria-hidden="true">no selection</div>`;
    }

    html += `</div>`;
  }

  chartsSection.innerHTML = html;
}

function render() {
  const rows = buildRows();

  if (sortStat) {
    rows.sort((a, b) => {
      const valueA = a.stats[sortStat];
      const valueB = b.stats[sortStat];
      return sortDirection === "desc" ? valueB - valueA : valueA - valueB;
    });
  }

  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="10" class="empty">No characters selected</td></tr>`;
    syncHeaders();
    renderCharts();
    return;
  }

  let previousCharacter = null;
  let groupEven = false;
  let html = "";
  rows.forEach((row, index) => {
    if (row.char !== previousCharacter) {
      groupEven = !groupEven;
      previousCharacter = row.char;
    }
    const isEnd = index === rows.length - 1 || rows[index + 1].char !== row.char;
    const groupClass = groupEven ? "ge" : "go";
    const endClass = isEnd ? " group-end" : "";

    html += `<tr class="${groupClass} ${row.type}${endClass}">`;
    html += `<th class="cn" scope="row">${row.char}</th>`;
    html += `<td class="rl">${row.label}</td>`;
    for (const stat of STATS) {
      const delta = row.deltas ? row.deltas[stat] : 0;
      html += cell(row.stats[stat], delta, stat === sortStat);
    }
    html += `</tr>`;
  });

  tbody.innerHTML = html;
  syncHeaders();
  renderCharts();
}

function syncHeaders() {
  document.querySelectorAll("thead th.sortable").forEach((header) => {
    header.classList.remove("sorted", "asc", "desc");
    header.removeAttribute("aria-sort");
    if (header.dataset.s === sortStat) {
      header.classList.add("sorted", sortDirection);
      header.setAttribute("aria-sort", sortDirection === "desc" ? "descending" : "ascending");
    }
  });
}

function onStatClick(stat) {
  if (sortStat === stat && sortDirection === "asc") {
    sortStat = null;
    sortDirection = "desc";
    liveStatus.textContent = "Sort cleared, showing default order";
  } else if (sortStat === stat) {
    sortDirection = "asc";
    liveStatus.textContent = `${stat} sorted ascending`;
  } else {
    sortStat = stat;
    sortDirection = "desc";
    liveStatus.textContent = `${stat} sorted descending`;
  }
  render();
}

function announceSelection() {
  liveStatus.textContent = `Showing ${active.size} of ${DATA.length} characters`;
}

function syncToggleAllButton() {
  toggleAllButton.textContent = active.size === DATA.length ? "Deselect all" : "Select all";
}

function toggleAll() {
  const allOn = active.size === DATA.length;
  if (allOn) {
    active.clear();
  } else {
    DATA.forEach((character) => active.add(character.name));
  }
  syncToggleAllButton();
  document.querySelectorAll(".pill[data-n]").forEach((pill) => {
    const on = active.has(pill.dataset.n);
    pill.classList.toggle("active", on);
    pill.setAttribute("aria-pressed", String(on));
  });
  announceSelection();
  render();
}

function init() {
  DATA.forEach((character) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pill active";
    button.textContent = character.name;
    button.dataset.n = character.name;
    button.setAttribute("aria-pressed", "true");
    button.addEventListener("click", () => {
      const on = active.has(character.name);
      if (on) {
        active.delete(character.name);
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
      } else {
        active.add(character.name);
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
      }
      syncToggleAllButton();
      announceSelection();
      render();
    });
    characterFilters.appendChild(button);
  });

  toggleAllButton.addEventListener("click", toggleAll);

  document.querySelectorAll("thead th.sortable").forEach((header) => {
    const stat = header.dataset.s;
    header.querySelector(".sort-button").addEventListener("click", () => onStatClick(stat));
  });

  render();
}

init();
