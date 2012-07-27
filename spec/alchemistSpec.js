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

        describe("absorbed radiation dose" , function() {
            it("should convert Gy to rad", function() {
                expect(Alchemist.convert(7, "Gy").to("rad")).toEqual( 1.0e-2 * 7 );
            });

            it("should convert rad to Gy", function() {
                expect(Alchemist.convert(7, "rad").to("Gy")).toEqual( (1 / 1.0e-2) * 7 );
            });

        });

        describe("distance conversation", function() {
            it("should convert m to foot",function() {
                expect(Alchemist.convert(2, "m").to("foot")).toEqual( 0.3048 * 2 );
            });

            it("should convert foot to m",function() {
                expect(Alchemist.convert(2, "foot").to("m")).toEqual( (1 / 0.3048) * 2 );
            });

        });

        describe("angles" , function() {
            it("should convert radian to degrees", function() {
                expect(Alchemist.convert(2.5, "radian").to("degrees")).toEqual( (Math.PI / 180.0) * 2.5 );
            });

            it("should convert degrees to radians", function() {
                expect(Alchemist.convert(25, "degrees").to("radians")).toEqual( (1 / (Math.PI / 180.0)) * 25 );
            });

            it("should convert arcminute to degrees", function() {
                expect(Alchemist.convert(25, "arcminute").to("degrees")).toEqual( ((1 / (Math.PI / 10800.0)) * 25) * (Math.PI / 180.0) );
            });
        });

        describe("area" , function() {
            it("should convert square_foot to ares", function() {
                expect(Alchemist.convert(2500, "square_foot").to("ares")).toEqual( ((1 / 9.290304e-2) * 2500) * 1.0e+2 );
            });
        });

        describe("temperature" , function() {
            it("should convert celsius to fahrenheit", function() {
                expect(Alchemist.convert(36.5, "celsius").to("fahrenheit")).toEqual( 97.7 );
            });
        });

    // capacitance : {
    // distance : {
    // dose_equivalent : {
    // electric_charge : {
    // electric_conductance : {
    // electrical_impedance : {
    // electromotive_force : {
    // energy : {
    // force : {
    // illuminance : {
    // inductance : {
    // information_storage : {
    // luminous_flux : {
    // luminous_intensity : {
    // magnetic_flux : {
    // magnetic_inductance : {
    // mass : {
    // power : {
    // pressure : {
    // radioactivity : {
    // temperature : {
    // time : {
    // volume : {

    });

});

