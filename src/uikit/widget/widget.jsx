import classes from './widget.module.scss'

const Widget = ({children, title, count, link}) => {
    return (
        <>
            {link
            ? (<a href="/" className={classes.rightlink}>{link}</a>)
            : null}
            
            <a href="/" className={classes.header}>
                        <span className={classes.title}>{title}</span>
                        <span className={classes.count}>{count}</span>
            </a>
            <div className={classes.elements}>
                {children}
            </div>
        </>
    )
}

export default Widget;