describe("validator", function () {

    beforeAll(function () {
        $('body').append(`
        <div>Poprawne imię:</div>
        <div id="firstName" class="">Pawel</div>
        <div>Numer:</div>
        <div id="number" class="">2</div>
        <div>Pesel:</div>
        <div id="pesel" class="">95011503554</div>
        <div>Nip:</div>
        <div id="nip" class="">2228881100</div>
        <div>Email:</div>
        <div id="email" class="">sadas@gmail.com</div>
        `);
    });

    (function ( $ ) {
        $.fn.checkValidation = function() {
            if(this.hasClass("invalid")){
                return false;
            } else {
                return true;
            }
        };
    }( jQuery ));

    it("name validation", function () {
        $('#firstName').validate(/^[A-Z][a-z]+/);
        expect($("#firstName").checkValidation()).toBe(true);

    });

    it("valid text", function () {
        $('#number').validate(/^\d+/);
        expect($('#number').checkValidation()).toBe(true);

    });

    it("valid pesel", function () {
        $('#pesel').validate(/^[0-9]{11}$/);
        expect($('#pesel').checkValidation()).toBe(true);
    });


    it("valid nip", function () {
        $('#nip').validate(/^[0-9]{10}$/);
        expect($('#nip').checkValidation()).toBe(true);
    });

    it("valid email", function () {
        $('#email').validate(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        expect($('#email').checkValidation()).toBe(true);
    });

});