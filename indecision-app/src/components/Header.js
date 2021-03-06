import React from 'react';

// export default class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <h1 className='title'>Indecision App</h1>
//                 <h2 className='subtitle'>Put your life in control</h2>
//             </header>
//         ); 
//     }
// }

const Header = () => (
    <header>
        <div className='container'>
            <h1 className='title'>Indecision App</h1>
            <h2 className='subtitle'>Put your life in control</h2>
        </div>
    </header>
);

export default Header;