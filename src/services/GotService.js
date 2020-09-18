export default class GotService{
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
    
        return await res.json()
    }
    
    getAllCharacters = async () => {
        const res = await this.getResources('/characters?page=5');
        return res.map(char => this._transformCharacter(char))
    }

    getCharacter = async (id) => {
        const res = await this.getResources(`/characters/${id}`)
        return this._transformCharacter(res)
    }

    getAllHouses = async () => {
        const res = await this.getResources('/houses?page=5');
        return res.map(house => this._transormHouses(house))
    }

    getHouse = async (id) => {
        const res = await this.getResources(`/houses/${id}`)
        return this._transormHouses(res)
    }

    getAllBooks = async () => {
        const res = await this.getResources('/books?page=1');
        return res.map(book => this._transformBooks(book))
    }

    getBook = async (id) => {
        const res = await this.getResources(`/books/${id}`)
        return this._transformBooks(res)
    }

    _extractId = (item) => {
        return +item.url.replace(/\D/g, '')
    }

    _transformCharacter = (char) =>{
        return {
            id: this._extractId(char),
            name: char.name,
            gender:char.gender,
            culture:char.culture,
            born:char.born,
            died:char.died
        }
    }

    _transormHouses = (house) => {
        return {
            id: this._extractId(house),
            name:house.name,
            region:house.region,
            overlord:house.overlord,
            coatOfArms:house.coatOfarms
        }
    }

    _transformBooks = (book) => {
        return {
            id: this._extractId(book),
            name:book.name,
            publisher:book.publisher,
            numberOfPages:book.numberOfPages,
            country:book.country
        }
    }
} 
