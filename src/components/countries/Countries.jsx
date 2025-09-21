import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    console.log(countries);
    return (
        <div>
            <h2>Country Lists in the World: {countries.length}</h2>
        </div>
    );
};

export default Countries;