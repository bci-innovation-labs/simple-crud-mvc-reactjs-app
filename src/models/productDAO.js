import shortid from "shortid";
import slugify from "slugify";


const TABLE_KEY = "ProductTableKey";


class Product {
    constructor(name, typeOf, volumeInMiliLitres, fragrance, thumbnailURL, picturesArr, priceInCAD) {
        const slug = slugify(name.toLowerCase())+"-"+shortid.generate();
        this.slug = slug;
        this.name = name;
        this.typeOf = typeOf;
        this.volumeInMiliLitres = volumeInMiliLitres;
        this.fragrance = fragrance;
        this.thumbnailURL = thumbnailURL;
        this.picturesArr = picturesArr;
        this.priceInCAD = priceInCAD;
    }
}


export default class ProductDAO {
    constructor() {
        const productJSON = localStorage.getItem(TABLE_KEY);
        const productArr = JSON.parse(productJSON);

        if (productArr === undefined || productArr === null || productArr === "") {
            localStorage.setItem(TABLE_KEY, JSON.stringify([]));
        }
    }

    getList() {
        const productJSON = localStorage.getItem(TABLE_KEY);
        const productArr = JSON.parse(productJSON);
        return productArr;
    }
}
