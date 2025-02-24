
function Home() {
    return (
        <>
            <div className="bg-red-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Sejam Bem-Vindos a Farmacia do Povo!
                        </h2>
                        <p className='text-xl'>
                        Escolha o seu produto pela Categoria!
                        </p>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://cdn.brasildefato.com.br/media/1991e200588d5b3f11f0f255be5f8468.jpg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home