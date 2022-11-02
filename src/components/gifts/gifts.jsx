import classes from './gifts.module.scss'
import Island from '../../uikit/island/island';
import Widget from '../../uikit/island/widget';

const Gifts = () => {
    return (
        <Island>
            <Widget title="Gifts" count="37">
                <img src="/img/gift.png" alt="" className={classes.gift} />
                <img src="/img/gift.png" alt="" className={classes.gift} />
                <img src="/img/gift.png" alt="" className={classes.gift} />
            </Widget>
        </Island>
    )
}

export default Gifts;