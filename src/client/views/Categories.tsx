import React, {useState, useEffect} from "react";
import type { Book } from "../types";
import { Link } from "react-router-dom";
import { GET } from "../services/fetcher";
import { Category } from "../types";


interface CategoriesProps {

}


const Categories = (props: CategoriesProps) => {
    const [data, setData] = useState<Category[]>([])


    useEffect(() => {
        GET('/api/categories')
        .then(data => setData(data))
    }, [])



    return (
        <main className="container mt-5">
            <section className="row justify-content center mt-5">

                {data.map((category) => (
                            <div className="col-md-5 m-3 card card-shadow bg-caution" key={`category-${category.id}`}>
                            <h5 className="card-title mt-2 text-center font-italic"> 
                                {category.name}
                            </h5>
                            
                            {/* <div className='d-flex justify-content-center pb-3'>
                                <Link to={`/categories/${category.id}`} className='btn btn-md btn-danger'>Details</Link>
                            </div> */}
                        </div>
                ))}

            </section>
        </main>
    )



}

export default Categories