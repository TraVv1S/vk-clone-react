import Feed from '../Feed/feed'
import Island from '@/uikit/island/island'

const News = () => {
    return (
        <>
            <div className="column-m">
                <Feed />
            </div>
            <div className="column-s">
                <Island>
                    <ul className="filters">
                        <li className="filter active"><a href="#">Новости</a></li> 
                        <li className="filter"><a href="#">Рекомендации</a></li>
                        <li className="filter"><a href="#">Поиск</a></li>
                    </ul>
                </Island>
            </div>
        </>
    )
}

export default News;