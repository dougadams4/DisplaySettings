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
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 4,
                    rotateRecs: true,
                    caption: "Top Sellers",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4THome",
                    divSelect: "#main4TellContainer",
                    divPosition: "append",
                    showRatings: false,
                    imageSize: "&maxx=80&maxy=80",
                    maxImageHeight: 150,
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Customers also bought...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#ACC4T",
                    divPosition: "replace",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: false,
                    imageSize: "&maxx=80&maxy=80",
                    maxImageHeight: 100,
                    wrapper: "<tr><td colspan='2'><div style='width:622px'></div></td></tr>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 10,
                    caption: "Similar Items",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#pd24TellContainer",
                    divPosition: "append",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=80&maxy=80",
                    maxImageHeight: 100,
                    showRatings: false,
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: true,
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
                    startPos: 8,
                    caption: "You may also like...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TVC",
                    divSelect: "#second4TellContainer",
                    divPosition: "append",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=80&maxy=80",
                    maxImageHeight: 100,
                    showRatings: false,
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
