(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.ciudaddemascotas.com",
            alias: "ciudadde",
            GA_UA: "UA-31255605-1",
            platform: "4TellMa.js",
            custom: true,
            addCartBtnAtts: "<button type='button' title='Ver M&aacute;s' class='button btn-cart' ><span><span>ver m&aacute;s</span></span></button>",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Auto: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Our customers also bought...",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: ".products-recommended .products-list",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showPrice: false,
                showRatings: true,
                showBuyButton: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (document.URL.indexOf("/Gatos/") > -1) _4TellBoost.setCatId("556,547,113,469,398,310");
                        else if (document.URL.indexOf("/Perros/") > -1) _4TellBoost.setCatId("557,544,468,309,525,194");
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: false,
            }, {
                enable: false,
             }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
             }],
            AddToCart: [{
                enable: false,
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
