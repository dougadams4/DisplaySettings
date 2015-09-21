jQuery.noConflict();
(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "Crestlin",
            GA_UA: "",
            platform: "4TellDIY.js",
            custom: true,
            addCartBtnAtts: "input type='image'",
            addCartImage: "Themes/Default/Images/btn-view-detail-alt.gif",
            pricePrefix: "As low as ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "Recommended for you...",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: "#ctl00_ctl00_MainContent_uxHome_BestSellers_pnlBestSellerList .TopSelContentBg",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: true,
                showPrice: false,
                maxImageHeight: 120,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $("#ctl00_ctl00_MainContent_uxHome_BestSellers_pnlBestSellerList .RightCurve span").text(tout.caption);
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 4,
                numItems: 15,
                caption: "Featured",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: "#ctl00_ctl00_MainContent_uxHome_newproducts_pnlNPList .TopSelContentBg",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showPrice: false,
                maxImageHeight: 120,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $("#ctl00_ctl00_MainContent_uxHome_newproducts_pnlNPList .RightCurve span").text(tout.caption);
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 2,
                caption: "Customers also bought",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                showPrice: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 15,
                caption: "Customers also viewed",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD2",
                divSelect: "#tout2_pdp_4Tell, #RecentlyViewedProduct",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 120,
                showPrice: false,
                wrapper: "<div class='PD24T'></div>",
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Top Sellers",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TCat",
                divSelect: ".productTiles",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showBuyButton: false,
                wrapper: "<div class='CAT4T'></div>",
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 18,
                caption: "You may also like...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TVC",
                divSelect: "#ctl00_ctl00_MainContent_uxCart_pnlShoppingCart > div:last",
                divPosition: "below",
                carousel: {
                    numVis: 6,
                    circular: true
                },
                maxImageHeight: 120,
                showPrice: false,
                wrapper: "<div class='VC4T'></div>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
