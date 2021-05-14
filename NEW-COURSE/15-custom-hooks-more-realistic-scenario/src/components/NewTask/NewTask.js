import {useState} from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {

        const {isLoading, error, sendRequest: postHttp} = useHttp();

        const headers = {

        };

        const enterTaskHandler = (taskText) => {

            const postDataHandle = (data) => {

                console.log(data);
                const generatedId = data.name; // firebase-specific => "name" contains generated id
                const createdTask = {id: generatedId, text: taskText};
                props.onAddTask(createdTask);
            }

            postHttp({
                url: 'https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
                method: 'POST',
                body: {text: taskText},
                headers: {
                    'Content-Type': 'application/json',
                }
            }, postDataHandle)
        }




        // const enterTaskHandler = async (taskText) => {
        //     setIsLoading(true);
        //     setError(null);
        //     try {
        //         const response = await fetch(
        //             {
        //                 method: 'POST',
        //                 body: JSON.stringify({text: taskText}),
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                 },
        //             }
        //         );
        //
        //         if (!response.ok) {
        //             throw new Error('Request failed!');
        //         }
        //
        //
        //     } catch (err) {
        //         setError(err.message || 'Something went wrong!');
        //     }
        //     setIsLoading(false);
        // };

        return (
            <Section>
                <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
                {error && <p>{error}</p>}
            </Section>
        )
            ;
    }
;

export default NewTask;
