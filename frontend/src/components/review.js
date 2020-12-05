import React from 'react';
import { Article } from './article';
import '../index.css'
import  MyTaskList from './My-Task-list';



export const Review = () => ( 
    <div classname="mainpage"><Article />
    <hr />
        <MyTaskList />
    </div>
)