(function() {
    'use strict';

    $(document).ready(initialize);

    var balance = 1000;

    function initialize() {
        $('#deposit').click(deposit);
        $('#withdraw').click(withdraw);
    }

    function getBalance() {
        if(balance < 0) {
            return '(' + Math.abs(balance) + ')';
        } else {
            return balance;
        }
    }

    function deposit() {
        var value = $('.input').val() * 1;
        balance += value;

        append('deposit', value);
        $('#display').text(getBalance());
    }

    function withdraw() {
        var value = $('.input').val() * 1;
        balance -= value;

        fee();

        append('withdraw', value);
        $('#display').text(getBalance());
    }

    function fee() {
        if(balance < 0) {
            balance -= 50;
            append('fee');
        }
    }

    function append(type, value) {
        var $td1 = $('<td>');
        var $td2 = $('<td>');
        var $td3 = $('<td>');
        var $td4 = $('<td>').text(getBalance());

        var $tr = $('<tr>');

        if(type === 'deposit') {
            $td2.text(value);
        } else if(type === 'withdraw') {
            $td3.text(value);
        } else if (type === 'fee') {
            $td1.text('(50)');
        }

        if(balance < 0) {
            $td4.css('color', '#F0563D');
        }

        $td1.addClass('fee');
        $td2.addClass('deposit');
        $td3.addClass('withdraw');
        $td4.addClass('balance');
        $tr.append($td1, $td2, $td3, $td4);
        $('#ledger > tbody').append($tr);
    }

})();
