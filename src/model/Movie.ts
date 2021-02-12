export class Movie {

    id: number = null
    title: string = null
    duration:number = null
    filmmaker: string = null
    releaseDate: string = null
    summary: string = null
    genre: string = null
    country: string = null

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