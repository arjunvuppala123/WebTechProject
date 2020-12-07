import React from 'react';
import { Article } from './article';
import { NavigationBar } from './NavigationBar';
import '../index.css'
import  MyTaskList from './My-Task-list';



export const Review = () => ( 
    <div classname="mainpage">
    <NavigationBar />
    <Article />
    <hr />
        <MyTaskList />
    </div>
)
