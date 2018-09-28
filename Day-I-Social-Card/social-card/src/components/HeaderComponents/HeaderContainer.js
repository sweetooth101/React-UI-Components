import React from 'react';
import './Header.css';
import HeaderContent from  './HeaderContent'
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'

const HeaderContainer = () => {
    return (<div className='header-wrapper'>
                <ImageThumbnail />
                <div className='header-content'>
                <HeaderTitle />
                <HeaderContent />
                </div>
            </div>);
};

// const App = () => {
//     return (
//       <div>
//         <HeaderContainer />
//         <p>
//           Begin by exploring the `components` directory. You'll notice we have a
//           few files that we've already included in there to get you started right
//           away building components. You'll need to make sure you include your
//           components that you build in this file to watch your app come to life
//         </p>
//         <p>
//           <strong>
//             Don't forget to `default export` your components and import them here
//             inside of this file in order to make them work.
//           </strong>
//         </p>
//       </div>
//     );
//   };
  
//   export default App;
  

export default HeaderContainer;