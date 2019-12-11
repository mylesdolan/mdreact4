//import PropTypes from 'prop-types';
import React from 'react';
//{Name} {Restricted} {Unrestricted}{Endowment}{Designated}{Total}{PrevYear}
const Harv2 = ({
                  name,
                   Restricted,
                   Unrestricted,
                   Endowment,
                   Designated,
                   Total,
                   PrevYear,
                  onChange
              }) => {
    return (
        <div>
            hiho
            <input


                name={name}

                id={name}
                value={name}


            />
            <input


                name={name}

                id={name}
                value={Restricted}


            />
            <input


                name={name}
                id={name}
                value={Unrestricted}


            />

            <input


                name={name}
                id={name}
                value={Endowment}


            />


            <input


                name={name}
                id={name}
                value={Designated}


            />








            <input


                name={name}
                id={name}
                value={Total}


            />

            <input


                name={name}
                id={name}
                value={PrevYear}


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
export default Harv2;
