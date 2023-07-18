'use client';
import {useState, useEffect} from 'react';

export function useLocalStorage (key, initialValue) {
  const [state, setState] = useState([]);

  useEffect(() => {
    const cachedStringData = localStorage.getItem(key);
    const cachedData = JSON.parse(cachedStringData);
    if(cachedData) {
      setState(cachedData);
    } else {
      setState(initialValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
