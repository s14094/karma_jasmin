describe("validator", function () {

    beforeAll(function () {
        $('body').append(`
        <div>Poprawne imię:</div>
        <div id="firstNameOne" class="firstName">Pawel</div>
        <div>Niepoprawne imię:</div>
        <div id="firstNameTwo" class="firstName">pawel</div>
        <div>Numer:</div>
        <div id="number">22</div>
        <div>Pesel:</div>
        <div id="pesel">95011503554</div>
        <div>Nip:</div>
        <div id="nip">2228881100</div>
        <div>Email:</div>
        <div id="email">sadas@gmail.com</div>
        `);
    });


    it("valid text", function () {
        $('#number').validate(/^\d+/);
        expect($('#number').css("background-color")).toEqual("rgb(0, 255, 0)");
    });

    it("double validation", function () {
        $('.firstName').validate(/^[A-Z][a-z]+/);
        expect($('#firstNameOne').css("background-color")).toEqual("rgb(0, 255, 0)");
        expect($('#firstNameTwo').css("background-color")).toEqual("rgb(255, 0, 0)");
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