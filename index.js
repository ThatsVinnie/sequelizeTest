(async function(){
 
    const db = require('./db/db')
    const Produto = require('./models/produto')

    await db.sync();



    
    //CREATE

    const novoProduto = await Produto.create({
        nome: 'Teclado Usb',
        preco: 20,
        descricao: 'Teclado Bacana'
    })

    console.log(novoProduto)




    //READ
    
    const produtos = await Produto.findAll();
    console.log(produtos)

    const produtoEsp = await Produto.findByPk(1);
    console.log(produtoEsp)

    const produto15 = await Produto.findAll({
        where: {
            preco: 15
        }
    })
    console.log(produto15)




    //UPDATE

    const produtoAlt = await Produto.findByPk(1)
    
    produtoAlt.descricao = 'Mouse Bacana Alterado'
    
    await produtoAlt.save()



    
    //DELETE

    await Produto.destroy({
        where:{
            preco: 20
        }
    })
})()