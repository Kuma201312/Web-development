const welcomeScreen = document.querySelector("#welcome-screen");
const menuBlock = document.querySelector("#menu-block");
const header = document.querySelector(".header");
const menuTabs = document.querySelector("#menu-tabs");
const menuContent = document.querySelector("#menu-content");
const menuStatus = document.querySelector(".menu-status");
const menuImage = menuContent ? menuContent.querySelector(".menu-image") : null;
const menuPizzaName = menuContent ? menuContent.querySelector(".menu-pizza-name") : null;
const menuPizzaPrice = menuContent ? menuContent.querySelector(".menu-pizza-price") : null;
const pizzaList = document.querySelector(".pizza-list");
const pizzaSection = document.querySelector("#pizza-section");
const coffeeSection = document.querySelector("#coffee-section");
const coffeeList = document.querySelector("#coffee-list");
const dessertSection = document.querySelector("#dessert-section");
const dessertList = document.querySelector("#dessert-list");
const alcoholSection = document.querySelector("#alcohol-section");

function getDiscountedPrice(price, discountPercent) {
    return Math.max(1, Math.round(price * (100 - discountPercent) / 100));
}

function getRandomDiscountPercent() {
    return Math.floor(Math.random() * 16) + 10;
}

const coffeeCatalog = [
    ["Aeropress.jpg", "Aeropress", 95],
    ["Airish.jpg", "Airish", 135],
    ["Black.jpg", "Black coffee", 75],
    ["Cappucino.jpg", "Cappuccino", 110],
    ["Cortado.jpg", "Cortado", 100],
    ["Cube.jpg", "Cube coffee", 115],
    ["Dipeo.jpg", "Dipeo", 105],
    ["Doppio.jpg", "Doppio", 95],
    ["Double nitro.jpg", "Double nitro", 145],
    ["Drop.jpg", "Drip coffee", 100],
    ["Dzezva.jpg", "Dzezva", 90],
    ["Espresso tonik.jpg", "Espresso tonic", 125],
    ["Espresso-con-passa.jpg", "Espresso con panna", 105],
    ["Espresso.jpg", "Espresso", 75],
    ["Flat White.jpg", "Flat White", 115],
    ["Frappe.jpg", "Frappe", 125],
    ["French-press.jpg", "French press", 100],
    ["Honey.jpg", "Honey coffee", 120],
    ["Ice blue.jpg", "Ice blue", 130],
    ["Irish.jpg", "Irish coffee", 135],
    ["Kremex.jpg", "Kremex", 100],
    ["Latte.jpg", "Latte", 115],
    ["Lemon.jpg", "Lemon coffee", 120],
    ["Lungo.jpg", "Lungo", 80],
    ["Maciato.jpg", "Macchiato", 100],
    ["Mocco.jpg", "Mocha", 125],
    ["Nitro.jpg", "Nitro coffee", 135],
    ["Nuts.jpg", "Nut coffee", 130],
    ["Piccolo.jpg", "Piccolo", 105],
    ["Purove Kalita.jpg", "Kalita Pour-over", 110],
    ["Romano.jpg", "Romano", 95],
    ["Symphony.jpg", "Symphony", 140],
    ["Turkish.jpg", "Turkish coffee", 90],
    ["Venska.jpg", "Viennese coffee", 125],
    ["Vietnamese.jpg", "Vietnamese coffee", 120]
];

const coffeeVariants = {
    "Airish.jpg": { image: "Airish(with ice).jpg", price: 135, label: "Airish with ice", toggleLabel: "With ice" },
    "Espresso.jpg": { image: "Espresso(big).jpg", price: 90, label: "Espresso (big)", toggleLabel: "Larger" },
    "French-press.jpg": { image: "French-press(double).jpg", price: 120, label: "French press (double)", toggleLabel: "Larger" },
    "Kremex.jpg": { image: "Kremex(big).jpg", price: 120, label: "Kremex (big)", toggleLabel: "Larger" },
    "Mocco.jpg": { image: "Mocco(with ice).jpg", price: 130, label: "Mocha with ice", toggleLabel: "With ice" },
    "Romano.jpg": { image: "Romano(with ice).jpg", price: 115, label: "Romano with ice", toggleLabel: "With ice" }
};

const coffeeFantasyNames = new Map([
    ["Aeropress.jpg", "Windmage's Aeropress"],
    ["Airish.jpg", "Seabard's Misty Draught"],
    ["Black.jpg", "Knight's Nightwatch Brew"],
    ["Cappucino.jpg", "Foam Elf's Crown"],
    ["Cortado.jpg", "Duelist's Half-Cup"],
    ["Cube.jpg", "Runesmith's Arcane Cube"],
    ["Dipeo.jpg", "Dwarven Deepbrew"],
    ["Doppio.jpg", "Twin Mage's Double"],
    ["Double nitro.jpg", "Storm Drake's Nitro"],
    ["Drop.jpg", "Raincaller Drip"],
    ["Dzezva.jpg", "Sultan's Ember Pot"],
    ["Espresso tonik.jpg", "Alchemist's Spark Tonic"],
    ["Espresso-con-passa.jpg", "Cloudmage's Creamshot"],
    ["Espresso.jpg", "Dragonfire Shot"],
    ["Flat White.jpg", "White Griffin Velvet"],
    ["Frappe.jpg", "Frost Bard's Frappe"],
    ["French-press.jpg", "Ironwood Press"],
    ["Honey.jpg", "Bee Queen's Honeyspell"],
    ["Ice blue.jpg", "Glacial Blue Elixir"],
    ["Irish.jpg", "Oathkeeper's Irish Flame"],
    ["Kremex.jpg", "Runesmith's Kremex"],
    ["Latte.jpg", "Lady of the Foam"],
    ["Lemon.jpg", "Sun Witch's Lemonbrew"],
    ["Lungo.jpg", "Longroad Lungo"],
    ["Maciato.jpg", "Speckled Sorcerer's Macchiato"],
    ["Mocco.jpg", "Cocoa Warlock's Mocha"],
    ["Nitro.jpg", "Void Dragon Nitro"],
    ["Nuts.jpg", "Squirrelfolk's Nutbrew"],
    ["Piccolo.jpg", "Halfling's Little Cup"],
    ["Purove Kalita.jpg", "Kalita Rainmage's Pour-over"],
    ["Romano.jpg", "Roman Sellsword's Citrus Shot"],
    ["Symphony.jpg", "Bard's Velvet Symphony"],
    ["Turkish.jpg", "Djinn's Sandfire Coffee"],
    ["Venska.jpg", "Viennese Enchanter's Whip"],
    ["Vietnamese.jpg", "Mekong Dragon's Slowbrew"]
]);

