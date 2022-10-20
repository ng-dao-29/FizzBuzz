export function filterByTerm(arr: any, pattern: string) {
    return arr.filter( (item: any) => {
        return item.url.match(pattern);
    });
}

export class FizzBuzz {
    static checkFizzBuzz(nember:number):string {

        let fizz = nember % 3 == 0;
        let buzz = nember % 5 == 0;

        if (nember > 0) {
            if (fizz && buzz) {
                return "FizzBuzz"
            }
            if (fizz) {
                return "Fizz"
            }
            if (buzz) {
                return "Buzz"
            }
            else {
                return `${nember}`
            }
        }else {
            return "nhập lại số lớn hơn 0"
        }
    }
}