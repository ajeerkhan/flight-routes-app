/**
 * Button component renders html button
 * @param {*} props 
 * @returns 
 */
export default function Button(props){
    const {title, onClick, type='button', className} = props;
    return(
        <button className={className} type={type} onClick={onClick}> {title}</button>
    )
}