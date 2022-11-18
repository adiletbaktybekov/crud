import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CustomTable.css';

const CustomTable = ({
                         users, handleEditClick, handleRemoveClick
                     }) => {
    return (
        <>
            <div className="flex flex-row justify-between">
                <h1 className="mx-10">Name</h1>
                <h1 className="mx-10">Email</h1>
                <h1 className="mx-10">Phone</h1>
                <h1 className="mx-10">Enroll Number</h1>
                <h1 className="mx-10">Date of admission</h1>
            </div>
            {users.map((user, index) => (
                <div className="flex flex-col">

                    <div className="flex flex-row justify-between pt-10 shadow shadow-gray-500">
                        <p  className="mx-10">{user.userName}</p>
                        <p  className="mx-10">{user.userSurname}</p>
                        <p  className="mx-10">{user.userSalary}</p>
                        <p  className="mx-10">{user.EnrollNumber}</p>
                        <p  className="mx-10">{user.Dateofadmission}</p>
                        <CustomButton
                            label="remove"
                            classNames="remove-action"
                            handleClick={handleRemoveClick}
                            data={({index})}
                            type="button"
                        />
                    </div>
                </div>))}

    {/*    // <table style={{width:'100%'}}>*/}
    {/*    //    <th>Name</th>*/}
    {/*    //    <th>Email</th>*/}
    {/*    //    <th>Phone</th>*/}
    {/*    //    <th>Enroll Number</th>*/}
    {/*    //    <th>Date of admission</th>*/}
    {/*    //*/}
    {/*    //    <tbody className="tbody">*/}
    {/*//       {users.map((user, index) => (*/}
    {/*    //          <tr>*/}
    {/*    //             <td>{user.userName}</td>*/}
    {/*    //             <td>{user.userSurname}</td>*/}
    {/*    //             <td>{user.userSalary}</td>*/}
    {/*    //             <td>{user.EnrollNumber}</td>*/}
    {/*    //             <td>{user.Dateofadmission}</td>*/}
    {/*    //             <td>*/}
    {/*    //                <div>*/}
    {/*    //                   <CustomButton*/}
    {/*    //                      label="remove"*/}
    {/*    //                      classNames="remove-action"*/}
    {/*    //                      handleClick={handleRemoveClick}*/}
    {/*    //                      data={({ index })}*/}
    {/*    //                      type="button"*/}
    {/*    //                   />*/}
    {/*    //                </div>*/}
    {/*    //             </td>*/}
    {/*    //          </tr>*/}
    {/*    //       ))}*/}
    {/*    //    </tbody>*/}
    {/*    // </table>*/}
        </>
    )
}

export default CustomTable;