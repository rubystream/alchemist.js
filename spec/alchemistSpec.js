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

});

