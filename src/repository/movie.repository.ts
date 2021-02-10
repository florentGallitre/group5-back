import { DB } from "../services"
import { Movie } from "../model/Movie"

class MovieRepository
{
    getMovies(limit: number = 10, offset: number = 0): Promise<Array<Movie>>
    {
        const queryString = `SELECT id, title, filmmaker_Id, time, releaseDate, summary FROM Movies LIMIT ${limit} OFFSET ${offset}`
        
        return new Promise((resolve, reject) => {

            DB.query(queryString)
                .then((results: Array<any>) => {
                    resolve(results.map(row => new Movie(row)))
                }).catch(e => {
                    reject(e)
                })

        })
    }
}

export const MovieRepositoryService = new MovieRepository()