const coffeeMeta = {
    "Aeropress.jpg": { badge: { text: "Hit", tone: "sale" }, tags: ["hot", "coffee"], promoted: true },
    "Airish.jpg": { badge: { text: "Hit", tone: "sale" }, tags: ["coffee"] },
    "Black.jpg": { badge: { text: "New", tone: "new" }, tags: ["hot", "coffee"] },
    "Cappucino.jpg": { badge: { text: "Sale", tone: "sale" }, tags: ["hot", "coffee", "sale"], promoted: true },
    "Cortado.jpg": { tags: ["coffee"] },
    "Cube.jpg": { tags: [] },
    "Dipeo.jpg": { tags: ["coffee"] },
    "Doppio.jpg": { tags: ["hot", "coffee"] },
    "Double nitro.jpg": { badge: { text: "Sale", tone: "sale" }, tags: ["cold", "coffee"], promoted: true },
    "Drop.jpg": { badge: { text: "New", tone: "new" }, tags: ["hot", "coffee"] },
    "Dzezva.jpg": { tags: ["hot", "coffee"] },
    "Espresso tonik.jpg": { tags: ["coffee"] },
    "Espresso-con-passa.jpg": { tags: ["hot", "coffee"] },
    "Espresso.jpg": { badge: { text: "Sale", tone: "sale" }, tags: ["hot", "coffee", "sale"], promoted: true },
    "Flat White.jpg": { tags: ["hot", "coffee"] },
    "Frappe.jpg": { badge: { text: "Hit", tone: "sale" }, tags: ["cold"], promoted: true },
    "French-press.jpg": { badge: { text: "Cold", tone: "cold" }, tags: ["cold", "coffee"] },
    "Honey.jpg": { tags: ["coffee"] },
    "Ice blue.jpg": { tags: [] },
    "Irish.jpg": { badge: { text: "Spicy", tone: "spicy" }, tags: ["hot", "coffee", "spicy"], spicy: true },
    "Kremex.jpg": { badge: { text: "Cold", tone: "cold" }, tags: ["cold", "coffee"] },
    "Latte.jpg": { badge: { text: "Sale", tone: "sale" }, tags: ["hot", "coffee", "sale"], promoted: true },
    "Lemon.jpg": { tags: ["hot", "coffee"] },
    "Lungo.jpg": { badge: { text: "Cold", tone: "cold" }, tags: ["cold", "coffee"] },
    "Maciato.jpg": { badge: { text: "Sale", tone: "sale" }, tags: ["hot", "coffee", "sale"], promoted: true },
    "Mocco.jpg": { tags: ["hot", "coffee"] },
    "Nitro.jpg": { badge: { text: "New", tone: "new" }, tags: ["cold", "coffee"], isNew: true },
    "Nuts.jpg": { tags: ["hot", "coffee"] },
    "Piccolo.jpg": { badge: { text: "Cold", tone: "cold" }, tags: ["cold", "coffee"] },
    "Purove Kalita.jpg": { tags: ["hot", "coffee"] },
    "Romano.jpg": { tags: ["coffee"] },
    "Symphony.jpg": { badge: { text: "Signature", tone: "sale" }, tags: ["hot", "coffee"], promoted: true },
    "Turkish.jpg": { tags: ["hot", "coffee"] },
    "Venska.jpg": { tags: ["hot", "coffee"] },
    "Vietnamese.jpg": { badge: { text: "Cold", tone: "cold" }, tags: ["cold", "coffee"] }
};

coffeeCatalog.sort((a, b) => a[0].localeCompare(b[0], "en"));

coffeeCatalog.forEach(([imageName, displayLabel, price]) => {
    const fileName = imageName.replace(/\.jpg$/i, "");
    const coffeeName = displayLabel || fileName;
    const fantasyName = coffeeFantasyNames.get(imageName);
    if (!fantasyName) {
        throw new Error(`Missing fantasy name for ${imageName}`);
    }
    const coffeeItem = document.createElement("article");
    coffeeItem.className = "pizza-item coffee-item";
    const variant = coffeeVariants[imageName];
    const meta = coffeeMeta[imageName] || {};
    const isCold = (meta.tags || []).includes("cold");

    if (meta.promoted) coffeeItem.classList.add("is-promoted");
    if (meta.badge?.text.toLowerCase() === "hit") coffeeItem.classList.add("is-hit");
    if (meta.spicy) coffeeItem.classList.add("is-spicy");
    if (meta.isNew) coffeeItem.classList.add("is-new");
    if (isCold) coffeeItem.classList.add("is-cold");

    coffeeItem.dataset.fantasyName = fantasyName;
    coffeeItem.dataset.name = `${fantasyName} (${coffeeName}) ${coffeeName} ${fileName} ${variant?.label || ""}`.toLowerCase();
    const isSale = meta.badge?.text.toLowerCase() === "sale"
        || (meta.tags || []).includes("sale");
    const discountPercent = isSale ? getRandomDiscountPercent() : 0;
    if (isSale) {
        coffeeItem.dataset.promo = "true";
        coffeeItem.dataset.discountPercent = String(discountPercent);
    }

    const badges = [];
    if (meta.badge && meta.badge.tone !== "cold") {
        badges.push(`<span class="tavern-badge tavern-badge--${meta.badge.tone}">${meta.badge.text}</span>`);
    }
    if (isCold) badges.push('<span class="tavern-badge tavern-badge--cold">Cold</span>');
    const badgeMarkup = badges.length ? `<div class="coffee-badges">${badges.join("")}</div>` : "";

    coffeeItem.innerHTML = `
        ${badgeMarkup}
        <h2 class="pizza-name"><span class="coffee-fantasy-name">${fantasyName}</span><span class="coffee-real-name">(${coffeeName})</span></h2>
        <img src="../Images for it/Coffee/${imageName}" alt="${coffeeName}" width="400" height="400">
        ${variant ? `<label class="coffee-variant-toggle" aria-label="${variant.toggleLabel}"><input class="coffee-variant" type="checkbox"><span>${variant.toggleLabel}</span></label>` : ""}
        <p${isSale ? ' class="promo-price"' : ""}>${isSale ? `<span class="old-price">${price} UAH</span><span class="discount-percent">-${discountPercent}%</span><strong class="price current-price">Price: ${getDiscountedPrice(price, discountPercent)} UAH</strong>` : `<strong class="price">Price: ${price} UAH</strong>`}</p>
        <button class="tavern-add" type="button" aria-label="Add ${fantasyName} (${coffeeName}) to cart">+</button>
    `;

    coffeeList.append(coffeeItem);

    const addButton = coffeeItem.querySelector(".tavern-add");
    addButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const priceElement = coffeeItem.querySelector(".price");
        addToCart(getCoffeeDisplayName(coffeeItem), priceElement.textContent, "Coffee");
    });

    coffeeItem.dataset.tags = [...new Set([...(meta.tags || []), ...(isSale ? ["sale"] : [])])].join(" ");

    if (variant) {
        const coffeeImage = coffeeItem.querySelector("img");
        const coffeeRealName = coffeeItem.querySelector(".coffee-real-name");
        const coffeePrice = coffeeItem.querySelector(".price");

        coffeeItem.querySelectorAll(".coffee-variant").forEach((checkbox) => {
            checkbox.addEventListener("click", (event) => event.stopPropagation());
            checkbox.addEventListener("change", () => {
                const isLarge = checkbox.checked;
                coffeeImage.classList.add("is-changing");
                window.setTimeout(() => {
                    coffeeImage.src = `../Images for it/Coffee/${isLarge ? variant.image : imageName}`;
                    coffeeImage.alt = isLarge ? variant.label : coffeeName;
                    const realLabel = isLarge ? variant.label.replace(/\s+\(([^)]+)\)$/, ", $1") : coffeeName;
                    coffeeRealName.textContent = `(${realLabel})`;
                    const selectedPrice = isLarge ? variant.price : price;
                    const discount = Number(coffeeItem.dataset.discountPercent || 0);
                    const oldPrice = coffeeItem.querySelector(".old-price");
                    if (oldPrice) oldPrice.textContent = `${selectedPrice} UAH`;
                    coffeePrice.textContent = `Price: ${discount ? getDiscountedPrice(selectedPrice, discount) : selectedPrice} UAH`;
                    coffeeImage.classList.remove("is-changing");
                }, 220);
            });
        });
    }
});

