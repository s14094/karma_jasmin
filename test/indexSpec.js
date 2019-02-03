describe("validator", function () {


    beforeAll(function () {
        $('body').append(`
        <div id="firstName">s</div>
        <div id="number">22</div>
        <div id="xor1" class="xor">00</div>
        <div id="xor2" class="xor">d0</div>
        <div id="pesel">95011503554</div>
        <div id="nip">2228881100</div>
        <div id="email">sadas@gmail.com</div>
        `);
    });

    it("invalid first name", function () {
        $('#firstName').validate(/^[A-Z][a-z]+/);
        expect($('#firstName').css("background-color")).toEqual("rgb(255, 0, 0)");
    });

    it("valid text", function () {
        $('#number').validate(/^\d+/);
        expect($('#number').css("background-color")).toEqual("rgb(0, 255, 0)");
    });

    it("partialy valid", function () {
        $('.xor').validate(/^\d[a-z]*/);
        expect($('#xor1').css("background-color")).toEqual("rgb(0, 255, 0)");
        expect($('#xor2').css("background-color")).toEqual("rgb(255, 0, 0)");
    });

    it("valid pesel", function () {
        $('#pesel').validate(/^[0-9]{11}$/);
        expect($('#pesel').css("background-color")).toEqual("rgb(0, 255, 0)");
    });


    it("valid nip", function () {
        $('#nip').validate(/^[0-9]{10}$/);
        expect($('#nip').css("background-color")).toEqual("rgb(0, 255, 0)");
    });

    it("valid email", function () {
        $('#email').validate(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        expect($('#email').css("background-color")).toEqual("rgb(0, 255, 0)");
    });




});

// karma start karma.conf.js