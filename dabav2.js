$('<script src="https://raw.githack.com/dabaconnect/dabaconnectv1/main/dabav3.js"></script>').appendTo("body");
$('script[src="https://raw.githack.com/dabaconnect/dabaconnectv1/main/dabav2.js"]').length > 0
    ? ($(".nos-techs, .nos-feature, .approaches, .search-engine-cta, .dynamic-service-section").attr("style", "visibility: visible;opacity: 1;"),
      $('<script src="https://raw.githack.com/dabaconnect/dabaconnectv1/main/dabav3.js"></script>').appendTo("body"))
    : $("head").remove();
