import Item from '../../models/items'

const addItem = async ({ name ,  price ,  details ,  image }) => {
  
    console.log(' It is (addItem) Controller ');
  
      const res = await Item.updateOne( {name:name }, 
        {price:price , details:details , image:image , created:new Date()} , 
        {upsert:true}
      );
      return res ;

}

export default addItem ;