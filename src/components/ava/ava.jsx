import Island from '../../uikit/island/island'
import user from '../../data/user.json'
import classes from './ava.module.scss'
import BlueBtn from '../../uikit/island/blueBtn'

const Ava = () => {

    const avaMenu = [{
                        text: 'Page statistics',
                        link: '#',
                        icon: (<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.1 19a.9.9 0 01.9-.9h18a.9.9 0 110 1.8H3a.9.9 0 01-.9-.9zM16.5 5.9a.9.9 0 110-1.8H21a.9.9 0 01.9.9v4.5a.9.9 0 11-1.8 0V7.17l-5.96 5.97a.9.9 0 01-1.28 0L9.5 9.77l-5.86 5.87a.9.9 0 11-1.28-1.28l6.5-6.5a.9.9 0 011.28 0l3.36 3.37 5.33-5.33z" clipRule="evenodd" fill="currentColor" fillRule="evenodd"></path></svg>)
                    },
                    {
                        text: 'Memories',
                        link: '#',
                        icon: (<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path clipRule="evenodd" d="M12 7.1a.9.9 0 01.9.9v3.73l2.24 2.23a.9.9 0 11-1.28 1.28l-2.5-2.5a.9.9 0 01-.26-.64V8a.9.9 0 01.9-.9z" fillRule="evenodd"></path><path d="M19 5a9.87 9.87 0 00-7-2.9 9.87 9.87 0 00-7.1 3V3a.9.9 0 00-1.8 0v4a.9.9 0 00.9.9h4a.9.9 0 000-1.8H6.45A8.07 8.07 0 0112 3.9c2.24 0 4.26.9 5.73 2.37A8.07 8.07 0 0120.1 12c0 2.24-.9 4.26-2.37 5.73A8.07 8.07 0 0112 20.1a8.06 8.06 0 01-5.2-1.9.9.9 0 00-1.16 1.39A9.86 9.86 0 0012 21.9a9.87 9.87 0 009.9-9.9c0-2.73-1.1-5.21-2.9-7z"></path></g></svg>)
                    },
                    {
                        text: 'My questions',
                        link: '#',
                        icon: (<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M3.93 11.7c0-3.63 3.49-6.8 8.09-6.8s8.08 3.17 8.08 6.8c0 3.64-3.48 6.81-8.08 6.81a9.34 9.34 0 01-3.29-.58.9.9 0 00-1 .26c-.67.8-1.8 1.35-3.51 1.55.2-.44.4-.9.57-1.37.3-.78.53-1.66.53-2.56a.9.9 0 00-.18-.53 5.95 5.95 0 01-1.2-3.57zm8.09-8.6c-5.33 0-9.89 3.73-9.89 8.6 0 1.62.5 3.12 1.38 4.39a6.22 6.22 0 01-.4 1.65c-.2.53-.43 1.04-.67 1.55l-.23.52c-.39.86.28 1.83 1.21 1.79 2.2-.09 4-.64 5.25-1.8 1.05.34 2.17.51 3.35.51 5.32 0 9.88-3.73 9.88-8.6 0-4.88-4.56-8.61-9.88-8.61zM12 8.9a.6.6 0 00-.57.4.9.9 0 11-1.7-.6 2.4 2.4 0 014.67.8c0 1.1-.53 1.73-.92 2.17l-.01.02c-.4.44-.54.6-.58.91a.9.9 0 01-1.78-.2 3.2 3.2 0 011.02-1.92c.32-.36.47-.57.47-.98a.6.6 0 00-.6-.6zm1 6.6a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" fillRule="evenodd"></path></svg>)
                    },
                    {
                        text: 'Stories archieve',
                        link: '#',
                        icon: (<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fill="currentColor" fillRule="evenodd"><path d="M9.1 13.4a.9.9 0 01.9-.9h4a.9.9 0 110 1.8h-4a.9.9 0 01-.9-.9z"></path><path d="M5 3.1A2.9 2.9 0 002.1 6v2c0 1.11.93 1.9 2 1.9V18A2.9 2.9 0 007 20.9h10a2.9 2.9 0 002.9-2.9V9.9c1.07 0 2-.79 2-1.9V6A2.9 2.9 0 0019 3.1zm0 1.8A1.1 1.1 0 003.9 6v2a.1.1 0 00.1.1h16a.1.1 0 00.1-.1V6A1.1 1.1 0 0019 4.9zm2 14.2A1.1 1.1 0 015.9 18V9.9h12.2V18a1.1 1.1 0 01-1.1 1.1z"></path><path d="M10 12.5a.9.9 0 100 1.8h4a.9.9 0 000-1.8z"></path></g></svg>)
                    },
                    {
                        text: 'Money transfers',
                        link: '#',
                        icon: (<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 3.1a4.5 4.5 0 012.35.44 3.17 3.17 0 011.31 1.31c.3.57.42 1.11.44 2.1V12a.9.9 0 01-1.8.11V8.9H3.9v5.9c0 .87.06 1.18.23 1.5.13.25.32.44.57.57.3.16.58.22 1.31.23H18.83l-1.47-1.46a.9.9 0 01-.08-1.18l.08-.1a.9.9 0 011.18-.08l.1.08 3 3a.9.9 0 01.08 1.18l-.08.1-3 3a.9.9 0 01-1.36-1.18l.08-.1 1.47-1.46H6.2c-1.07 0-1.65-.1-2.21-.37l-.14-.07a3.17 3.17 0 01-1.32-1.31 4.2 4.2 0 01-.44-2.1V7.21c0-1.16.11-1.74.44-2.35a3.17 3.17 0 011.31-1.32c.57-.3 1.11-.42 2.1-.44h.25zm0 1.8H6.2c-.88 0-1.18.06-1.5.23-.25.13-.44.32-.57.57-.16.3-.22.58-.23 1.31v.09h16.2v-.09c-.01-.73-.07-1.02-.23-1.3a1.37 1.37 0 00-.57-.58c-.3-.16-.58-.22-1.31-.23z" fill="currentColor"></path></svg>)
                    }]

    return (
        <>
            <Island>
                
                    <div className={classes.edit}>
                        <img src="/img/ava_m.jpg" alt="avatar" />
                    </div>
                    <BlueBtn text="Edit"/>

                    <ul className={classes.nav}>
                        {avaMenu.map(e => <li>
                                            <a href={e.link} className={classes.item}>
                                                <div className={classes.item_icon}>
                                                    {e.icon}
                                                </div>
                                                
                                                    {e.text}
                                                
                                            </a>
                                        </li>)}
                    </ul>
                
            </Island>

            <Island>
                
                    <a href="/" className={classes.profilelink}>
                        <div className={classes.item_icon}>
                            <img src="/img/icons/link.png" alt="" />
                        </div>
                        
                            Profile link
                        
                    </a>
                
            </Island>
        </>
        
    )
}

export default Ava;