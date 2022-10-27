import './gifts.css'

const Gifts = () => {
    return (
        <div className="account-gifts island">
            <a href="/" className="island__label">
                <span className="island__label-title">Подарки</span>
                <span className="island__label-count">37</span>
            </a>
            <div className="account-gifts__gifts island__content">
                <img src="/img/gift.png" alt="" className="account-gifts__gift" />
                <img src="/img/gift.png" alt="" className="account-gifts__gift" />
                <img src="/img/gift.png" alt="" className="account-gifts__gift" />
            </div>
        </div>
    )
}

export default Gifts;