import React from 'react';
import './Person.css'

const Person = (props) => {
    const{name,img,Age,profession,Live,salary } = props.person;
    return (
        <div className="col">
            <div className="card">
                <div className="card_img">
                    {/* card img  */}
                    <img src={img} className="card-img-top img-fluid" alt="..."/>
                </div>
                <div className="card-body">
                    {/* card body  */}
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-title">Profession: {profession}</h6>
                    <div className="age">
                    <span className="card-title">Age: {Age}</span>
                    <span className="card-title">Live : {Live}</span>
                    </div>
                    <h5 className="card-title">Salary :  {salary}/=</h5>
                    <button onClick={()=>props.clickHandler(props.person)} type="button" className="btn btn-warning"><i className="far fa-user"></i>ADD PERSON </button>
                    <div className="media">
                        <a href="#"><i className="fab fa-facebook-square"></i></a> 
                        <a href="#"><i className="fab fa-twitter-square"></i></a> 
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Person;