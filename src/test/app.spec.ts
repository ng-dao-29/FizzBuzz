import {filterByTerm} from '../app'

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
    });
});

import {FizzBuzz} from "../app";
describe("test Fizzbuzz", () => {

    test("test chả về FizzBuzz", () => {
        let nember = 15;

        expect(FizzBuzz.checkFizzBuzz(nember)).toEqual("FizzBuzz")
    })

    test("test chả về Fizz", () => {
        let nember =3;

        expect(FizzBuzz.checkFizzBuzz(nember)).toEqual("Fizz")
    })

    test("test chả về Buzz", () => {
        let nember = 5;

        expect(FizzBuzz.checkFizzBuzz(nember)).toEqual("Buzz")
    })

    test(" test ko tria hết cho cả 3 và 5", () => {
        let nember = 4;

        expect(FizzBuzz.checkFizzBuzz(nember)).toEqual(`${nember}`)
    })

    test(" số nhỏ hơn hoạc bằng 0", () => {
        let nember = 0;

        expect(FizzBuzz.checkFizzBuzz(nember)).toEqual("nhập lại số lớn hơn 0")
    })
})
