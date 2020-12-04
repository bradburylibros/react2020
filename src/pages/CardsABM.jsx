import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import BooksForm from '../components/BooksForm'
import SearchBook from '../components/SearchBook'

export default function CardsABM() {

  const [state, setstate] = useState({
    form:{}
  })

  const handleChange = (e) => {
    setstate ({
        form:{
            ...state.form,
            [e.target.name] : e.target.value,
        },
    })
}
    return (
        <>
            <Navbar />
            <SearchBook />
            <section id="libros">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                      
                      <Card 
                        titulo={state.form.titulo}
                        autor={state.form.autor}
                        isbn={state.form.isbn}
                        descripcion={state.form.descripcion}
                        categoria={state.form.categoria}
                        precio={state.form.precio}
                      />
                    
                    </div>
                    <div className="col">
                      <BooksForm
                      handleChange={handleChange}
                      />
                    </div>

                </div>
              </div>
            </section>
            <Footer />
        </>
    )
}
