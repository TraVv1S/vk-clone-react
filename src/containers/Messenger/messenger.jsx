import user from '@/data/user.json'

const Messenger = () => {

    return (
        <>
            <div className="column-m">
                <div className="island">
                    <div className="dialogues">
                        {user.friends.map(f => <div href="/" className="dialogues__dialogue">
                                                    <a href="/" className="island__right-link">4:20</a>
                                                    <img src={f.ava} alt="" className="dialogues__dialogue-pic" />
                                                    <div className="dialogues__dialogue-meta">
                                                        <a href="/" className="dialogues__dialogue-name">{f.name}</a>
                                                        <p className="dialogues__dialogue-status">прив чё как дел</p>
                                                    </div>
                                                </div>)}
                    </div>
                </div>
            </div>
            <div className="column-s">
                <div className="island">
                    <ul className="filters">
                            <li className="filter active"><a href="#">Все сообщения</a></li> 
                            <li className="filter"><a href="#">Важные</a></li>
                            <li className="filter"><a href="#">Непрочитанные</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Messenger;