(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.cornerstonemantels.com",
            alias: "Cornerst",
            GA_UA: "UA-136847-2",
            platform: "4TellBc.js",
            addCartBtnAtts: "input type='image'",
            addCartImage: "/templates/__custom/images/brown/AddCartButton.gif",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            priceClass: "price2",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "<h2>Our customers also bought...</h2>",
                    captionStyle: "product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#SideNewsletterBox",
                    divPosition: "below",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<div id='PD1Wrap'></div>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    showCaption: false,
                    productStyle: "product4T product4TPD2",
                    divSelect: "#SimilarProductsByCustomerViews .BlockContent",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 150,
                    showRatings: true,
                    rawJS: {
                        preDisplay: function () {
                            $('li#SimilarProductsByCustomerViews_Tab').remove();
                        }
                    },
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            Search: {
                tout1: {
                    enable: false,
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "<h2>You may also like...</h2>",
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "#CartContent + br.Clear",
                    divPosition: "below",
                    maxImageHeight: 150,
                    showRatings: true,
                    wrapper: "<div style='float:left; clear:left;'></div>",
                    rawJS: { preDisplay: function () { $('#SuggestiveCartContent').remove(); } },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
