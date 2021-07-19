export default class gotService {
    _apiBase = 'https://www.anapioficeandfire.com/api'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformChar);
    }
    getAllBooks() {
        return this.getResource('/books/page=5&pageSize=10')
    }
    getAllHouses() {
        return this.getResource('/houses/page=5&pageSize=10')
    }
    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    _transformChar(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles, 
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
    
}