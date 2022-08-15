import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const StudentsList = () => {
  const students = useSelector((state) => state.students);
  const friends = useSelector((state) => state.friends);
  const dispatch = useDispatch();

  const handleAddFriend = (student) => {
    dispatch({
      type: 'addFriend',
      payload: student
    })
  }

  return (
    <section>
      <h2>Students List</h2>
      <ul>
        {
          students.map(student => (
            <li key={student.name}>
              <button onClick={() => handleAddFriend(student)} disabled={friends.some(friend => friend.name === student.name)}>Add Friend</button>
              {student.image && <img src={student.image} alt={student.name} />}
              {student.name}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default StudentsList;