import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Member.css'



const Member = () => {
    // all person State

    const [person,setPerson] = useState([]);
    // pick members State

    const [pickMember,setPickmember] = useState([]);
    
    // nocopy State 

    const [isDilicate,setDublicate] = useState(false);
        // call api data 

        useEffect(()=>{
            fetch('person.Json')
                .then(res => res.json())
                .then(data => setPerson(data))
                },[]);
        // creater new menubar 
        const clickHandler = (Member)=>{
            // check copy member 
            if(pickMember.length){
                const nocopyPerson = pickMember.find(members => members.id === Member.id);
            if(nocopyPerson){
                setDublicate(true);
            }else{
                setDublicate(false);
                const newMember = [...pickMember,Member];
                    setPickmember(newMember);
            }
            }
            else{
                const newMember = [...pickMember,Member];
                setPickmember(newMember);
            }
            
        }
    return (
        <div>
            <div className="member_area mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 order-md-2">
                            {/* view card area  */}
                            <div className="viewCart">
                                <Cart pickmember={pickMember}></Cart>
                                {
                                (isDilicate)?<p>This Person Already Picked</p>:''
                                }
                            </div>
                            
                        </div>
                        <div className="col-md-9 order-md-1">
                        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                                {/* desplay all person  */}
                                {
                                    person.map((persons,index)=><Person key={index} clickHandler={clickHandler} person={persons}></Person>)
                                }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;