import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export class CityStorage {
  static STORAGE_KEY = 'currentCity';

  _subscriptors = [];

  constructor() {
    this._makeSubscription();
  }

  setSelection(city) {
    localStorage.setItem(CityStorage.STORAGE_KEY, city);
    this._notify(city);
  }

  getSelection() {
    return localStorage.getItem(CityStorage.STORAGE_KEY) || 'Москва';
  }

  subscribe(fn) {
    this._subscriptors.push(fn);
  }

  _makeSubscription() {
    window.addEventListener('storage', ({key, newValue}) => {
      if(key !== CityStorage.STORAGE_KEY) {
        return;
      }

      this._notify(newValue);
    }, false);
  }

  _notify(city) {
    this._subscriptors.forEach(fn => {
      fn(city);
    });
  }
}

import { App } from './components/AppComponents/App';
window.cityStorage = new CityStorage();
render(<App />, document.getElementById('root'));