const dessertCatalog = [
    "3-Ingredient No-Bake Cheesecake.jpg",
    "Banana Cream Pie with Pudding.jpg",
    "Cheesecake Cups.jpg",
    "Cherry Delight Dessert.jpg",
    "Chocolate Peanut Butter No-Bake Cookies.jpg",
    "Chocolate Scotcheroos.jpg",
    "Fluffy Key Lime Pie.jpg",
    "Fresas con Crema.jpg",
    "Fried Ice Cream Dessert Bars.jpg",
    "Ice Cream Sandwitch Cake.jpg",
    "Icebox Cake.jpg",
    "Lemon Blueberry Trifle.jpg",
    "Million-Dollar Pie.jpg",
    "Mixed Berry Tiramisu.jpg",
    "No-Bake Blueberry Pie.jpg",
    "No-Bake Lemon Cheesecake.jpg",
    "Oreo Mousse Cake.jpg",
    "Pina Colada Lush.jpg",
    "Pineaple Cheesecake.jpg",
    "Raspberry Cream Pie.jpg",
    "Rocky Road Rice Krispies Treats.jpg",
    "Root Beer Float Pie.jpg",
    "Strawberry Banana Pudding.jpg",
    "Strawberry Crunch Cheesecake.jpg",
    "Strawberry Icebox Cake.jpg",
    "Strawberry Lemon Trifle.jpg",
    "Strawberry Pretzel Pie.jpg",
    "Strawberry Rhubarb Cream.jpg",
    "Strawberry-Rhubarb Ice Pops.jpg",
    "Triple Berry No-Bake Cheesecake.jpg"
];
const dessertFantasyNames = new Map([
    ["3-Ingredient No-Bake Cheesecake.jpg", "Knight's Hearth Cheesecake"],
    ["Banana Cream Pie with Pudding.jpg", "Elf Queen's Sunfruit Pie"],
    ["Cheesecake Cups.jpg", "Mage's Moonwell Cups"],
    ["Cherry Delight Dessert.jpg", "Bard's Ruby Encore"],
    ["Chocolate Peanut Butter No-Bake Cookies.jpg", "Dragonkin Ember Crunch"],
    ["Chocolate Scotcheroos.jpg", "Blacksmith's Cocoa Bars"],
    ["Fluffy Key Lime Pie.jpg", "Lizardfolk Zestwind Pie"],
    ["Fresas con Crema.jpg", "Elven Orchard Cream"],
    ["Fried Ice Cream Dessert Bars.jpg", "Frost Mage's Flamefrost Bites"],
    ["Ice Cream Sandwitch Cake.jpg", "Snowkeep Sandwich Cake"],
    ["Icebox Cake.jpg", "Winter Court Icebox Cake"],
    ["Lemon Blueberry Trifle.jpg", "Seer's Starberry Trifle"],
    ["Million-Dollar Pie.jpg", "King's Ransom Pie"],
    ["Mixed Berry Tiramisu.jpg", "Bard's Berry Masquerade"],
    ["No-Bake Blueberry Pie.jpg", "Blue Dragon's No-Bake Pie"],
    ["No-Bake Lemon Cheesecake.jpg", "Moon Priestess Lemon Cheesecake"],
    ["Oreo Mousse Cake.jpg", "Shadow Mage's Nightveil Mousse"],
    ["Pina Colada Lush.jpg", "Sea Serpent's Island Dream"],
    ["Pineaple Cheesecake.jpg", "Sun Elf's Golden Crown"],
    ["Raspberry Cream Pie.jpg", "Crimson Knight's Raspberry Pie"],
    ["Rocky Road Rice Krispies Treats.jpg", "Troll's Stonepath Treats"],
    ["Root Beer Float Pie.jpg", "Goblin Alchemist's Rootbrew Pie"],
    ["Strawberry Banana Pudding.jpg", "Halfling Harvest Pudding"],
    ["Strawberry Crunch Cheesecake.jpg", "Phoenix Ember Cheesecake"],
    ["Strawberry Icebox Cake.jpg", "Ice Drake's Berry Frost Cake"],
    ["Strawberry Lemon Trifle.jpg", "Sun Bard's Lemonberry Trifle"],
    ["Strawberry Pretzel Pie.jpg", "Shieldmaiden's Sweet-Salt Pie"],
    ["Strawberry Rhubarb Cream.jpg", "Green Witch's Rhubarb Cloud"],
    ["Strawberry-Rhubarb Ice Pops.jpg", "Frost Elf's Twin-Berry Wands"],
    ["Triple Berry No-Bake Cheesecake.jpg", "Three Realms Berry Cheesecake"]
]);
const dessertTags = {
    extraSweet: new Set([
        "Chocolate Peanut Butter No-Bake Cookies.jpg",
        "Chocolate Scotcheroos.jpg",
        "Fried Ice Cream Dessert Bars.jpg",
        "Million-Dollar Pie.jpg",
        "Oreo Mousse Cake.jpg",
        "Pina Colada Lush.jpg",
        "Rocky Road Rice Krispies Treats.jpg",
        "Strawberry Crunch Cheesecake.jpg"
    ]),
    hit: new Set([
        "Cheesecake Cups.jpg",
        "Cherry Delight Dessert.jpg",
        "Mixed Berry Tiramisu.jpg",
        "Oreo Mousse Cake.jpg",
        "Strawberry Crunch Cheesecake.jpg"
    ]),
    pie: new Set([
        "Banana Cream Pie with Pudding.jpg",
        "Fluffy Key Lime Pie.jpg",
        "Million-Dollar Pie.jpg",
        "No-Bake Blueberry Pie.jpg",
        "Raspberry Cream Pie.jpg",
        "Root Beer Float Pie.jpg",
        "Strawberry Pretzel Pie.jpg"
    ]),
    cheesecake: new Set([
        "3-Ingredient No-Bake Cheesecake.jpg",
        "Cheesecake Cups.jpg",
        "No-Bake Lemon Cheesecake.jpg",
        "Pineaple Cheesecake.jpg",
        "Strawberry Crunch Cheesecake.jpg",
        "Triple Berry No-Bake Cheesecake.jpg"
    ]),
    sale: new Set([
        "Cherry Delight Dessert.jpg",
        "Fresas con Crema.jpg",
        "Ice Cream Sandwitch Cake.jpg",
        "Strawberry Banana Pudding.jpg",
        "Strawberry-Rhubarb Ice Pops.jpg"
    ])
};
const dessertPrices = new Map([
    ["3-Ingredient No-Bake Cheesecake.jpg", 226],
    ["Banana Cream Pie with Pudding.jpg", 331],
    ["Cheesecake Cups.jpg", 289],
    ["Cherry Delight Dessert.jpg", 100],
    ["Chocolate Peanut Butter No-Bake Cookies.jpg", 143],
    ["Chocolate Scotcheroos.jpg", 187],
    ["Fluffy Key Lime Pie.jpg", 362],
    ["Fried Ice Cream Dessert Bars.jpg", 118],
    ["Million-Dollar Pie.jpg", 398],
    ["Mixed Berry Tiramisu.jpg", 100],
    ["No-Bake Blueberry Pie.jpg", 342],
    ["No-Bake Lemon Cheesecake.jpg", 267],
    ["Oreo Mousse Cake.jpg", 154],
    ["Pina Colada Lush.jpg", 85],
    ["Pineaple Cheesecake.jpg", 319],
    ["Raspberry Cream Pie.jpg", 381],
    ["Rocky Road Rice Krispies Treats.jpg", 129],
    ["Root Beer Float Pie.jpg", 306],
    ["Strawberry Crunch Cheesecake.jpg", 355],
    ["Strawberry Pretzel Pie.jpg", 374],
    ["Triple Berry No-Bake Cheesecake.jpg", 218],
    ["Fresas con Crema.jpg", 125],
    ["Ice Cream Sandwitch Cake.jpg", 135],
    ["Icebox Cake.jpg", 110],
    ["Lemon Blueberry Trifle.jpg", 145],
    ["Strawberry Banana Pudding.jpg", 120],
    ["Strawberry Icebox Cake.jpg", 130],
    ["Strawberry Lemon Trifle.jpg", 140],
    ["Strawberry Rhubarb Cream.jpg", 115],
    ["Strawberry-Rhubarb Ice Pops.jpg", 150]
]);
const dessertTagLabels = {
    extraSweet: "Extra sweet",
    hit: "Hit",
    pie: "Pie",
    cheesecake: "Cheesecake",
    sale: "Sale"
};

