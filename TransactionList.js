import "../components/TransactionList.css";
const TransactionList = (props) => {
  let setcolor;
  if (props.status === "Sent") {
     setcolor = "green";
  } else if (props.status === "Pending") {
  setcolor="red"
  } else {
      setcolor="grey"
  }

  return (
    <div className="mainlist">
      <span className="circle"></span>
      <div className="namesec">
        <span>{props.user}</span>
        <span>{props.email}</span>
      </div>
      <span className={`price  `}>{props.price}</span>
      <span className={`status ${setcolor}   `}>{props.status}</span>
      <span className="date">{props.date}</span>
    </div>
  );
};

export default TransactionList;
