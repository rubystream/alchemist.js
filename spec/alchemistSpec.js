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
            it("should convert m to foot",function() {
                expect(Alchemist.convert(2, "m").to("foot")).toEqual(0.3048*2);
            });

            it("should convert foot to m",function() {
                expect(Alchemist.convert(2, "foot").to("m")).toEqual( (1 / 0.3048)*2);
            });

        });
    });

});

