import React, { Component } from 'react';
import { TopHeader } from './TopHeader';
import { BottomHeader } from './BottomHeader';
import './headerStyle.css';

export function Header() {
    return (
      <div>
        <TopHeader />
        <BottomHeader/>
      </div>
    )
}