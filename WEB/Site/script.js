const welcomeScreen = document.querySelector("#welcome-screen");
const menuBlock = document.querySelector("#menu-block");
const header = document.querySelector(".header");
const menuTabs = document.querySelector("#menu-tabs");
const menuContent = document.querySelector("#menu-content");
const menuStatus = document.querySelector(".menu-status");
const menuImage = menuContent.querySelector(".menu-image");
const menuPizzaName = menuContent.querySelector(".menu-pizza-name");
const menuPizzaPrice = menuContent.querySelector(".menu-pizza-price");
const pizzaList = document.querySelector(".pizza-list");
const pizzaSection = document.querySelector("#pizza-section");
const coffeeSection = document.querySelector("#coffee-section");
const coffeeList = document.querySelector("#coffee-list");
const dessertSection = document.querySelector("#dessert-section");
const alcoholSection = document.querySelector("#alcohol-section");

const coffeeCatalog = [
    ["Aeropress.jpg", "Аеропрес", 95],
    ["Airish.jpg", "Айріш", 135],
    ["Black.jpg", "Чорна кава", 75],
    ["Cappucino.jpg", "Капучино", 110],
    ["Cortado.jpg", "Кортадо", 100],
    ["Cube.jpg", "Кава Куб", 115],
    ["Dipeo.jpg", "Діпео", 105],
    ["Doppio.jpg", "Допіо", 95],
    ["Double nitro.jpg", "Подвійний нітро", 145],
    ["Drop.jpg", "Дріп-кава", 100],
    ["Dzezva.jpg", "Джезва", 90],
    ["Espresso tonik.jpg", "Еспресо-тонік", 125],
    ["Espresso-con-passa.jpg", "Еспресо кон панна", 105],
    ["Espresso.jpg", "Еспресо", 75],
    ["Flat White.jpg", "Флет-вайт", 115],
    ["Frappe.jpg", "Фрапе", 125],
    ["French-press.jpg", "Френч-прес", 100],
    ["Honey.jpg", "Кава з медом", 120],
    ["Ice blue.jpg", "Айс блю", 130],
    ["Irish.jpg", "Ірландська кава", 135],
    ["Kremex.jpg", "Кремекс", 100],
    ["Latte.jpg", "Лате", 115],
    ["Lemon.jpg", "Лимонна кава", 120],
    ["Lungo.jpg", "Лунго", 80],
    ["Maciato.jpg", "Макіато", 100],
    ["Mocco.jpg", "Мокко", 125],
    ["Nitro.jpg", "Нітро кава", 135],
    ["Nuts.jpg", "Горіхова кава", 130],
    ["Piccolo.jpg", "Пікколо", 105],
    ["Purove Kalita.jpg", "Пуровер Калита", 110],
    ["Romano.jpg", "Романо", 95],
    ["Symphony.jpg", "Симфонія", 140],
    ["Turkish.jpg", "Кава по-турецьки", 90],
    ["Venska.jpg", "Віденська кава", 125],
    ["Vietnamese.jpg", "В'єтнамська кава", 120],
];

const coffeeVariants = {
    "Airish.jpg": { image: "Airish(with ice).jpg", price: 135, label: "Айріш з льодом", toggleLabel: "Зі льодом" },
    "Espresso.jpg": { image: "Espresso(big).jpg", price: 90, label: "Espresso (big)", toggleLabel: "Більша" },
    "French-press.jpg": { image: "French-press(double).jpg", price: 120, label: "French-press (double)", toggleLabel: "Більша" },
    "Kremex.jpg": { image: "Kremex(big).jpg", price: 120, label: "Kremex (big)", toggleLabel: "Більша" },
    "Mocco.jpg": { image: "Mocco(with ice).jpg", price: 130, label: "Мокко з льодом", toggleLabel: "Зі льодом" },
    "Romano.jpg": { image: "Romano(with ice).jpg", price: 115, label: "Романо з льодом", toggleLabel: "Зі льодом" },
};

