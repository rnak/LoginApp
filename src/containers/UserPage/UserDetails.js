import React from 'react';
import { ListDiv } from '../../commons/elements';

export default ({user}) => {
    
    const {name, email, phone, address, website} = user;
    console.log(user);
    const Div = ({label, value}) => <div><span>{label}: </span> <span>{value}</span></div>
    const getAddress = (address) => {
        const {street, suite, city, zipcode} = address;
        return `${street} ${suite} ${city} ${zipcode}`;
    }
    return (
            <ListDiv>
                <Div label="Name" value={name}/>
                <Div label="Email" value={email}/>
                <Div label="Phone" value={phone}/>
                <Div label="Address" value={getAddress(address)}/>
                <Div label="Website" value={website}/>
                <Div label="Company" value={user.company.name}/>
            </ListDiv>
    );
}
