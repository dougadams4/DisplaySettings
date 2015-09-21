(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    _4TellBoost.detectCartPage = function () {
        //First, check to see if this came from email.
        var emailRec = location.search.match(/(?:4Tee=)([\w+,?]+)[&\?]?/);
        if (emailRec && emailRec.length) {
            var params = emailRec[1].split(/[,_]/);
            //Sometimes the productID has dashes in it, which causes Volusion to freak out,
            //so we have to scrape the productID off the page.
            var id = params[3] || $("input[name=ProductID]").val();
            ga('send', "event", "4TellRecsEmail", _4TellBoost.emailTypes[params[0]] + "-" + _4TellBoost.resultTypes[params[1]] + "-" + params[2], id);
        }

        //check for product page
        var productImg = $("#imagebox,#prodpage_imagearea, .productImageWrap, #MProductImageWrap, #prodimage, .productPageImageCell, #prodwrap, #productInfoWrap");
        if (productImg && productImg.length) {
            _4TellBoost.setPageType('ProductDetail');
            $.each(productImg, function () {
                var id = $("input[name*=ProductID]");
                if (id) {
                    _4TellBoost.addProductID(id.val());
                }
            });
            return;
        }

        //check for cart page
        productImg = $("[id*=pnlCartSummary]");
        if (productImg && productImg.length) {
            _4TellBoost.setPageType('AddToCart');
            _4TellBoost.UserData.clearCart();
            productImg = productImg.find(" tr a");
            productImg.each(function () {
                var productID = $(this).attr("href").match(/\d+/);
                if (productID && productID[0])
                    _4TellBoost.addCartItem(productID[0]);
            });
            return;
        }

        var catHeader = $("form#caSearchForm, .cattitle");
        if (catHeader && catHeader.length) {
            //check for combined category and search results
            var searchTerm = $("form#caSearchForm").find("input[name=SearchTerm]").val();
            if (searchTerm && searchTerm.length) {
                _4TellBoost.setPageType('Search');
                resultLinks = $("input[name=ProductID]");
                if (resultLinks && resultLinks.length) {
                    resultLinks.each(function () {
                        _4TellBoost.addProductID($(this).val());
                    });
                }
            } else {
                _4TellBoost.setPageType("Category");

                var CATID = $("form#caSearchForm").attr("action");
                CATID = CATID && CATID.match(/\d+/)[0];

                var ALTCATID = window.location.pathname.match(/\d+/);
                ALTCATID = ALTCATID && ALTCATID[0];

                CATID = CATID || ALTCATID;
                _4TellBoost.setCatId(CATID);
            }
            return;
        }




        //check for home page
        var featuredProds = $("#fcats, #fprods, #homepage-featured, #featuredbox_outside");
        if (featuredProds && featuredProds.length) {
            _4TellBoost.setPageType('Home');
            //No products to interest us.
            return;
        }


        //Check for invoice page.
        var orderConfirm = $("#OrderConfirmation_4T");
        if (orderConfirm && orderConfirm.length) {
            _4TellBoost.setPageType('OrderConfirmation');
            _4TellBoost.reportSales();
        }

        _4TellBoost.setPageType('Auto');
        return;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
