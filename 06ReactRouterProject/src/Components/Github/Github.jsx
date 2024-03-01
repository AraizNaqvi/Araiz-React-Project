import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github React Public Repos: {data.public_repos}
            <img src={data.avatar_url} alt='Araiz Naqvi' width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/AraizNaqvi')
    return res.json()
}