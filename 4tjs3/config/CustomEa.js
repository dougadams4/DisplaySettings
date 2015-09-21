(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "http://www.customearpiece.com",
            alias: "CustomEa",
            GA_UA: "UA-30174149-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "div class='4TVP'>View Product</div",
            spacerImage: "/v/vspfiles/templates/147/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/147/images/nophoto.gif",
            pricePrefix: "Price: ",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                    enable: false,
                    resultType: 4,
                    numItems: 16,
                    caption: "Featured Top Sellers",
                    showCaption: false,
                    productStyle: "product4T product4THome",
                    divSelect: "table.v65-productDisplay:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 160,
                    numRows: 2,
                    wrapper: "<table width='100%' id='HOME4T'><tr><td></td></tr></table>",
                    rawJS: {
                    },
                    inCart: false
                }],
           
            ProductDetail: [{
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox:last",
                    divPosition: "below",
                    carousel: {
                       items: 3,
                       itemsCustom: [[0,1],[480,2],[650,3]],
                       scrollPerPage: true,
                       navigation: true,
                       navigationText: false,
                       pagination: false
                    },
                    responsive: {
                      
                    },
                    maxImageHeight: 160,
                    wrapper: "<table width='100%' class='toutWrapper4T PD14T'><td></td></table>",
                    rawJS:{
                  
                          perProduct: function(itemdata) {
                                if(itemdata.title.length > 20) {
                                     itemdata.title = itemdata.title.substring(0,17) + "...";

                                }
                          }

                    },
                    inCart: false
                },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        items: 4,
                        itemsCustom: [[0,1],[480,2],[768,3],[1139,4]],
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    showRatings: true,
                    rawJS:{
                  
                          perProduct: function(itemdata) {
                                if(itemdata.title.length > 20) {
                                     itemdata.title = itemdata.title.substring(0,17) + "...";

                                }
                          }

                    },
                    wrapper: "<table width='100%' class='toutWrapper4T PD24T'><tr><td></td></tr></table>",
                    inCart: false
                }
            }],
            Category: [{
                    enable: false,
                    resultType: 5,
                    numItems: 18,
                    caption: "Top Selling Items",
                    productStyle: "product4T product4TCat",
                    divSelect: ".search_results_section",
                    divPosition: "above",
                    carousel: {
                        items: 8,
                        itemsCustom: [[0,2],[420,3],[480,4],[650,5],[768,6],[1139,8]],
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    showRatings: true,
                    wrapper: "<table class='toutWrapper4T' width='100%'><td></td></table>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $(".pricecolor").length >= 15;
                        },
                        perProduct: function(itemdata) {
                                if(itemdata.title.length > 13) {
                                     itemdata.title = itemdata.title.substring(0,10) + "...";

                                }
                          }
                    },
                    inCart: false
               
            }],
            AddToCart: [{
                    enable: true,
                    resultType: 0,
                    numItems: 20,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "#div_articleid_101",
                    divPosition: "below",
                    carousel: {
                        items: 8,
                        itemsCustom: [[0,2],[420,3],[480,4],[650,5],[768,6],[1139,8]],
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    showRatings: true,
                    wrapper: "<table class='toutWrapper4T' width='100%'><td></td></table>",
                    rawJS:{
                  
                          perProduct: function(itemdata) {
                                if(itemdata.title.length > 13) {
                                     itemdata.title = itemdata.title.substring(0,10) + "...";

                                }
                          }

                    },
                    inCart: true
               
            }]
        }
    };
}(window._4TellBoost, window._4TellBoost.jq || jQuery));