dessertCatalog.forEach((imageName) => {
    const dessertName = dessertFantasyNames.get(imageName);
    if (!dessertName) {
        throw new Error(`Missing fantasy name for ${imageName}`);
    }
    const price = dessertPrices.get(imageName);
    if (price === undefined) {
        throw new Error(`Missing dessert price for ${imageName}`);
    }
    const dessertItem = document.createElement("article");
    dessertItem.className = "coffee-item dessert-item";
    dessertItem.dataset.name = `${dessertName} ${imageName}`.toLowerCase();
    const tags = Object.entries(dessertTags)
        .filter(([, images]) => images.has(imageName))
        .map(([tag]) => tag);
    const isSale = tags.includes("sale");
    const discountPercent = isSale ? getRandomDiscountPercent() : 0;
    const displayPrice = isSale ? getDiscountedPrice(price, discountPercent) : price;
    if (isSale) dessertItem.dataset.discountPercent = String(discountPercent);
    dessertItem.dataset.tags = tags
        .map((tag) => tag.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`))
        .join(" ");
    const tagMarkup = tags.map((tag) =>
        `<span class="dessert-tag tavern-badge tavern-badge--${tag.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}">${dessertTagLabels[tag]}</span>`
    ).join("");
    dessertItem.innerHTML = `
        <h2 class="pizza-name">${dessertName}</h2>
        ${tagMarkup ? `<div class="dessert-tags" aria-label="Dessert tags">${tagMarkup}</div>` : ""}
        <img src="../Images for it/Desserts/${imageName}" alt="${dessertName}" width="400" height="400">
        <p${isSale ? ' class="promo-price"' : ""}>${isSale ? `<span class="old-price">${price} UAH</span><span class="discount-percent">-${discountPercent}%</span><strong class="price current-price">Price: ${displayPrice} UAH</strong>` : `<strong class="price">Price: ${price} UAH</strong>`}</p>
        <button class="tavern-add" type="button" aria-label="Add ${dessertName} to order">+</button>
    `;
    dessertList.append(dessertItem);

    dessertItem.querySelector(".tavern-add").addEventListener("click", (event) => {
        event.stopPropagation();
        addToCart(dessertName, dessertItem.querySelector(".current-price, .price").textContent, "Desserts");
    });
});

const coffeeSearch = document.querySelector("#coffee-search");
const coffeeChips = document.querySelectorAll("[data-coffee-filter]");
const coffeeFilterbar = document.querySelector("#coffee-filterbar");
const coffeeFilterToggle = document.querySelector("#coffee-filter-toggle");
let activeCoffeeFilter = "all";

function applyCoffeeFilters() {
    const query = (coffeeSearch?.value || "").trim().toLowerCase();
    coffeeList.querySelectorAll(".coffee-item").forEach((item) => {
        const matchesQuery = !query || (item.dataset.name || "").includes(query);
        const matchesFilter = activeCoffeeFilter === "all"
            || (item.dataset.tags || "").split(" ").includes(activeCoffeeFilter);
        item.hidden = !(matchesQuery && matchesFilter);
    });
    orderCoffeeProducts();
    updateFeaturedDivider(coffeeList);
}

function orderCoffeeProducts() {
    const divider = coffeeList.querySelector(":scope > .featured-divider");
    if (!divider) return;

    const items = Array.from(coffeeList.querySelectorAll(":scope > .coffee-item"));
    const featured = items.filter((item) => item.classList.contains("featured-product"));
    const other = items.filter((item) => !item.classList.contains("featured-product"));
    const orderedItems = activeCoffeeFilter === "all"
        ? [...featured, divider, ...other]
        : [...other, divider, ...featured];

    coffeeList.append(...orderedItems);
}

coffeeChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        activeCoffeeFilter = chip.dataset.coffeeFilter;
        coffeeChips.forEach((button) => button.classList.toggle("is-active", button === chip));
        applyCoffeeFilters();
    });
});

if (coffeeSearch) {
    coffeeSearch.addEventListener("input", () => {
        applyCoffeeFilters();
        updateCategorySuggestions(coffeeSection);
    });
}

const dessertSearch = document.querySelector("#dessert-search");
const dessertChips = document.querySelectorAll("[data-dessert-filter]");
let activeDessertFilter = "all";

function applyDessertFilters() {
    const query = (dessertSearch?.value || "").trim().toLowerCase();
    dessertList.querySelectorAll(".dessert-item").forEach((item) => {
        const matchesQuery = !query || item.dataset.name.includes(query);
        const matchesFilter = activeDessertFilter === "all"
            || item.dataset.tags.split(" ").includes(activeDessertFilter);
        item.hidden = !(matchesQuery && matchesFilter);
    });
}

dessertChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        activeDessertFilter = chip.dataset.dessertFilter;
        dessertChips.forEach((button) => {
            const isActive = button === chip;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
        applyDessertFilters();
    });
});

if (dessertSearch) {
    dessertSearch.addEventListener("input", () => {
        applyDessertFilters();
        updateCategorySuggestions(dessertSection);
    });
}

if (coffeeFilterToggle && coffeeFilterbar) {
    coffeeFilterToggle.addEventListener("click", () => {
        const isOpen = coffeeFilterbar.classList.toggle("filters-open");
        coffeeFilterToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

function startWelcome() {
    document.body.classList.add("welcome-started");
    document.body.classList.add("welcome-fading");
    welcomeScreen.removeEventListener("click", startWelcome);
    welcomeScreen.removeEventListener("keydown", handleWelcomeKeydown);
    menuBlock.removeEventListener("click", startWelcome);
    menuBlock.removeEventListener("keydown", handleMenuKeydown);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 1400);
}

function handleWelcomeKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        startWelcome();
    }
}

function handleMenuKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        startWelcome();
    }
}

welcomeScreen.addEventListener("click", startWelcome);
welcomeScreen.addEventListener("keydown", handleWelcomeKeydown);
menuBlock.addEventListener("click", startWelcome);
menuBlock.addEventListener("keydown", handleMenuKeydown);

let categorySwitchTimer;
let categoryTitleAnimationTimer;
let categoryTitleOverlay;
let categoryTitleElement;

function switchProductSection(activeName) {
    const sections = [pizzaSection || pizzaList, coffeeSection, dessertSection, alcoholSection].filter(Boolean);
    const previousTitle = document.querySelector(".tavern-category.category-visible .tavern-hero-title");
    window.clearTimeout(categoryTitleAnimationTimer);
    categoryTitleOverlay?.remove();
    categoryTitleOverlay = null;
    if (categoryTitleElement) {
        categoryTitleElement.style.opacity = "";
        categoryTitleElement.style.width = "";
        categoryTitleElement = null;
    }
    const sectionMap = {
        pizza: pizzaSection || pizzaList,
        coffee: coffeeSection,
        desserts: dessertSection,
        alcohol: alcoholSection
    };
    const activeSection = sectionMap[activeName] || null;
    window.clearTimeout(categorySwitchTimer);
    document.querySelectorAll(".tavern-hero-title").forEach((title) => {
        title.style.width = "";
    });
    document.body.classList.add("category-switching");

    sections.forEach((section) => {
        const isActive = section === activeSection;
        section.hidden = !isActive;
        section.classList.remove("category-visible");
        section.classList.toggle("category-hidden", !isActive);
    });

    const activeTitle = activeSection ? activeSection.querySelector(".tavern-hero-title") : null;
    if (activeTitle && previousTitle && previousTitle !== activeTitle) {
        const startRect = previousTitle.getBoundingClientRect();
        const targetRect = activeTitle.getBoundingClientRect();
        categoryTitleOverlay = previousTitle.cloneNode(true);
        categoryTitleOverlay.classList.add("category-title-transition");
        categoryTitleOverlay.removeAttribute("id");
        categoryTitleOverlay.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
        Object.assign(categoryTitleOverlay.style, {
            position: "fixed",
            top: `${startRect.top}px`,
            left: "50%",
            width: `${startRect.width}px`,
            maxWidth: "min(900px, calc(100vw - 40px))",
            boxSizing: "border-box",
            margin: "0",
            transform: "translateX(-50%)",
            zIndex: "10000",
            pointerEvents: "none"
        });
        categoryTitleOverlay.innerHTML = activeTitle.innerHTML;
        document.body.append(categoryTitleOverlay);
        activeTitle.style.opacity = "0";
        categoryTitleElement = activeTitle;
        void categoryTitleOverlay.offsetWidth;
        window.requestAnimationFrame(() => {
            categoryTitleOverlay.style.width = `${targetRect.width}px`;
            categoryTitleOverlay.style.top = `${targetRect.top}px`;
        });
        categoryTitleAnimationTimer = window.setTimeout(() => {
            categoryTitleOverlay?.remove();
            categoryTitleOverlay = null;
            activeTitle.style.opacity = "";
            categoryTitleElement = null;
        }, 850);
    }

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            if (activeSection) {
                activeSection.classList.add("category-visible");
                activeSection.classList.remove("category-hidden");
            }
        });
    });

    categorySwitchTimer = window.setTimeout(() => {
        sections.forEach((section) => {
            section.hidden = section !== activeSection;
        });
        document.body.classList.remove("category-switching");
    }, 400);
}

const tavernTabsToggle = document.createElement("button");
tavernTabsToggle.type = "button";
tavernTabsToggle.className = "tavern-tabs-toggle";
tavernTabsToggle.setAttribute("aria-label", "Section menu");
tavernTabsToggle.setAttribute("aria-expanded", "false");
tavernTabsToggle.innerHTML = "&#9776;";
tavernTabsToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("tabs-open");
    tavernTabsToggle.setAttribute("aria-expanded", String(isOpen));
});

function moveMenuTabsToHeader() {
    const startRect = menuTabs.getBoundingClientRect();
    header.append(tavernTabsToggle);
    header.append(menuTabs);
    header.append(aboutButton);
    const endRect = menuTabs.getBoundingClientRect();
    const deltaX = startRect.left - endRect.left;
    const deltaY = startRect.top - endRect.top;
    const scaleX = startRect.width / endRect.width;
    const scaleY = startRect.height / endRect.height;

    menuTabs.animate([
        { transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`, transformOrigin: "top left" },
        { transform: "translate(0, 0) scale(1, 1)", transformOrigin: "top left" }
    ], {
        duration: 850,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)"
    });
}

