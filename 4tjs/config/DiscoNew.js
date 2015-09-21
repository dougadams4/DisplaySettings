(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.discountnewagebooks.com",
            alias: "DiscoNew",
            GA_UA: "UA-604429-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Your Price: ",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 16,
                caption: "Recommended for you...",
                productStyle: "product4T product4THome",
                divSelect: "#midContent tr:first",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                numRows: 2,
                showRatings: false,
                maxImageHeight: 160,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<tr><td><div class='HOME4T'></div></td></tr>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.discountnewagebooks.com/, "");
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "tr:has(tr #listing_main_image_link)",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<tr><td colspan='2'><div class='PD14T'></div></td></tr>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.discountnewagebooks.com/, "");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 8,
                caption: "Customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#REL4T",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.discountnewagebooks.com/, "");
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Customers also bought...",
                productStyle: "product4T product4TCat",
                divSelect: "#frmsortby tr:has(tr tr tr td.titles)",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<tr><td colspan='2'><div class='PD14T'></div></td></tr>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $("table.alternative").length > 15;
                    },
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.discountnewagebooks.com/, "")
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: "table.alternative",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $("td.checkout-headers").attr("class", "product4TCaption").text(tout.caption);
                    },
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.discountnewagebooks.com/, "")
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
