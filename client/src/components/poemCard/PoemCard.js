
import './PoemCard.scss'
// funtionality to like and edit poem

const PoemCard = ({poems, handleClick, handleEditClick}) => {

    return (
        <main className="poemCard">
            {poems.map((poem)=> ( 
            <section className="poemCard__container" key={poem.id}>
                <img 
                    className="poemCard__image" 
                    src={poem.image} 
                    alt="pic of poem">
                </img>
                <h2 className="poemCard__name">{poem.poemName}</h2>
                <div className="poemCard__subheadings">
                    <p className="poemCard__poet">{poem.poet}</p>
                    <div className="poemCard__likes-container">
                        <button className="poemCard__likes-button">❤️ Like</button>
                        <p className="poemCard__likes">{poem.likes}</p>
                    </div>
                </div>
                <div className="poemCard__poem-collapsible">
                    <button onClick={() => handleClick(poem.id)} className="poemCard__poem-button">View Poem</button>
                    {poem.isOpen && <div className="poemCard__content">{poem.isOpen && poem.content}</div> }
                </div>
                <button
                    className="poemCard__button-edit"
                    onClick={handleEditClick}
                    value={poem.id}
                >
                    Edit Poem
                </button>
                {/* when you click on the heart emoji, adds like count */}
            </section>
            ))}

            
        </main>
    )
}

export default PoemCard;