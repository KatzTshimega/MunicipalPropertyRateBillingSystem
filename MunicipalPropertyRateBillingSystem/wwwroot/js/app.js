/*
Template Name: StarCode & Dashboard Template
Author: StarCode Kh
Version: 1.1.0
Website: https://StarCode Kh.in/
Contact: StarCode Kh@gmail.com
File: Main Js File
*/

// const { document } = require("postcss"); // This line is likely commented out in original too.
var navbarMenuHTML = document.querySelector(".app-menu").innerHTML;
var moreMenuWidth = 150;
let scrollbarElement = '';
var default_lang = "en"; // set Default Language
var language = localStorage.getItem("language") ? localStorage.getItem("language") : default_lang;

function initLanguage() {
    // Set new language
    (language === null) ? setLanguage(default_lang) : setLanguage(language);
    var languages = document.getElementsByClassName("language");
    languages && Array.from(languages).forEach(function (dropdown) {
        dropdown.addEventListener("click", function (event) {
            setLanguage(dropdown.getAttribute("data-lang"));
        });
    });
}

function setLanguage(lang) {
    if (document.getElementById("header-lang-img")) {
        if (lang == "en") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/us.svg";
        } else if (lang == "sp") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/es.svg";
        } else if (lang == "gr") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/de.svg";
        } else if (lang == "it") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/it.svg";
        } else if (lang == "ru") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/ru.svg";
        } else if (lang == "ch") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/china.svg";
        } else if (lang == "fr") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/fr.svg";
        } else if (lang == "ar") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/ae.svg";
        } else if (lang == "jp") {
            document.getElementById("header-lang-img").src = "assets/images/flags/20/jp.svg";
        } else if (lang == "ar") { // Duplicate 'ar' condition, likely a copy-paste error in original
            document.getElementById("header-lang-img").src = "assets/images/flags/20/ae.svg";
        }
        localStorage.setItem("language", lang);
        language = localStorage.getItem("language");
        getLanguage();
    }
}

// Multi language setting
function getLanguage() {
    language == null ? setLanguage(default_lang) : false;
    var request = new XMLHttpRequest();
    // Instantiating the request object
    request.open("GET", "assets/lang/" + language + ".json");
    // Defining event listener for readystatechange event
    request.onreadystatechange = function () {
        // Check if the request is compete and was successful
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            Object.keys(data).forEach(function (key) {
                var elements = document.querySelectorAll("[data-key='" + key + "']");
                Array.from(elements).forEach(function (elem) {
                    elem.textContent = data[key];
                });
            });
        }
    };
    // Sending the request to the server
    request.send();
}

