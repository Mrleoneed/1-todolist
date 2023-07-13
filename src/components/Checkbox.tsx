import React, {ChangeEvent} from 'react';

type PropsType = {
    isDone:boolean
    callBack:(newIsDone: boolean)=>void
}

const Checkbox = (props:PropsType) => {
    const onChangeIsDoneHandler = (e:ChangeEvent<HTMLInputElement>)=>{
       props.callBack(e.currentTarget.checked)
    }
    return (
        <input
            type="checkbox"
            checked={props.isDone}
            onChange={onChangeIsDoneHandler}/>
    );
};

export default Checkbox;