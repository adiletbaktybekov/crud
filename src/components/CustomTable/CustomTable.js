import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CustomTable.css';

const CustomTable = ({
   users,
   handleEditClick,
   handleRemoveClick
 }) => {
   return (

      <table style={{width:'100%'}}>
         <th>Name</th>
         <th>Email</th>
         <th>Phone</th>
         <th>Enroll Number</th>
         <th>Date of admission</th>

         <tbody className="tbody">
            {users.map((user, index) => (
               <tr>
                  <td>{user.userName}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userSalary}</td>
                  <td>{user.EnrollNumber}</td>
                  <td>{user.Dateofadmission}</td>
                  <td>
                     <div>
                        <CustomButton
                           label="remove"
                           classNames="remove-action"
                           handleClick={handleRemoveClick}
                           data={({ index })}
                           type="button"
                        />
                     </div>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default CustomTable;