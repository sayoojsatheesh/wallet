import react,{useState} from "react";
import TransactionList from "./TransactionList";
import '../components/TransactionHistory.css';
const TransactionHistory=()=>{
   const [history,sethistory]=useState([]);
   useState(()=>{
       fetchtransaction();
   },[])
   async function fetchtransaction(){
       const response=await fetch('https://mocki.io/v1/94bece71-5d3c-4a80-8fa4-39595d34b1b4');
       const data=await response.json();
       const temp=data.slice(0,6)
       sethistory(temp);

   }

    return(
        <div className="transactionmain">  
            <div className="sortlist">
                <div>Transaction History</div>
                <div>sort</div>
            </div>
           {history.map((item)=>{
               return <TransactionList key={Math.random()} user={item.username}  email={item.email}  price={item.cost}  status={item.progress} date={item.date} />
           }) }
                         
        </div>
    );
}

export default TransactionHistory;