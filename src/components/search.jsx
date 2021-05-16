import React from "react";

function Search(props){
    return (
        <>
        <div className="container">
            <form className="search">
                <input type="text" style={{width:"50%", margin:"10px"}} placeholder="Search for an Employee" />
            </form>
        </div>
        </>
    )
}

export default Search