import React from "react";

function Search(props){
    return (
        <>
        <div className="container">
            <form className="search" onSubmit={props.handleSubmit}>
                <input type="text" 
                style={{width:"50%", margin:"10px"}}
                placeholder="Search for an Employee"
                onChange={props.search}
                //value={props.search}
                name="search"
                 />
            </form>
        </div>
        </>
    )
}

export default Search