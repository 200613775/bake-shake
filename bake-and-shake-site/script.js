
/* Builds the page from content.js */
(function () {
  "use strict";

  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (key) {
        if (key === "text") node.textContent = props[key];
        else if (key === "class") node.className = props[key];
        else node.setAttribute(key, props[key]);
      });
    }
    (children || []).forEach(function (child) {
      node.appendChild(child);
    });
    return node;
  }

  function $(id) {
    return document.getElementById(id);
  }

  function slug(t) {
    return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  var ICONS = { cup: 1, glass: 1, berry: 1, cake: 1 };

  function icon(name, cls) {
    var n = ICONS[name] ? name : "cake";
    var wrap = document.createElement("span");

    wrap.innerHTML =
      '<svg' + (cls ? ' class="' + cls + '"' : "") +
      ' aria-hidden="true"><use href="#i-' + n + '"/></svg>';

    return wrap.firstChild;
  }

  var s = SITE;

  // =====================================================
  // HEADER AND HERO
  // =====================================================

  document.title = s.name + " | Bubble tea, shakes and desserts in Barrie, Ontario";

  $("siteName").textContent = s.name;
  $("footBrand").textContent = s.name;
  $("heroTitle").textContent = s.heroTitle;
  $("heroText").textContent = s.intro;

  if (s.heroImage) {
    $("heroBg").style.backgroundImage =
      "url('" + s.heroImage.replace(/'/g, "%27") + "')";

    $("heroBg").className = "hero-bg on";
  }

  var firstOrder = (s.orderLinks || []).filter(function (l) {
    return l.url;
  })[0];

  if (firstOrder) {
    $("heroOrder").href = firstOrder.url;
    $("heroOrder").target = "_blank";
    $("heroOrder").rel = "noopener";
  } else {
    $("heroOrder").style.display = "none";
    $("navOrder").style.display = "none";
  }

  // =====================================================
  // STORY SECTIONS
  // =====================================================

  (s.stories || []).forEach(function (st) {
    var art = el("div", {
      class: "story-art",
      style: "--tint:var(--t-" + (st.tint || "pink") + ")"
    });

    if (st.image) {
      art.appendChild(el("img", {
        src: st.image,
        alt: "",
        loading: "lazy"
      }));
    } else {
      (st.icons || ["cake"]).slice(0, 2).forEach(function (n) {
        art.appendChild(icon(n, ""));
      });
    }

    var text = el("div", {}, [
      el("h2", { text: st.title }),
      el("p", { text: st.text })
    ]);

    $("stories").appendChild(
      el("div", { class: "story" }, [text, art])
    );
  });

  // =====================================================
  // PHOTOS
  // =====================================================

  if (s.photos && s.photos.length) {
    $("photos").hidden = false;

    s.photos.slice(0, 3).forEach(function (p) {
      $("photos").appendChild(el("img", {
        src: p.src,
        alt: p.alt || "",
        loading: "lazy"
      }));
    });
  }

  // =====================================================
  // MENU DATA HELPERS
  // Supports the new nested content.js structure.
  // =====================================================

  function getCategories(mainCategory) {
    return mainCategory.categories || [];
  }

  function getAllItems(mainCategory) {
    var all = [];

    getCategories(mainCategory).forEach(function (category) {
      (category.items || []).forEach(function (item) {
        all.push({
          item: item,
          category: category
        });
      });
    });

    return all;
  }

  function getItemCount(mainCategory) {
    return getAllItems(mainCategory).length;
  }

  function tint(cat) {
    return "--tint:var(--t-" + (cat.tint || "pink") + ")";
  }

  
  // =====================================================
  // CUSTOMER FAVOURITES
  // Rotating image and product name only
  // =====================================================

  var favouriteItems = [];

  s.menu.forEach(function (mainCategory, mainIndex) {

    getCategories(mainCategory).forEach(function (category, categoryIndex) {

      (category.items || []).forEach(function (item) {

        // Only show selected favourites that have an image.
        if (!item.popular || !item.image) return;

        favouriteItems.push({
          item: item,
          mainIndex: mainIndex,
          categoryIndex: categoryIndex,
          mainCategory: mainCategory
        });

      });

    });

  });

  var favouriteIndex = 0;
  var favouriteTimer = null;

  function showFavourite(index) {

    var list = $("lovedList");
    list.innerHTML = "";

    if (!favouriteItems.length) {
      $("loved").style.display = "none";
      return;
    }

    var favourite = favouriteItems[index];
    var item = favourite.item;

    var card = el("button", {
      class: "pick",
      type: "button",
      style: tint(favourite.mainCategory),
      "aria-label": "View " + item.name
    });

    // Product image
    var pic = el("div", {
      class: "pic"
    });

    pic.appendChild(el("img", {
      src: item.image,
      alt: item.name,
      loading: "lazy"
    }));

    card.appendChild(pic);

    // Product name only
    card.appendChild(el("h3", {
      text: item.name
    }));

    // Open the correct menu category when clicked
    card.addEventListener("click", function () {
      openSheet(
        favourite.mainIndex,
        favourite.categoryIndex
      );
    });

    list.appendChild(card);

  }

  if (favouriteItems.length) {

    $("loved").style.display = "";

    showFavourite(favouriteIndex);

    // Automatically change the favourite every 4 seconds.
    if (favouriteItems.length > 1) {

      favouriteTimer = setInterval(function () {

        favouriteIndex =
          (favouriteIndex + 1) % favouriteItems.length;

        showFavourite(favouriteIndex);

      }, 4000);

    }

  } else {

    $("loved").style.display = "none";

  }

  // =====================================================
  // MENU DIALOG
  // Three main sections:
  // 1. Desserts
  // 2. Drinks
  // 3. Breakfast Menu
  // =====================================================

  var dlg = $("menuDialog");

  var current = 0;
  var currentSubcategory = 0;

  // Render the products inside a subcategory.
  function renderProducts(mainCategory, category) {

    var grid = $("sheetCards");
    grid.innerHTML = "";

    var items = category.items || [];

    // Empty category placeholder
    if (!items.length) {

      var empty = el("div", {
        class: "empty-menu"
      });

      empty.appendChild(icon(category.icon || mainCategory.icon, "ico"));

      empty.appendChild(el("h3", {
        text: "Coming Soon!"
      }));

      empty.appendChild(el("p", {
        text: "We're preparing something delicious. Check back soon!"
      }));

      grid.appendChild(empty);

      return;
    }

    // Product cards
    items.forEach(function (item) {

      var pic = el("div", {
        class: "pic"
      });

      if (item.image) {
        pic.appendChild(el("img", {
          src: item.image,
          alt: item.name,
          loading: "lazy"
        }));
      } else {
        pic.appendChild(icon(category.icon || mainCategory.icon, ""));
      }

      var body = el("div", {
        class: "body"
      }, [
        el("h4", {
          text: item.name
        })
      ]);

      if (item.description) {
        body.appendChild(el("p", {
          class: "desc",
          text: item.description
        }));
      }

      if (item.price) {
        body.appendChild(el("span", {
          class: "price",
          text: item.price
        }));
      }

      var card = el("div", {
        class: "card"
      }, [pic, body]);

      if (item.popular) {
        card.appendChild(el("span", {
          class: "tag",
          text: "Favourite"
        }));
      }

      grid.appendChild(card);

    });
  }

  // Render the subcategory filter buttons.
  function renderSubcategoryTabs(mainCategory, selectedIndex) {

    var tabs = $("sheetTabs");
    tabs.innerHTML = "";

    getCategories(mainCategory).forEach(function (category, index) {

      var tab = el("button", {
        type: "button",
        text: category.id,
        "aria-pressed": String(index === selectedIndex)
      });

      tab.addEventListener("click", function () {
        renderSheet(current, index);
      });

      tabs.appendChild(tab);

    });

    // Scroll the selected subcategory into view.
    var selectedTab = tabs.children[selectedIndex];

    if (selectedTab) {
      selectedTab.scrollIntoView({
        inline: "center",
        block: "nearest"
      });
    }
  }

  // Render the complete menu sheet.
  function renderSheet(mainIndex, subcategoryIndex) {

    current = mainIndex;

    var mainCategory = s.menu[mainIndex];
    var categories = getCategories(mainCategory);

    if (!categories.length) return;

    currentSubcategory =
      typeof subcategoryIndex === "number" ? subcategoryIndex : 0;

    if (currentSubcategory >= categories.length) {
      currentSubcategory = 0;
    }

    var category = categories[currentSubcategory];

    // Main category styling
    dlg.setAttribute("style", tint(mainCategory));

    // Main category title and icon
    $("sheetIcon").innerHTML = "";

    $("sheetIcon").appendChild(
      icon(mainCategory.icon, "ico")
    );

    $("sheetTitle").textContent = mainCategory.id;

    // Display subcategory note
    $("sheetNote").textContent = category.note || mainCategory.note || "";

    $("sheetNote").style.display =
      $("sheetNote").textContent ? "" : "none";

    // Display subcategory filters
    renderSubcategoryTabs(mainCategory, currentSubcategory);

    // Display products
    renderProducts(mainCategory, category);

    // Footer
    $("sheetFoot").textContent = s.menuFootnote || "";

    // Scroll products to top
    $("sheetBody").scrollTop = 0;
  }

  // Open menu dialog
  function openSheet(mainIndex, subcategoryIndex) {

    renderSheet(mainIndex, subcategoryIndex);

    if (!dlg.open) {

      if (dlg.showModal) {
        dlg.showModal();
      } else {
        dlg.setAttribute("open", "");
      }

      document.documentElement.classList.add("lock");
    }
  }

  // Close menu dialog
  function closeSheet() {

    if (dlg.close) {
      dlg.close();
    } else {
      dlg.removeAttribute("open");
    }

    document.documentElement.classList.remove("lock");
  }

  // =====================================================
  // MAIN MENU CARDS
  // Only three main sections are displayed.
  // =====================================================

  s.menu.forEach(function (mainCategory, index) {

    var categories = getCategories(mainCategory);

    var pic = el("div", {
      class: "pic"
    });

    if (mainCategory.image) {

      pic.appendChild(el("img", {
        src: mainCategory.image,
        alt: "",
        loading: "lazy"
      }));

    } else {

      pic.appendChild(icon(mainCategory.icon, ""));

    }

    var countText =
      categories.length +
      (categories.length === 1 ? " categories" : " categories");

    var body = el("div", {
      class: "body"
    }, [
      el("h3", {
        text: mainCategory.id
      }),
      el("span", {
        class: "count",
        text: countText
      })
    ]);

    var tile = el("button", {
      class: "tile",
      type: "button",
      style: tint(mainCategory),
      "aria-label": "Open " + mainCategory.id
    });

    tile.appendChild(pic);
    tile.appendChild(body);

    tile.addEventListener("click", function () {
      openSheet(index, 0);
    });

    $("menuList").appendChild(tile);

  });

  $("menuFoot").textContent = s.menuFootnote || "";

  // =====================================================
  // MENU DIALOG EVENTS
  // =====================================================

  $("sheetClose").addEventListener("click", closeSheet);

  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) {
      closeSheet();
    }
  });

  dlg.addEventListener("close", function () {
    document.documentElement.classList.remove("lock");
  });

  // =====================================================
  // OPENING HOURS
  // =====================================================

  var DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  var LONG = [
    "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"
  ];

  var SHORT = [
    "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
  ];

  function clock(t) {

    var p = t.split(":");
    var h = +p[0];
    var m = p[1];

    var ap = h >= 12 ? "pm" : "am";

    h = h % 12 || 12;

    return h + (m && m !== "00" ? ":" + m : "") + " " + ap;
  }

  function label(v) {

    if (!v || /closed/i.test(v)) {
      return "Closed";
    }

    var r = v.split("-");

    return clock(r[0]) + " to " + clock(r[1]);
  }

  function groupedHours(week) {

    var out = [];
    var i = 0;

    while (i < 7) {

      var j = i;

      while (
        j + 1 < 7 &&
        label(week[DAYS[j + 1]]) === label(week[DAYS[i]])
      ) {
        j++;
      }

      var name =
        i === j
          ? LONG[i]
          : (j === i + 1
            ? SHORT[i] + " and " + SHORT[j]
            : SHORT[i] + " to " + SHORT[j]);

      out.push([name, label(week[DAYS[i]])]);

      i = j + 1;
    }

    return out;
  }

  function toMins(t) {

    var p = t.split(":");

    return (+p[0]) * 60 + (+p[1]);
  }

  function status(week) {

    try {

      var parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Toronto",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23"
      }).formatToParts(new Date());

      var o = {};

      parts.forEach(function (p) {
        o[p.type] = p.value;
      });

      var day = {
        Mon: 0,
        Tue: 1,
        Wed: 2,
        Thu: 3,
        Fri: 4,
        Sat: 5,
        Sun: 6
      }[o.weekday];

      var mins = (+o.hour) * 60 + (+o.minute);

      var v = week[DAYS[day]];

      if (!v || /closed/i.test(v)) {
        return {
          open: false,
          text: "Closed today"
        };
      }

      var r = v.split("-");

      if (mins >= toMins(r[0]) && mins < toMins(r[1])) {
        return {
          open: true,
          text: "Open now, until " + clock(r[1])
        };
      }

      if (mins < toMins(r[0])) {
        return {
          open: false,
          text: "Closed now, opens at " + clock(r[0])
        };
      }

      return {
        open: false,
        text: "Closed for today"
      };

    } catch (e) {
      return null;
    }
  }

  // =====================================================
  // LOCATIONS
  // =====================================================

  s.locations.forEach(function (loc) {

    var card = el("div", {
      class: "loc"
    }, [
      el("h3", {
        text: loc.name
      })
    ]);

    var st = status(loc.week);

    if (st) {

      card.appendChild(el("p", {
        class: "status" + (st.open ? " open" : ""),
        text: st.text
      }));

    }

    var full = loc.street + ", " + loc.city;

    card.appendChild(el("p", {
      text: full
    }));

    var dl = el("dl");

    groupedHours(loc.week).forEach(function (row) {

      dl.appendChild(el("dt", {
        text: row[0]
      }));

      dl.appendChild(el("dd", {
        text: row[1]
      }));

    });

    card.appendChild(dl);

    var acts = el("div", {
      class: "acts"
    });

    var mapUrl =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Bake & Shake " + full);

    acts.appendChild(el("a", {
      class: "btn line",
      href: mapUrl,
      target: "_blank",
      rel: "noopener",
      text: "Get directions"
    }));

    if (loc.phone) {

      acts.appendChild(el("a", {
        class: "btn line",
        href: "tel:" + loc.phone.replace(/[^0-9+]/g, ""),
        text: "Call " + loc.phone
      }));

    }

    card.appendChild(acts);

    $("locList").appendChild(card);

  });

  // =====================================================
  // ORDER LINKS
  // =====================================================

  var shown = 0;

  s.orderLinks.forEach(function (l) {

    if (!l.url) return;

    shown++;

    $("orderButtons").appendChild(el("a", {
      class: "btn",
      href: l.url,
      target: "_blank",
      rel: "noopener",
      text: l.label
    }));

  });

  if (!shown) {
    $("order").style.display = "none";
  }

  // =====================================================
  // SOCIAL LINKS AND FOOTER
  // =====================================================

  s.social.forEach(function (l) {

    if (!l.url) return;

    $("social").appendChild(el("a", {
      href: l.url,
      target: "_blank",
      rel: "noopener",
      text: l.label
    }));

  });

  if (s.email) {

    $("social").appendChild(el("a", {
      href: "mailto:" + s.email,
      text: s.email
    }));

  }

  $("copyright").textContent =
    "\u00A9 " + new Date().getFullYear() +
    " " + s.name + ", Barrie, Ontario";

  // =====================================================
  // EMAIL SIGN-UP
  // =====================================================

  // var form = $("signupForm");

  // form.addEventListener("submit", function (e) {

  //   e.preventDefault();

  //   var msg = $("formMsg");

  //   var body = new URLSearchParams(
  //     new FormData(form)
  //   ).toString();

  //   fetch("/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     body: body
  //   })

  //     .then(function (r) {

  //       if (!r.ok) {
  //         throw new Error("no");
  //       }

  //       form.reset();

  //       msg.textContent = "Thanks, you're on the list.";

  //     })

  //     .catch(function () {

  //       msg.textContent =
  //         "Sign-up works once the site is live on Netlify. Please try again then.";

  //     });

  // });

  // =====================================================
  // SEARCH ENGINE DATA
  // =====================================================

  try {

    var data = s.locations.map(function (loc) {

      var d = {
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        name: s.name + " (" + loc.name + ")",
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.street,
          addressLocality: "Barrie",
          addressRegion: "ON",
          addressCountry: "CA"
        },
        servesCuisine: ["Bubble tea", "Desserts"]
      };

      if (loc.phone) {
        d.telephone = loc.phone;
      }

      return d;

    });

    var tag = document.createElement("script");

    tag.type = "application/ld+json";
    tag.text = JSON.stringify(data);

    document.head.appendChild(tag);

  } catch (e) {}

})();
