import React, { useState, useEffect } from 'react';

const ThemeSwitch = () => {

	const icons = {
		dark: <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="white" strokeWidth="1.5" >
		<path d="m1.75 8c0 3.45 2.8 6.25 6.25 6.25 3.41-.0027 6.25-3 6.25-6-1 .5-4 1.5-6-.5s-1-5-.5-6c-3 0-6 2.84-6 6.25z"/>
		</svg>,
		light: <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="black" strokeWidth="1.5">
		<circle cy="8" cx="8" r="3.25"/>
		<path d="m2.75 13.25.5-.5m9.5 0 .5.5m-.5-10 .5-.5m-10 .5-.5-.5m-.50 5.25h-1m13.5 0h-1m-5.75 5.75v1m0-13.5v1"/>
		</svg>
	}

	const [theme, setTheme] = useState(() => {
		
		if (import.meta.env.SSR) {
			return undefined;
		}
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return 'dark';
		
    });
		
    useEffect(() => {

		const root = document.documentElement;
		if (theme === 'light') {
			root.classList.remove('theme-dark');
		} else {
			root.classList.add('theme-dark');
		}

    }, [theme])
    
    const toggleTheme = () => {

        const toTheme = (theme === 'dark') ? 'light' : 'dark'
        setTheme(toTheme)
        localStorage.setItem('theme', toTheme)

    }

    return <button aria-label="cambiar tema" style={{border: 'none', backgroundColor: 'transparent'}} onClick={toggleTheme}>{icons[theme]}</button>
};

export default ThemeSwitch;