function updateHorizontalMenus() {
    const navbarMenu = document.querySelector(".app-menu");
    const dataLayout = document.documentElement.getAttribute("data-layout");
    if (navbarMenu) {
        navbarMenu.innerHTML = navbarMenuHTML;
        if (dataLayout != "vertical")
            document.documentElement.setAttribute("data-sidebar-size", "lg");
        else
            document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
    }
    const navbarNav = document.querySelector(".navbar-header");
    // count width of horizontal menu
    const fullWidthOfMenu = navbarNav.clientWidth - moreMenuWidth;
    const extraMenuName = "More";
    const menuData = document.querySelectorAll("ul#navbar-nav > li");
    let newMenus = "";
    let splitItem = "";
    let menusWidth = 0;

    Array.prototype.forEach.call(menuData, function (item, index) {
        menusWidth += item.offsetWidth;
        if (menusWidth > fullWidthOfMenu && fullWidthOfMenu != 0 && dataLayout && dataLayout !== "vertical" && window.innerWidth > 767) {
            newMenus += item.outerHTML;
            item.remove();
        } else {
            splitItem = item;
        }

        if (index + 1 === menuData.length) {
            if (splitItem.insertAdjacentHTML && newMenus) {
                splitItem.insertAdjacentHTML(
                    "afterend",
                    `<li class="relative group-data-[layout=horizontal]:shrink-0 group/sm more-menu">\
                            <a class="relative dropdown-button flex items-center ltr:pl-3 rtl:pr-3 ltr:pr-5 rtl:pl-5 mx-3 my-1 group/menu-link text-vertical-menu-item-font-size font-normal transition-all duration-150 ease-linear rounded-md py-2.5 text-vertical-menu-item hover:text-vertical-menu-item-hover hover:bg-vertical-menu-item-bg-hover [&.active]:text-vertical-menu-item-active [&.active]:bg-vertical-menu-item-bg-active group-data-[sidebar=dark]:text-vertical-menu-item-dark group-data-[sidebar=dark]:hover:text-vertical-menu-item-hover-dark group-data-[sidebar=dark]:dark:hover:text-custom-500 group-data-[layout=horizontal]:dark:hover:text-custom-500 group-data-[sidebar=dark]:hover:bg-vertical-menu-item-bg-hover-dark group-data-[sidebar=dark]:dark:hover:bg-zink-600 group-data-[sidebar=dark]:[&.active]:text-vertical-menu-item-active-dark group-data-[sidebar=dark]:[&.active]:bg-vertical-menu-item-bg-active-dark group-data-[sidebar=brand]:text-vertical-menu-item-brand group-data-[sidebar=brand]:hover:text-vertical-menu-item-hover-brand group-data-[sidebar=brand]:hover:bg-vertical-menu-item-bg-hover-brand group-data-[sidebar=brand]:[&.active]:bg-vertical-menu-item-bg-active-brand group-data-[sidebar=brand]:[&.active]:text-vertical-menu-item-active-brand group-data-[sidebar=modern]:text-vertical-menu-item-modern group-data-[sidebar=modern]:hover:bg-vertical-menu-item-bg-hover-modern group-data-[sidebar=modern]:hover:text-vertical-menu-item-hover-modern group-data-[sidebar=modern]:[&.active]:bg-vertical-menu-item-bg-active-modern group-data-[sidebar=modern]:[&.active]:text-vertical-menu-item-active-modern group-data-[sidebar-size=md]:block group-data-[sidebar-size=md]:text-center group-data-[sidebar-size=sm]:group-hover/sm:w-[calc(theme('spacing.vertical-menu-sm')_*_3.63)] group-data-[sidebar-size=sm]:group-hover/sm:bg-vertical-menu group-data-[sidebar-size=sm]:group-data-[sidebar=dark]:group-hover/sm:bg-vertical-menu-dark group-data-[sidebar-size=sm]:group-data-[sidebar=modern]:group-hover/sm:bg-vertical-menu-modern group-data-[sidebar-size=sm]:group-data-[sidebar=brand]:group-hover/sm:bg-vertical-menu-brand group-data-[sidebar-size=sm]:my-0 group-data-[sidebar-size=sm]:rounded-b-none group-data-[layout=horizontal]:m-0 group-data-[layout=horizontal]:ltr:pr-8 group-data-[layout=horizontal]:rtl:pl-8 group-data-[layout=horizontal]:hover:bg-transparent group-data-[layout=horizontal]:[&.active]:bg-transparent [&.dropdown-button]:before:absolute [&.dropdown-button]:[&.show]:before:content-['\ea4e'] [&.dropdown-button]:before:content-['\ea6e'] [&.dropdown-button]:before:font-remix ltr:[&.dropdown-button]:before:right-2 rtl:[&.dropdown-button]:before:left-2 [&.dropdown-button]:before:text-16 group-data-[sidebar-size=sm]:[&.dropdown-button]:before:hidden group-data-[sidebar-size=md]:[&.dropdown-button]:before:hidden group-data-[sidebar=dark]:dark:text-zink-200 group-data-[layout=horizontal]:dark:text-zink-200 group-data-[sidebar=dark]:[&.active]:dark:bg-zink-600 group-data-[layout=horizontal]:dark:[&.active]:text-custom-500 rtl:[&.dropdown-button]:before:rotate-180 group-data-[layout=horizontal]:[&.dropdown-button]:before:rotate-90 group-data-[layout=horizontal]:[&.dropdown-button]:[&.show]:before:rotate-0 rtl:[&.dropdown-button]:[&.show]:before:rotate-0" href="#!">\
                                <span class="min-w-[1.75rem] group-data-[sidebar-size=sm]:h-[1.75rem] inline-block text-start text-[16px] group-data-[sidebar-size=md]:block"><i data-lucide="network" class="h-4 group-data-[sidebar-size=sm]:h-5 group-data-[sidebar-size=sm]:w-5 transition group-hover/menu-link:animate-icons fill-slate-100 group-hover/menu-link:fill-blue-200 group-data-[sidebar=dark]:fill-vertical-menu-item-bg-active-dark group-data-[sidebar=dark]:dark:fill-zink-600 group-data-[layout=horizontal]:dark:fill-zink-600 group-data-[sidebar=brand]:fill-vertical-menu-item-bg-active-brand group-data-[sidebar=modern]:fill-vertical-menu-item-bg-active-modern group-data-[sidebar=dark]:group-hover/menu-link:fill-vertical-menu-item-bg-active-dark group-data-[sidebar=dark]:group-hover/menu-link:dark:fill-custom-500/20 group-data-[layout=horizontal]:dark:group-hover/menu-link:fill-custom-500/20 group-data-[sidebar=brand]:group-hover/menu-link:fill-vertical-menu-item-bg-active-brand group-data-[sidebar=modern]:group-hover/menu-link:fill-vertical-menu-item-bg-active-modern group-data-[sidebar-size=md]:block group-data-[sidebar-size=md]:mx-auto group-data-[sidebar-size=md]:mb-2"></i></span> <span class="group-data-[sidebar-size=sm]:pl-10 align-middle group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:hidden" data-key="t-more">` + extraMenuName + `</span>
                            </a>
                            <div class="extra-menu dropdown-content group-data-[sidebar-size=sm]:left-vertical-menu-sm group-data-[sidebar-size=sm]:w-[calc(theme('spacing.vertical-menu-sm')_*_2.8)] group-data-[sidebar-size=sm]:absolute group-data-[sidebar-size=sm]:rounded-b-sm bg-vertical-menu group-data-[sidebar=dark]:bg-vertical-menu-dark group-data-[sidebar=dark]:dark:bg-zink-700 group-data-[sidebar=brand]:bg-vertical-menu-brand group-data-[sidebar=modern]:bg-transparent group-data-[layout=horizontal]:md:absolute group-data-[layout=horizontal]:top-full group-data-[layout=horizontal]:md:w-44 group-data-[layout=horizontal]:py-2 group-data-[layout=horizontal]:rounded-b-md group-data-[layout=horizontal]:md:shadow-lg group-data-[layout=horizontal]:md:shadow-slate-500/10 group-data-[layout=horizontal]:dark:bg-zink-700 group-data-[layout=horizontal]:dark:md:shadow-zink-600/20 hidden group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:rounded-br-md group-data-[sidebar-size=sm]:shadow-lg group-data-[sidebar-size=sm]:shadow-slate-700/10 group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:rounded-br-md">
                            <ul class="ltr:pl-[1.75rem] rtl:pr-[1.75rem] group-data-[sidebar-size=md]:ltr:pl-0 group-data-[sidebar-size=md]:rtl:pr-0 group-data-[sidebar-size=sm]:ltr:pl-0 group-data-[sidebar-size=sm]:rtl:pr-0 group-data-[sidebar-size=sm]:py-2 group-data-[layout=horizontal]:ltr:pl-0 group-data-[layout=horizontal]:rtl:pr-0">
                                <ul class="ltr:pl-[1.75rem] rtl:pr-[1.75rem] group-data-[sidebar-size=md]:ltr:pl-0 group-data-[sidebar-size=md]:rtl:pr-0 group-data-[sidebar-size=sm]:ltr:pl-0 group-data-[sidebar-size=sm]:rtl:pr-0 group-data-[sidebar-size=sm]:py-2 group-data-[layout=horizontal]:ltr:pl-0 group-data-[layout=horizontal]:rtl:pr-0">
                                    ` + newMenus + `
                                </ul>
                            </div>
                        </li>`
                );
            }
        }
        lucide.createIcons();
    });

    applyScrollbarLogic();
    // menuPosSetOnClickNHover(); // Commented out in original, keep as is
    initActiveMenu(); // This function call is critical for persistence
    handleDropdownMenu();
    setTimeout(() => {
        navbarMenu.classList.remove("group-data-[layout=horizontal]:opacity-0");
    }, 500);
    if (dataLayout != "vertical")
        document.documentElement.removeAttribute("data-sidebar-size");
}

