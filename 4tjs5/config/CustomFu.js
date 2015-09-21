(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.customfurnitureworld.com",
            alias: "CustomFu",
            GA_UA: "UA-10594141-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
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
                    enable: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: false,
                    resultType: 0,
                    numItems: 10,
                    caption: "Our customers also bought...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "tr:has(tr img#large)",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    rawJS: {
                        preDisplay: function () {
                            //$("tr:has(tr .addthis_default_style):last").hide();
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 1,
                    numItems: 10,
                    caption: "More ideas for you",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#tabcontentcontainer",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 5
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    rawJS: {
                        preDisplay: function () {
                            //$("ul#tablist li:last").hide();
                        }
                    },
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
                    productStyle: "product4T product4TVC",
                    divSelect: "#BAR4T",
                    divPosition: "append",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    rawJS: {
                        preInit: function () {
                            $('div#rightcol tr:has(tr input):last').after('<tr><td colspan="5" id="BAR4T"></td><td colspan="1" valign="top"><table id="FOO"></table></td></tr>');
                            var foo = $('div#rightcol tr').filter(':has(tr a[href*=paypal_express]):last, :has(tr img[src*=google]):last, :has(tr input):last');
                            $('#FOO').append(foo);
                            $("tr:has(tr .checkout-headers)").hide();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
