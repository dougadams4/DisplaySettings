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
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 12,
                    caption: "NEW Featured Products",
                    productStyle: "product4T product4THome",
                    divSelect: "td.data td.data > table",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 150,
                    showRatings: false,
                    wrapper: "<table width='100%' class='home'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $("table:has(td td.price):last, td.titles").hide();
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 4,
                    startPos: 12,
                    numItems: 6,
                    caption: "Top Sellers",
                    productStyle: "product4T product4THome",
                    divSelect: "td.data > div:last",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 150,
                    showRatings: false,
                    wrapper: "<table width='100%' class='home'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: "6,0",
                    numItems: "3,6",
                    startPos: "1,1",
                    caption: "Our customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table:has(td.page_headers):last",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=110&maxy=110",
                    showRatings: false,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 10,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REL4T",
                    divPosition: "replace",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    rawJS: {
                        preDisplay: function () {
                            $("#ACC4T").hide();
                        }
                    },
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 10,
                    caption: "More ideas...",
                    productStyle: "product4T product4TSearch",
                    divSelect: "form[name=frmsortby]",
                    divPosition: "above",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && window.location.href.match("bymfg");
                        }
                    },
                    wrapper: "<tr><td colspan='5'></td></tr>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 5,
                    numItems: 12,
                    caption: "More ideas...",
                    productStyle: "product4T product4TCat",
                    divSelect: "#Table3",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && !(_4TellBoost.Service.catId == '10' || _4TellBoost.Service.catId == '134' || _4TellBoost.Service.catId == '135');
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 15,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "tr:has(#Table5)",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<tr><td colspan='5'></td></tr>",
                    rawJS: {
                        preDisplay: function () {
                            $("tr:has(table.alternative):last").hide();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
