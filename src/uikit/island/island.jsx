import classes from './island.module.scss'


const Island = ({children, title}) => {
    return (
        <div className={classes.island}>
            {children}
        </div>
    )
} 

export default Island;