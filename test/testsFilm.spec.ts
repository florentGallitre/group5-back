import * as assert from "assert"
import * as chai from "chai"
import { Movie } from "../src/model/Movie"
import * as dotenv from "dotenv"
import * as path from "path"
import { MovieRepositoryService } from "../src/repository/movie.repository"

const envPath = path.resolve(__dirname + "/../.env.test")
dotenv.config({ path: envPath })
const expect = chai.expect

const data = {
    id: 1,
    title: "knives out",
    filmmaker: 15,
    time: 130,
    releaseDate: "2019-03-11",
    summary: "this is the movie summary"
}

const film: any = new Movie(data)

describe("Test if film model is valid", () => {
    it("should valid Film model", () => {
        expect(film.id).to.equal(1),
            expect(film.title).to.equal("knives out"),
            expect(film.filmmaker).to.equal(15),
            expect(film.time).to.equal(130),
            expect(film.releaseDate).to.equal("2019-03-11")
        expect(film.summary).to.equal("this is the movie summary")
    })
})

describe("Test movie repository", () => {

    it("Test if getMovie returns correct results", () => {

        return MovieRepositoryService.getMovies(3, 0)
            .then((results) => {
                //console.log(results)
                expect(results.length).to.equal(3)
            })
            .catch(e => {
                console.log(e)
                assert.fail(e)
            })
    })
})
