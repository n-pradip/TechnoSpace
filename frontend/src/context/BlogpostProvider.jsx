import React from 'react'
import { createContext } from 'react'
import useBlogpostsData from '../hooks/useBlogpostsData';

const BlogpostsContext = createContext();
const BlogpostProvider = ({ children }) => {
    const { data, isLoading, isError, error } = useBlogpostsData()
    const api_data = {
        data: data,
        isLoading: isLoading,
        isError: isError,
        error: error
    }
    return (
        <div>
            <BlogpostsContext.Provider value={api_data}>
                {children}
            </BlogpostsContext.Provider>
        </div>
    )
}

export {BlogpostProvider, BlogpostsContext}