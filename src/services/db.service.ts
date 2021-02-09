import * as mysql from "mysql"

class DBService {
    
    private connection: any

    constructor()
    {
        this.$connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        })

        this.$connection.connect()
    }
    
    query(queryString: string): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, (error, results, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }
}

export const DB = new DBService()