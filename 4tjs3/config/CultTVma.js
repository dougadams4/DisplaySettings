(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.culttvmanshop.com",
            alias: "CultTVma",
            GA_UA: "UA-21858861-1",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='See Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Recommended for you",
                productStyle: "product4T product4THome",
                divSelect: "#homeHeader > table:first",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=0&maxy=0",
                maxImageHeight: 150,
                showRatings: false,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("table:has(td td.price):last, td.titles").hide();
                    }
                },
                inCart: false
            }, {
                enable: false,
                resultType: 4,
                startPos: 12,
                numItems: 6,
                caption: "Top Sellers",
                productStyle: "product4T product4THome",
                divSelect: "td.data > div:last",
                divPosition: "above",
                carousel: {
                    items: 3,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=0&maxy=0",
                maxImageHeight: 150,
                showRatings: false,
                wrapper: "<table width='100%' class='home'><tr><td></td></tr></table>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 6,
                numItems: 9,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#rTabs",
                divPosition: "above",
                carousel: {
                    items: 3,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=0&maxy=0",
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 10,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".accessoriesBlock, .relatedBlock",
                    divPosition: "below",
                    carousel: {
                        items: 3,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    imageSize: "&maxx=0&maxy=0",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<div class='PD24T'></div>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).hide();
                        }
                    },
                    inCart: false
                }],
            Search: [{
                enable: false,
                resultType: 0,
                numItems: 10,
                caption: "More ideas...",
                productStyle: "product4T product4TSearch",
                divSelect: "form[name=frmsortby]",
                divPosition: "above",
                carousel: {
                    items: 5,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=0&maxy=0",
                maxImageHeight: 100,
                showRatings: false,
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && window.location.href.match("bymfg");
                    }
                },
                wrapper: "<tr><td colspan='5'></td></tr>",
                inCart: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#itemsBlock",
                divPosition: "above",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=0&maxy=0",
                maxImageHeight: 100,
                showRatings: false,
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && !(_4TellBoost.Service.catId == '10' || _4TellBoost.Service.catId == '134' || _4TellBoost.Service.catId == '135');
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 15,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                orientation: "horizontal",
                divSelect: ".third-party-payment",
                divPosition: "below",
                carousel: {
                    items: 5,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=0&maxy=0",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("tr:has(table.alternative):last").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
