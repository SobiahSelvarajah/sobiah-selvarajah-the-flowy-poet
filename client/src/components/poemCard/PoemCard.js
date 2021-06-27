
import './PoemCard.scss'
// funtionality to like and edit poem

const PoemCard = ({poems, handleClick, handleEditClick}) => {

    return (
        <main className="poemCard__container">
            {poems.map((poem)=> ( 
                <section className="poemCard__body" key={poem.id}>
                    <div className="poemCard__card">
                        <img 
                            className="poemCard__image" 
                            src={poem.image} 
                            alt="pic of poem">
                        </img>
                        <h2 className="poemCard__name">{poem.poemName}</h2>
                        <div className="poemCard__subheadings">
                            <p className="poemCard__poet">{poem.poet}</p>
                        </div>
                        <div className="poemCard__poem-collapsible">
                            <button 
                                onClick={() => handleClick(poem.id)} 
                                className="poemCard__poem-button"
                            >
                                View Poem
                            </button>
                            {poem.isOpen && 
                                <div className="poemCard__content">
                                    {poem.isOpen && poem.content}
                                </div> }
                        </div>
                        <button
                            className="poemCard__poem-button"
                            onClick={handleEditClick}
                            value={poem.id}
                        >
                            Edit Poem
                        </button>
                    </div>        
                </section>
            ))}
        </main>
    )
}

export default PoemCard;