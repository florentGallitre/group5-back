const fullConfig = require("./config.json");

class configService {

    private config : any

    init (env: string)
    {
       this.config =  fullConfig [env];
    }

    all()
    {
        return this.config
    }

    get(key: string)
    {
        return this.config[key]
    }
}

export const config = new configService ();