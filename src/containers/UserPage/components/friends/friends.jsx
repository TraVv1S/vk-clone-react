import Island from '@/uikit/island/island';
import Widget from '@/uikit/island/widget';
import classes from './friends.module.scss'

const Friends = (props) =>{
    
    const user = props.user;

    return (
        <Island>
            <Widget title="Friends" count="289">
                
                    {user.friends.map(f => (<a href={"/"+f.id} className={classes.friend}>
                                                <img src={f.ava} alt="" className={classes.pic} />
                                                <p className={classes.name}>{f.name}</p>
                                            </a>))
                                .slice(0, 6)}
                
            </Widget>
            <div className={classes.divider}></div>
            
            <Widget title="Friends online" count="20">
                
                    {user.friends.filter(f => f.online).map(f => (<a href={"/"+f.id} className={classes.friend}>
                                                    <img src={f.ava} alt="" className={classes.pic} />
                                                    <p className={classes.name}>{f.name}</p>
                                                </a>))
                                    .slice(0, 6)}
                
            </Widget>
        </Island>
    )
}

export default Friends;