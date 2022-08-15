import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const FriendsList = () => {
  const friends = useSelector((state) => state.friends);
  const dispatch = useDispatch();

  const handleRemoveFriend = (student) => {
    dispatch({
      type: 'removeFriend',
      payload: student
    })
  }

  return (
    <section className="section-friends-list">
      <h2>Friends List</h2>
      <ul>
        {
          friends.map(student => (
            <li key={student.name}>
              <button onClick={() => handleRemoveFriend(student)}>Remove Friend</button>
              {student.image && <img src={student.image} alt={student.name} />}
              {student.name}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default FriendsList;