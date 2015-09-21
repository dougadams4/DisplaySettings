(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.detonashop.com.br/",
            alias: "detonabr",
            GA_UA: "UA-3909265-2",
            platform: "4TellMa.js",
            addCartBtnAtts: "<input type='image' title='Comprar' value='Comprar' />",
            addCartImage:"https://www.detonashop.com.br/0.jpg",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recomendado para você",
                productStyle: "product4T product4TCat",
                divSelect: "#ofertas-principal",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "clientes também compraram",
                productStyle: "product4T product4TPD1",
                divSelect: ".descricaocurta",
                divPosition: "above",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "clientes também viram",
                productStyle: "product4T product4TPD2",
                divSelect: ".product-collateral",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
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
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Mais vendidos relacionados",
                productStyle: "product4T product4TCat",
                divSelect: ".category-products",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 2,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".crosssell",
                divPosition: "replace",
                setHeight: true,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
    $(document).ready(function () {
        if ($(".cms-home").length)
            _4TellBoost.setPageType("Home");
    });
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
