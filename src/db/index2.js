const dato = [];

//Listar productos
export const findAll = () => {
    return dato;
}

//Busqueda por id
export const findOne = (id) =>{
   return dato.find((f) =>f.id === Number(id));
}

//Crear producto
export const store = (product) => {
    if(dato.length == 0){
        product.id = dato.length + 1;

    }else{
        let lastIndex = dato.length -1;
        let lastId= dato[lastIndex].id;
        product.id = lastId +1;
    }
    dato.push(product);
}

// update product
export const update = (id,product) =>{
    const index = dato.findIndex((u) => u.id === Number(id));

    dato[index] = {
        ...dato[index],
        ...product
    }
}

//eliminar producto
export const remove = (id) => {
    const products = dato.filter((u) => u.id !== Number(id));
    dato.length = 0;
    dato.push(...products);
}