document.querySelectorAll("[data-menu-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
        const selectedTab = tab.dataset.menuTab;
        const isPizzaTab = selectedTab === "pizza";
        const isCoffeeTab = selectedTab === "coffee";
        const isFirstCategoryChoice = !document.body.classList.contains("menu-choice-made");
        document.body.classList.add("menu-choice-transition");
        menuContent.classList.add("menu-exiting");

        if (isFirstCategoryChoice) moveMenuTabsToHeader();

        document.body.classList.add("menu-choice-made");
        document.body.classList.remove("page-end-reached");
        updatePageEndVisibility();
        menuContent.classList.toggle("show-pizza", isPizzaTab);
        document.body.classList.toggle("pizza-open", isPizzaTab);
        document.body.classList.toggle("coffee-theme", isCoffeeTab);
        document.body.classList.toggle("drawer-open", isCoffeeTab);
        document.body.classList.toggle("dessert-open", selectedTab === "desserts");
        document.body.classList.toggle("alcohol-open", selectedTab === "alcohol");

        document.querySelectorAll("[data-menu-tab]").forEach((otherTab) => {
            otherTab.classList.toggle("is-active", otherTab === tab);
        });

        if (isFirstCategoryChoice) {
            window.setTimeout(() => switchProductSection(selectedTab), 560);
        } else {
            switchProductSection(selectedTab);
        }

        if (menuImage) menuImage.hidden = !isPizzaTab;
        if (menuPizzaName) menuPizzaName.hidden = !isPizzaTab;
        if (menuPizzaPrice) menuPizzaPrice.hidden = !isPizzaTab;
        menuStatus.textContent = isPizzaTab || isCoffeeTab || selectedTab === "desserts" ? "" : "Under development...";

        window.setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
        }, isFirstCategoryChoice ? 760 : 520);

        window.setTimeout(() => {
            document.body.classList.remove("menu-choice-transition");
            menuContent.classList.remove("menu-exiting");
        }, isFirstCategoryChoice ? 760 : 520);
    });
});

