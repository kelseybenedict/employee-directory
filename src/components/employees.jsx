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
            {props.empData.map((item, index) => {
                return (
                <tbody key={index}>
                    <tr>
                        <td>
                            <img src={item.picture.thumbnail}
                            alt={"Profile of employee"}/>
                        </td>
                        <td>{item.name.first}</td>
                        <td>{item.name.last}</td>
                        <td>{item.cell}</td>
                        <td>{item.email}</td>
                    </tr>
                </tbody>
                )
            })}
            
        </table>
        </>
    )
}

export default EmployeeTable;