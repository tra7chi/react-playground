import React from 'react';
import { Link } from 'react-router-dom';

/**
 * snippet#1: passed-in object destructuring
 */
const ExpenseListItem = ( {dispatch, id, description, amount, createdAt, note } ) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <p>{note}</p>        
        <hr />
    </div>
);

/**
 * snippet#2: normal passed-in props
 */
// const ExpenseListItem = (props) => (
//     <div>
//         <h3>{props.description}</h3>
//         <p>{props.amount} - {props.createdAt}</p>
//         <hr />
//     </div>
// );

export default ExpenseListItem;