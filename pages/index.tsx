import Link from 'next/link'
import Layout from '../components/Layout'
import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../features/counter/counterSlice';

import { getData } from '../features/todos/todos';

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const data = useAppSelector(getData);
  let todos = data.todo;
  console.log(data);

  return (
    <>
      <h1>Landing Page</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>DOB</th>
        </tr>
        
          {
            todos.map((d) => {
              return (
                <tr>
                  <td>
                    {d.firstName}
                  </td>
                  <td>
                    {d.age}
                  </td>
                  <td>
                    {d.gender}
                  </td>
                  <td>
                    {d.phone}
                  </td>
                  <td>
                    {d.birthDate}
                  </td>
                </tr>
             
              )
            })
          }
        
      </table>
    </>
  );
};

export default IndexPage;