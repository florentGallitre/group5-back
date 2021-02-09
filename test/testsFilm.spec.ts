import * as assert from "assert"
import * as chai from "chai"
import {Movie} from "../src/model/Movie"


const expect = chai.expect

const data = {
    id: 1,
    name: "knives out",
    filmmaker: "Rian Johnson",
    time:130,
    releaseDate: "2019-03-11"
}

const film: any = new Movie(data)

describe("Test if film model is valid", () =>{
    it("should valid Film model", () => {
        expect(film.id).to.equal(1),
        expect(film.name).to.equal("knives out"),
        expect(film.filmmaker).to.equal("Rian Johnson"),
        expect(film.time).to.equal(130),
        expect(film.releaseDate).to.equal("2019-03-11")
    })
})