/**
 * Initializes the active menu item and opens its parent dropdowns on page load or menu update.
 * This ensures the current page link remains highlighted and its containing dropdowns stay open.
 */
function initActiveMenu() {
    // Get the current page's path. This will correctly identify the page regardless of domain.
    const currentPath = window.location.pathname;

    // Find all menu links within the .app-menu container
    const menuLinks = document.querySelectorAll('.app-menu a');

    menuLinks.forEach(link => {
        // First, remove the 'active' class from all links to ensure only the current one is highlighted.
        link.classList.remove('active');

        const linkHref = link.getAttribute('href');

        // Check if the link's href exists, is not a dropdown toggle ('#!'), and
        // if the current page path ends with the link's href (for flexible matching).
        // This allows links like "/dashboard" to match "/admin/dashboard" if that's the current URL segment.
        if (linkHref && linkHref !== '#!' && currentPath.endsWith(linkHref)) {
            // Apply the 'active' class to the current page link
            link.classList.add('active');

            // Now, traverse up the DOM to open all parent dropdowns
            let parentDropdownContent = link.closest('.dropdown-content');
            while (parentDropdownContent) {
                // Remove 'hidden' and add 'opacity-100' to make the dropdown content visible
                parentDropdownContent.classList.remove('hidden');
                parentDropdownContent.classList.add('opacity-100');

                // Find the dropdown button (the 'a' tag with class 'dropdown-button')
                // directly preceding this dropdown content and mark it as 'show'.
                const dropdownButton = parentDropdownContent.previousElementSibling;
                if (dropdownButton && dropdownButton.classList.contains('dropdown-button')) {
                    dropdownButton.classList.add('show');
                }

                // Move up to the next parent dropdown content to ensure all ancestors are opened.
                parentDropdownContent = parentDropdownContent.parentElement.closest('.dropdown-content');
            }
        }
    });
}

