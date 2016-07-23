function store() {
    this.products = [
        new product("1","Mutton Fillets", "250 Grams (2 pieces)","150"),
        new product("2", "Mutton Chopped", "1KG - Medium chopped pieces with bone", 500),
        new product("3", "Mutton Chopped", "1KG - Medium chopped pieces boneless",700),
        new product("4", "Mutton breast", "500 Grams - Best for barbeque (2 large pieces)", 350),
        new product("3", "Mutton Legs", "750 Grams - Medium size legs (4 pieces)", 600),
        new product("6", "Mutton Liver", "250 Grams (2 pieces).",150),
        new product("7", "Goat Head", "500 - 750 Grams (1 piece)", 450)

    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"      
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
