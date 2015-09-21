(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.drillcomp.com",
            alias: "drillcom",
            GA_UA: "UA-1460116-1",
            platform: "4TellMv.js",
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><input type='image' src='//www.drillcomp.com/mm5/graphics/interface_images/add_to_cart_button.jpg'></form",
            //addCartImage: "//www.drillcomp.com/mm5/graphics/interface_images/add_to_cart_button.jpg",
            pricePrefix: "Price: ",
            salePricePrefix: "Sale Price: ",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Our Customers Also Bought",
                productStyle: "product4T product4TPD1",
                divSelect: ".proddesc + hr",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<table class='PD14T'><tr><td><div ></div></td></tr></table>",
                rawJS: {},
                inCart: false
            }, {
                enable: false,
                resultType: 3,
                numItems: 4,
                caption: "Similar Items",
                productStyle: "product4T product4TPD2",
                divSelect: "#second4TellContainer",
                divPosition: "append",
                setHeight: true,
                setWidth: false,
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: true,
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
                caption: "More Ideas",
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
                caption: "You May Also Like",
                productStyle: "product4T product4TVC",
                divSelect: ".content_padding > table:last",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<table class='PD14T'><tr><td><div ></div></td></tr></table>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
