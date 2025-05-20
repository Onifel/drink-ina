import { useNavigate } from "react-router-dom";
import { drinkList } from "../jsFile/List"


const Drinks = () => {
  const allCoffees = [...drinkList];
  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/learnMore/${id}`);
  }

  const handleOrder = () => {
    navigate('/order');
  }

  return (
    <div className='drinks d-flex flex-column pageBg'>
      <div>
      {
        allCoffees.map((cof, index) => (
          <div 
            key={index} 
            className='d-flex align-items-center'>
              {
                index % 2 === 0 ? (
                  <>
                    <img src={cof.img} className="cof tiltedL"/>
                    <div>
                      <h4>{cof.name}</h4>
                      <a onClick={() => handleLearnMore(index)} className="btnR">{cof.btn}</a>
                    </div>
                  </>
                ):(
                  <>
                    <div className="textL">
                      <h4 className="paraL">{cof.name}</h4>
                      <a onClick={() => handleLearnMore(index)} className="btnL">{cof.btn}</a>
                    </div>
                    <img src={cof.img} className="coff tiltedR"/>
                  </>
                )
              }
              
          </div>
        ))
      }
      <div className="divBtn">
        <button className='btnHero' onClick={handleOrder}>Order Now</button>
      </div>
      </div>
    </div>
  )
}

export default Drinks