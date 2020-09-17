export default class GotService{
    async getResources(url){
        const res = await fetch(url)
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
    
        return await res.json()
    }
    
    getAllCharacters(){
        const res = this.getResources('https://www.anapioficeandfire.com/api/characters');
        const characters = res.then(res => console.log(res))
    }
} 
