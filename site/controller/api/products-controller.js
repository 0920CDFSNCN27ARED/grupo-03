const { Product,ProductCategory, Sequelize } = require("../../database/models");
const Op = Sequelize.Op;

module.exports = {
  products: async (req, res) => {
    const count = await Product.count();
    const products = await Product.findAll();
    const productList =[]
    products.forEach(product => {

    const oneProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    url: 'localhost:3001/api/products/products/'+ product.id  
     }

     productList.push(oneProduct);

});
    

   
    const category1 = await Product.findAll({
      where:{
        categoryId : 1,
      }, 
    })
    const countCategory1 = category1.length;
    const category2 = await Product.findAll({
      where:{
        categoryId : 2,
      }, 
    })
    const countCategory2 = category2.length;

    const category3 = await Product.findAll({
      where:{
        categoryId : 3,
      }, 
    })
    const countCategory3 = category3.length;

    const category4 = await Product.findAll({
      where:{
        categoryId : 4,
      }, 
    })
    const countCategory4 = category4.length;

    const category5 = await Product.findAll({
      where:{
        categoryId : 5,
      }, 
    })
    const countCategory5 = category5.length;
  
   
    const category6 = await Product.findAll({
      where:{
        categoryId : 6,
      }, 
    })
    const countCategory6 = category6.length;
  
    const category7 = await Product.findAll({
      where:{
        categoryId : 7,
      }, 
    })
    const countCategory7 = category7.length;

    const category8 = await Product.findAll({
      where:{
        categoryId : 8,
      }, 
    })
    const countCategory8 = category8.length;


  

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        
      },
      data:{
        totalCount: count,
        
        countByCategory: {
          countCategory1,
          countCategory2,
          countCategory3,
          countCategory4,
          countCategory5,
          countCategory6,
          countCategory7, 
          countCategory8,
        },
        productList,
       
      }
  
    });
  },

  offers: async (req, res) => {
    const count = await Product.count();
    const offers = await Product.findAll({
      where: {
        discount: {
          [Op.gt]: 0,
        },
      },
    });

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        totalCount: count,
      },
      data: offers,
    });
  },

  detail:async (req, res) => {
    const products = await Product.findByPk(req.params.id);
    
    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        
      },
      data:products,
    });
  },



    

};
