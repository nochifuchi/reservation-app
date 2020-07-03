const Product = require('./model/product');

class SampleDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'heading1',
        heading2: 'heading2',
        heading3: 'heading3',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'heading1',
        heading2: 'heading2',
        heading3: 'heading3',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Standard',
        price: 299,
        description: 'A great phone with one of the best cameras',
        heading1: 'heading1',
        heading2: 'heading2',
        heading3: 'heading3',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone X',
        price: 399,
        description: 'A great phone with one of the best cameras',
        heading1: 'heading1',
        heading2: 'heading2',
        heading3: 'heading3',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        headingtext3: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
      }
    ]
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product);
        newProduct.save();
      }
    )
  }

  seeDb() {
    this.pushProductsToDb();
  }

}

module.exports = SampleDb;
