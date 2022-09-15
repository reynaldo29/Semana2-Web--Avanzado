const data = [{nombre:"Aaron",apellido:"Contreras",celular:"979377644"},
{nombre:"Jose",apellido:"Carpio",celular:"979983472"},
{nombre:"Maria",apellido:"Julian",celular:"991537383"}];

//Lista todo
export const findAll = () => {
    return data;
}

//Buscar por id
export const findOne = (id) => {
    return data.find((u) => u.id === Number(id));

}

// crear
export const store = (user) => {
   
    
    if(data.length==0){
        user.id = data.length+1
    }else{
        let lastIndex=data.length-1;
        let lastId=data[lastIndex].id
        user.id = lastId+1
    }
    data.push(user);
}

//update
export const update = (id, user) => {
    const index = data.findIndex((u) =>u.id ===Number(id))

    data[index] = {
        ...data[index],
        ...user
    }
}

//eliminar
export const remove = (id) =>{
    const users = data.filter((u) => u.id !== Number(id));
    data.length = 0;
    data.push(...users);
    
}