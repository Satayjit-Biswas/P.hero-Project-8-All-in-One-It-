import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{pickmember} = props;
    // calculat total tk
    let total = 0;
    for(const addsalary of pickmember){
        total = total + addsalary.salary;
    }

    return (
        <div>
            <h5><i className="far fa-user"></i> Total Preson : {pickmember.length}</h5>
            <h6>Total Cost: {total}/=</h6>
            {
                /* pick member name  */
                pickmember.map((piskName,index) => <div key={index} className="selected-person">
                    <p>{piskName.name}</p>
                    </div>
                )
            }
            
        </div>
        
    )
};

export default Cart;