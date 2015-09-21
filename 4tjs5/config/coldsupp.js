(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.coldsupply.com",
            alias: "coldsupp",
            GA_UA: "UA-43892004-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "<h1>Customers also viewed</h1>",
                productStyle: "product4T product4TPD1",
                divSelect: "#rTabs",
                divPosition: "above",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "<h1>Customers also bought</h1>",
                productStyle: "product4T product4TPD2",
                divSelect: "#rTabs",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 4,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                setHeight: false,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: ".productBlockContainer",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
