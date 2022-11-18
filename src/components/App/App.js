import React, {useState} from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import CustomTable from '../CustomTable/CustomTable';
import './App.css';
import Modal from 'react-modal';


const initialValues = {
    userName: '',
    userSurname: '',
    userSalary: '',
    EnrollNumber: '',
    Dateofadmission: '',
}


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function App() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [userData, setUserData] = useState(initialValues);
    const [users, setUsers] = useState([]);
    const [editableUserData, setEditableUserData] = useState({
        isEdit: false,
        userIndex: null
    });

    const handleRemoveClick = ({index}) => {
        setUsers(users.filter((user, userIndex) => userIndex !== index));
    };

    const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

    const handleSubmitUser = (e) => {
        e.preventDefault();

        if (isFilledFields) {
            if (editableUserData.isEdit) {
                const editedData = users;
                editedData.splice(editableUserData.userIndex, 1, userData);

                setUsers(editedData);

                setEditableUserData({
                    isEdit: false,
                    userIndex: null
                })
            } else {
                setUsers((prevState) => [...prevState, userData]);
            }

            setUserData(initialValues)
        }
    }

    const handleCleanClick = () => {
        setUserData(initialValues);
        setEditableUserData({
            isEdit: false,
            userIndex: null
        })
    };
    //
    // const handleEditClick = ({user, index}) => {
    //     setUserData(user);
    //     setEditableUserData({
    //         isEdit: true,
    //         userIndex: index
    //     })
    // }

    const handleInputChange = (e, userName) => setUserData((prevState) => ({
        ...prevState,
        [userName]: e.target.value
    }))

    return (
        <div className=""
            // style={{display:"flex", justifyContent:'space-between',alignItems:"center", flexDirection:'column'}}
        >
            <button onClick={openModal} className="btn">ADD NEW STUDENT</button>
            <div className="">
                <div className="">
                    <CustomTable
                        users={users}
                        handleRemoveClick={handleRemoveClick}
                    />
                </div>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form onSubmit={handleSubmitUser} onReset={handleCleanClick} style={{display:"flex",flexDirection:"column"}}>
                    <CustomInput
                        placeholder="Write your name"
                        handleChange={handleInputChange}
                        value={userData.userName}
                        fieldName="userName"
                    />

                    <CustomInput
                        placeholder="Write your surname"
                        handleChange={handleInputChange}
                        value={userData.userSurname}
                        fieldName="userSurname"
                    />

                    <CustomInput
                        placeholder="Write your salary"
                        handleChange={handleInputChange}
                        value={userData.userSalary}
                        fieldName="userSalary"
                    />

                    <CustomInput
                        placeholder="Write your salary"
                        handleChange={handleInputChange}
                        value={userData.EnrollNumber}
                        fieldName="EnrollNumber"
                    />
                    <CustomInput
                        placeholder="Write your salary"
                        handleChange={handleInputChange}
                        value={userData.Dateofadmission}
                        fieldName="Dateofadmission"
                    />

                    <div className="buttons-wrapper">
                        <CustomButton
                            label={editableUserData.isEdit ? 'Edit' : 'Add'}
                            classNames=""
                            handleClick={() => {
                            }}
                            data={null}
                            type="submit"
                            disabled={!isFilledFields}
                        />
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default App;
