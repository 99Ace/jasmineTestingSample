/* global expect*/
function bmi_calculator(w, h) {
    if ( isNaN(w) || isNaN(h) ){
        return "error.. not number";
    }
    if (h <=0 && w<=0){
        return "invalid height and weight";
    } else if (h<=0) { 
        return "invalid height" 
    }
    else if (w<=0) {
        return "invalid weight"
    }
    else{
    return parseInt((w / (h ** 2)));
    }
}
describe("Calculator BMI", function() {
    it("it should return 20", function() {
        expect(bmi_calculator(60, 1.7)).toBeCloseTo(20);
    });
    
    it("it should return error messsage", function() {
        expect(bmi_calculator(60,0)).toBe("invalid height");
        expect(bmi_calculator(0,0)).toBe("invalid height and weight");
        expect(bmi_calculator(0,20)).toBe("invalid weight");
    })
    
//     it("it should return error messsage", function() {
//         expect(bmi_calculator("a","b")).toBe("error.. not number"); 
//     })
})