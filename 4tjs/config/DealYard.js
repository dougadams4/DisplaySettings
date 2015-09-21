(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.DealYard.com",
            alias: "DealYard",
            GA_UA: "UA-220180-4",
            platform: "4TellADN.js",
            custom: true,
            addCartBtnAtts: "<input type='submit' class='AddToCartButton' value=''/>",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 12,
                    caption: "Top Sellers",
                    captionStyle: "product4TCaption product4TCaption2",
                    productStyle: "product4T product4THome",
                    divSelect: "#dailydeal-banner",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<div class='HOME4T'></div>",
                    rawJS: {
                        preDisplay: function () {
                            $("#featuredbox_outside").hide();
                            $("#righthome").insertBefore($("#dailydeal-banner").nextAll("h2")).css("float", "right");
                        }
                    },
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: false
                },
                tout2: {
                    enable: true,
                    resultType: "0,3",
                    numItems: "2,2",
                    caption: "More ideas for you...",
                    productStyle: "product4T product4TPD2",
                    captionStyle: "product4TCaption product4TCaption2",
                    divSelect: "#upsell_outside",
                    divPosition: "replace",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<div class='PD24T'></div>",
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "#pnlCartSummarySubTotals > table",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div class='VC4T'></div>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $("#pnlUpsellProducts").hide();
                            $(tout.divSelect).css({ width: "30%" });
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
