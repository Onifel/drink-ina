import { serviceList, drinkList, menuList, peckishList } from "../jsFile/List"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCart } from "../jsFile/cartSlice"

const Selections = () => {
    const [activeTab, setActiveTab] = useState(0);
    const dispatch = useDispatch()

    const handleAddCart = (drink) => {
        dispatch(addCart(drink))
    }

  return (
    <div className="pageBg">
        <ul className="custom-tabs" role="tablist">
            {
                serviceList.map((service, index) => (
                    <li 
                        key={index} 
                        onClick={()=>setActiveTab(index)}
                        className={`custom-tab ${activeTab === index ? 'active': ''}`}
                    >
                        {service.nameTab}
                    </li>
                ))
            }
        </ul>

        <div className="tab-content">
            {
                activeTab === 0 && (
                    <div className="tab-pane active container mb-3">
                        <h3>DRINKS</h3>
                        {
                            drinkList.map((drink, index) => (
                                <div key={index} className="d-flex">
                                    <div className="item">
                                        <img src={drink.img} className="kaly" />
                                        <h5 className="titleDel">{drink.name}</h5>
                                        <p className="desc">{drink.desc}</p>
                                        <p className="price"><span>{drink.dollar}</span>{drink.price}</p>
                                    </div>
                                    <button 
                                        className="btnArrow"
                                        onClick={() => handleAddCart(drink)}
                                    >
                                        +
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                )
            }

            {
                activeTab === 1 && (
                    <div className="tab-pane active">
                        {
                            menuList.map((menu, index) => {
                                const items = Object.values(menu).find(value => Array.isArray(value))
                                return (
                                    <div key={index} className="container mb-3">
                                        <h3>{menu.title}</h3>
                                        <div>
                                            {
                                                items.map((item, index) => (
                                                    <div key={index} className="container d-flex">
                                                        <div className="item">
                                                            <img src={item.img} className="kaly" />
                                                            <h5 className="titleDel">{item.name}</h5>
                                                            <p className="desc">{item.desc}</p>
                                                            <p className="price"><span>{item.dollar}</span>{item.price}</p>
                                                        </div>
                                                        <button 
                                                            className="btnArrow"
                                                            onClick={() => handleAddCart(item)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                </div>
                                )
                            })
                        }
                    </div>
                )
            }

            {
                activeTab === 2 && (
                    <div className="tab-pane active container">
                        {
                            peckishList.map((peck, id) => {
                                const items = Object.values(peck).find(value => Array.isArray(value))
                                return (
                                    <div key={id} className="container">
                                        <h3>{peck.title}</h3>
                                        <div>
                                            {
                                                items.map((item, id) => (
                                                    <div key={id} className="d-flex">
                                                        <div className="item">
                                                            <img src={item.img} className="kaly" />
                                                            <h5 className="titleDel">{item.name}</h5>
                                                            <p className="desc">{item.desc}</p>
                                                            <p className="price"><span>{item.dollar}</span>{item.price}</p>
                                                        </div>
                                                        <button 
                                                            className="btnArrow"
                                                            onClick={() => handleAddCart(item)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Selections