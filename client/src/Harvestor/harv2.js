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
    Index,
                  onChange
              }) => {
    return (
        <div>
            hiho
            <input


                name={name}

                id={name}
                value={name}

                onChange={onChange}
            />
            <input


                name={name}
/*deal with hard code */
                id='Restricted'
                value={Restricted}
                onChange={onChange}

            />
            <input


                name={name}
                id='Unrestricted'
                value={Unrestricted}
                onChange={onChange}

            />

            <input


                name={name}
                id='Endowment'
                value={Endowment}
                onChange={onChange}

            />


            <input


                name={name}
                id='Designated'
                value={Designated}
                onChange={onChange}

            />








            <input


                name={name}
                /*id='Total'*/
                id={Index}

                value={Total}
                onChange={onChange}

            />

            <input


                name={name}
                id='PrevYear'
                value={PrevYear}

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
export default Harv2;
