import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
      // Dispatch an action 
      dispatch(addItem(item))
  }
    
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="py-2 w-10/12">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                <button className="bg-white shadow-lg p-2 rounded-lg mt-[1px] mx-6" 
                onClick={()=>handleAddItem(item)}>Add +</button>
              </div>
              <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
