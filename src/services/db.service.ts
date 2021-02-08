import * as mysql from "mysql"

class DBService {
    
    private connection: any

    init(dbConfig: any)
    {
        this.connection = mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.user,
            password: dbConfig.password,
            database: dbConfig.dbname,
        })

        this.connection.connect()
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