let downwardScrollCount = 0;

window.addEventListener("wheel", (event) => {
    if (!document.body.classList.contains("welcome-started")) return;

    if (event.deltaY > 0) {
        downwardScrollCount += 1;
        if (downwardScrollCount >= 4) document.body.classList.add("header-hidden");
    } else if (event.deltaY < 0) {
        downwardScrollCount = 0;
        document.body.classList.remove("header-hidden");
    }
}, { passive: true });

const menuItems = document.querySelectorAll(".pizza-item, .coffee-item, .dessert-item");

const detailScreen = document.createElement("section");
detailScreen.className = "pizza-detail";
detailScreen.innerHTML = `
    <button class="pizza-detail-close" type="button" aria-label="Close details">&times;</button>
    <div class="pizza-detail-card">
        <h2 class="pizza-detail-name"></h2>
        <img class="pizza-detail-image" alt="">
        <p class="pizza-detail-price"></p>
        <div class="pizza-detail-actions">
            <button class="pizza-detail-button pizza-detail-order" type="button">Add to order</button>
            <button class="pizza-detail-button pizza-detail-more" type="button">More details</button>
        </div>
        <p class="pizza-detail-description" hidden></p>
    </div>
`;
document.body.append(detailScreen);

const detailName = detailScreen.querySelector(".pizza-detail-name");
const detailImage = detailScreen.querySelector(".pizza-detail-image");
const detailPrice = detailScreen.querySelector(".pizza-detail-price");
const detailDescription = detailScreen.querySelector(".pizza-detail-description");
const detailOrderButton = detailScreen.querySelector(".pizza-detail-order");
const detailMoreButton = detailScreen.querySelector(".pizza-detail-more");
const closeDetail = detailScreen.querySelector(".pizza-detail-close");

const cartFloat = document.querySelector("#cart-float");
const cartPanel = document.querySelector("#cart-panel");
const cartToggle = document.querySelector("#cart-toggle");
const cartClose = document.querySelector("#cart-close");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const cartFilters = document.querySelectorAll("[data-cart-filter]");
const checkoutButton = document.querySelector("#checkout-button");
const checkoutMessage = document.querySelector("#checkout-message");
const deliveryButton = document.querySelector("#delivery-button");
const deliveryScreen = document.querySelector("#delivery-screen");
const deliveryClose = document.querySelector("#delivery-close");
const deliveryForm = document.querySelector("#delivery-form");
const aboutButton = document.querySelector("#about-button");
const aboutScreen = document.querySelector("#about-screen");
const aboutClose = document.querySelector("#about-close");

const cartState = [];
let activeCartFilter = "all";

function updatePageEndVisibility() {
    const pageBottom = window.scrollY + window.innerHeight;
    const documentBottom = document.documentElement.scrollHeight;
    document.body.classList.toggle("page-end-reached", pageBottom >= documentBottom - 40);
}

window.addEventListener("scroll", updatePageEndVisibility, { passive: true });
window.addEventListener("resize", updatePageEndVisibility);
updatePageEndVisibility();

function extractPriceAsNumber(value) {
    const numbers = String(value).match(/\d+/g) ?? [];
    if (!numbers.length) return 0;
    const numericValues = numbers.map(Number);
    return numericValues.length >= 3 ? numericValues[numericValues.length - 2] : numericValues[numericValues.length - 1];
}

