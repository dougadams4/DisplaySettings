(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.deepmemories.com",
            alias: "DeepMem",
            GA_UA: "UA-604698-2",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false,
                resultType: 1,
                numItems: 12,
                rotateRecs: true,
                caption: "Top Sellers",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: "#featured-scroll",
                divPosition: "replace",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                imageSize: "&maxx=150&maxy=150",
                maxImageHeight: 150,
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".secondary",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                imageSize: "&maxx=80&maxy=80",
                maxImageHeight: 100,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $(".beta-col").insertAfter("#mediaContainer");
                    }
                },
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".relatedBlock",
                    divPosition: "replace",
                    carousel: {
                        itemsCustom: [[0, 2], [400, 4]],
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    imageSize: "&maxx=80&maxy=80",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<div class='PD24T'></div>",
                    rawJS: {
                        preInit: function (tout) {
                        },
                        preDisplay: function () {
                            $(".accessoriesBlock").hide();
                        }
                    },
                    inCart: false
                }],
            Search: [{
                enable: false,
                resultType: 0,
                numItems: 5,
                caption: "More ideas...",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4TSearch",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                imageSize: "&maxx=80&maxy=80",
                maxImageHeight: 100,
                showRatings: false,
                inCart: false
            }],
            Category: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                startPos: 8,
                caption: "You may also like...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: ".chk-buttons",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 3]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=80&maxy=80",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
