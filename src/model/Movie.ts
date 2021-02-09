export class Movie {

    id: number = null
    filmMaker: string = null
    releaseDate: Date = null

    constructor(data?: any){
        if(data){
            this.hydrate(data)
        } 
    }

    private hydrate(data: any){
        for (let prop in data){
            if (this.hasOwnProperty(prop)) {
                this[prop] = data[prop]
            }
        }
    }


}