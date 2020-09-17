export default class GotService{
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResources(url){
        const res = await fetch(`${this._apiBase}${url}`)
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
    
        return await res.json()
    }
    
    async getAllCharacters(){
        const res = await this.getResources('/characters');
        return res.map(this._transformCharacter)
    }

    async getCharacter(id){
        const res = await this.getResources(`/characters/${id}`)
        return this._transformCharacter(res)
    }

    async getAllHouses(){
        const res = await this.getResources('/houses');
        return res.map(house => this._transormHouses(house))
    }

    async getHouse(id){
        const res = await this.getResources(`/houses/${id}`)
        return res._transormHouses(res)
    }

    async getAllBooks(){
        const res = await this.getResources('/books');
        return res.map(book => this._transormHouses(book))
    }

    async getBook(id){
        const res = await this.getResources(`/books/${id}`)
        return res._transormHouses(res)
    }

    _transformCharacter(char){
        return {
            name: char.name,
            gender:char.gender,
            culture:char.culture,
            born:char.born,
            died:char.died
        }
    }

    _transormHouses(house){
        return {
            name:house.name,
            region:house.region,
            overlord:house.overlord,
            coatOfArms:house.coatOfarms
        }
    }

    _transformBooks(book){
        return {
            name:book.name,
            publisher:book.publisher,
            numberOfPages:book.numberOfPages,
            country:book.country
        }
    }
} 