// custom sidebar menu collapse
function handleDropdownMenu() {
    const dropdownToggleButtons = document.querySelector("#scrollbar")?.querySelectorAll('.dropdown-button');
    dropdownToggleButtons.forEach((button, index) => {
        const content = button.nextElementSibling;
        button.addEventListener('click', (event) => {
            if (!content) {
                return;
            }

            // Prevent default for dropdown toggles (href="#!") to avoid page reload
            if (button.getAttribute('href') === '#!') {
                event.preventDefault();
            }

            // Iterate over all open dropdowns and close those that are not the currently clicked one,
            // AND are not an ancestor or descendant of the currently active menu path.
            // This prevents unintended collapsing of the currently highlighted path.
            document.querySelector("#scrollbar")?.querySelectorAll('.dropdown-button.show').forEach((otherButton) => {
                const otherContent = otherButton.nextElementSibling;
                const isCurrentActivePath = button.classList.contains('active') || button.closest('.active') || content.contains(document.querySelector('.app-menu a.active'));

                // Only close `otherContent` if it's not the `content` being clicked AND
                // it's not an ancestor/descendant of the clicked dropdown/active path
                // AND it's not part of the active menu path
                if (otherButton !== button && !content.contains(otherContent) && !otherContent.contains(content) && !isCurrentActivePath) {
                    otherButton?.classList.remove('show');
                    otherContent?.classList.add('hidden');
                    otherContent?.classList.remove('opacity-100');
                }
            });


            // Toggle the clicked dropdown's visibility and 'show' state
            content?.classList.toggle('hidden');
            (content?.classList.contains("hidden")) ? button?.classList.remove('show') : button?.classList.add('show');
            content?.classList.toggle('opacity-100');

            // --- Original horizontal menu overflow handling logic ---
            setTimeout(() => {
                var dropdownMenu = button;
                const subMenus = (dropdownMenu.nextElementSibling) ? dropdownMenu.nextElementSibling : dropdownMenu.parentElement.nextElementSibling;
                if (document.documentElement.getAttribute("data-layout") == "horizontal" && subMenus.closest(".extra-menu") && !subMenus.classList.contains("extra-menu")) {
                    if (dropdownMenu && subMenus) {
                        var dropdownOffset = subMenus.getBoundingClientRect();
                        var dropdownWidth = subMenus.offsetWidth;
                        var dropdownHeight = subMenus.offsetHeight;

                        var screenWidth = window.innerWidth;
                        var screenHeight = window.innerHeight;

                        var maxDropdownX = dropdownOffset.left + dropdownWidth;
                        var maxDropdownY = dropdownOffset.top + dropdownHeight;

                        var isDropdownOffScreen = (maxDropdownX > screenWidth) || (maxDropdownY > screenHeight);

                        if (isDropdownOffScreen) {
                            if (subMenus.classList.contains("group-data-[layout=horizontal]:left-full")) {
                                subMenus.classList.remove("group-data-[layout=horizontal]:left-full")
                                subMenus.classList.add("group-data-[layout=horizontal]:right-full")
                            } else {
                                subMenus.classList.add("group-data-[layout=horizontal]:left-full")
                                subMenus.classList.remove("group-data-[layout=horizontal]:right-full")
                            }
                        } else {
                            subMenus.classList.add("group-data-[layout=horizontal]:left-full")
                            subMenus.classList.remove("group-data-[layout=horizontal]:right-full")
                        }
                    }
                }
            }, 10);

            // --- Original vertical layout overflow handling logic ---
            const isRightOverflow = content?.getBoundingClientRect()?.right > window.innerWidth;
            if (document.documentElement.getAttribute("data-layout") === "vertical") {
                if (!isRightOverflow) {
                    content.style.right = 'auto';
                    content.style.left = '0';
                } else {
                    content.style.right = '0';
                    content.style.left = 'auto';
                }
            }
        });

        // --- Original initial overflow positioning logic for horizontal menu on load/resize ---
        var dropdownMenu = button;
        const subMenus = (dropdownMenu.nextElementSibling) ? dropdownMenu.nextElementSibling : dropdownMenu.parentElement.nextElementSibling;
        if (subMenus && (subMenus.classList.contains("group-data-[layout=horizontal]:left-full") || subMenus.classList.contains("group-data-[layout=horizontal]:right-full"))) {
            if (dropdownMenu && subMenus) {
                var dropdownOffset = subMenus.getBoundingClientRect();
                var dropdownWidth = subMenus.offsetWidth;
                var dropdownHeight = subMenus.offsetHeight;

                var screenWidth = window.innerWidth;
                var screenHeight = window.innerHeight;

                var maxDropdownX = dropdownOffset.left + dropdownWidth;
                var maxDropdownY = dropdownOffset.top + dropdownHeight;

                var isDropdownOffScreen = (maxDropdownX > screenWidth) || (maxDropdownY > screenHeight);
                if (isDropdownOffScreen) {
                    if (subMenus.classList.contains("group-data-[layout=horizontal]:left-full")) {
                        subMenus.classList.remove("group-data-[layout=horizontal]:left-full")
                        subMenus.classList.add("group-data-[layout=horizontal]:right-full")
                    }
                } else if (subMenus.classList.contains("group-data-[layout=horizontal]:right-full")) {
                    subMenus.classList.add("group-data-[layout=horizontal]:left-full")
                    subMenus.classList.remove("group-data-[layout=horizontal]:right-full")
                }
            }
        }
    });
}

