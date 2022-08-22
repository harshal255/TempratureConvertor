const calculatetemp = () => {

    const celToFah = (numbertemp) => {
        result = Math.round(numbertemp * 9 / 5 + 32);
        return result;

    }

    const fahToCel = (numbertemp) => {

        result = Math.round((numbertemp - 32) * 5 / 9);
        return result;
    }



    const numbertemp = document.getElementById('temp').value; // get value of input

    // console.log(numbertemp);

    const tempsel = document.getElementById('temp_diff')
    const valueTemp = temp_diff.options[tempsel.selectedIndex].value
    // console.log(tempsel.selectedIndex);


    let result;
    if (valueTemp == 'cel') {
        result = celToFah(numbertemp);
        document.getElementById('result').innerHTML = `${numbertemp} °Celsius = ${result} °Fahrenheit`
        document.getElementById('para').innerHTML = `<h2>Fahrenheit (°F)</h2>
        <p>Fahrenheit unit’s abbreviation is °F. The Fahrenheit scale was first introduced by a Dutchman named Gabriel Fahrenheit in 1724.  The two main reference points of the scale are the freezing point of water being specified as 32°F and the temperature of the human body being 96°F.</p> `
    } else {
        result = fahToCel(numbertemp);
        document.getElementById('result').innerHTML = `${numbertemp} °Fahrenheit = ${result} °Celsius`
        document.getElementById('para').innerHTML = `<h2>Celsius (°C)</h2>
        <p>Celsius is currently a derived unit for temperature in the SI system, kelvin being the base unit. The abbreviation of Celsius is °C (degree Celsius) and the size of one Celsius degree is the same size as one kelvin. The unit and the actual Celsius scale were first presented by a Swede Anders Celsius in 1742. The two main reference points of the Celsius scale were the freezing point of water (or melting point of ice) being defined as 0 °C and the boiling point of water being 100 °C.</p>`
    }

};