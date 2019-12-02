//import PropTypes from 'prop-types';
import React from 'react';

const Harv = ({
                  name,
                  price,
                  value,
                  onChange
              }) => {
    return (
        <div>
            hiho
            <input


                name={name}
                id={price}
                value={value}


            />

            <input


                name={name}
                id={name}
                value={price}
    onChange={onChange}

            />


        </div>
    );
};
/*
harv.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    value: PropTypes.string

};
*/
export default Harv;
