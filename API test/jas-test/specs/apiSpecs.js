/* global expect*/
describe("Test the API",function(){
    it("should be able to load data", function(done){
        getReading(function(data){
            expect(data.length).not.toBe(0);
            expect(data.name).toBe("North");
            done()
        })
    })
})