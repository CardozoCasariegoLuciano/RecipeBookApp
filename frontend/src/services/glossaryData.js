import axios from "axios"

const uri = "http://localhost:3001/api/glossary";

export async function getGlossary(){
    try {
        const allGlossary = await axios.get(uri)
        return allGlossary

    } catch (error) {
        console.log(error)
    }
}

export async function getASingleGlossary(id){
    try {
        const aGlossary = await axios.get(uri+"/"+id)
        return aGlossary

    } catch (error) {
        console.log(error)
    }
}


export async function addGlossary(data){
    try {

        const {title, description} = data

        await axios.post(uri, {
            title,
            description,
        })

    } catch (error) {
        console.log(error)
    }
}

export async function deleteGlossary(id){

    try {

        await axios.delete(uri + "/" + id)
        
    } catch (error) {
        console.log(error)
    }
}


export async function updateGlossary(id, data){

    try {

        const {title, description} = data

        const nuevoGlosario = await axios.put(uri + "/" + id, {
            title,
            description
        })

        return nuevoGlosario
        
    } catch (error) {
        console.log(error)
    }
}