import clsx from "clsx"
 
export default function Lang(props)
{   
 const classVal=clsx('chips', props.lost?'lost':'')   
 return(
    <span className={classVal} style={{backgroundColor:props.item.backgroundColor,color:props.item.color}}>{props.item.name}</span>
 )
}