// Describe a Alchemist module

describe("Alchemist", function(){
    it("", function() {
        expect(Alchemist).toBeDefined();
    });

    it("should have version", function() {
        expect(Alchemist.version).toBeDefined();
    });

    it("should have proper version number", function() {
        expect(Alchemist.version).toEqual('0.0.1');
    });

    describe("Convert function", function() {

        it("should be defined", function() {
            expect(Alchemist.convert).toBeDefined();
        });

        it("should be function type", function() {
            expect(typeof(Alchemist.convert) === "function");
        });

        describe("distance conversation", function() {
            expect(Alchemist.convert(1, "m").to("cm")).toEqual(100);
        });
    });

});

