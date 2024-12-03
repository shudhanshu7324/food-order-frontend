import Plus from "./Plus.png"


export const AddCart = ({className,addToCart,item}) => {
  return (
    <div onClick={() => addToCart(item)}  className={className} style={{ zIndex: "1" }}>
      <img
        style={{ width: "30px", height: "30px", marginRight: "8px" }}
        src={Plus}
      />
    </div>
  );
};
