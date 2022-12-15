import style from "../stylesheets/PageStyle.module.scss";

const SingleDisplay = (props) => {
    const onClick = (e) => {
        e.target.contentEditable = true;
        e.target.focus();
        e.target.onblur = () => {
            e.target.contentEditable = false;
            if (e.target.innerText === "") {
                props.setNewValue("");
            } else {
                props.setNewValue(e.target.innerText);
            }
        };
    };
    return (
        <span className={style.minorText2}
            onClick={onClick}
            contentEditable="false"
            suppressContentEditableWarning={true}
        >
            {props.value}
        </span>
    );
}
 
export default SingleDisplay;