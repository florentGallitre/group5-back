export class User {

    id: number = null
    name: string = null
    email: string = null

    constructor(data?: any){
        //this.id = data.id
        //this.name = data.name
        //this.email = data.email
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