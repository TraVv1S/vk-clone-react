import classes from './blueBtn.module.scss'


const BlueBtn = ({text}) => {
    return (
        <button href="/" className={classes.button_blue}>{text}</button>
    )
} 

export default BlueBtn;