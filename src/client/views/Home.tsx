import React from "react";

interface HomeProps {

}


const Home = (props: HomeProps) => {
    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='text-center text-primary'>
                    Welcome to the Bookstore!
                </h1>
            </section>
        </main>
    )
}

export default Home