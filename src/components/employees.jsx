function EmployeeTable(props){
    return(
        <>
        <table style = {{width: "100%"}}>
            <thead>
            <tr>
                <th>Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
            </thead>
            
            {props.setEmployees.map((each, index) => {
                return (
                <tbody key={index}>
                    <tr>
                        <td>
                            <img src={each.picture.thumbnail}
                            alt={"Profile of employee"}/>
                        </td>
                        <td>{each.name.first}</td>
                        <td>{each.name.last}</td>
                        <td>{each.email}</td>
                        <td>{each.cell}</td>
                    </tr>
                </tbody>
                )
            })}
            
        </table>
        </>
    )
}

export default EmployeeTable;