// Tavern badges + filter tags per drink. badge: { text, tone }. tags: filter keys.
const coffeeMeta = {
    "Aeropress.jpg": { badge: { text: "Хіт", tone: "sale" }, tags: ["hot", "coffee"], promoted: true },
    "Airish.jpg": { badge: { text: "Хіт", tone: "sale" }, tags: ["coffee"] },
    "Black.jpg": { badge: { text: "Нове", tone: "new" }, tags: ["hot", "coffee"] },
    "Cappucino.jpg": { tags: ["hot", "coffee"] },
    "Cortado.jpg": { tags: ["hot", "coffee"] },
    "Cube.jpg": { tags: ["cold"] },
    "Dipeo.jpg": { tags: ["hot", "coffee"] },
    "Doppio.jpg": { tags: ["hot", "coffee"] },
    "Double nitro.jpg": { badge: { text: "Акція", tone: "sale" }, tags: ["cold", "coffee"], promoted: true },
    "Drop.jpg": { badge: { text: "Нове", tone: "new" }, tags: ["hot", "coffee"] },
    "Dzezva.jpg": { tags: ["hot", "coffee"] },
    "Espresso tonik.jpg": { tags: ["cold", "coffee"] },
    "Espresso-con-passa.jpg": { tags: ["hot", "coffee"] },
    "Espresso.jpg": { tags: ["hot", "coffee"] },
    "Flat White.jpg": { tags: ["hot", "coffee"] },
    "Frappe.jpg": { badge: { text: "Хіт", tone: "sale" }, tags: ["cold"], promoted: true },
    "French-press.jpg": { tags: ["hot", "coffee"] },
    "Honey.jpg": { tags: ["hot", "coffee"] },
    "Ice blue.jpg": { tags: ["cold"] },
    "Irish.jpg": { badge: { text: "Гостре", tone: "spicy" }, tags: ["hot", "coffee"], spicy: true },
    "Kremex.jpg": { tags: ["hot", "coffee"] },
    "Latte.jpg": { tags: ["hot", "coffee"] },
    "Lemon.jpg": { tags: ["hot", "coffee"] },
    "Lungo.jpg": { tags: ["hot", "coffee"] },
    "Maciato.jpg": { tags: ["hot", "coffee"] },
    "Mocco.jpg": { tags: ["hot", "coffee"] },
    "Nitro.jpg": { badge: { text: "Нове", tone: "new" }, tags: ["cold", "coffee"], isNew: true },
    "Nuts.jpg": { tags: ["hot", "coffee"] },
    "Piccolo.jpg": { tags: ["hot", "coffee"] },
    "Purove Kalita.jpg": { tags: ["hot", "coffee"] },
    "Romano.jpg": { tags: ["hot", "coffee"] },
    "Symphony.jpg": { badge: { text: "Фірмова", tone: "sale" }, tags: ["hot", "coffee"], promoted: true },
    "Turkish.jpg": { tags: ["hot", "coffee"] },
    "Venska.jpg": { tags: ["hot", "coffee"] },
    "Vietnamese.jpg": { tags: ["cold", "coffee"] },
};

coffeeCatalog.sort((firstCoffee, secondCoffee) => firstCoffee[0].localeCompare(secondCoffee[0], "en"));

coffeeCatalog.forEach(([imageName, ukLabel, price]) => {
    const fileName = imageName.replace(/\.jpg$/i, "");
    // Prefer the Ukrainian display label; fall back to the file name.
    const coffeeName = ukLabel || fileName;
    const coffeeItem = document.createElement("article");
    coffeeItem.className = "pizza-item coffee-item";
    const variant = coffeeVariants[imageName];
    const meta = coffeeMeta[imageName] || {};

    if (meta.promoted) coffeeItem.classList.add("is-promoted");
    if (meta.spicy) coffeeItem.classList.add("is-spicy");
    if (meta.isNew) coffeeItem.classList.add("is-new");

    // Searchable by both the Ukrainian name and the Latin file name.
    coffeeItem.dataset.name = `${coffeeName} ${fileName}`.toLowerCase();
    if (meta.promoted) coffeeItem.dataset.promo = "true";

    const badgeMarkup = meta.badge
        ? `<span class="tavern-badge tavern-badge--${meta.badge.tone}">${meta.badge.text}</span>`
        : "";

    coffeeItem.innerHTML = `
        ${badgeMarkup}
        <h2 class="pizza-name">${coffeeName}</h2>
        <img src="../Images for it/${imageName}" alt="${coffeeName}" width="400" height="400">
        ${variant ? `<label class="coffee-variant-toggle" aria-label="${variant.toggleLabel}">
            <input class="coffee-variant" type="checkbox">
            <span>${variant.toggleLabel}</span>
        </label>` : ""}
        <p><strong class="price">Ціна: ${price}</strong></p>
        <button class="tavern-add" type="button" aria-label="Додати ${coffeeName} до чеку">+</button>
    `;
    coffeeList.append(coffeeItem);

    const addButton = coffeeItem.querySelector(".tavern-add");
    addButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const priceElement = coffeeItem.querySelector(".price");
        addToCart(coffeeItem.querySelector(".pizza-name").textContent.trim(), priceElement.textContent, "Кава");
    });

    coffeeItem.dataset.tags = `${(meta.tags || []).join(" ")}${meta.promoted ? " sale" : ""}`;

    if (variant) {
        const coffeeImage = coffeeItem.querySelector("img");
        const coffeeTitle = coffeeItem.querySelector(".pizza-name");
        const coffeePrice = coffeeItem.querySelector(".price");

        coffeeItem.querySelectorAll(".coffee-variant").forEach((checkbox) => {
            checkbox.addEventListener("click", (event) => {
                event.stopPropagation();
            });

            checkbox.addEventListener("change", () => {
                const isLarge = checkbox.checked;
                coffeeImage.classList.add("is-changing");

                window.setTimeout(() => {
                    coffeeImage.src = `../Images for it/${isLarge ? variant.image : imageName}`;
                    coffeeImage.alt = isLarge ? variant.label : coffeeName;
                    coffeeTitle.textContent = isLarge ? variant.label : coffeeName;
                    coffeePrice.textContent = `Ціна: ${isLarge ? variant.price : price}`;
                    coffeeImage.classList.remove("is-changing");
                }, 220);
            });
        });
    }
});