function renderCart() {
    cartItems.innerHTML = "";
    const visibleCartItems = activeCartFilter === "all" ? cartState : cartState.filter((item) => item.category === activeCartFilter);

    visibleCartItems.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <div class="cart-item-main">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-category">${item.category}</span>
                <span class="cart-item-price">${item.price} UAH</span>
            </div>
            <div class="cart-item-controls">
                <span class="cart-item-qty">x${item.quantity}</span>
                <button class="cart-item-remove" type="button" data-name="${item.name}" aria-label="Remove ${item.name}">×</button>
            </div>
        `;
        cartItems.append(cartItem);
    });

    const totalCount = cartState.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartState.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartCount.textContent = String(totalCount);
    cartTotal.textContent = `${totalPrice} UAH`;

    if (totalCount > 0) {
        cartFloat.classList.add("has-items");
        cartToggle.setAttribute("aria-label", `${totalCount} items in cart`);
        document.body.classList.add("cart-has-items");
    } else {
        cartFloat.classList.remove("has-items");
        cartToggle.setAttribute("aria-label", "Cart is empty");
        document.body.classList.remove("cart-has-items");
    }

    document.querySelectorAll(".cart-item-remove").forEach((button) => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const index = cartState.findIndex((item) => item.name === name);
            if (index === -1) return;
            if (cartState[index].quantity > 1) {
                cartState[index].quantity -= 1;
            } else {
                cartState.splice(index, 1);
            }
            renderCart();
        });
    });
}

cartFilters.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
        activeCartFilter = filterButton.dataset.cartFilter;
        cartFilters.forEach((button) => button.classList.toggle("is-active", button === filterButton));
        renderCart();
    });
});

function addToCart(name, priceValue, category) {
    const existing = cartState.find((item) => item.name === name && item.category === category);
    if (existing) {
        existing.quantity += 1;
    } else {
        cartState.push({ name, price: extractPriceAsNumber(priceValue), category, quantity: 1 });
    }

    renderCart();
    cartPanel.hidden = false;
    cartFloat.classList.add("is-open");
    cartFloat.classList.remove("cart-bump");
    void cartFloat.offsetWidth;
    cartFloat.classList.add("cart-bump");
    window.clearTimeout(cartFloat.bumpTimer);
    cartFloat.bumpTimer = window.setTimeout(() => cartFloat.classList.remove("cart-bump"), 550);
}

function getCoffeeDisplayName(item) {
    const realName = item.querySelector(".coffee-real-name")?.textContent.trim().replace(/^\(|\)$/g, "");
    return `${item.dataset.fantasyName} (${realName})`;
}

function openProductDetail(item) {
    const name = item.querySelector(".pizza-name");
    const image = item.querySelector("img");
    const activePriceElement = item.querySelector(".current-price") || item.querySelector(".price");
    const price = item.querySelector(".promo-price, .price");
    const isDessert = item.classList.contains("dessert-item");
    const isCoffee = item.classList.contains("coffee-item") && !isDessert;
    const productCategory = isDessert ? "Desserts" : isCoffee ? "Coffee" : "Pizza";
    const pizzaSize = item.classList.contains("chef-item") ? "50 cm" : item.classList.contains("popular-item") ? "40 cm" : item.classList.contains("spicy-item") ? "30 cm" : "30 cm";
    const pizzaInfo = item.classList.contains("chef-item") ? "Sweet, wild, and made with fresh vegetables straight from the chef's kitchen." : item.classList.contains("popular-item") ? "A favorite among our loyal guests." : item.classList.contains("spicy-item") ? "Very spicy." : "Pizza for those who appreciate classic taste and simplicity.";
    const howOrder = item.classList.contains("chef-item") ? "Complimentary 2 bottles of wine or beer of your choice, up to 400 UAH." : item.classList.contains("popular-item") ? "Respect to you." : item.classList.contains("spicy-item") ? "Milk as a gift." : "No extra offer.";
    const coffeeSize = item.querySelector(".coffee-variant")?.checked ? "Larger version" : "Standard version";
    const productName = isCoffee ? getCoffeeDisplayName(item) : name.textContent.trim();

    if (isCoffee) {
        const fantasyName = document.createElement("span");
        const realName = document.createElement("span");
        fantasyName.textContent = item.dataset.fantasyName;
        realName.className = "coffee-detail-real-name";
        realName.textContent = item.querySelector(".coffee-real-name").textContent;
        detailName.replaceChildren(fantasyName, realName);
    } else {
        detailName.textContent = name.textContent;
    }
    detailName.dataset.productName = productName;
    detailName.dataset.category = productCategory;
    detailImage.src = image.src;
    detailImage.alt = image.alt;
    detailPrice.textContent = activePriceElement ? activePriceElement.textContent.trim() : (price ? price.textContent.trim() : "");
    detailPrice.dataset.priceNumber = String(extractPriceAsNumber(detailPrice.textContent));
    detailDescription.textContent = isDessert
        ? `A sweet treat from our dessert menu.`
        : isCoffee
            ? `Version: ${coffeeSize}\nBriefly: ${productName} — aromatic coffee for a pleasant pause.`
            : `Pizza size: ${pizzaSize}\nBriefly: ${pizzaInfo}\nWhat it gives: ${howOrder}`;
    detailDescription.hidden = true;
    detailMoreButton.textContent = "More details";
    detailScreen.classList.add("is-visible");
    document.body.classList.add("detail-open");
}

function closePizzaDetail() {
    detailScreen.classList.remove("is-visible");
    document.body.classList.remove("detail-open");
    detailDescription.hidden = true;
    detailMoreButton.textContent = "More details";
}

menuItems.forEach((item) => item.addEventListener("click", () => openProductDetail(item)));
closeDetail.addEventListener("click", closePizzaDetail);
detailScreen.addEventListener("click", (event) => {
    if (event.target === detailScreen) closePizzaDetail();
});

detailOrderButton.addEventListener("click", () => {
    const pizzaName = detailName.dataset.productName || detailName.textContent.trim();
    const pizzaPrice = detailPrice.dataset.priceNumber || detailPrice.textContent.trim();
    addToCart(pizzaName, pizzaPrice, detailName.dataset.category);
    closePizzaDetail();
});

detailMoreButton.addEventListener("click", () => {
    const isHidden = detailDescription.hidden;
    detailDescription.hidden = !isHidden;
    detailMoreButton.textContent = isHidden ? "Hide" : "More details";
});

cartToggle.addEventListener("click", () => {
    const isOpen = cartFloat.classList.contains("is-open");
    cartFloat.classList.toggle("is-open", !isOpen);
    cartPanel.hidden = isOpen;
});

cartClose.addEventListener("click", () => {
    cartFloat.classList.remove("is-open");
    cartPanel.hidden = true;
});

checkoutButton.addEventListener("click", () => {
    checkoutMessage.hidden = false;
    window.clearTimeout(checkoutMessage.hideTimer);
    checkoutMessage.hideTimer = window.setTimeout(() => checkoutMessage.hidden = true, 2500);
});

deliveryButton.addEventListener("click", () => {
    deliveryScreen.hidden = false;
    document.body.classList.add("detail-open");
});

function closeDeliveryScreen() {
    deliveryScreen.hidden = true;
    document.body.classList.remove("detail-open");
}

deliveryClose.addEventListener("click", closeDeliveryScreen);
deliveryScreen.addEventListener("click", (event) => {
    if (event.target === deliveryScreen) closeDeliveryScreen();
});

deliveryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    closeDeliveryScreen();
    checkoutMessage.textContent = "In development";
    checkoutMessage.hidden = false;
    window.clearTimeout(checkoutMessage.hideTimer);
    checkoutMessage.hideTimer = window.setTimeout(() => checkoutMessage.hidden = true, 2500);
});

aboutButton.addEventListener("click", () => {
    aboutScreen.hidden = false;
    document.body.classList.add("detail-open");
});

function closeAboutScreen() {
    aboutScreen.hidden = true;
    document.body.classList.remove("detail-open");
}

aboutClose.addEventListener("click", closeAboutScreen);
aboutScreen.addEventListener("click", (event) => {
    if (event.target === aboutScreen) closeAboutScreen();
});

function decoratePizzaItems() {
    document.querySelectorAll(".pizza-list .pizza-item").forEach((item) => {
        if (item.dataset.decorated === "true") return;
        item.dataset.decorated = "true";

        const nameEl = item.querySelector(".pizza-name");
        const priceEl = item.querySelector(".price");
        const isPromo = item.classList.contains("promo-item");
        const isSpicy = item.classList.contains("spicy-item");
        const isChef = item.classList.contains("chef-item");
        const isPopular = item.classList.contains("popular-item");

        let badge = null;
        if (isPromo) badge = { text: "Sale", tone: "sale" };
        else if (isSpicy) badge = { text: "Spicy", tone: "spicy" };
        else if (isChef) badge = { text: "Chef's special", tone: "sale" };
        else if (isPopular) badge = { text: "Hit", tone: "new" };

        if (isPromo || isChef) item.classList.add("is-promoted");
        if (isSpicy) item.classList.add("is-spicy");
        if (isPopular) item.classList.add("is-new");

        if (badge) {
            const badgeEl = document.createElement("span");
            badgeEl.className = `tavern-badge tavern-badge--${badge.tone}`;
            badgeEl.textContent = badge.text;
            item.prepend(badgeEl);
        }

        const name = nameEl ? nameEl.textContent.trim() : "";
        item.dataset.name = name.toLowerCase();

        const tags = [];
        if (isSpicy) tags.push("spicy");
        if (isPromo || isChef) tags.push("sale");
        if (isPopular) tags.push("hit");
        if (["Goat's Secret", "Taleggio and Forest Nuts"].includes(name)) tags.push("veg");
        item.dataset.tags = tags.join(" ");

        if (isPromo || isChef) {
            const oldPriceElement = item.querySelector(".old-price");
            const basePrice = oldPriceElement
                ? extractPriceAsNumber(oldPriceElement.textContent)
                : extractPriceAsNumber(priceEl.textContent);
            const discountPercent = getRandomDiscountPercent();
            item.dataset.discountPercent = String(discountPercent);
            if (oldPriceElement) {
                oldPriceElement.textContent = `${basePrice} UAH`;
            } else {
                const oldPrice = document.createElement("span");
                oldPrice.className = "old-price";
                oldPrice.textContent = `${basePrice} UAH`;
                priceEl.parentElement.insertBefore(oldPrice, priceEl);
            }
            const discountBadge = document.createElement("span");
            discountBadge.className = "discount-percent";
            discountBadge.textContent = `-${discountPercent}%`;
            priceEl.parentElement.insertBefore(discountBadge, priceEl);
            priceEl.classList.add("current-price");
            priceEl.textContent = `Price: ${getDiscountedPrice(basePrice, discountPercent)} UAH`;
        }

        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "tavern-add";
        addButton.setAttribute("aria-label", `Add ${name} to cart`);
        addButton.textContent = "+";
        addButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const priceSource = item.querySelector(".current-price") || priceEl;
            addToCart(name, priceSource ? priceSource.textContent : "", "Pizza");
        });
        item.append(addButton);
    });
}

decoratePizzaItems();
organizeFeaturedProducts(pizzaList, ".pizza-item", "pizza");
organizeFeaturedProducts(coffeeList, ".coffee-item", "coffee");

const pizzaSearch = document.querySelector("#pizza-search");
const pizzaChips = document.querySelectorAll("[data-pizza-filter]");
const pizzaFilterbar = document.querySelector("#pizza-filterbar");
const pizzaFilterToggle = document.querySelector("#pizza-filter-toggle");
let activePizzaFilter = "all";

function applyPizzaFilters() {
    if (!pizzaList) return;
    const query = (pizzaSearch?.value || "").trim().toLowerCase();
    pizzaList.querySelectorAll(".pizza-item").forEach((item) => {
        const matchesQuery = !query || (item.dataset.name || "").includes(query);
        const tags = (item.dataset.tags || "").split(" ");
        const matchesFilter = activePizzaFilter === "all" || tags.includes(activePizzaFilter);
        item.closest("li").hidden = !(matchesQuery && matchesFilter);
    });
    updateFeaturedDivider(pizzaList);
}

pizzaChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        activePizzaFilter = chip.dataset.pizzaFilter;
        pizzaChips.forEach((button) => button.classList.toggle("is-active", button === chip));
        applyPizzaFilters();
    });
});

if (pizzaSearch) {
    pizzaSearch.addEventListener("input", () => {
        applyPizzaFilters();
        updateCategorySuggestions(pizzaSection);
    });
}

if (pizzaFilterToggle && pizzaFilterbar) {
    pizzaFilterToggle.addEventListener("click", () => {
        const isOpen = pizzaFilterbar.classList.toggle("filters-open");
        pizzaFilterToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

function getCategoryCardName(card) {
    if (card.classList.contains("coffee-item")) return getCoffeeDisplayName(card);
    const nameEl = card.querySelector(".pizza-name");
    return nameEl ? nameEl.textContent.trim() : "";
}

function organizeFeaturedProducts(list, itemSelector, category) {
    if (!list) return;

    const items = Array.from(list.querySelectorAll(itemSelector));
    const isSale = (item) => category === "pizza"
        ? item.classList.contains("promo-item")
        : Array.from(item.querySelectorAll(".tavern-badge")).some((badge) => badge.textContent.trim().toLowerCase() === "sale");
    const sales = items.filter(isSale);
    const featured = sales.length ? sales : items.filter((item) => {
        const labels = Array.from(item.querySelectorAll(".tavern-badge")).map((badge) => badge.textContent.trim().toLowerCase());
        return labels.includes("new") || labels.includes("hit") || item.classList.contains("popular-item");
    });

    if (!featured.length || featured.length === items.length) return;

    const featuredSet = new Set(featured);
    const entries = items.map((item) => {
        const node = item.closest("li") || item;
        node.classList.toggle("featured-product", featuredSet.has(item));
        return { item, node };
    });
    const divider = document.createElement(category === "pizza" ? "li" : "div");
    divider.className = "featured-divider";
    divider.setAttribute("aria-hidden", "true");

    list.append(
        ...entries.filter(({ item }) => featuredSet.has(item)).map(({ node }) => node),
        divider,
        ...entries.filter(({ item }) => !featuredSet.has(item)).map(({ node }) => node)
    );
    updateFeaturedDivider(list);
}

function updateFeaturedDivider(list) {
    const divider = list?.querySelector(":scope > .featured-divider");
    if (!divider) return;

    const entries = Array.from(list.children).filter((entry) => entry !== divider);
    const hasVisibleFeatured = entries.some((entry) => entry.classList.contains("featured-product") && !entry.hidden);
    const hasVisibleOther = entries.some((entry) => !entry.classList.contains("featured-product") && !entry.hidden);
    divider.hidden = !hasVisibleFeatured || !hasVisibleOther;
}

function updateCategorySuggestions(section) {
    if (!section) return;
    const wrap = section.querySelector(".tavern-search-wrap");
    const input = wrap?.querySelector(".tavern-search");
    const list = wrap?.querySelector(".tavern-suggest");
    if (!wrap || !input || !list) return;

    const query = input.value.trim().toLowerCase();
    const cards = Array.from(section.querySelectorAll(".coffee-item, .pizza-item"));
    list.innerHTML = "";

    if (!query) {
        list.hidden = true;
        return;
    }

    const matches = cards.filter((card) => getCategoryCardName(card).toLowerCase().includes(query));

    if (matches.length === 0) {
        const empty = document.createElement("li");
        empty.className = "tavern-suggest-empty";
        empty.textContent = "Nothing found";
        list.append(empty);
        list.hidden = false;
        return;
    }

    matches.slice(0, 8).forEach((card) => {
        const li = document.createElement("li");
        li.className = "tavern-suggest-item";
        li.setAttribute("role", "option");
        li.textContent = getCategoryCardName(card);
        li.addEventListener("mousedown", (event) => {
            event.preventDefault();
            input.value = getCategoryCardName(card);
            if (section.id === "pizza-section") applyPizzaFilters();
            if (section.id === "coffee-section") applyCoffeeFilters();
            if (section.id === "dessert-section") applyDessertFilters();
            list.hidden = true;
            openProductDetail(card);
        });
        list.append(li);
    });

    list.hidden = false;
}

document.addEventListener("mousedown", (event) => {
    if (event.target.closest(".tavern-search-wrap")) return;
    document.querySelectorAll(".tavern-suggest").forEach((list) => list.hidden = true);
});

["#dessert-section", "#alcohol-section"].forEach((selector) => {
    const section = document.querySelector(selector);
    const input = section?.querySelector(".tavern-search");
    if (input) {
        input.addEventListener("input", () => updateCategorySuggestions(section));
    }
});

renderCart();
