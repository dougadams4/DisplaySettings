(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.cooksdirect.com",
            alias: "CookDrct",
            GA_UA: "UA-845389-1",
            platform: "4TellDIY.js",
            addCartBtnAtts: "input type='button' name='submit' value='details'",
            spacerImage: "/images/spacer.gif",
            emptyImage: "//d1qhbfo7yqnkif.cloudfront.net/ajax_search/img/missing-image-75x75.gif",
            viewProd: true,
            priceClass: "price2",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Customers also bought...",
                showCaption: false,
                divSelect: "#tout1_hm_4Tell",
                divPosition: "replace",
                productStyle: "product4T product4THome",
                carousel: {
                    circular: true,
                    numVis: 4
                },
                showRatings: false,
                showPrice: false,
                maxImageHeight: 0,
                wrapper: "<div class='HOME4T'></div>",
                inCart: false
            }, {
                enable: true,
                resultType: 5,
                numItems: 12,
                showCaption: false,
                productStyle: "product4T product4THome2",
                divSelect: "#tout2_hm_4Tell",
                divPosition: "replace",
                carousel: {
                    circular: true,
                    numVis: 2
                },
                numRows: 2,
                maxImageHeight: 120,
                showRatings: false,
                showPrice: false,
                wrapper: "<div class='HOME4T2'></div>",
                inCart: false
            }, {
                enable: true,
                resultType: 5,
                numItems: 12,
                showCaption: false,
                productStyle: "product4T product4THome2",
                divSelect: "#tout3_hm_4Tell",
                divPosition: "replace",
                carousel: {
                    circular: true,
                    numVis: 2
                },
                numRows: 2,
                maxImageHeight: 120,
                showRatings: false,
                showPrice: false,
                wrapper: "<div class='HOME4T2'></div>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought...",
                showCaption: false,
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                productStyle: "product4T product4TPD1",
                carousel: {
                    circular: true,
                    numVis: 4
                },
                showRatings: false,
                showPrice: false,
                maxImageHeight: 0,
                wrapper: "<div class='PD14T' />",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.addProductID($("input[name=prod_id]").val());
                    }
                },
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 15,
                    caption: "",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#tout2_pdp_4Tell",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 5
                    },
                    maxImageHeight: 120,
                    showRatings: false,
                    showPrice: false,
                    wrapper: "<div class='PD14T' />",
                    rawJS: {
                        preInit: function (tout) {
                            var foo = $('div[align=center]:has(img[alt*=Related ])');
                            tout.enable = !(foo && foo.length);
                        }
                    },
                    inCart: false
                }],
            Category: [{
                enable: true,
                resultType: "1",
                numItems: "12",
                fillMode: "topsell",
                caption: "Related Top Sellers...",
                showCaption: false,
                productStyle: "product4T product4TCat",
                divSelect: "#tout3_cat_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 140,
                showBuyButton: true,
                showPrice: false,
                showRatings: false,
                wrapper: "<div class='CAT4T'>  </div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && "692" !== _4TellBoost.Service.catId;
                        $(tout.divSelect).prev("header.headwithline").hide();
                        if ($(tout.divSelect) && $(tout.divSelect).data())
                            _4TellBoost.setCatId($(tout.divSelect).data().category.toString());
                        if (0 === $("#left_column").length) {
                            tout.wrapper = "<div class='CAT24T'>  </div>";
                            tout.numItems = 15; tout.carousel.numVis = 5;
                        }
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).prev("header.headwithline").show();
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 5,
                numItems: 8,
                fillMode: "all",
                caption: "Related Top Sellers...",
                showCaption: false,
                productStyle: "product4T product4TCat",
                divSelect: "#tout1_cat_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 140,
                showBuyButton: true,
                showPrice: false,
                showRatings: false,
                wrapper: "<div class='CAT4T'>  </div>",
                rawJS: {
                    preInit: function (tout) {

                        tout.enable = tout.enable && "1382" !== _4TellBoost.Service.catId;

                        if ($(tout.divSelect) && $(tout.divSelect).data())
                            _4TellBoost.setCatId($(tout.divSelect).data().category.toString());
                        if (0 === $("#left_column").length) {
                            tout.numItems = 15; tout.carousel.numVis = 5;
                            tout.wrapper = "<div class='CAT24T'>  </div>";
                        }
                        $(tout.divSelect).prev("header.headwithline").hide();

                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).prev("header.headwithline").show();
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 15,
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: "#tout1_cart_4Tell",
                divPosition: "replace",
                carousel: {
                    circular: true,
                    numVis: 5
                },
                maxImageHeight: 100,
                showRatings: true,
                showPrice: false,
                wrapper: "<div class='VC4T'>  </div>",
                rawJS: {
                },
                inCart: true
            }],
            QuickCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TQC",
                divSelect: "#tout1_quickcart_4Tell",
                divPosition: "replace",
                maxImageHeight: 100,
                showRatings: true,
                showPrice: false,
                carousel: {
                    numVis: 3,
                    circular: true
                },
                wrapper: "<div class='QC4T'>  </div>",
                inFrame: true,
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Related Top Sellers...",
                showCaption: false,
                productStyle: "product4T product4TCat",
                divSelect: "#tout1_thanks_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                maxImageHeight: 140,
                showBuyButton: true,
                showPrice: false,
                showRatings: false,
                wrapper: "<div class='CAT4T'>  </div>",
                inCart: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