// Search + filter chips for the tavern coffee grid.
const coffeeSearch = document.querySelector("#coffee-search");
const coffeeChips = document.querySelectorAll("[data-coffee-filter]");
const coffeeFilterbar = document.querySelector("#coffee-filterbar");
const coffeeFilterToggle = document.querySelector("#coffee-filter-toggle");
let activeCoffeeFilter = "all";

function applyCoffeeFilters() {
    const query = (coffeeSearch?.value || "").trim().toLowerCase();
    coffeeList.querySelectorAll(".coffee-item").forEach((item) => {
        const matchesQuery = !query || item.dataset.name.includes(query);
        const matchesFilter = activeCoffeeFilter === "all"
            || (item.dataset.tags || "").split(" ").includes(activeCoffeeFilter)
            || (activeCoffeeFilter === "sale" && item.dataset.promo === "true");
        item.hidden = !(matchesQuery && matchesFilter);
    });
}

coffeeChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        activeCoffeeFilter = chip.dataset.coffeeFilter;
        coffeeChips.forEach((button) => {
            button.classList.toggle("is-active", button === chip);
        });
        applyCoffeeFilters();
    });
});

if (coffeeSearch) {
    coffeeSearch.addEventListener("input", () => {
        applyCoffeeFilters();
        updateCategorySuggestions(coffeeSection);
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
    // Smoothly fade the intro screen out (item 12).
    document.body.classList.add("welcome-fading");
    welcomeScreen.removeEventListener("click", startWelcome);
    welcomeScreen.removeEventListener("keydown", handleWelcomeKeydown);
    menuBlock.removeEventListener("click", startWelcome);
    menuBlock.removeEventListener("keydown", handleMenuKeydown);
    // Keep the very top of the page in view — never center a mid-page anchor.
    window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1400);
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

function switchProductSection(activeName) {
    const sections = [pizzaSection || pizzaList, coffeeSection, dessertSection, alcoholSection].filter(Boolean);
    const sectionMap = {
        pizza: pizzaSection || pizzaList,
        coffee: coffeeSection,
        desserts: dessertSection,
        alcohol: alcoholSection,
    };
    const activeSection = sectionMap[activeName] || null;
    window.clearTimeout(categorySwitchTimer);
    document.body.classList.add("category-switching");

    sections.forEach((section) => {
        section.hidden = false;
        section.classList.remove("category-visible");
        section.classList.toggle("category-hidden", section !== activeSection);
    });

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            if (activeSection) {
                activeSection.classList.add("category-visible");
                activeSection.classList.remove("category-hidden");
            }
        });
    });

    // Match the 0.35s fade+slide transition above (item 12).
    categorySwitchTimer = window.setTimeout(() => {
        sections.forEach((section) => {
            section.hidden = section !== activeSection;
        });
        document.body.classList.remove("category-switching");
    }, 400);
}