function removeActiveMenu(content) {
    // This function's core logic has been integrated and refined within `handleDropdownMenu`'s click event listener.
    // If this specific `removeActiveMenu` function is called elsewhere, ensure its behavior is still desired.
    document.querySelector("#scrollbar")?.querySelectorAll('.dropdown-button.show').forEach((aTag) => {
        if (!Object.is(aTag?.nextElementSibling, content)) {
            aTag?.classList.remove('show');
            aTag?.nextElementSibling?.classList.add('hidden');
            aTag?.nextElementSibling?.classList.remove('opacity-100');
        }
    });
}

function updateParentActive(button) {
    if (button?.closest(".dropdown-content")) {
        button.closest(".dropdown-content").classList.remove("hidden");
        button.closest(".dropdown-content").classList.remove('opacity-100');
        button.closest(".dropdown-content").previousElementSibling?.classList.add("show");
        updateParentActive(button.closest(".dropdown-content").previousElementSibling)
    }
}

function toggleHamburgerMenu() {
    var windowSize = document.documentElement.clientWidth;
    var verticalOverlay = document.getElementById("sidebar-overlay");

    if (windowSize > 768)
        document.querySelector(".hamburger-icon").classList.toggle("open");

    //For collapse vertical menu
    if (document.documentElement.getAttribute("data-layout") === "vertical") {
        if (windowSize <= 1025 && windowSize >= 768) {
            document.documentElement.getAttribute("data-sidebar-size") == "sm" ?
                document.documentElement.setAttribute("data-sidebar-size", "lg") :
                document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize > 1025) {
            document.documentElement.getAttribute("data-sidebar-size") == sessionStorage.getItem("data-sidebar-size") ?
                document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size") == 'sm' ? 'lg' : 'sm') :
                document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
        } else if (windowSize < 768) {
            // document.getElementById("sidebar-overlay").classList.remove("hidden")
            document.body.classList.add("overflow-hidden");
            if (verticalOverlay.classList.contains("hidden")) {
                verticalOverlay.classList.remove("hidden");
                document.querySelector(".app-menu").classList.remove("hidden");
            }
            document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
        applyScrollbarLogic();
        handleDropdownMenu();
    } else {
        if (windowSize < 768) {
            // document.getElementById("sidebar-overlay").classList.remove("hidden")
            document.body.classList.add("overflow-hidden");
            if (verticalOverlay.classList.contains("hidden")) {
                verticalOverlay.classList.remove("hidden");
                document.querySelector(".app-menu").classList.remove("hidden");
            }
        }
    }
}

function hideShowLayoutOptions(dataLayout) {
    if (dataLayout == "horizontal") {
        if (document.getElementById("customizerButton")) {
            document.getElementById("sidebar-size").style.display = "none";
            document.getElementById("sidebar-color").style.display = "none";
            document.getElementById("navigation-type").style.display = "none";
            document.documentElement.removeAttribute("data-sidebar-size");
            document.documentElement.removeAttribute("data-sidebar");
            document.documentElement.removeAttribute("data-navbar");
        }
    } else {
        if (document.getElementById("customizerButton")) {
            document.getElementById("sidebar-size").style.display = "block";
            document.getElementById("sidebar-color").style.display = "block";
            document.getElementById("navigation-type").style.display = "block";
            document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
            document.documentElement.setAttribute("data-sidebar", sessionStorage.getItem("data-sidebar"));
            document.documentElement.setAttribute("data-navbar", sessionStorage.getItem("data-navbar"));
        }
    }
}

function isLoadBodyElement() {
    var windowSize = document.documentElement.clientWidth;
    var verticalOverlay = document.getElementById("sidebar-overlay");
    if (verticalOverlay) {
        verticalOverlay.addEventListener("click", function () {
            if (!verticalOverlay.classList.contains("hidden")) {
                if (windowSize <= 768) {
                    document.querySelector(".app-menu").classList.add("hidden");
                    document.body.classList.remove("overflow-hidden");
                } else {
                    document.documentElement.getAttribute("data-sidebar-size") == "sm" ?
                        document.documentElement.setAttribute("data-sidebar-size", "lg") :
                        document.documentElement.setAttribute("data-sidebar-size", "sm");
                }
                verticalOverlay.classList.add("hidden");
            }
        });
    }
}

function windowResizeHover() {
    var windowSize = document.documentElement.clientWidth;
    if (windowSize < 1025 && windowSize >= 768) {
        document.body.classList.remove("overflow-hidden");
        document.querySelector(".app-menu").classList.add("hidden");

        if (sessionStorage.getItem("data-layout") == "vertical") {
            document.documentElement.setAttribute("data-sidebar-size", "sm");
        }

        if (document.querySelector(".hamburger-icon")) {
            document.querySelector(".hamburger-icon").classList.add("open");
        }

        if (sessionStorage.getItem("data-layout") == "horizontal") {
            updateHorizontalMenus();
        }
    } else if (windowSize >= 1025) {
        document.body.classList.remove("overflow-hidden");
        document.querySelector(".app-menu").classList.add("hidden");

        if (sessionStorage.getItem("data-layout") == "vertical") {
            document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
        }

        if (sessionStorage.getItem("data-layout") == "horizontal") {
            updateHorizontalMenus();
        }

        if (document.querySelector(".hamburger-icon")) {
            document.querySelector(".hamburger-icon").classList.remove("open");
        }
    } else if (windowSize < 768) {
        if (sessionStorage.getItem("data-layout") != "horizontal") {
            document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
        if (document.querySelector(".hamburger-icon")) {
            document.querySelector(".hamburger-icon").classList.add("open");
        }
    }
}

/*** Set Default value in session storage ***/

function setDefaultAttribute() {
    if (!sessionStorage.getItem("defaultAttribute")) {
        var attributesValue = document.documentElement.attributes;
        var isLayoutAttributes = {};
        Array.from(attributesValue).forEach(function (x) {
            if (x && x.nodeName && x.nodeName != "undefined") {
                var nodeKey = x.nodeName;
                isLayoutAttributes[nodeKey] = x.nodeValue;
                sessionStorage.setItem(nodeKey, x.nodeValue);
            }
        });
        sessionStorage.setItem("defaultAttribute", JSON.stringify(isLayoutAttributes));
        layoutSwitch(isLayoutAttributes);
    } else {
        var isLayoutAttributes = {};
        var attributesToRetrieve = [
            "data-layout",
            "data-skin",
            "data-mode",
            "dir",
            "data-content",
            "data-sidebar-size",
            "data-navbar",
            "data-sidebar",
            "data-topbar",
        ];

        if (sessionStorage.getItem("data-layout") === "horizontal") {
            attributesToRetrieve = attributesToRetrieve.filter(attribute => attribute !== "data-sidebar" && attribute !== "data-sidebar-size");
        }

        attributesToRetrieve.forEach(function (attribute) {
            isLayoutAttributes[attribute] = sessionStorage.getItem(attribute);
        });
        layoutSwitch(isLayoutAttributes);
    }

}
/*** Set value updateRadio id ***/
function updateRadio(radioId) {
    document.getElementById(radioId).checked = true;
}
/*** Set value Attribute ***/
function setAttrItemAndTag(attr, val) {
    document.documentElement.setAttribute(attr, val)
    sessionStorage.setItem(attr, val);
}

/*** remove active class ***/

function removeActiveClass(selector) {
    selector.forEach(function (otherButton) {
        otherButton.classList.remove('active');
    });
}

function lightDarkMode() {
    var lightDarkBtn = document.getElementById('light-dark-mode');
    lightDarkBtn.addEventListener('click', () => {
        if (sessionStorage.getItem("data-mode") === "light") {
            // set attributes
            setAttrItemAndTag("data-mode", "dark");
            setAttrItemAndTag("data-sidebar", "dark");
            setAttrItemAndTag("data-topbar", "dark");

            // set activation
            updateActiveBtn("sidebarColorTwo");
            updateActiveBtn("topbarColorTwo");
            updateActiveBtn("dataModeTwo");
        } else {
            // set attributes
            setAttrItemAndTag("data-mode", "light");
            setAttrItemAndTag("data-sidebar", "light");
            setAttrItemAndTag("data-topbar", "light");

            // set activation
            updateActiveBtn("sidebarColorOne");
            updateActiveBtn("topbarColorOne");
            updateActiveBtn("dataModeOne");
        }
    })
}

function layoutSetting() {
    const dataLayout = document.querySelectorAll('input[name="dataLayout"]');
    dataLayout.forEach(function (radioButton) {
        radioButton.addEventListener('click', function () {
            setAttrItemAndTag("data-layout", this.value);
            updateRadio(this.id)
            updateHorizontalMenus();
            hideShowLayoutOptions(this.value);
        });
    });

    const dataLayoutSkin = document.querySelectorAll('input[name="dataLayoutSkin"]');
    dataLayoutSkin.forEach(function (radioButton) {
        radioButton.addEventListener('click', function () {
            setAttrItemAndTag("data-skin", this.value);
            updateRadio(this.id)
        });
    });

    const dataMode = document.querySelectorAll('button[name="dataMode"]');
    dataMode.forEach(function (radioButton) {
        radioButton.addEventListener('click', function () {
            removeActiveClass(dataMode)
            setAttrItemAndTag("data-mode", this.value);
            // The provided snippet cuts off here. Assume it continues to set sidebar and topbar modes.
            // ... (original code continues) ...
        });
    });
}

// Ensure initActiveMenu is called on DOMContentLoaded for initial page load
document.addEventListener('DOMContentLoaded', () => {
    initActiveMenu();
});