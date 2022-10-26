import { Component } from "react";

import './sidebar.css'


class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <ul className="main-nav">
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Моя страница
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 00-1.82 1.82 4.26 4.26 0 00-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 001.63-.4 4.15 4.15 0 001.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 00-.4-1.63 4.15 4.15 0 00-1.82-1.82 4.26 4.26 0 00-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 001.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8.19 8z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Новости
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="message_outline_20__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="message_outline_20__message_outline_20"><path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"></path><path d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z" id="message_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"></path></g></g></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Мессенджер
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="phone_outline_20__Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="phone_outline_20__Icons-20/phone_outline_20"><g id="phone_outline_20__phone_outline_20"><path opacity=".1" d="M0 0h20v20H0z"></path><path d="M7.78 2.7l.7.83a4.13 4.13 0 01-.3 5.58l-.3.3c.23.38.64.88 1.23 1.48.53.53.99.9 1.35 1.14l.13.09.3-.3a4.14 4.14 0 015.58-.3l.83.7a3.45 3.45 0 01.34 4.9c-.6.69-1.43 1.15-2.29 1.28l-.5.06c-3 .3-6.04-1.16-9.1-4.21-3.05-3.06-4.5-6.1-4.22-9.03l.06-.51a3.83 3.83 0 011.3-2.36l.17-.13a3.44 3.44 0 014.72.48zm-3.91.79a2.38 2.38 0 00-.81 1.58c-.35 2.55.9 5.25 3.76 8.12 2.86 2.86 5.56 4.1 8.12 3.75.6-.05 1.17-.35 1.57-.8.72-.85.64-2.09-.18-2.77l-.83-.7-.14-.12a2.64 2.64 0 00-3.41.33l-.6.6-.09.07a.9.9 0 01-.86.14 7.26 7.26 0 01-2.35-1.74A7.23 7.23 0 016.31 9.6a.9.9 0 01.21-.95l.6-.6.13-.13c.86-1 .9-2.44.08-3.42l-.7-.83-.11-.13c-.7-.7-1.85-.73-2.65-.05z" id="phone_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"></path></g></g></g></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Звонки
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g clipRule="evenodd" fillRule="evenodd"><path d="M6.25 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.69 11.57c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path></g><path d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 11-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 010-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 00-2.81-.62z"></path></g></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Друзья
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10 7.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM7.25 6.5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm-.5 7.25c0-.42.23-.83.8-1.17A4.81 4.81 0 0110 12c1.03 0 1.88.23 2.45.58.57.34.8.75.8 1.17 0 .3-.1.44-.22.54-.14.11-.4.21-.78.21h-4.5c-.39 0-.64-.1-.78-.21-.12-.1-.22-.25-.22-.54zM10 10.5c-1.22 0-2.37.27-3.23.8-.88.53-1.52 1.37-1.52 2.45 0 .7.28 1.3.78 1.71.48.39 1.1.54 1.72.54h4.5c.61 0 1.24-.15 1.72-.54.5-.4.78-1 .78-1.71 0-1.08-.64-1.92-1.52-2.45-.86-.53-2-.8-3.23-.8zm4-5.59c.06-.4.44-.7.85-.64a2.5 2.5 0 01-.35 4.98.75.75 0 010-1.5 1 1 0 00.14-1.99.75.75 0 01-.63-.85zM15.76 10a.75.75 0 000 1.5c1.16 0 1.75.67 1.75 1.25 0 .22-.07.41-.19.55-.1.12-.24.2-.46.2a.75.75 0 000 1.5c1.43 0 2.15-1.21 2.15-2.25 0-1.71-1.6-2.75-3.25-2.75zM5 10.75a.75.75 0 00-.75-.75C2.61 10 1 11.04 1 12.75 1 13.79 1.72 15 3.15 15a.75.75 0 000-1.5.57.57 0 01-.47-.2.86.86 0 01-.18-.55c0-.58.6-1.25 1.75-1.25.41 0 .75-.34.75-.75zm.14-6.47a.75.75 0 01.22 1.48 1 1 0 00.14 1.99.75.75 0 110 1.5 2.5 2.5 0 01-.36-4.97z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Сообщества
                    
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 001.43-.32 3.5 3.5 0 001.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 01-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27l.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 00-.32-1.43 3.5 3.5 0 00-1.53-1.53 3.75 3.75 0 00-1.43-.32A43.2 43.2 0 0010 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 00-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 003.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 002.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 002.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 00-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 00-2.19 2.19zM7.25 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Фотографии
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5.5 11a.75.75 0 01.75.75v1a.75.75 0 01-.75.75.75.75 0 01-.75-.75v-1A.75.75 0 015.5 11zm3.75-.25a.75.75 0 00-1.5 0v2.75a.75.75 0 001.5 0v-2.75zM14.5 10a.75.75 0 01.75.76v2.8a.75.75 0 01-1.5-.01v-2.8a.75.75 0 01.75-.75zm-2.25-.74a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z"></path><path fill="currentColor" fillRule="evenodd" d="M7.92 2c-.88 0-1.6 0-2.17.05a4.1 4.1 0 00-1.57.39 4 4 0 00-1.74 1.74 4.1 4.1 0 00-.4 1.57C2 6.33 2 7.04 2 7.92v4.16c0 .88 0 1.6.05 2.17.04.58.15 1.1.39 1.57a4 4 0 001.74 1.74c.48.24.99.35 1.57.4.58.04 1.29.04 2.17.04h4.16c.88 0 1.6 0 2.17-.05a4.1 4.1 0 001.57-.39 4 4 0 001.74-1.74c.24-.47.35-.99.4-1.57.04-.58.04-1.29.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 00-.39-1.57 4 4 0 00-1.74-1.74 4.1 4.1 0 00-1.57-.4C13.67 2 12.96 2 12.08 2H7.92zM4.87 3.77c.22-.11.51-.19 1-.23.51-.04 1.16-.04 2.08-.04h4.1c.92 0 1.57 0 2.07.04.5.04.8.12 1.02.23a2.5 2.5 0 011.09 1.1c.11.22.19.51.23 1 .03.42.04.93.04 1.6-.38-.28-.85-.6-1.35-.9-1.04-.65-2.4-1.32-3.65-1.32-1.43 0-2.53.64-3.54 1.23l-.42.25A8.5 8.5 0 013.5 7.99v-.04c0-.92 0-1.57.04-2.07.04-.5.12-.8.23-1.01a2.5 2.5 0 011.1-1.1zM3.5 9.5v2.55c0 .92 0 1.57.04 2.07.04.5.12.8.23 1.02a2.5 2.5 0 001.1 1.09c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h4.1c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.02-.23a2.5 2.5 0 001.09-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08V9.36a30.58 30.58 0 01-.17-.13c-.43-.33-1.14-.88-1.96-1.39a6.19 6.19 0 00-2.87-1.09c-1 0-1.73.42-2.77 1.02a70.79 70.79 0 01-.45.26A9.97 9.97 0 013.5 9.5z" clipRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Музыка
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fill="currentColor" fillRule="evenodd"><path d="M5.7 7.97a1.48 1.48 0 011.95-1.13c1.25.45 2.39 1.15 3.35 2.03.67.6.67 1.66 0 2.26-.96.88-2.1 1.58-3.34 2.03a1.48 1.48 0 01-1.96-1.13 10.49 10.49 0 010-4.06zm1.47.29A8.54 8.54 0 0110 10.02h-.01a8.54 8.54 0 01-2.82 1.72 8.99 8.99 0 010-3.48z"></path><path d="M7.08 18h5.84c1.77 0 2.42-.18 3.07-.53A3.57 3.57 0 0017.47 16c.35-.65.53-1.3.53-3.07V7.08c0-1.77-.18-2.42-.53-3.07A3.57 3.57 0 0016 2.53c-.65-.35-1.3-.53-3.07-.53H7.08c-1.77 0-2.42.18-3.07.53-.64.34-1.14.84-1.48 1.48-.35.65-.53 1.3-.53 3.07v5.84c0 1.77.18 2.42.53 3.07.34.64.84 1.14 1.48 1.48.65.35 1.3.53 3.07.53zm4.04-14.46c-.5-.04-1.15-.04-2.07-.04H7.08c-1.66 0-2.02.17-2.36.35-.38.2-.67.5-.87.87-.18.34-.35.7-.35 2.36v5.84c0 1.66.17 2.02.35 2.36.2.38.5.67.87.87.34.18.7.35 2.36.35h1.97c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.01-.23a2.5 2.5 0 001.1-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08v-4.1c0-.92 0-1.57-.04-2.07-.04-.5-.12-.8-.23-1.01a2.5 2.5 0 00-1.1-1.1 2.65 2.65 0 00-1-.23zm4.16 12.61c-.23.12-.47.24-1.12.3a4 4 0 00.4-.63c.24-.47.35-.99.4-1.57.04-.58.04-1.28.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 00-.39-1.57 4 4 0 00-.4-.63c.65.06.89.18 1.12.3.38.2.67.5.87.87.18.34.35.7.35 2.36v5.84c0 1.66-.17 2.02-.35 2.36-.2.38-.5.67-.87.87z"></path></g></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Видео
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10.76 3.3a.94.94 0 011.86.2l-.37 4.44c-.03.34.18.66.51.77h.02a2.8 2.8 0 01.46.22c.3.15.7.4 1.08.75a.75.75 0 001.02-1.1 6.49 6.49 0 00-1.55-1.06l.33-3.89a2.44 2.44 0 00-4.84-.53l-.1.65-.02-.06a2.46 2.46 0 00-4.78.98l.34 4.49a4.63 4.63 0 00-1.46 4.49c.55 2.7 3.18 5.08 7.23 4.85h.05a.75.75 0 00-.09-1.5h-.04c-3.37.2-5.3-1.73-5.67-3.65a3.12 3.12 0 011.18-3.23 2.95 2.95 0 012.39-.4c.57.21.83.7.82 1.19a1 1 0 01-.83 1c-.32.07-.49.09-.55.09a.75.75 0 000 1.5c.24 0 .56-.06.86-.12a2.5 2.5 0 002.02-2.44 2.7 2.7 0 00-2-2.68c-.3-.08-1.3-.3-2.47.09l-.29-3.8a.96.96 0 011.87-.38l.72 2.11v.02a5.6 5.6 0 00.25.56c.04.07.15.21.34.3.3.15.65.11.92-.08.17-.13.25-.3.28-.37a5.62 5.62 0 00.12-.6l.01-.02zM16.31 18l1.38-.8.04-.03c.22-.12.47-.26.66-.4.2-.15.56-.42.77-.9.25-.55.25-1.19 0-1.75a2.2 2.2 0 00-.77-.9l-.66-.4-.04-.02-1.38-.8-.04-.02c-.22-.13-.47-.27-.68-.37a2.2 2.2 0 00-1.16-.22c-.61.06-1.16.38-1.52.87-.3.42-.37.87-.39 1.12-.02.24-.02.52-.02.78V15.84c0 .26 0 .54.02.78s.09.7.4 1.11c.35.5.9.81 1.5.88.52.05.94-.12 1.17-.22.21-.1.46-.25.68-.37zm.63-3.9c.51.3.77.44.85.63.08.17.08.36 0 .53-.08.2-.34.34-.85.64l-1.38.8c-.51.3-.77.44-.98.42a.65.65 0 01-.46-.27C14 16.68 14 16.4 14 15.8V14.2c0-.59 0-.89.12-1.06.11-.15.28-.24.46-.26.21-.02.47.13.98.42z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Дегроды
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M11.5 4h-3c-2.32 0-4.25.43-5.58 1.76S1.02 9.15 1 12c0 .8.05 1.99.46 3 .2.5.5 1.01.98 1.4.48.39 1.09.61 1.81.61.8 0 1.37-.33 1.81-.77.31-.31.58-.72.8-1.07l.17-.24c.28-.42.55-.76.91-1 .35-.24.82-.42 1.56-.42h1c.74 0 1.21.18 1.56.42.36.24.63.58.91 1l.16.24c.23.35.5.76.8 1.07.45.44 1.02.77 1.82.77a2.8 2.8 0 001.81-.61c.47-.39.78-.9.98-1.4.4-1.01.47-2.2.46-3-.02-2.84-.6-4.9-1.92-6.23C15.75 4.43 13.82 4 11.5 4zm-1 8h-1c-1.01 0-1.79.26-2.4.68-.6.4-1 .94-1.31 1.4l-.23.34c-.21.32-.37.56-.57.76a.95.95 0 01-.74.32c-.4 0-.67-.12-.87-.28a1.9 1.9 0 01-.53-.79 6.82 6.82 0 01-.35-2.42c.02-2.71.57-4.28 1.48-5.19.91-.9 2.34-1.32 4.52-1.32h3c2.18 0 3.61.42 4.52 1.32.9.91 1.46 2.48 1.48 5.19 0 .75-.06 1.7-.35 2.42a1.9 1.9 0 01-.53.8c-.2.15-.47.27-.87.27a.95.95 0 01-.74-.32c-.2-.2-.36-.44-.57-.76l-.23-.34c-.3-.46-.7-1-1.3-1.4A4.13 4.13 0 0010.5 12zM7.25 7.5a.75.75 0 00-1.5 0v.75H5a.75.75 0 000 1.5h.75v.75a.75.75 0 001.5 0v-.75H8a.75.75 0 000-1.5h-.75zm5.25.75a.75.75 0 000 1.5h2a.75.75 0 000-1.5z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                               Игры
                    
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zM10 3a7 7 0 100 14 7 7 0 000-14zm3.07 9.06c.3.28.3.76.02 1.06a4.06 4.06 0 01-.85.65 4.36 4.36 0 01-2.24.63 4.36 4.36 0 01-2.24-.63 4.06 4.06 0 01-.85-.65.75.75 0 011-1.11l.2.18a3.16 3.16 0 001.89.71 2.88 2.88 0 001.9-.71l.1-.1a.75.75 0 011.07-.03zM7.62 7.25a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25zm4.75 0a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" fill="currentColor"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Стикеры
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fill="currentColor" fillRule="evenodd"><path d="M5 6.75c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 6.75zM5 10.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75z"></path><path d="M7.13 2c-1.61 0-2.34.14-3.08.53-.65.35-1.17.87-1.52 1.52-.4.74-.53 1.47-.53 3.08v5.74c0 1.61.14 2.34.53 3.08.35.65.87 1.17 1.52 1.52.74.4 1.47.53 3.08.53h5.74c1.61 0 2.34-.14 3.08-.53a3.64 3.64 0 001.52-1.52c.4-.74.53-1.47.53-3.08V7.13c0-1.61-.14-2.34-.53-3.08a3.64 3.64 0 00-1.52-1.52c-.74-.4-1.47-.53-3.08-.53zM4.75 3.86c.42-.22.85-.36 2.38-.36h5.74c1.53 0 1.96.14 2.38.36.38.2.69.5.9.9.21.4.35.84.35 2.37v5.74c0 1.53-.14 1.96-.36 2.38-.2.38-.5.69-.9.9-.34.18-.7.3-1.74.34v-2.74a.75.75 0 00-1.5 0v2.75H8v-2.75a.75.75 0 00-1.5 0v2.74c-1.03-.03-1.4-.16-1.75-.35-.38-.2-.69-.5-.9-.9-.21-.4-.35-.84-.35-2.37V7.13c0-1.53.14-1.96.36-2.38.2-.38.5-.69.9-.9zm1 2.14a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5zm0 3.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5z"></path></g></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Объявления
                            </span>
                        </a>
                    </li>
                    <div className="main-nav__divider"></div>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M11.76 7.7c-.28-.27-.52-.51-.7-.73a2.3 2.3 0 01-.47-.77 2.25 2.25 0 010-1.4c.1-.3.27-.54.46-.77.19-.22.45-.48.73-.76l.25-.24.24-.25c.28-.28.54-.54.76-.73.23-.19.47-.36.77-.46.46-.14.94-.14 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7l.26.28.27.26c.28.28.52.52.7.74.2.23.37.47.47.77.14.46.14.94 0 1.4-.1.3-.27.54-.46.77-.19.22-.45.48-.73.76l-.25.24-.24.25c-.28.28-.54.54-.76.73-.23.19-.47.36-.77.46-.46.14-.94.14-1.4 0a2.3 2.3 0 01-.77-.46 13.4 13.4 0 01-.74-.7l-.26-.28-.27-.26zm4.4-1.03l-.25.24-.24.25c-.3.3-.5.5-.67.64a.85.85 0 01-.27.18.75.75 0 01-.46 0A.86.86 0 0114 7.8c-.16-.14-.36-.33-.67-.64l-.24-.25-.25-.24c-.3-.3-.5-.5-.64-.67a.85.85 0 01-.18-.27.75.75 0 010-.46.85.85 0 01.18-.27c.14-.16.33-.36.64-.67l.25-.24.24-.25c.3-.3.5-.5.67-.64a.86.86 0 01.27-.18.75.75 0 01.46 0c.04.01.11.05.27.18.16.14.36.33.67.64l.24.25.25.24c.3.3.5.5.64.67.13.16.17.23.18.27.05.15.05.31 0 .46a.86.86 0 01-.18.27c-.14.16-.33.36-.64.67zM11 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 01-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02-.3-.03-.59-.08-.87-.23a2.25 2.25 0 01-.98-.98 2.3 2.3 0 01-.23-.87c-.02-.28-.02-.63-.02-1.02v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 01-.32-.06.75.75 0 01-.33-.33.86.86 0 01-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 01.33-.33.85.85 0 01.32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.86.86 0 01-.06.32.75.75 0 01-.33.33.86.86 0 01-.32.06c-.2.02-.49.02-.92.02zM2 5.12v.76c0 .4 0 .74.02 1.02a2.25 2.25 0 001.2 1.86c.3.14.59.2.88.22.28.02.65.02 1.05.02h.7c.4 0 .77 0 1.05-.02a2.25 2.25 0 001.86-1.2c.14-.3.2-.59.22-.88C9 6.62 9 6.27 9 5.88v-.76c0-.4 0-.74-.02-1.02a2.3 2.3 0 00-.23-.87 2.25 2.25 0 00-.98-.98 2.3 2.3 0 00-.87-.23C6.62 2 6.25 2 5.85 2h-.7c-.4 0-.77 0-1.05.02a2.25 2.25 0 00-1.86 1.2c-.14.3-.2.59-.22.88C2 4.38 2 4.73 2 5.12zM5.5 7.5h.35c.43 0 .71 0 .92-.02.2-.01.28-.04.32-.06a.75.75 0 00.33-.33.85.85 0 00.06-.32c.02-.2.02-.49.02-.92v-.7c0-.43 0-.71-.02-.92a.85.85 0 00-.06-.32.75.75 0 00-.33-.33.86.86 0 00-.32-.06c-.2-.02-.49-.02-.92-.02h-.7c-.43 0-.71 0-.92.02a.86.86 0 00-.32.06.75.75 0 00-.33.33.85.85 0 00-.06.32c-.02.2-.02.49-.02.92v.7c0 .43 0 .71.02.92.01.2.04.28.06.32.07.14.19.26.33.33.04.02.11.05.32.06.2.02.49.02.92.02zM2 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 01-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02a2.25 2.25 0 01-1.86-1.2 2.3 2.3 0 01-.22-.88C2 15.62 2 15.27 2 14.88v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 01-.32-.06.75.75 0 01-.33-.33.85.85 0 01-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 01.33-.33.85.85 0 01.32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.85.85 0 01-.06.32.75.75 0 01-.33.33.86.86 0 01-.32.06c-.2.02-.49.02-.92.02z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Мини-приложения
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10 17a7 7 0 110-14 7 7 0 010 14zm-8.5-7a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zm7.25-4a.75.75 0 00-.75.75v3h-.25a.75.75 0 000 1.5H8V12h-.25a.75.75 0 000 1.5H8v.5a.75.75 0 001.5 0v-.5H11a.75.75 0 000-1.5H9.5v-.75h1.63a2.63 2.63 0 000-5.25zm2.38 3.75H9.5V7.5h1.63a1.13 1.13 0 010 2.25z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                VK-Pay
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.92 3.73c.15-.07.38-.14.9-.19a14.5 14.5 0 01.93-.03V3.5h.5l.94.04c.51.05.74.12.89.2.4.2.73.53.94.93.07.15.14.38.19.9.02.26.03.56.03.93H6.76c0-.37.01-.67.04-.94.04-.51.11-.74.19-.89a2.15 2.15 0 01.93-.94zM9.75 2c-1.2 0-1.92.1-2.5.4A3.65 3.65 0 005.64 4c-.31.6-.38 1.29-.4 2.52-.79.03-1.32.11-1.77.33a3.5 3.5 0 00-1.63 1.63C1.5 9.2 1.5 10.13 1.5 12s0 2.8.35 3.52a3.5 3.5 0 001.63 1.63c.72.35 1.65.35 3.52.35h6c1.87 0 2.8 0 3.52-.35a3.5 3.5 0 001.63-1.63c.35-.72.35-1.65.35-3.52s0-2.8-.35-3.52a3.5 3.5 0 00-1.63-1.63 4.4 4.4 0 00-1.78-.33c-.01-1.23-.08-1.92-.39-2.53a3.65 3.65 0 00-1.6-1.6c-.58-.3-1.3-.39-2.5-.39h-.5zM13 8H7c-.96 0-1.59 0-2.07.04-.47.04-.68.1-.8.16a2 2 0 00-.93.93c-.06.12-.13.33-.16.8C3 10.4 3 11.04 3 12c0 .96 0 1.59.04 2.07.04.47.1.68.16.8a2 2 0 00.93.93c.13.06.33.12.8.16C5.4 16 6.04 16 7 16h6c.96 0 1.59 0 2.07-.04.47-.04.68-.1.8-.16a2 2 0 00.93-.93c.06-.12.12-.33.16-.8.04-.48.04-1.11.04-2.07 0-.96 0-1.59-.04-2.07-.04-.47-.1-.68-.16-.8a2 2 0 00-.93-.93 2.23 2.23 0 00-.8-.16C14.6 8 13.96 8 13 8z" fill="currentColor"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Работа
                            </span>
                        </a>
                    </li>
                    <div className="main-nav__divider"></div>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <object data="img/icons/pill.svg" width="20" height="20"> </object>
                            </div>
                            <span className="main-nav__item-title">
                                Закладки
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M17.2 6.78a2 2 0 01.24.58c.06.23.06.48.06.97v2.97c0 2.52 0 3.78-.49 4.74a4.5 4.5 0 01-1.97 1.97c-.96.49-2.22.49-4.74.49h-.6c-2.52 0-3.78 0-4.74-.49a4.5 4.5 0 01-1.97-1.97c-.49-.96-.49-2.22-.49-4.74V8.7c0-2.52 0-3.78.49-4.74a4.5 4.5 0 011.97-1.97c.96-.49 2.22-.49 4.74-.49h.97c.5 0 .74 0 .97.06.2.04.4.13.58.23.2.13.37.3.72.65l3.62 3.62c.35.35.52.52.65.72zM10.3 17h-.6c-1.28 0-2.16 0-2.83-.06-.66-.05-1-.15-1.23-.27a3 3 0 01-1.31-1.3 3.24 3.24 0 01-.27-1.24C4 13.46 4 12.58 4 11.3V8.7c0-1.28 0-2.16.06-2.83.05-.66.15-1 .27-1.23a3 3 0 011.3-1.31c.24-.12.58-.22 1.24-.27C7.54 3 8.42 3 9.7 3h.3v1.28c0 .67 0 1.23.04 1.67.03.47.12.88.31 1.28.32.6.81 1.1 1.42 1.42.4.2.81.28 1.28.31.44.04 1 .04 1.67.04H16v2.3c0 1.28 0 2.16-.06 2.83-.05.66-.15 1-.27 1.23a3 3 0 01-1.3 1.31c-.24.12-.58.22-1.24.27-.67.06-1.55.06-2.83.06zm5.57-9.5h-1.12c-.71 0-1.2 0-1.58-.03a1.88 1.88 0 01-.71-.16c-.33-.17-.6-.44-.77-.77a1.88 1.88 0 01-.16-.7 21.6 21.6 0 01-.03-1.59V3.13l.01.01.37.36 3.62 3.62.36.37.01.01z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Файлы
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="main-nav__item">
                            <div className="main-nav__item-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.8 3.96a.87.87 0 00-.66.12l-.01.01-3.63 2.3v6.21l3.64 2.3a.88.88 0 001.1-.12.94.94 0 00.27-.66V4.88a.95.95 0 00-.14-.51.9.9 0 00-.56-.4zM11 12.54V6.46H5.48c-.82 0-1.56.34-2.1.89a3.06 3.06 0 00-.86 2.15c0 .84.33 1.6.87 2.15a2.92 2.92 0 002.09.88H11zm.96-7.57l3.36-2.13a2.37 2.37 0 011.82-.33 2.4 2.4 0 011.5 1.07c.24.4.37.85.37 1.3v9.25c0 .66-.26 1.27-.7 1.71a2.38 2.38 0 01-2.99.34l-3.37-2.14h-2.3l.19 1.04a2.43 2.43 0 01-.42 1.85 2.52 2.52 0 01-3.47.6 2.46 2.46 0 01-1.03-1.59l-.36-2a4.44 4.44 0 01-2.24-1.23 4.56 4.56 0 01-1.3-3.2c0-1.25.5-2.38 1.3-3.2a4.42 4.42 0 013.16-1.34h6.48zM6.1 14.03l.3 1.64a.96.96 0 00.4.62 1.02 1.02 0 001.4-.24.93.93 0 00.16-.71l-.23-1.31H6.1z" fill="currentColor"></path></svg>
                            </div>
                            <span className="main-nav__item-title">
                                Реклама
                            </span>
                        </a>
                    </li>
                    
                </ul>
                <div className="main-nav__other">
                    <a href="/" className="main-nav__other-item">
                        Блог
                    </a>
                    <a href="/" className="main-nav__other-item">
                        Разработчикам
                    </a>
                    <a href="/" className="main-nav__other-item">
                        Для бизнеса
                    </a>
                    <a href="/" className="main-nav__other-item">
                        Ещё
                    </a>
                </div>
            </aside>
        )
    }
}

export default Sidebar