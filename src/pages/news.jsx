import Feed from "../components/feed/feed";

const News = () => {
    return (
        <>
            <div className="column-m">
                <Feed />
            </div>
            <div className="column-s">
                <div className="island">
                    <ul className="filters">
                        <li className="filter active"><a href="#">Новости</a></li> 
                        <li className="filter"><a href="#">Рекомендации</a></li>
                        <li className="filter"><a href="#">Поиск</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default News;