import Island from '@/uikit/island/island';
import Widget from '@/uikit/island/widget';

import classes from './photos.module.scss'


const Photos = (props) => {

    const user = props.user;

    const urls = user.photos.urls.slice(0, 4);
    const count = user.photos.count;
    
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