// Mobile hamburger that drops the category tabs down below 768px.
const tavernTabsToggle = document.createElement("button");
tavernTabsToggle.type = "button";
tavernTabsToggle.className = "tavern-tabs-toggle";
tavernTabsToggle.setAttribute("aria-label", "Меню розділів");
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
        {
            transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`,
            transformOrigin: "top left",
        },
        {
            transform: "translate(0, 0) scale(1, 1)",
            transformOrigin: "top left",
        },
    ], {
        duration: 850,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
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

        if (isFirstCategoryChoice) {
            moveMenuTabsToHeader();
        }

        document.body.classList.add("menu-choice-made");
        document.body.classList.remove("page-end-reached");
        updatePageEndVisibility();
        menuContent.classList.toggle("show-pizza", isPizzaTab);
        document.body.classList.toggle("pizza-open", isPizzaTab);
        document.body.classList.toggle("coffee-theme", isCoffeeTab);
        document.body.classList.toggle("drawer-open", isCoffeeTab);
        document.body.classList.toggle("dessert-open", selectedTab === "desserts");
        document.body.classList.toggle("alcohol-open", selectedTab === "alcohol");
        // Mark the active tab so it can be underlined/highlighted.
        document.querySelectorAll("[data-menu-tab]").forEach((otherTab) => {
            otherTab.classList.toggle("is-active", otherTab === tab);
        });
        if (isFirstCategoryChoice) {
            window.setTimeout(() => {
                switchProductSection(selectedTab);
            }, 560);
        } else {
            switchProductSection(selectedTab);
        }
        if (menuImage) {
            menuImage.hidden = !isPizzaTab;
        }
        if (menuPizzaName) {
            menuPizzaName.hidden = !isPizzaTab;
        }
        if (menuPizzaPrice) {
            menuPizzaPrice.hidden = !isPizzaTab;
        }
        menuStatus.textContent = isPizzaTab || isCoffeeTab ? "" : "В розробці...";

        // Every category page must open scrolled to the very top so its own
        // hero banner is visible first — never a mid-page anchor.
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

// Purely cosmetic: hide the sticky header after a few downward scrolls.
// NOTE: never preventDefault() or force-scroll here — that created a scroll
// floor pinned to a mid-page anchor. Scrolling must stay completely free.
window.addEventListener("wheel", (event) => {
    if (!document.body.classList.contains("welcome-started")) {
        return;
    }

    if (event.deltaY > 0) {
        downwardScrollCount += 1;
        if (downwardScrollCount >= 4) {
            document.body.classList.add("header-hidden");
        }
    } else if (event.deltaY < 0) {
        downwardScrollCount = 0;
        document.body.classList.remove("header-hidden");
    }
}, { passive: true });

const menuItems = document.querySelectorAll(".pizza-item, .coffee-item");

const detailScreen = document.createElement("section");
detailScreen.className = "pizza-detail";
detailScreen.innerHTML = `
    <button class="pizza-detail-close" type="button" aria-label="Закрити деталі">&times;</button>
    <div class="pizza-detail-card">
        <h2 class="pizza-detail-name"></h2>
        <img class="pizza-detail-image" alt="">
        <p class="pizza-detail-price"></p>
        <div class="pizza-detail-actions">
            <button class="pizza-detail-button pizza-detail-order" type="button">До замовлення</button>
            <button class="pizza-detail-button pizza-detail-more" type="button">Детальніше</button>
        </div>
        <p class="pizza-detail-description" hidden>
            Неймовірна піца з найсвіжіших інгредієнтів, пікантним смаком і атмосферою справжньої гастрономічної пригоди.
        </p>
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
const bottomInfo = document.querySelector(".bottom-info");

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

    if (numericValues.length >= 3) {
        return numericValues[numericValues.length - 2];
    }

    return numericValues[numericValues.length - 1];
}

