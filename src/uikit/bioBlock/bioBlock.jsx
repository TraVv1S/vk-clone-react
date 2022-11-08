import classes from './bioBlock.module.scss'

const BioBlock = ({info}) => {

    return (
        <div className={classes.category}>
                
            {info.title ? <h2 className={classes.category_header}>{info.title}</h2> : null}
            
            {Object.keys(info.data).map((key, index) => {
                return (
                    <div className={classes.row} key={index}>
                        <h3 className={classes.title}> {key}: </h3>
                        <a href="#">{info.data[key]}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default BioBlock;