import React, {useState} from 'react';

const Operation = ({deposit, withdraw}) => {
    const [sum, setSum] = useState(0);

    return (
        <div>
            <button onClick={()=>withdraw(sum)}>Withdraw</button>
            <input type={'number'} min={0} onChange={e=>setSum(parseInt(e.target.value))}/>
            <button onClick={()=>deposit(sum)}>Deposit</button>
        </div>
    );
};

export default Operation;