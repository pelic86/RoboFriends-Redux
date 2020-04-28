import React from 'react';


// another way ===========
// const Card = ({name, email, id}) => {
    // return (
    //     <div className='tc bg-light-blue br3 pa3 ma2 grow bw2 shadow-S'>
    //         <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>

    //         <div>
    //         <h2>{name}</h2>
    //         <p>{email}</p>
    //         </div>

    //     </div>
    // );
// }
//=================================
const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className='tc bg-light-blue br3 pa3 ma2 dib bw2 shadow-S'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    );
}

export default Card;