function renderCart() {
    cartItems.innerHTML = "";

    const visibleCartItems = activeCartFilter === "all"
        ? cartState
        : cartState.filter((item) => item.category === activeCartFilter);

    visibleCartItems.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <div class="cart-item-main">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-category">${item.category}</span>
                <span class="cart-item-price">${item.price} грн</span>
            </div>
            <div class="cart-item-controls">
                <span class="cart-item-qty">x${item.quantity}</span>
                <button class="cart-item-remove" type="button" data-name="${item.name}" aria-label="Видалити ${item.name}">×</button>
            </div>
        `;
        cartItems.append(cartItem);
    });

    const totalCount = cartState.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartState.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartCount.textContent = String(totalCount);
    cartTotal.textContent = `${totalPrice} грн`;

    if (totalCount > 0) {
        cartFloat.classList.add("has-items");
        cartToggle.setAttribute("aria-label", `У чеку ${totalCount} товарів`);
        // Cart icon only exists in the UI once the first item is added.
        document.body.classList.add("cart-has-items");
    } else {
        cartFloat.classList.remove("has-items");
        cartToggle.setAttribute("aria-label", "Чек порожній");
        document.body.classList.remove("cart-has-items");
    }

    cartPanel.style.maxHeight = "220px";
    cartPanel.style.overflowY = cartState.length >= 3 ? "auto" : "hidden";

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
        cartFilters.forEach((button) => {
            button.classList.toggle("is-active", button === filterButton);
        });
        renderCart();
    });
});

function addToCart(name, priceValue, category) {
    const existing = cartState.find((item) => item.name === name && item.category === category);

    if (existing) {
        existing.quantity += 1;
    } else {
        cartState.push({
            name,
            price: extractPriceAsNumber(priceValue),
            category,
            quantity: 1,
        });
    }

    renderCart();
    cartPanel.hidden = false;
    cartFloat.classList.add("is-open");

    // Micro-animation: pulse the cart icon + fade the count.
    cartFloat.classList.remove("cart-bump");
    void cartFloat.offsetWidth;
    cartFloat.classList.add("cart-bump");
    window.clearTimeout(cartFloat.bumpTimer);
    cartFloat.bumpTimer = window.setTimeout(() => {
        cartFloat.classList.remove("cart-bump");
    }, 550);
}

function openProductDetail(item) {
    const name = item.querySelector(".pizza-name");
    const image = item.querySelector("img");
    const activePriceElement = item.querySelector(".current-price") || item.querySelector(".price");
    const price = item.querySelector(".promo-price, .price");
    const isCoffee = item.classList.contains("coffee-item");
    const pizzaSize = item.classList.contains("chef-item") ? "50 см" : item.classList.contains("popular-item") ? "40 см" : item.classList.contains("spicy-item") ? "30 см" : "30 см";
    const PizzaInfo = item.classList.contains("chef-item") ? "Солодка, Дика, З свіжих овочів прямо від Шеф-кухара Тимура." : item.classList.contains("popular-item") ? "Любимий вибір любимих клієнтів" : item.classList.contains("spicy-item") ? "Дуже гостра." : "Піца для тих, хто цінує класику та простоту смаку.";
    const howorder = item.classList.contains("chef-item") ? "В подарунок 2 пляшки вина або пива на ваш вибір, до 400 грн." : item.classList.contains("popular-item") ? "Повага вам." : item.classList.contains("spicy-item") ? "Молоко в подарунок." : "Без додаткової пропозиції.";
    const coffeeSize = item.querySelector(".coffee-variant")?.checked ? "Більша версія" : "Стандартна версія";

    detailName.textContent = name.textContent;
    detailName.dataset.category = isCoffee ? "Кава" : "Піца";
    detailImage.src = image.src;
    detailImage.alt = image.alt;
    detailPrice.textContent = activePriceElement ? activePriceElement.textContent.trim() : (price ? price.textContent.trim() : "");
    detailPrice.dataset.priceNumber = String(extractPriceAsNumber(detailPrice.textContent));
    detailDescription.textContent = isCoffee
        ? `Версія: ${coffeeSize}\nКоротко: ${name.textContent.trim()} — ароматна кава для приємної паузи.`
        : `Розмір піци: ${pizzaSize}\nКоротко: ${PizzaInfo}\nЩо дає: ${howorder}`;
    detailDescription.hidden = true;
    detailMoreButton.textContent = "Детальніше";
    detailScreen.classList.add("is-visible");
    document.body.classList.add("detail-open");
}

function closePizzaDetail() {
    detailScreen.classList.remove("is-visible");
    document.body.classList.remove("detail-open");
    detailDescription.hidden = true;
    detailMoreButton.textContent = "Детальніше";
}

menuItems.forEach((item) => {
    item.addEventListener("click", () => openProductDetail(item));
});

closeDetail.addEventListener("click", closePizzaDetail);
detailScreen.addEventListener("click", (event) => {
    if (event.target === detailScreen) {
        closePizzaDetail();
    }
});

detailOrderButton.addEventListener("click", () => {
    const pizzaName = detailName.textContent.trim();
    const pizzaPrice = detailPrice.dataset.priceNumber || detailPrice.textContent.trim();
    addToCart(pizzaName, pizzaPrice, detailName.dataset.category);
    closePizzaDetail();
});

detailMoreButton.addEventListener("click", () => {
    const isHidden = detailDescription.hidden;
    detailDescription.hidden = !isHidden;
    detailMoreButton.textContent = isHidden ? "Сховати" : "Детальніше";
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
    checkoutMessage.hideTimer = window.setTimeout(() => {
        checkoutMessage.hidden = true;
    }, 2500);
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
    if (event.target === deliveryScreen) {
        closeDeliveryScreen();
    }
});

deliveryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    closeDeliveryScreen();
    checkoutMessage.textContent = "В розробці";
    checkoutMessage.hidden = false;
    window.clearTimeout(checkoutMessage.hideTimer);
    checkoutMessage.hideTimer = window.setTimeout(() => {
        checkoutMessage.hidden = true;
    }, 2500);
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
    if (event.target === aboutScreen) {
        closeAboutScreen();
    }
});

/* ==========================================================================
   Pizza page — tavern decorations (badges, add-to-cart, search/filter)
   ========================================================================== */
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
        if (isPromo) badge = { text: "Акція", tone: "sale" };
        else if (isSpicy) badge = { text: "Гостре", tone: "spicy" };
        else if (isChef) badge = { text: "Від шефа", tone: "sale" };
        else if (isPopular) badge = { text: "Хіт", tone: "new" };

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
        // "Вегетаріанська" — суто контентна ознака; позначаємо класичні без м'яса піци.
        if (["Таємниця кози", "Таледжіо і Лісові Горіхи"].includes(name)) tags.push("veg");
        item.dataset.tags = tags.join(" ");

        // Circular + add-to-cart button
        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "tavern-add";
        addButton.setAttribute("aria-label", `Додати ${name} до чеку`);
        addButton.textContent = "+";
        addButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const priceSource = item.querySelector(".current-price") || priceEl;
            addToCart(name, priceSource ? priceSource.textContent : "", "Піца");
        });
        item.append(addButton);
    });
}

decoratePizzaItems();

// Search + filter chips for the tavern pizza grid.
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
}

pizzaChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        activePizzaFilter = chip.dataset.pizzaFilter;
        pizzaChips.forEach((button) => {
            button.classList.toggle("is-active", button === chip);
        });
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

/* ==========================================================================
   SHARED SEARCH AUTOCOMPLETE — works identically for all four categories.
   Each section searches only within its own product list.
   ========================================================================== */
function getCategoryCardName(card) {
    const nameEl = card.querySelector(".pizza-name");
    return nameEl ? nameEl.textContent.trim() : "";
}

// Jump to (and briefly flash) a card when a suggestion is chosen.
function focusCategoryCard(card) {
    if (!card) return;
    const li = card.closest("li");
    if (li) li.hidden = false;
    card.hidden = false;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.remove("tavern-flash");
    void card.offsetWidth;
    card.classList.add("tavern-flash");
    window.setTimeout(() => card.classList.remove("tavern-flash"), 1200);
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

    // Case-insensitive partial match anywhere in the name.
    const matches = cards.filter((card) => getCategoryCardName(card).toLowerCase().includes(query));

    if (matches.length === 0) {
        const empty = document.createElement("li");
        empty.className = "tavern-suggest-empty";
        empty.textContent = "Нічого не знайдено";
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
            event.preventDefault(); // keep focus on the input
            input.value = getCategoryCardName(card);
            // Re-run the grid filter for this category, then jump to the card.
            if (section.id === "pizza-section") applyPizzaFilters();
            if (section.id === "coffee-section") applyCoffeeFilters();
            focusCategoryCard(card);
            list.hidden = true;
        });
        list.append(li);
    });

    list.hidden = false;
}

// Hide any open suggestion dropdown when clicking outside the search wrap.
document.addEventListener("mousedown", (event) => {
    if (event.target.closest(".tavern-search-wrap")) return;
    document.querySelectorAll(".tavern-suggest").forEach((list) => {
        list.hidden = true;
    });
});

// The dessert and alcohol sections have no product data yet — hook their
// searches up anyway so the dropdown + "Нічого не знайдено" behave identically.
["#dessert-section", "#alcohol-section"].forEach((selector) => {
    const section = document.querySelector(selector);
    const input = section?.querySelector(".tavern-search");
    if (input) {
        input.addEventListener("input", () => updateCategorySuggestions(section));
    }
});

renderCart();