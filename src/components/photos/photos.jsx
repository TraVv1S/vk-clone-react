import Island from '../../uikit/island/island';
import Widget from '../../uikit/island/widget';
import user from '../../data/user.json'

import classes from './photos.module.scss'


const Photos = () => {
    const {urls, count} = user.photos;
    
    return (
        <Island>
            <Widget title="My photos" count={count} link="Show on map">
            
            
                {urls.map((url, i) => {
                    return (
                        <a href="/" key={i} className={classes.photo}>
                            <img className={classes.img} src={url} />
                        </a>
                    )
                })}
            
            </Widget>
        </Island>
    )
}

export default Photos;