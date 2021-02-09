export class Movie {

    id: number = null
    name: string = null
    time:number = null
    filmmaker: string = null
    releaseDate: string = null

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