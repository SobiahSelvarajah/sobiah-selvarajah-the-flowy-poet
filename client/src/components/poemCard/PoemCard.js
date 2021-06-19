
import './PoemCard.scss'
// funtionality to like and edit poem

const PoemCard = ({poems, handleClick}) => {

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
                    <p className="poemCard__date">{poem.likes}</p>
                </div>
                <div className="poemCard__poem-collapsible">
                    <button onClick={() => handleClick(poem.id)} className="poemCard__poem-button">View Poem</button>
                    {poem.isOpen && <div className="poemCard__content">{poem.isOpen && poem.content}</div> }
                </div>

                {/* when you click on the heart emoji, adds like count */}
            </section>
            ))}

            
        </main>
    )
}

export default PoemCard;