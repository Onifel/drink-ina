import { useLocation, useNavigate } from 'react-router-dom'
import { footList } from '../jsFile/List';

const Foot = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/page/${id}`);
  }

  return (
    <div className='foot'>
      {
       footList.map((menu, index) => {
          const isActive =
            location.pathname === `/page/${index}` ||
            (index === 0 && location.pathname === '/') ||
            (index === 1 && location.pathname === '/order')

          return (
            <div 
              key={index} 
              className='menu' 
              style={{
                background: isActive ? '#f0c0bc' : '#fff', 
                borderRadius: isActive ? '50%' : '0'
              }}
              onClick={() => handleClick(index)}
            >
              <a className='link'>
                <img src={menu.icon} className='home' />
                <p  className='text'>{menu.name}</p>
              </a>  
            </div>
          );
        })
      }
    </div>
  )
}

export default Foot