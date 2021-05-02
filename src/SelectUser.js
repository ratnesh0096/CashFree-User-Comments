import React from 'react';

const SelectUser = ({ userList, handleSelect, setUserList }) => {
    return (
        <div /*class="dropdown"*/>
            <select name="select user" id="selection"
                onChange={handleSelect} className="dropdown">
                {
                    userList.map((user, key) =>
                        <option className="dropdown-content"
                            value={user.name}
                            key={key}
                            id={user.id}
                        >{user.name}
                        </option>
                    )
                }
            </select>
        </div>

    );
};

export default SelectUser;